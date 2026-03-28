import { Link } from "react-router-dom";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const loggedInUser = sessionStorage.getItem("loggedInUser");

  if (loggedInUser !== "admin@portal.com") {
    return (
      <div className="container center-box">
        <h2>Access Denied</h2>
        <p>You do not have permission to view this page.</p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    );
  }

  const apps = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("App_")) {
      try {
        const app = JSON.parse(localStorage.getItem(key));
        if (app) apps.push(app);
      } catch (e) {
        console.error("Error parsing application data", e);
      }
    }
  }

  return (
    <div className="admin-theme">
      <div className="container">
        <div className="page-header">
          <h2>Admin Dashboard</h2>
          <p>{apps.length} application{apps.length !== 1 ? "s" : ""} received</p>
        </div>

        {apps.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">📭</span>
            <p>No applications have been submitted yet.</p>
          </div>
        ) : (
          <div className="card table-card">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Contact Email</th>
                  <th>Job Role</th>
                  <th className="right">Status</th>
                </tr>
              </thead>
              <tbody>
                {apps.map((app, index) => (
                  <tr key={index}>
                    <td className="name">{app.name}</td>
                    <td className="email">{app.email}</td>
                    <td>{app.role}</td>
                    <td className="right">
                      <span className="status">Received</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}