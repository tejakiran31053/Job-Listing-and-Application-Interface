import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>Job Portal</h2>
      <div>
        <Link to="/">Jobs</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}