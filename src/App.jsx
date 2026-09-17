import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Charities from "./pages/charities";
import CharityDetails from "./pages/charityDetails";
import ScoreEntry from "./pages/scoreEntry";

function App() {
  return (
    <BrowserRouter>
      <nav style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "18px",
        backgroundColor: "#111827",
        alignItems: "center"
      }}>
        <Link to="/" style={{ color: "white", fontWeight: "bold" }}>Home</Link>
        <Link to="/charities" style={{ color: "white", fontWeight: "bold" }}>Charities</Link>
        <Link to="/scores" style={{ color: "white", fontWeight: "bold" }}>Golf Scores</Link>
        <Link to="/signup" style={{ color: "white", fontWeight: "bold" }}>Signup</Link>
        <Link to="/login" style={{ color: "white", fontWeight: "bold" }}>Login</Link>
        <Link to="/dashboard" style={{ color: "white", fontWeight: "bold" }}>Dashboard</Link>
        <Link to="/admin" style={{ color: "white", fontWeight: "bold" }}>Admin</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/charities" element={<Charities />} />
        <Route path="/charity-details" element={<CharityDetails />} />
        <Route path="/scores" element={<ScoreEntry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;