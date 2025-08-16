import january from "../data/january.json";
import february from "../data/february.json";
import march from "../data/march.json";
import april from "../data/april.json";
import may from "../data/may.json";
import june from "../data/june.json";
import july from "../data/july.json";
import august from "../data/august.json";
import ChatViewer from "../components/ChatViewer";

export default function ChatPage() {
  // Merge all months' messages
  const allMessages = [...january.messages, ...february.messages, ...march.messages, ...april.messages, ...may.messages, ...june.messages, ...july.messages, ...august.messages];
  return (
    <div className="p-6">
      <h2 style={{color: "#000000", fontSize: "2.5rem", textAlign: "center"}}>Chats</h2>
      <ChatViewer messages={allMessages} />
    </div>
  );
}
