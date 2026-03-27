import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name.trim() || !email.trim() || !pass.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    
    // Consolidate name and password into one key for a cleaner "console" (localStorage)
    const emailKey = email.trim();
    const userData = {
      name: name.trim(),
      pass: pass.trim()
    };
    localStorage.setItem(`user_${emailKey}`, JSON.stringify(userData));

    // Cleanup all old/unwanted keys
    localStorage.removeItem(`pass_${emailKey}`);
    localStorage.removeItem("registeredName");
    localStorage.removeItem("registeredEmail");
    localStorage.removeItem("registeredPass");
    sessionStorage.removeItem("registeredName");
    sessionStorage.removeItem("registeredEmail");
    sessionStorage.removeItem("registeredPass");

    alert("Registration successful! Please login to continue.");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <input placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" onChange={(e) => setPass(e.target.value)} />
        <button className="btn" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}