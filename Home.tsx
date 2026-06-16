import { Link } from "react-router-dom";
import "./Home.css";

import {
  FaBug,
  FaBell,
  FaMapMarkedAlt,
  FaChartLine,
} from "react-icons/fa";

import heroImage from "../assets/login-farm.jpg";

import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";

const featureList = [
  {
    title: "Advanced Pest Prediction",
    description:
      "AI-powered models analyze weather, crop health, and pest trends to forecast outbreaks.",
    icon: <FaBug />,
  },
  {
    title: "Real-Time Alerts",
    description:
      "Receive precise alerts before infestations spread, giving farmers time to act.",
    icon: <FaBell />,
  },
  {
    title: "Regional Hotspot Mapping",
    description:
      "Visualize fields at risk and track pest movement across your region.",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Analytics & Insights",
    description:
      "Track trends, severity, and intervention impact through intuitive dashboards.",
    icon: <FaChartLine />,
  },
];

export default function Home() {
  return (
    <div className="home-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">AgriShield</div>

        <Link to="/login">
          <button className="nav-login-btn">Log In</button>
        </Link>
      </nav>

      {/* HERO */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(
            rgba(15, 25, 15, 0.55),
            rgba(15, 25, 15, 0.55)
          ), url(${heroImage})`,
        }}
      >
        <div className="hero-content">
          <h1>Protect Your Crops With Precision</h1>

          <p>
            AI-powered pest prediction, real-time alerts and agricultural
            intelligence for smarter farming decisions.
          </p>

          <div className="hero-actions">
            <Link to="/login">
              <button className="hero-btn primary">
                Get Started
              </button>
            </Link>

            <button className="hero-btn secondary">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <div className="about-copy">
          <h2>About AgriShield</h2>

          <p>
            AgriShield is an AI-powered pest outbreak prediction and early
            warning platform designed to help farmers identify risks before
            crops suffer significant damage.
          </p>

          <p>
            By combining weather intelligence, machine learning, farmer reports,
            and historical outbreak patterns, AgriShield delivers actionable
            recommendations that improve productivity and food security.
          </p>
        </div>

        <div className="about-stats">
          <div>
            <strong>98%</strong>
            <span>Forecast Precision</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Monitoring</span>
          </div>

          <div>
            <strong>4x</strong>
            <span>Faster Response</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <h2>What We Offer</h2>

        <div className="features-grid">
          {featureList.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <h2>Gallery</h2>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={photo1} alt="Agriculture" />
          </div>
          <div className="gallery-item">
            <img src={photo2} alt="Agriculture" />
          </div>
          <div className="gallery-item">
            <img src={photo3} alt="Agriculture" />
          </div>
          <div className="gallery-item">
            <img src={photo4} alt="Agriculture" />
          </div>
          <div className="gallery-item">
            <img src={photo5} alt="Agriculture" />
          </div>
          <div className="gallery-item">
            <img src={photo6} alt="Agriculture" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-copy">
          <h2>Secure Your Harvest With Confidence</h2>

          <p>
            Join AgriShield and leverage AI-powered agricultural intelligence
            to protect crops and maximize yields.
          </p>

          <Link to="/login">
            <button className="hero-btn primary">
              Log In
            </button>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 AgriShield. Smart Farming Through AI.</p>
      </footer>
    </div>
  );
}