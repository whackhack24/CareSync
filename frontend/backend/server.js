import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";
import { pipeline } from "@xenova/transformers";
import { fileURLToPath } from "url";

// __dirname fix for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// --- Data load ---
const dataFolder = path.join(__dirname, "../src/data");
const months = ["january","february","march","april","may","june","july","august"];
let allMessages = [];

months.forEach(month => {
  const filePath = path.join(dataFolder, `${month}.json`);
  if (fs.existsSync(filePath)) {
    const monthData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    if (monthData.messages) {
      monthData.messages.forEach(m => {
        allMessages.push({
          ...m,
          month: month,
          combined: `[Date: ${m.date} | Sender: ${m.sender}] → Message: "${m.text}"`
        });
      });
    }
  } else {
    console.warn(`⚠️ Missing file: ${filePath}`);
  }
});
console.log(`✅ Loaded ${allMessages.length} messages from chats`);

// --- Embedding model ---
const embedder = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");

// --- Precompute embeddings ---
let embeddings = [];
for (let msg of allMessages) {
  const emb = await embedder(msg.combined, { pooling: "mean", normalize: true });
  embeddings.push({ vector: emb.data, message: msg });
}
console.log("✅ Embeddings ready");

// --- Cosine similarity ---
function cosineSim(a, b) {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

// --- Helper: detect month from question ---
function detectMonth(question) {
  for (let m of months) {
    if (question.toLowerCase().includes(m)) return m;
  }
  return null;
}

// --- Ask endpoint ---
app.post("/ask", async (req, res) => {
  const { question } = req.body;
  if (!question) return res.status(400).json({ answer: "Provide a question." });

  // Filter by month if mentioned
  const monthFilter = detectMonth(question);
  let searchSpace = embeddings;
  if (monthFilter) {
    searchSpace = embeddings.filter(e => e.message.month === monthFilter);
  }

  // Embed query
  const qEmb = await embedder(question, { pooling: "mean", normalize: true });

  // Keyword boost
  const keywords = question.toLowerCase().split(/\s+/);

  const scored = searchSpace.map(e => {
    let score = cosineSim(qEmb.data, e.vector);
    for (let kw of keywords) {
      if (e.message.text.toLowerCase().includes(kw)) score += 0.2; // boost
    }
    return { score, combined: e.message.combined };
  });

  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 7).map(s => s.combined).join("\n");

  if (!top) {
    return res.json({ answer: "Not found in chats." });
  }

  // Strict prompt
  const prompt = `
You are a Chat History Assistant. 
ONLY use the chat history below to answer. 
If answer not found, reply exactly: "Not found in chats."

Chat history:
${top}

Question: ${question}
Answer:
  `;

  try {
    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.MISTRAL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistral-small",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content || "No answer.";
    res.json({ answer });

  } catch (err) {
    console.error(err);
    res.status(500).json({ answer: "Error processing your question." });
  }
});

// --- Start server ---
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
