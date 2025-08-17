import React, { useState, useRef, useEffect } from "react";
import { askAssistant } from "../lib/api";

export default function AssistantPanel() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]); // {sender, text}
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(scrollToBottom, [messages]);

  async function handleAsk() {
    if (!question.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: question }];
    setMessages(newMessages);
    setQuestion("");
    setLoading(true);

    try {
      const answer = await askAssistant(question);
      setMessages([...newMessages, { sender: "assistant", text: answer }]);
    } catch (err) {
      setMessages([...newMessages, { sender: "assistant", text: "Error fetching answer." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: 16, width: 500 }}>
      <h3>Personal Assistant Chat</h3>
      <div style={{
        height: 400,
        overflowY: "auto",
        border: "1px solid #ddd",
        padding: 8,
        marginBottom: 8,
        backgroundColor: "#f9f9f9"
      }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            margin: "5px 0",
            textAlign: msg.sender === "user" ? "right" : "left",
            color: msg.sender === "user" ? "blue" : "green"
          }}>
            <strong>{msg.sender === "user" ? "You" : "Assistant"}:</strong> {msg.text}
          </div>
        ))}
        {loading && <div style={{ color: "gray" }}>Assistant is typing...</div>}
        <div ref={messagesEndRef}></div>
      </div>
      <input
        type="text"
        placeholder="Ask anything about your chats..."
        value={question}
        onChange={e => setQuestion(e.target.value)}
        style={{ width: "100%", padding: 8 }}
        onKeyDown={e => e.key === "Enter" && handleAsk()}
      />
      <button onClick={handleAsk} style={{ marginTop: 8 }}>Ask</button>
    </div>
  );
}
