import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getLogoUrl } from "../utils/helpers";

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const jobId = parseInt(id);
  
  const [job, setJob] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/jobs.json")
      .then(res => res.json())
      .then(data => {
        const foundJob = data.jobs.find(j => j.id === jobId);
        if (foundJob) {
          setJob(foundJob);
          setCompanies(data.companiesByJob[jobId] || []);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching job details:", err);
        setLoading(false);
      });
  }, [jobId]);

  const loggedInUser = sessionStorage.getItem("loggedInUser");
  
  if (localStorage.getItem("loggedInUser")) localStorage.removeItem("loggedInUser");

  const handleApply = (company) => {
    if (!loggedInUser) {
      alert("Please login first to apply.");
      navigate("/login");
      return;
    }

    const appKey = `App_${loggedInUser}_${company.role.replace(/\s+/g, '')}`;
    if (localStorage.getItem(appKey)) {
      alert(`You already applied to ${company.name} for ${company.role}.`);
      return;
    }

    const db = JSON.parse(localStorage.getItem("_internal_db")) || {};
    const userData = db[loggedInUser];
    const displayName = userData ? userData.name : loggedInUser.split('@')[0];

    const appData = {
      name: displayName,
      email: loggedInUser,
      role: company.role
    };
    
    localStorage.setItem(appKey, JSON.stringify(appData));
    localStorage.removeItem("apps");

    alert(`✅ Applied to ${company.name} as ${company.role}!`);
  };

  if (loading) return <div className="companies-theme"><div className="container"><p>Loading job details...</p></div></div>;
  if (!job) return <div className="companies-theme"><div className="container"><p>Job not found.</p></div></div>;

  return (
    <div className="companies-theme">
      <div className="container">
        <Link to="/" className="back-link">← Back to Jobs</Link>

        {!loggedInUser && (
          <div className="login-notice">
            Interested in these companies? <Link to="/login">Login</Link> to apply now!
          </div>
        )}

        <div className="page-header" style={{ marginTop: "24px" }}>
          <h2>{job.title}</h2>
          <p>{job.category} opportunities</p>
        </div>

        <h4 className="section-label">Top Companies Hiring</h4>
        <div className="company-grid">
          {companies.map((company, index) => (
            <div className="company-card" key={index}>
              <div className="company-logo-wrapper">
                <div className="logo-placeholder">{company.name[0]}</div>
                <img
                  src={getLogoUrl(company.domain)}
                  alt={company.name}
                  className="company-logo"
                  onError={(e) => { e.target.style.opacity = 0; }}
                />
              </div>
              <p style={{ fontWeight: "600", margin: "5px 0 0", fontSize: "1rem" }}>{company.name}</p>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "12px" }}>{company.domain}</p>
              
              {loggedInUser ? (
                <button className="btn btn-accent" onClick={() => handleApply(company)}>Apply Now</button>
              ) : (
                <Link to="/login" className="btn" style={{ background: "var(--text-muted)" }}>Login to Apply</Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}