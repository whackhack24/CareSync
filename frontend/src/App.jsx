import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Chatpage from "./pages/ChatPage";
import Profile from "./components/Profile";
import "./App.css"
import Trends from "./pages/Trends";
import { loadAllData } from "./lib/loadData";   // 👈 import
export default function App() {
   const merged = loadAllData();  // ✅ ab messages properly aa jayenge
  return (
    <div class="wrapper">
      <Navbar />
      <div class="left-container">
        <Sidebar />
        <div class="right-container">
          {/* 👇 Switch content here */}
          <section id="dashboard">
            <Dashboard />
            <Profile />
          </section>
          <section id="charts">
            <Trends messages={merged.messages}/>
          </section>
          <section id="chat">
            <Chatpage />
          </section>
        </div>
      </div>
    </div>
  );
}
