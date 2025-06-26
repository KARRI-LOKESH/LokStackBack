import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Use if you have React Router
import '../pages/Home.css';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

<Helmet>
  <title>LOKSTACK</title>
  <meta name="description" content="LOKSTACK builds modern full-stack solutions using React, Django, and Spring Boot." />
</Helmet>

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
    }
  };

  // Prevent body scroll when menu is open (mobile)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  // **NEW: Close menu if window resized larger than mobile**
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <img src="/logols.png" alt="LOKSTACK Logo" className="logo" />

        {/* Hamburger Button */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <Link to="/home" className="nav-link" onClick={handleNavLinkClick}>Home</Link>
          <Link to="/projects" className="nav-link" onClick={handleNavLinkClick}>Projects</Link>
          <Link to="/about" className="nav-link" onClick={handleNavLinkClick}>About</Link>
          <Link to="/contact" className="nav-link" onClick={handleNavLinkClick}>Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>LOKSTACK</h1>
        <h2 className="hero-title">We Build Killer Web Solutions</h2>
        <p className="hero-subtitle">Leveraging the power of React, Django & Spring Boot</p>
        <a href='/projects'><button className="hero-button">Our Projects</button></a>
      </section>

      {/* Services Section */}
      <section className="services">
  <div className="services-left">
    <h3 className="services-title">Our Services</h3>
    <p className="services-desc">
      Empowering businesses with cutting-edge web applications
    </p>
  </div>

  <div className="services-right">
    <i className="fab fa-react service-icon" title="React"></i>
    <img
  src="https://static.djangoproject.com/img/logos/django-logo-positive.svg"
  alt="Django"
  title="Django"
  className="service-iconi"
/>
    <i className="fas fa-leaf service-icon" title="Spring Boot"></i>
  </div>
</section>


      <Projects />
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
