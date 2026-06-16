import "./Login.css";
import farmImage from "../assets/login-farm.jpg";

export default function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend yet — just prevent refresh
    alert("Login submitted (no backend connected yet)");
  };

  const handleGoogleSignIn = () => {
    // Placeholder for Google Auth (Firebase later)
    alert("Google Sign-In clicked (not connected yet)");
  };

  return (
    <div className="login-container">
      {/* LEFT IMAGE SECTION */}
      <div className="login-image-section">
        <img src={farmImage} alt="Agriculture farmland" />
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="login-form-section">
        <div className="login-box">
          <h1>AgriShield</h1>
          

          {/* LOGIN FORM */}
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <button type="submit" className="login-btn">
              Log In
            </button>
          </form>

          <div className="divider">OR</div>

          {/* GOOGLE SIGN IN */}
          <button className="google-btn" onClick={handleGoogleSignIn}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google icon"
            />
            Sign in with Google
          </button>

          <p className="footer-text">
            Don’t have an account? <span>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}