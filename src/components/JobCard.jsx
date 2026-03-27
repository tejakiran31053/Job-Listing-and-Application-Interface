import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <Link to={`/job/${job.id}`} className="btn">
        View
      </Link>
    </div>
  );
}