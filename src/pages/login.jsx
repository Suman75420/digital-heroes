import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    if (!email || !password) {
      setMessage("Please enter email and password.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    setMessage("Login successful! Welcome back.");

    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.icon}>🦸</div>

        <h1 style={styles.title}>Welcome Back!</h1>

        <p style={styles.subtitle}>
          Login to your Digital Heroes account.
        </p>

        <form onSubmit={handleSubmit}>
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
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        {message && <p style={styles.message}>{message}</p>}

        <p style={styles.footer}>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Sign up
          </Link>
        </p>

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
    marginBottom: "10px",
  },

  title: {
    textAlign: "center",
    color: "#111827",
    marginBottom: "8px",
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
    marginBottom: "7px",
    marginTop: "15px",
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

  button: {
    width: "100%",
    padding: "13px",
    marginTop: "25px",
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
    color: "#4b5563",
    marginTop: "20px",
  },

  link: {
    color: "#4f46e5",
    fontWeight: "600",
    textDecoration: "none",
  },
};

export default Login;