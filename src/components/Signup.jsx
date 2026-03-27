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
    // Use sessionStorage for temporary mockup data to keep localStorage clean
    sessionStorage.setItem("registeredName", name.trim());
    sessionStorage.setItem("registeredEmail", email.trim());
    sessionStorage.setItem("registeredPass", pass.trim());

    // Cleanup old localStorage keys if they exist
    localStorage.removeItem("registeredName");
    localStorage.removeItem("registeredEmail");
    localStorage.removeItem("registeredPass");

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