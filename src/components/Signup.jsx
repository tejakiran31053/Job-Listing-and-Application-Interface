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
    
    const emailKey = email.trim();
    const db = JSON.parse(localStorage.getItem("_internal_db")) || {};
    db[emailKey] = {
      name: name.trim(),
      pass: btoa(pass.trim())
    };
    localStorage.setItem("_internal_db", JSON.stringify(db));

    localStorage.removeItem(`user_${emailKey}`);
    localStorage.removeItem("_auth");
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
    <div className="auth-screen" style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2070')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="auth-card">
        <h2>Create Account</h2>
        <div className="form">
          <input placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="Password" type="password" onChange={(e) => setPass(e.target.value)} />
          <button className="btn" onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}