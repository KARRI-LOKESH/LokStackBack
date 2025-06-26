import React, { useState, useEffect } from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("lokstack_user");
    if (user) navigate("/home");
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const url = isLogin
      ? "http://localhost:8000/api/login/"
      : "http://localhost:8000/api/signup/";

    const payload = isLogin
      ? { email, password }
      : { full_name: fullName, email, password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        if (isLogin) {
          localStorage.setItem("lokstack_user", email);
          navigate("/home");
        } else {
          setError("✅ Signup successful! Please login.");
          setIsLogin(true); // switch to login
          setFullName("");
          setPassword("");
        }
      } else {
        setError(data.error || "Authentication failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>{isLogin ? "🔐 Welcome Back!" : "🚀 Join LokStack Today!"}</h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="👤 Full Name"
              className="input-field"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="📧 Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="🔒 Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error-msg">{error}</p>}

          <button type="submit" className="glow-btn">
            {isLogin ? "🚀 Login" : "🎉 Sign Up"}
          </button>
        </form>

        {isLogin && (
          <p className="forgot-text">
            <a href="mailto:karrilokesh108@gmail.com" style={{ color: "#67e8f9" }}>
              Forgot Password? 📧
            </a>
          </p>
        )}

        <p className="toggle-text">
          {isLogin ? "New here? " : "Have an account? "}
          <span onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer" }}>
            {isLogin ? "Create one ✍️" : "Login here 🔑"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
