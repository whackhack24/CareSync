import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Chatpage from "./pages/ChatPage";
import "./App.css"
import Trends from "./pages/Trends";
export default function App() {
  return (
    <div class="wrapper">
      <Navbar />
      <div class="left-container">
        <Sidebar />
        <div class="right-container">
          {/* 👇 Switch content here */}
          <section id="dashboard">
            <Dashboard />
          </section>
          <section id="charts">
            <Trends />
          </section>
          <section id="chat">
            <Chatpage />
          </section>
        </div>
      </div>
    </div>
  );
}
