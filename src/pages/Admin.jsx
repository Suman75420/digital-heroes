import { Link } from "react-router-dom";

function Admin() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h2>🦸 Digital Heroes Admin</h2>
        <Link to="/" style={styles.link}>Home</Link>
      </header>

      <main style={styles.main}>
        <h1>Admin Dashboard</h1>
        <p style={styles.muted}>
          Manage platform activities from one place.
        </p>

        <div style={styles.stats}>
          <div style={styles.card}>
            <h3>Total Users</h3>
            <h2>120</h2>
          </div>

          <div style={styles.card}>
            <h3>Total Prize Pool</h3>
            <h2>₹50,000</h2>
          </div>

          <div style={styles.card}>
            <h3>Charity Contributions</h3>
            <h2>₹12,000</h2>
          </div>

          <div style={styles.card}>
            <h3>Monthly Draws</h3>
            <h2>3</h2>
          </div>
        </div>

        <div style={styles.grid}>
          <section style={styles.card}>
            <h2>User Management</h2>
            <p>View and manage registered users.</p>
            <button style={styles.button}>View Users</button>
          </section>

          <section style={styles.card}>
            <h2>Draw Management</h2>
            <p>Configure, simulate, and publish monthly draws.</p>
            <button style={styles.button}>Run Simulation</button>
          </section>

          <section style={styles.card}>
            <h2>Charity Management</h2>
            <p>Add, edit, or remove charity listings.</p>
            <button style={styles.button}>Manage Charities</button>
          </section>

          <section style={styles.card}>
            <h2>Winner Management</h2>
            <p>Review winner proof and track payouts.</p>
            <button style={styles.button}>Review Winners</button>
          </section>

          <section style={styles.card}>
            <h2>Reports & Analytics</h2>
            <p>View platform statistics and draw reports.</p>
            <button style={styles.button}>View Reports</button>
          </section>
        </div>

        <p style={styles.note}>
          Demo admin panel: figures are sample data and buttons are placeholders.
        </p>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f3f4f6",
    color: "#111827",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 6%",
    background: "white",
    boxShadow: "0 2px 8px #00000010",
  },
  main: {
    maxWidth: "1100px",
    margin: "auto",
    padding: "30px 20px",
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "18px",
    margin: "25px 0",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "white",
    padding: "22px",
    borderRadius: "14px",
    boxShadow: "0 5px 18px #0000000d",
  },
  button: {
    padding: "11px 16px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  link: {
    color: "#4f46e5",
    textDecoration: "none",
    fontWeight: "600",
  },
  muted: { color: "#6b7280" },
  note: {
    marginTop: "25px",
    color: "#6b7280",
    fontSize: "14px",
  },
};

export default Admin;