import { Link } from "react-router-dom";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      <aside style={{ width: 220, background: "#111", color: "#fff", padding: 20 }}>
        <h2 style={{ marginBottom: 30 }}>Admin</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Link to="/" style={{ color: "#fff" }}>Dashboard</Link>
          <Link to="/users" style={{ color: "#fff" }}>Users</Link>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: 40, background: "#f6f6f6" }}>
        {children}
      </main>
    </div>
  );
}
