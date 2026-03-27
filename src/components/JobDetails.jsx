import { useParams, Link, useNavigate } from "react-router-dom";
import { jobs, companiesByJob, getLogoUrl } from "../data/jobs";

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const jobId = parseInt(id);
  const job = jobs.find((j) => j.id === jobId);
  const companies = companiesByJob[jobId] || [];
  // Retrieve active session from sessionStorage to keep localStorage clean
  const loggedInUser = sessionStorage.getItem("loggedInUser");
  
  // Cleanup any lingering localStorage session key
  if (localStorage.getItem("loggedInUser")) localStorage.removeItem("loggedInUser");

  const handleApply = (company) => {
    if (!loggedInUser) {
      alert("Please login first to apply.");
      navigate("/login");
      return;
    }

    const appsJson = localStorage.getItem("apps");
    const existing = JSON.parse(appsJson) || [];

    const alreadyApplied = existing.find(
      (a) => a.company === company.name && a.role === company.role && a.userEmail === loggedInUser
    );
    if (alreadyApplied) {
      alert(`You already applied to ${company.name} for ${company.role}.`);
      return;
    }

    // Get display name from consolidated persistent storage
    const userJson = localStorage.getItem(`user_${loggedInUser}`);
    const userData = userJson ? JSON.parse(userJson) : null;
    const displayName = userData ? userData.name : loggedInUser.split('@')[0];

    existing.push({
      name: displayName,
      userEmail: loggedInUser,
      role: company.role,
      company: company.name,
      domain: company.domain,
    });
    localStorage.setItem("apps", JSON.stringify(existing));
    alert(`✅ Applied to ${company.name} as ${company.role}!`);
  };

  if (!job) return <div className="container"><p>Job not found.</p></div>;

  return (
    <div className="container">
      <Link to="/" className="back-link">← Back to Jobs</Link>

      {!loggedInUser && (
        <div className="login-notice">
          ⚠️ Please <Link to="/login">login</Link> to apply for jobs.
        </div>
      )}

      <div className="page-header" style={{ marginTop: "16px" }}>
        <h2>{job.title}</h2>
        <p>{job.description}</p>
      </div>

      <p className="section-label">Companies hiring for this role</p>

      <div className="company-grid">
        {companies.map((company) => (
          <div className="company-card" key={company.name}>
            <img
              src={getLogoUrl(company.domain)}
              alt={company.name}
              className="company-logo"
              onError={(e) => { e.target.style.display = "none"; }}
            />
            <h4>{company.name}</h4>
            <p>{company.role}</p>
            <button className="btn" onClick={() => handleApply(company)}>
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}