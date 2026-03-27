import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin" && pass === "123456") {
      sessionStorage.setItem("loggedInUser", "admin@portal.com");
      localStorage.removeItem("loggedInUser"); // Clean persistent storage
      alert("Admin Login Success");
      navigate("/admin");
    } else {
      // Verify against consolidated persistent storage in localStorage
      const userJson = localStorage.getItem(`user_${email}`);
      const userData = userJson ? JSON.parse(userJson) : null;

      if (userData && pass === userData.pass) {
        sessionStorage.setItem("loggedInUser", email);
        localStorage.removeItem("loggedInUser"); // Clean persistent storage
        alert(`Welcome, ${userData.name}!`);
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