import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  
  // Use sessionStorage for the active user ID to keep localStorage focused on registry
  const loggedInUser = sessionStorage.getItem("loggedInUser");

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUser"); // Just in case
    alert("Logged out successfully.");
    navigate("/login");
  };

  // Helper to get display name from consolidated storage
  const getDisplayName = () => {
    if (loggedInUser === "admin@portal.com") return "Admin";
    const userJson = localStorage.getItem(`user_${loggedInUser}`);
    if (userJson) {
      try {
        return JSON.parse(userJson).name;
      } catch (e) {
        return userJson; // Fallback for old simple string data
      }
    }
    return loggedInUser;
  };

  return (
    <nav className="nav">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h2>JobPortal</h2>
      </Link>
      <div>
        <Link to="/">Jobs</Link>
        <Link to="/admin">Admin Dashboard</Link>
        {loggedInUser ? (
          <>
            <span className="user-name" style={{ marginLeft: "10px", color: "var(--text-muted)", fontSize: "0.85rem" }}>
              Hi, {getDisplayName()}
            </span>
            <button onClick={handleLogout} className="btn" style={{ marginLeft: "10px", padding: "5px 12px", fontSize: "0.80rem" }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}