import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">Alan Wong <span style={{ color: '#475569' }}>D</span>PT</h3>
            <p className="footer-tagline">Evidence-informed Personal Training at Fitness First Titanium Barangaroo.</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/alanwongdpt/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="https://www.facebook.com/HinLun/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://wa.me/61489198954" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Phone size={20} /></a>
              <a href="sms:+61489198954" aria-label="Text Message"><MessageSquare size={20} /></a>
              <a href="mailto:hlwongalan@gmail.com" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading" style={{ color: '#D4AF37' }}>Services</h4>
            <ul>
              <li><a href="/#specialties">Strength and Conditioning</a></li>
              <li><a href="/#specialties">Health and Fitness</a></li>
              <li><a href="/#specialties">Olympic Weightlifting</a></li>
              <li><a href="/#specialties">Injury Prevention</a></li>
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
          <p>&copy; {new Date().getFullYear()} Alan Wong <span style={{ color: '#475569' }}>D</span>PT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
