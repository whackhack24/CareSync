import "./ChatViewer.css";
import backgroundImage from "../assets/chat-background.jpg";
// turn "Carla (Dietitian)" -> "carla-dietitian"
const slugify = (str = "") =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ChatViewer({ messages }) {
  return (
    <div className="chat-container" style={{backgroundImage:`url(${backgroundImage})`}}>
      {messages.map((msg) => {
        // user = Keily (tweak to your user name if needed)
        const isUser = /keily/i.test(msg.sender);
        const senderSlug = slugify(msg.sender);

        // add both the generic role class and the specific sender class
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
  );
}
