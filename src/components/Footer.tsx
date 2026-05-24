import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">Alan Wong DPT</h3>
            <p className="footer-tagline">Evidence-informed Personal Training at Fitness First Titanium Barangaroo.</p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn" className="social-text">LI</a>
              <a href="#" aria-label="Twitter" className="social-text">X</a>
              <a href="#" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading" style={{ color: '#D4AF37' }}>Services</h4>
            <ul>
              <li><Link to="/contact">Sports Profiling</Link></li>
              <li><Link to="/contact">Initial Consult</Link></li>
              <li><Link to="/contact">Lifting Analysis</Link></li>
              <li><Link to="/contact">Risk Screening</Link></li>
              <li>
                <a href="https://calendar.app.google/ntmZjrDmT3ZZ2b549" target="_blank" rel="noopener noreferrer" className="footer-cta-btn">BOOK A CONSULT</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading" style={{ color: '#D4AF37' }}>Collaboration</h4>
            <ul>
              <li><Link to="/bios">Full Bios</Link></li>
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/teaching">Teaching</Link></li>
              <li><Link to="/contact">Knowledge Exchange</Link></li>
              <li>
                <Link to="/contact" className="footer-ghost-btn" onClick={() => window.scrollTo(0,0)}>CONTACT FOR COLLABORATION</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Alan Wong DPT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
