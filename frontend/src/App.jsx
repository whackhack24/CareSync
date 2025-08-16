import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Chatpage from "./pages/ChatPage";
import "./App.css"
export default function App() {
  return (
    <div class="wrapper">
      <Navbar />
      <div class="left-container">
        <Sidebar />
        <div class="right-container">
          <Dashboard />
          <Chatpage />
        </div>
      </div>
    </div>
  );
}
