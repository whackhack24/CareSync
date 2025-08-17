import React, { useState } from "react";
import { answerQuestion } from "../lib/qaEngine";

export default function AssistantPanel({data}) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function handleAsk() {
    setAnswer("Thinking...");
    const ans = await answerQuestion(question, data); // 👈 abhi april test ke liye
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
