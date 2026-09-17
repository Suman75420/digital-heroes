import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>
          <span className="digital">Digital</span>{" "}
          <span className="heroes">Heroes</span>
        </h2>

        <div className="nav-links">
          <a href="#how">How It Works</a>
          <a href="#charities">Charities</a>
          <a href="#about">About</a>
        </div>
        <div className="nav-auth">
        <Link className="login-btn" to="/login">
         Login
        </Link>

         <Link className="login-btn" to="/signup">
         Sign Up
          </Link>
        </div>
        
      </nav>

      <main className="hero">
        <div className="hero-content">
          <p className="tagline">GOLF • COMMUNITY • IMPACT</p>

          <h1>
            Play Golf.
            <br />
            <span>Make a Difference.</span>
          </h1>

          <p className="description">
            Turn your golf performance into meaningful
            support for charities.
          </p>

          <div className="hero-buttons">
            <a className="primary-btn" href="/signup">
              Get Started
            </a>
            <a href="#how" className="secondary-btn">
              Learn More →
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="golf-icon">⛳</div>
          <h2>Your Game Can Change Lives</h2>
          <p>
            Track your scores, support a charity, and take
            part in monthly prize draws.
          </p>
          <div className="card-bottom">
            <span>Play with purpose</span>
            <span>♥</span>
          </div>
        </div>
      </main>

      <section id="how" className="how-section">
        <p className="tagline">SIMPLE STEPS, REAL IMPACT</p>
        <h2>How It Works</h2>

        <div className="steps">
          <div className="step">
            <span>01</span>
            <h3>Join the Community</h3>
            <p>Create your account and choose a subscription.</p>
          </div>

          <div className="step">
            <span>02</span>
            <h3>Enter Your Scores</h3>
            <p>Add your latest five Stableford golf scores.</p>
          </div>

          <div className="step">
            <span>03</span>
            <h3>Support a Charity</h3>
            <p>Choose a charity and participate in monthly draws.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;