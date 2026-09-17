
import { useState } from "react";
import { Link } from "react-router-dom";

function ScoreEntry() {
  const [scores, setScores] = useState([]);
  const [date, setDate] = useState("");
  const [score, setScore] = useState("");
  const [editingDate, setEditingDate] = useState(null);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const points = Number(score);

    if (!date || !Number.isInteger(points) || points < 1 || points > 45) {
      setMessage("Enter a date and a whole-number score from 1 to 45.");
      return;
    }

    const alreadyExists = scores.some(
      (item) => item.date === date && item.date !== editingDate
    );

    if (alreadyExists) {
      setMessage("A score already exists for this date. Please edit it.");
      return;
    }

    const updatedScores = editingDate
      ? scores.map((item) =>
          item.date === editingDate ? { date, score: points } : item
        )
      : [...scores, { date, score: points }];

    const sortedScores = updatedScores.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    setScores(sortedScores.slice(0, 5));
    setDate("");
    setScore("");
    setEditingDate(null);
    setMessage("Golf score saved successfully!");
  }

  function handleEdit(item) {
    setDate(item.date);
    setScore(String(item.score));
    setEditingDate(item.date);
    setMessage("");
  }

  function handleDelete(dateToDelete) {
    setScores(scores.filter((item) => item.date !== dateToDelete));
    setMessage("Score deleted.");
    if (editingDate === dateToDelete) {
      setDate("");
      setScore("");
      setEditingDate(null);
    }
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h2>🦸 Digital Heroes</h2>
        <Link to="/" style={styles.link}>Home</Link>
      </header>

      <main style={styles.main}>
        <h1 style={styles.title}>Golf Score Management</h1>
        <p style={styles.subtitle}>
          Enter your Stableford scores and keep track of your latest five rounds.
        </p>

        <form onSubmit={handleSubmit} style={styles.card}>
          <label style={styles.label}>Round Date</label>
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Stableford Score (1–45)</label>
          <input
            type="number"
            min="1"
            max="45"
            step="1"
            value={score}
            onChange={(event) => setScore(event.target.value)}
            placeholder="Enter score"
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            {editingDate ? "Update Score" : "Add Score"}
          </button>

          {editingDate && (
            <button
              type="button"
              style={styles.cancel}
              onClick={() => {
                setDate("");
                setScore("");
                setEditingDate(null);
                setMessage("");
              }}
            >
              Cancel Edit
            </button>
          )}

          {message && <p style={styles.message}>{message}</p>}
        </form>

        <section style={styles.card}>
          <h2 style={styles.sectionTitle}>Your Latest 5 Scores</h2>

          {scores.length === 0 ? (
            <p style={styles.text}>No scores added yet.</p>
          ) : (
            scores.map((item) => (
              <div key={item.date} style={styles.scoreRow}>
                <div>
                  <strong style={styles.text}>{item.date}</strong>
                  <p style={styles.text}>
                    Stableford: {item.score}
                  </p>
                </div>

                <div style={styles.actions}>
                  <button
                    type="button"
                    style={styles.smallButton}
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    style={styles.deleteButton}
                    onClick={() => handleDelete(item.date)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
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
  },
  main: {
    maxWidth: "800px",
    margin: "auto",
    padding: "35px 20px",
  },
  title: {
    color: "#111827",
    fontWeight: "800",
  },
  subtitle: {
    color: "#374151",
    marginBottom: "25px",
  },
  card: {
    background: "white",
    padding: "25px",
    borderRadius: "14px",
    marginBottom: "25px",
    boxShadow: "0 5px 18px #0000000d",
  },
  label: {
    display: "block",
    margin: "15px 0 7px",
    color: "#111827",
    fontWeight: "700",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px",
    color: "#111827",
    background: "white",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
  },
  button: {
    marginTop: "20px",
    padding: "12px 20px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "700",
    cursor: "pointer",
  },
  cancel: {
    marginLeft: "10px",
    padding: "12px",
    background: "#e5e7eb",
    color: "#111827",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  message: {
    color: "#047857",
    fontWeight: "600",
  },
  sectionTitle: {
    color: "#111827",
    fontWeight: "800",
  },
  text: {
    color: "#374151",
  },
  scoreRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
    padding: "15px 0",
    borderBottom: "1px solid #e5e7eb",
  },
  actions: {
    display: "flex",
    gap: "8px",
  },
  smallButton: {
    padding: "8px 12px",
    background: "#e0e7ff",
    color: "#3730a3",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },
  deleteButton: {
    padding: "8px 12px",
    background: "#fee2e2",
    color: "#991b1b",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },
  link: {
    color: "#4f46e5",
    textDecoration: "none",
    fontWeight: "700",
  },
};

export default ScoreEntry;