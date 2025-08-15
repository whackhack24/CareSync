import january from "../data/january.json";
import february from "../data/february.json";
import ChatViewer from "../components/ChatViewer";

export default function ChatPage() {
  // Merge both months' messages
  const allMessages = [...january.messages, ...february.messages];
  console.log(january);
  console.log(february);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Member-Coach Conversations</h2>
      <ChatViewer messages={allMessages} />
    </div>
  );
}
