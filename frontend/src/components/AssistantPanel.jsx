import React, { useState } from "react";
import { answerQuestionLLM } from "../lib/qaEngine";
import april from "../data/april.json"; // 👈 abhi test ke liye ek month ka

export default function AssistantPanel() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function handleAsk() {
    setAnswer("Thinking...");
    const ans = await answerQuestionLLM(question, april); // 👈 abhi april test ke liye
    setAnswer(ans);
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: 16 }}>
      <h3>Ask Assistant</h3>
      <input
        type="text"
        placeholder="Ask about tests, diet, exercise..."
        value={question}
        onChange={e => setQuestion(e.target.value)}
        style={{ width: "100%", marginBottom: 8 }}
      />
      <button onClick={handleAsk}>Ask</button>
      <div style={{ marginTop: 12, whiteSpace: "pre-wrap" }}>
        {answer}
      </div>
    </div>
  );
}
