import { useState } from "react";

export default function ApplyForm({ jobId }) {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const applications = JSON.parse(localStorage.getItem("apps")) || [];
    applications.push({ name, jobId });

    localStorage.setItem("apps", JSON.stringify(applications));
    setSubmitted(true);
  };

  return submitted ? (
    <p className="success">Application Submitted!</p>
  ) : (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button className="btn">Apply</button>
    </form>
  );
}