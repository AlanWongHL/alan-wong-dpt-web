import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const LogoMark = () => (
  <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="50" cy="50" r="48" fill="#FFFFFF" />
    <path d="M25 40 L35 75 L50 55 L65 75 L75 40" stroke="#0B132B" strokeWidth="8" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
    <rect x="18" y="26" width="64" height="6" fill="#E63946" />
    <rect x="18" y="16" width="8" height="26" fill="#E63946" />
    <rect x="74" y="16" width="8" height="26" fill="#E63946" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  const location = useLocation();

  const handlePricingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === '/') {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleSpecialtiesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === '/') {
      document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navLinks = [
    { name: 'Health', path: '/health' },
    { name: 'Sport Performance', path: '/sport-performance' },
    { name: 'Fitness', path: '/fitness' },
    { name: 'Olympic Weightlifting', path: '/olympic-weightlifting' }
  ];

  return (
    <header className="navbar">
      <div className="container navbar-container">
        
        <Link to="/" className="navbar-brand" onClick={() => {
          setIsOpen(false);
          window.scrollTo(0, 0);
        }}>
          <img src="/logo6.png" alt="Alan Wong DPT Logo" className="navbar-custom-logo" />
        </Link>
        
        <div className={`navbar-nav-section ${isOpen ? 'is-open' : ''}`}>
          
          {/* Desktop Navigation */}
          <div className="desktop-nav-only" style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            
            {/* Linear Cluster for all links */}
            <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-start', marginLeft: '1rem', alignItems: 'center' }}>
              <div className="navbar-grid-nav" style={{ width: 'auto' }}>
                <ul className="navbar-linear-links">
                  <li><Link to="/bios" onClick={() => setIsOpen(false)} style={{ color: '#D4AF37' }}>BIOS</Link></li>
                  <li><a href="/#specialties" onClick={handleSpecialtiesClick}>HEALTH</a></li>
                  <li><a href="/#specialties" onClick={handleSpecialtiesClick}>FITNESS</a></li>
                  <li><a href="/#specialties" onClick={handleSpecialtiesClick}>PERFORMANCE</a></li>
                  <li><a href="/#specialties" onClick={handleSpecialtiesClick}>OLYMPIC LIFTING</a></li>
                  <li><a href="/#pricing" onClick={(e) => { handlePricingClick(e); setIsOpen(false); }} style={{ color: '#D4AF37' }}>PRICING</a></li>
                </ul>
              </div>
            </div>
            
            <div className="navbar-cta-container">
              <a href="https://calendar.app.google/ntmZjrDmT3ZZ2b549" target="_blank" rel="noopener noreferrer" className="navbar-cta-btn" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none' }}>BOOK A CONSULTATION</a>
              <Link to="/contact" className="navbar-ghost-btn" onClick={() => setIsOpen(false)}>CONTACT FOR COLLABORATION</Link>
            </div>
          </div>

          {/* Mobile Navigation - Simplified Custom List */}
          <div className="mobile-nav-only">
            <Link to="/bios" className="mobile-simple-link" onClick={() => setIsOpen(false)} style={{ color: '#D4AF37' }}>BIOS</Link>
            <a href="/#specialties" className="mobile-simple-link" onClick={handleSpecialtiesClick}>HEALTH</a>
            <a href="/#specialties" className="mobile-simple-link" onClick={handleSpecialtiesClick}>FITNESS</a>
            <a href="/#specialties" className="mobile-simple-link" onClick={handleSpecialtiesClick}>PERFORMANCE</a>
            <a href="/#specialties" className="mobile-simple-link" onClick={handleSpecialtiesClick}>OLYMPIC LIFTING</a>
            <a href="/#pricing" className="mobile-simple-link" onClick={handlePricingClick} style={{ color: '#D4AF37' }}>PRICING</a>
            
            <a href="https://calendar.app.google/ntmZjrDmT3ZZ2b549" target="_blank" rel="noopener noreferrer" className="navbar-cta-btn mobile-cta-btn" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none' }}>BOOK A CONSULTATION</a>
          </div>

        </div>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={32} color="#FFFFFF" /> : <Menu size={32} color="#FFFFFF" />}
        </button>

      </div>
    </header>
  );
};
