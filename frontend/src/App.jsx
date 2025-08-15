import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Chatpage from "./pages/ChatPage";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex">
        <Navbar />
        <Dashboard />
        <Chatpage />
      </div>
    </div>
  );
}
