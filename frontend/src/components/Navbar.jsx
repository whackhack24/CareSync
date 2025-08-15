export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">CareSync</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Welcome, User</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </nav>
  );
}
