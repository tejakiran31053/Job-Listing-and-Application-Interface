import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const loggedInUser = sessionStorage.getItem("loggedInUser");

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully.");
    navigate("/login");
  };

  return (
    <nav className="nav">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "white", margin: 0 }}>Job Portal System</h2>
      </Link>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/admin">AdminDashboard</Link>
        
        {loggedInUser ? (
          <>
            <span style={{ marginLeft: "20px", color: "white", opacity: 0.9 }}>
              Welcome, {loggedInUser.split("@")[0]}!
            </span>
            <button onClick={handleLogout} className="btn-logout">
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