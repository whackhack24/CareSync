export default function Sidebar() {
  return (
    <aside className="bg-blue-50 w-64 min-h-screen p-6">
      <ul className="space-y-4">
        <li className="text-blue-600 font-semibold cursor-pointer">Dashboard</li>
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Goals</li>
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Reports</li>
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Settings</li>
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Chat</li>
      </ul>
    </aside>
  );
}
