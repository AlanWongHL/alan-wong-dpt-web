import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CallToAction.css';

export const CallToAction: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="global-cta-wrapper">
      <div className="container">
        <div className="global-cta-card">
          <div className="cta-header">
            <div className="cta-eyebrow-container">
              <span className="cta-red-line"></span>
              <span className="cta-eyebrow">CONTACT US</span>
            </div>
            <h2 className="global-cta-title">Book a session or want to connect?</h2>
            <p className="global-cta-text">
              Whether you are looking to book an initial consultation or explore professional collaboration, reach out to discuss how we can work together.
            </p>
          </div>
          <div className="global-cta-button-group">
            <a 
              className="global-cta-btn primary-btn" 
              href="https://calendar.app.google/ntmZjrDmT3ZZ2b549"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              BOOK A CONSULTATION
            </a>
            <button 
              className="global-cta-btn secondary-btn" 
              onClick={() => navigate('/contact')}
            >
              LEAVE A MESSAGE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
