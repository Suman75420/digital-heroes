import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [scores, setScores] = useState([]);
  const [date, setDate] = useState("");
  const [score, setScore] = useState("");
  const [charity, setCharity] = useState("Education");
  const [message, setMessage] = useState("");

  function addScore(event) {
    event.preventDefault();

    const value = Number(score);

    if (!date || value < 1 || value > 45) {
      setMessage("Enter a date and a score between 1 and 45.");
      return;
    }

    if (scores.some((item) => item.date === date)) {
      setMessage("A score for this date already exists.");
      return;
    }

    const updatedScores = [
      { date, score: value },
      ...scores,
    ].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);

    setScores(updatedScores);
    setDate("");
    setScore("");
    setMessage("Golf score added!");
  }

  function deleteScore(scoreDate) {
    setScores(scores.filter((item) => item.date !== scoreDate));
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h2>🦸 Digital Heroes</h2>
        <Link to="/" style={styles.link}>Home</Link>
      </header>

      <main style={styles.main}>
        <h1>My Dashboard</h1>
        <p style={styles.muted}>
          Track your golf performance and support a cause.
        </p>

        <div style={styles.grid}>
          <section style={styles.card}>
            <h3>Subscription</h3>
            <p style={styles.green}>Active (Demo)</p>
            <p>Plan: Monthly</p>
            <p style={styles.muted}>
              Payment is not connected.
            </p>
          </section>

          <section style={styles.card}>
            <h3>Charity Support</h3>
            <label>Choose a cause</label>
            <select
              value={charity}
              onChange={(event) => setCharity(event.target.value)}
              style={styles.input}
            >
              <option>Education</option>
              <option>Healthcare</option>
              <option>Environment</option>
              <option>Animal Welfare</option>
            </select>
            <p>Contribution: 10% (Demo)</p>
          </section>

          <section style={styles.card}>
            <h3>Golf Scores</h3>
            <form onSubmit={addScore}>
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                style={styles.input}
                required
              />

              <label>Stableford Score (1–45)</label>
              <input
                type="number"
                min="1"
                max="45"
                value={score}
                onChange={(event) => setScore(event.target.value)}
                style={styles.input}
                required
              />

              <button style={styles.button} type="submit">
                Add Score
              </button>
            </form>

            {message && <p>{message}</p>}
          </section>

          <section style={styles.card}>
            <h3>Latest 5 Scores</h3>
            {scores.length === 0 ? (
              <p style={styles.muted}>No scores added yet.</p>
            ) : (
              scores.map((item) => (
                <div key={item.date} style={styles.scoreRow}>
                  <span>{item.date} — {item.score} points</span>
                  <button
                    onClick={() => deleteScore(item.date)}
                    style={styles.deleteButton}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </section>

          <section style={styles.card}>
            <h3>Draw Participation</h3>
            <p>Draws entered: 0 (Demo)</p>
            <p>Upcoming draws: To be announced</p>
          </section>

          <section style={styles.card}>
            <h3>Winnings</h3>
            <p>Total won: ₹0</p>
            <p>Payment status: No winnings yet</p>
          </section>
        </div>
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    marginTop: "25px",
  },
  card: {
    background: "white",
    padding: "22px",
    borderRadius: "14px",
    boxShadow: "0 5px 18px #0000000d",
  },
  input: {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    padding: "11px",
    margin: "8px 0 16px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
  },
  button: {
    width: "100%",
    padding: "12px",
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
  green: { color: "#047857", fontWeight: "bold" },
  scoreRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    padding: "10px 0",
    borderBottom: "1px solid #e5e7eb",
  },
  deleteButton: {
    color: "#b91c1c",
    background: "white",
    border: "1px solid #fecaca",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Dashboard;