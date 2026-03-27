import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const trimmedName = name.trim();
    const trimmedPass = pass.trim();

    if (trimmedName === "admin" && trimmedPass === "123456") {
      sessionStorage.setItem("loggedInUser", "admin@portal.com");
      localStorage.removeItem("loggedInUser"); 
      alert("Admin Login Success");
      navigate("/admin");
    } else {
      const db = JSON.parse(localStorage.getItem("_internal_db")) || {};
      let foundUserEmail = null;
      let foundUserData = null;

      for (const [email, data] of Object.entries(db)) {
        if (data.name.toLowerCase() === trimmedName.toLowerCase()) {
          foundUserEmail = email;
          foundUserData = data;
          break;
        }
      }

      if (foundUserEmail && btoa(trimmedPass) === foundUserData.pass) {
        sessionStorage.setItem("loggedInUser", foundUserEmail);
        localStorage.removeItem("loggedInUser");
        alert(`Welcome, ${foundUserData.name}!`);
        navigate("/");
      } else {
        alert("Invalid user name or password.");
      }
    }
  };

  return (
    <div className="auth-screen" style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2070')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="auth-card">
        <h2>Login</h2>
        <div className="form">
          <input
            type="text"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button onClick={handleLogin} className="btn">Login</button>
        </div>
      </div>
    </div>
  );
}