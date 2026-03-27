import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/jobs.json")
      .then(res => res.json())
      .then(data => {
        setJobs(data.jobs);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch jobs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="jobs-theme">
        <div className="container">
          <div className="page-header">
            <h2>Available Jobs</h2>
            <p>Loading positions...</p>
          </div>
          <div className="empty-state">
            <div className="spinner"></div>
            <p>Fetching latest jobs...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="jobs-theme">
      <div className="container">
        <div className="page-header">
          <h2>Available Jobs</h2>
          <p>{jobs.length} open positions</p>
        </div>
        <div className="job-grid">
          {jobs.map((job) => (
            <div className="card" key={job.id}>
              <div className="card-header">
                <span className="badge">{job.category}</span>
              </div>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <Link to={`/job/${job.id}`} className="btn btn-accent">View Companies →</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}