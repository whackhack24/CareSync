import "./Sidebar.css"
export default function Sidebar() {
  return (
    <aside>
      <ul>
        <li class="dashboard"><a href="#dashboard">Dashboard</a></li>
        <li>Goals</li>
        <li><a href="#charts">Reports</a></li>
        <li><a href="#chat">Chats</a></li>
      </ul>
    </aside>
  );
}
