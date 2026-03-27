import { getLogoUrl } from "../data/jobs";

export default function AdminDashboard() {
  const appsJson = localStorage.getItem("apps");
  const apps = JSON.parse(appsJson) || [];
  const loggedInUser = sessionStorage.getItem("loggedInUser");

  // Clean persistent storage
  if (localStorage.getItem("loggedInUser")) localStorage.removeItem("loggedInUser");

  if (loggedInUser !== "admin@portal.com") {
    return (
      <div className="container" style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Access Denied</h2>
        <p>You do not have permission to view this page.</p>
        <button className="btn" onClick={() => window.location.href = "/"}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-header">
        <h2>Admin Dashboard</h2>
        <p>{apps.length} application{apps.length !== 1 ? "s" : ""} received</p>
      </div>

      {apps.length === 0 ? (
        <div className="empty-state">
          <span style={{ fontSize: "2.5rem" }}>📭</span>
          <p>No applications submitted yet.</p>
        </div>
      ) : (
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Role Applied</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((app, i) => (
                <tr key={i}>
                  <td style={{ color: "var(--text-muted)", width: "40px" }}>{i + 1}</td>
                  <td style={{ fontWeight: 600, color: "var(--text-heading)" }}>{app.name}</td>
                  <td><span className="badge">{app.role}</span></td>
                  <td>
                    <div className="company-cell">
                      {app.domain && (
                        <img
                          src={getLogoUrl(app.domain)}
                          alt={app.company}
                          className="table-logo"
                          onError={(e) => { e.target.style.display = "none"; }}
                        />
                      )}
                      <span>{app.company}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}