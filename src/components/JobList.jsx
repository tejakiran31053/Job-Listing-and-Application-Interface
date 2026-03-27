import { Link } from "react-router-dom";
import { jobs } from "../data/jobs";

export default function JobList() {
  return (
    <div className="container">
      <div className="page-header">
        <h2>Available Jobs</h2>
        <p>{jobs.length} open positions</p>
      </div>
      {jobs.map((job) => (
        <div className="card" key={job.id}>
          <div className="card-header">
            <span className="badge">{job.category}</span>
          </div>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <Link to={`/job/${job.id}`} className="btn">View Companies →</Link>
        </div>
      ))}
    </div>
  );
}