import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import LoginSignup from "./components/LoginSignup";
import "./pages/Home.css";

function AppWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("lokstack_user"));
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) setMenuOpen(false);
  };

  const handleLogout = async () => {
    await fetch("http://localhost:8000/api/logout/", {
      method: "POST",
      credentials: "include",
    });
    localStorage.removeItem("lokstack_user");
    setLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <div className="home-container">
        {/* Header */}
        <header className="header">
          <img src="/logols.png" alt="LOKSTACK Logo" className="logo" />

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            <Link to="/login" className="nav-link" onClick={handleNavLinkClick}>Signin</Link>
            <Link to="/home" className="nav-link" onClick={handleNavLinkClick}>Home</Link>
            <Link to="/projects" className="nav-link" onClick={handleNavLinkClick}>Projects</Link>
            <Link to="/about" className="nav-link" onClick={handleNavLinkClick}>About</Link>
            <Link to="/contact" className="nav-link" onClick={handleNavLinkClick}>Contact</Link>
            {loggedIn && (
              <button className="nav-link logout-link" onClick={handleLogout}>Logout</button>
            )}
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
