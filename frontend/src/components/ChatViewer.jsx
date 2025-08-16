import "./ChatViewer.css";
import React, { useState } from "react";
import backgroundImage from "../assets/chat-background.jpg";

// turn "Carla (Dietitian)" -> "carla-dietitian"
const slugify = (str = "") =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ChatViewer({ messages }) {
  const [searchTerm, setSearchTerm] = useState("");     
  const [selectedMonth, setSelectedMonth] = useState("All"); 

  // helper to get month from date
  function getMonth(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleString("default", { month: "long" }); 
  } 

  // --- filter messages ---
  const filteredMessages = messages.filter((msg) => {
    const month = getMonth(msg.date);
    const matchesMonth = selectedMonth === "All" || month === selectedMonth;
    const matchesSearch = msg.text.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesMonth && matchesSearch;
  });

  return (
    <div> {/* wrap everything in a single parent div */}

      {/* Filter UI */}
      <div className="filters" style={{ marginBottom: "10px" }}>
        <select value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)}>
          <option value="All">All Months</option>
          {Array.from(new Set(messages.map(msg => getMonth(msg.date)))).map(month => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search messages..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ marginLeft: "10px" }}
        />
      </div>

      {/* Chat messages */}
      <div className="chat-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {filteredMessages.map((msg) => {
          const isUser = /keily/i.test(msg.sender);
          const senderSlug = slugify(msg.sender);
          const bubbleClass = isUser
            ? "chat-bubble user"
            : `chat-bubble team ${senderSlug}`;

          return (
            <div key={msg.id} className={bubbleClass}>
              <p className="sender">{msg.sender}</p>
              <p className="message-text">{msg.text}</p>
              <span className="date">{msg.date}</span>
            </div>
          );
        })}
      </div>

    </div>
  ); 
}
