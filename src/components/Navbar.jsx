import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("loggedInUser");

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="nav">
      <h2>Job Portal</h2>
      <div>
        <Link to="/">Jobs</Link>
        {loggedInUser ? (
          <>
            <span className="user-name" style={{ marginLeft: "10px", color: "var(--text-muted)", fontSize: "0.85rem" }}>
              Hi, {sessionStorage.getItem("registeredName") || (loggedInUser === "admin@portal.com" ? "Admin" : loggedInUser)}
            </span>
            <button onClick={handleLogout} className="btn" style={{ marginLeft: "10px", padding: "5px 12px", fontSize: "0.8rem" }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}