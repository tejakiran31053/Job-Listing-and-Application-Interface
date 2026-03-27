import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin" && pass === "123456") {
      localStorage.setItem("loggedInUser", "admin@portal.com");
      alert("Admin Login Success");
      navigate("/admin");
    } else {
      // Use sessionStorage for mockup verification
      const registeredEmail = sessionStorage.getItem("registeredEmail");
      const registeredName = sessionStorage.getItem("registeredName");
      const registeredPass = sessionStorage.getItem("registeredPass");

      if (email === registeredEmail && pass === registeredPass) {
        localStorage.setItem("loggedInUser", email);
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