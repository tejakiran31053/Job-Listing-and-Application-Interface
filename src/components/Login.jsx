import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin@gmail.com" && pass === "admin") {
      localStorage.setItem("loggedInUser", "Admin");
      navigate("/admin");
    } else {
      // Use registered name if email matches, else use email prefix
      const registeredEmail = localStorage.getItem("registeredEmail");
      const registeredName = localStorage.getItem("registeredName");
      const registeredPass = localStorage.getItem("registeredPass");

      if (email === registeredEmail && pass === registeredPass) {
        localStorage.setItem("loggedInUser", registeredName);
        alert(`Welcome, ${registeredName}!`);
        navigate("/");
      } else {
        alert("Invalid email or password.");
      }
    }
  };

  return (
    <div className="container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button className="btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}