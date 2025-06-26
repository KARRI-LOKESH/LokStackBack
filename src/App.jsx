import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";      // ✅ import About
import Contact from "./pages/Contact";  // ✅ import Contact
import "./pages/Home.css";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { Helmet } from 'react-helmet';

<Helmet>
  <title>Home - LOKSTACK</title>
  <meta name="description" content="LOKSTACK builds modern full-stack solutions using React, Django, and Spring Boot." />
</Helmet>

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) setMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <Router>
      <div className="home-container">
        {/* Global Header */}
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
            <Link to="/" className="nav-link" onClick={handleNavLinkClick}>Home</Link>
            <Link to="/projects" className="nav-link" onClick={handleNavLinkClick}>Projects</Link>
            <Link to="/about" className="nav-link" onClick={handleNavLinkClick}>About</Link>
            <Link to="/contact" className="nav-link" onClick={handleNavLinkClick}>Contact</Link>
          </nav>
        </header>

        {/* Route Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />       {/* ✅ Added */}
          <Route path="/contact" element={<Contact />} />   {/* ✅ Added */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
