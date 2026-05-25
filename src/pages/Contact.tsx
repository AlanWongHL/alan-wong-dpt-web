import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Contact.css';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('success') === 'true') {
      setIsSubmitted(true);
    }
  }, [location]);

  const handleSubmit = () => {
    // Just for visual feedback before navigation
    setIsSubmitting(true);
  };

  // Dynamically generate the return URL based on the current environment
  const returnUrl = typeof window !== 'undefined' ? `${window.location.origin}/contact?success=true` : '';

  return (
    <div className="contact-page">
      <div className="container contact-container">
        
        <div className="contact-content-split">
          <div className="contact-text-column">
            <h1 className="contact-h1">Get in Touch</h1>
            <p className="contact-subtitle">
              If Alan’s background and approach resonate with you, feel free to get in touch.
            </p>
            <p className="contact-subtitle" style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.6)' }}>
              If you experience any issues submitting the form, please contact us directly at <a href="mailto:hlwongalan@gmail.com" style={{ color: '#D4AF37', textDecoration: 'none' }}>hlwongalan@gmail.com</a>
            </p>
          </div>

          <div className="contact-form-column">
            <div className="contact-form-wrapper">
              {isSubmitted ? (
                <div className="contact-success-message">
                  <h3>Thank you for getting in touch.</h3>
                  <p>Your message has been received. We will review your enquiry and get back to you as soon as possible.</p>
                </div>
              ) : (
                <form 
                  className="contact-form" 
                  action="https://formsubmit.co/hlwongalan@gmail.com" 
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  {/* FormSubmit Configuration Settings */}
                  <input type="hidden" name="_subject" value="New Contact Request - Alan Wong DPT Website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value={returnUrl} />
                  
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="form-input" 
                      placeholder="Jane Doe" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="form-input" 
                      placeholder="jane@example.com" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mobile" className="form-label">Mobile Number (Optional)</label>
                    <input 
                      type="tel" 
                      id="mobile" 
                      name="mobile" 
                      className="form-input" 
                      placeholder="+61 412 345 678" 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      className="form-input form-textarea" 
                      placeholder="Looking forward to connect with you." 
                      rows={4}
                      required 
                    ></textarea>
                  </div>

                  <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
