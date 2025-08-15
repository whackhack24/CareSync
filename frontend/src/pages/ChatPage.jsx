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
  // Merge both months' messages
  const allMessages = [...january.messages, ...february.messages, ...march.messages, ...april.messages, ...may.messages, ...june.messages, ...july.messages, ...august.messages];
  console.log(january);
  console.log(february);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Member-Coach Conversations</h2>
      <ChatViewer messages={allMessages} />
    </div>
  );
}
