export default function ChatViewer({ messages }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 max-h-[500px] overflow-y-auto">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`my-2 p-3 rounded-lg max-w-[70%] ${
            msg.role === "coach"
              ? "bg-blue-100 text-left"
              : "bg-green-100 ml-auto text-right"
          }`}
        >
          <p className="text-sm text-gray-500">{msg.sender}</p>
          <p>{msg.text}</p>
          <span className="block text-xs text-gray-400">{msg.date}</span>
        </div>
      ))}
    </div>
  );
}
