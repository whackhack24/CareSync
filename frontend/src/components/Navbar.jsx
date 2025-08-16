import "./Navbar.css"
export default function Navbar() {
  return (
    <nav>
      <h1>CareSync</h1>
      <div class="right">
        <span>Welcome, User</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
        />
      </div>
    </nav>
  );
}
