import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [charity, setCharity] = useState("");
  const [contribution, setContribution] = useState(10);

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    if (!charity) {
      setMessage("Please select a charity.");
      return;
    }

    const percentage = Number(contribution);

    if (
      !Number.isInteger(percentage) ||
      percentage < 10 ||
      percentage > 100
    ) {
      setMessage("Contribution must be between 10% and 100%.");
      return;
    }

    setMessage(
      `Account created successfully! Welcome, ${name}.`
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.icon}>🦸</div>

        <h1 style={styles.title}>Create Account</h1>

        <p style={styles.subtitle}>
          Join Digital Heroes and play with purpose.
        </p>

        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="At least 6 characters"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Choose Your Charity</label>
          <select
            value={charity}
            onChange={(event) => setCharity(event.target.value)}
            style={styles.input}
            required
          >
            <option value="">Select a charity</option>
            <option value="Education for All">📚 Education for All</option>
            <option value="Healthy Lives">❤️ Healthy Lives</option>
            <option value="Green Earth">🌱 Green Earth</option>
            <option value="Animal Care">🐾 Animal Care</option>
          </select>

          <label style={styles.label}>
            Charity Contribution (%)
          </label>

          <input
            type="number"
            min="10"
            max="100"
            value={contribution}
            onChange={(event) => setContribution(event.target.value)}
            style={styles.input}
            required
          />

          <p style={styles.hint}>
            Minimum 10% of your subscription goes to your selected charity.
          </p>

          <button type="submit" style={styles.button}>
            Create Account
          </button>
        </form>

        {message && <p style={styles.message}>{message}</p>}

        <p style={styles.footer}>
          <Link to="/" style={styles.link}>
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  },

  card: {
    width: "100%",
    maxWidth: "450px",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },

  icon: {
    textAlign: "center",
    fontSize: "45px",
  },

  title: {
    textAlign: "center",
    color: "#111827",
  },

  subtitle: {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: "25px",
  },

  label: {
    display: "block",
    color: "#374151",
    fontWeight: "600",
    marginTop: "15px",
    marginBottom: "7px",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    color: "#111827",
    backgroundColor: "white",
    fontSize: "15px",
  },

  hint: {
    color: "#6b7280",
    fontSize: "13px",
  },

  button: {
    width: "100%",
    padding: "13px",
    marginTop: "15px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#4f46e5",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  message: {
    textAlign: "center",
    color: "#15803d",
    fontWeight: "600",
    marginTop: "20px",
  },

  footer: {
    textAlign: "center",
    marginTop: "20px",
  },

  link: {
    color: "#4f46e5",
    fontWeight: "600",
    textDecoration: "none",
  },
};

export default Signup;