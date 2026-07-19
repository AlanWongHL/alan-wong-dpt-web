import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ClipboardList, TrendingUp, Handshake, LineChart } from 'lucide-react';
import './Home.css';

const AnimatedNumber: React.FC<{ target: number; prefix?: string; suffix?: string; duration?: number }> = ({ target, prefix = '', suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return (
    <div ref={domRef} className="metric-number">
      {prefix}{count}{suffix}
    </div>
  );
};

const TESTIMONIALS = [
  {
    id: 1,
    name: "Dean Ellenwood",
    title: "Former Canadian National Track Athlete\nWorld Youth Championships Bronze Medallist\n2:40 Marathoner",
    photo: "/Dean.webp",
    review: "Alan is an exceptionally consistent, professional, and inspiring person to work with. He approaches every project with genuine care, curiosity, and a strong commitment to excellence. Alan brings out the best in those around him by creating supportive environments and implementing effective systems that help everyone around him succeed. His dedication to continuous learning and helping others reach their full potential make him an outstanding personal trainer and colleague."
  },
  {
    id: 2,
    name: "Victor Pao",
    title: "Musculoskeletal Physiotherapist\nRecreational Brazilian Jiu-Jitsu Athlete",
    photo: "/Victor.jpeg",
    review: "I have had the pleasure of studying alongside Alan in the Doctor of Physiotherapy program, and he has consistently impressed me with both his knowledge and his commitment to continuous learning. Studying with him has been a genuinely positive experience. He often takes the initiative to organise study groups, creating a supportive environment where everyone can learn, share ideas, and grow together.\n\nAlan is also someone I trust deeply as a teammate. During group projects, he always completes his own responsibilities to a high standard while generously offering his time and support to others. He brings thoughtful perspectives that encourage the team to think more broadly and consider different approaches to clinical reasoning and problem-solving.\n\nAbove all, Alan is a reliable, professional, and caring person. I have no doubt that he will provide every client with thoughtful guidance, evidence-based practice, and the same dedication that he has consistently shown throughout our time studying together."
  },
  {
    id: 3,
    name: "Gavin Yeung",
    title: "Doctor of Physiotherapy Candidate\nRecreational Tennis Player",
    photo: "/Gavin.jpeg",
    review: "Alan is very logical and analytical in his thinking and prescription of exercises. It gives me the confidence that everything he says and recommends is founded on a very solid base of clinical reasoning."
  }
];

export const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-narrative">
      {/* Phase 1: Hero Section Restored */}
      <section className="hero-section full-bleed">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">
            <span className="hero-line line-1"><span className="hero-accent-large">STRONG</span></span>
            <span className="hero-line line-2"><span className="hero-accent-large">SHARP</span></span>
            <span className="hero-line line-3"><span className="hero-accent-large">STEADY</span></span>
          </h1>
          <p className="hero-subheadline">
            <span className="desktop-text">
              Evidence-informed <span className="text-gold">Personal Training</span> at <span className="text-gold">Fitness First Titanium Barangaroo</span>.<br />
              Optimising health and performance for busy professionals.
            </span>
            <span className="mobile-text hero-subtitle-1" style={{ display: 'none' }}>
              <span style={{ color: '#cbd5e1' }}>Evidence-informed</span> <span className="text-gold">Personal Training</span> <span style={{ color: '#cbd5e1' }}>at</span> <span className="text-gold">Fitness First Titanium Barangaroo</span>.
            </span>
          </p>
          
          <div className="hero-button-group">
            <a 
              className="hero-cta-button" 
              tabIndex={-1}
              href="https://calendar.app.google/ntmZjrDmT3ZZ2b549"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ textDecoration: 'none' }}
            >
              <span className="desktop-text">BOOK A CONSULTATION</span>
              <span className="mobile-text" style={{ display: 'none' }}>BOOK A CONSULT</span>
            </a>
            <button 
              className="hero-cta-button ghost" 
              tabIndex={-1}
              onClick={(e) => {
                e.stopPropagation();
                navigate('/bios');
              }}
            >
              <span className="desktop-text">EXPLORE TRAINER BIOS</span>
              <span className="mobile-text" style={{ display: 'none' }}>TRAINER BIOS</span>
            </button>
          </div>
        </div>
      </section>



      {/* Phase 2: Meet Alan */}
      <section className="narrative-intro">
        <div className="container">
          <div className="intro-grid">
            {/* Left Column: Text */}
            <div className="intro-text-container">
              <h1 className="intro-h1">ALAN WONG <span className="intro-h3-inline">MSc, BEd, CSCS, USAW, CPT</span></h1>
              
              <div className="mobile-only-images">
                <img src="/Picture2.jpg?v=173" alt="Alan Wong Coaching" className="intro-photo-img" />
                <img src="/2.jpeg" alt="Alan Wong Training" className="intro-photo-img img-bottom-focus" />
              </div>
              
              <h2 className="intro-subtitle">Clinical <span className="text-red">Reasoning</span> meets Human <span className="text-red">Performance</span></h2>
              <p className="intro-p">
                Alan Wong brings together an uncommon combination of expertise in personal health, sport performance, and physiotherapy training. Formerly a <strong>Senior Lecturer in Sport Performance</strong> in Hong Kong, Alan moved to Australia in 2025 to commence his <strong>Doctor of Physiotherapy</strong> studies at the University of Sydney. With over 15 years of experience across health, fitness, and higher education, Alan continues to coach as a <strong>Personal Trainer</strong> at <strong>Fitness First Titanium Barangaroo</strong> alongside his DPT study, helping people build healthier and stronger lives.
              </p>
              <p className="intro-p desktop-text">
                Alan’s extensive experience has allowed him to coach a wide range of populations, including <strong>executives</strong>, young <strong>professionals</strong>, <strong>athletes</strong>, and referred <strong>patients</strong>. Whether you are a busy professional wanting to rebuild routine, an athlete seeking better performance, or someone who wants to train safely with long-term health in mind, Alan provides structured, effective, and tailored coaching to achieve your goals.
              </p>
              
              <div className="bios-button-group" style={{ marginTop: '1.5rem', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a 
                  className="hero-cta-button" 
                  href="https://calendar.app.google/ntmZjrDmT3ZZ2b549"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.85rem', padding: '10px 16px', textDecoration: 'none', width: '220px', textAlign: 'center', justifyContent: 'center', boxSizing: 'border-box' }}
                >
                  BOOK A CONSULTATION
                </a>
                <button 
                  className="hero-cta-button gold-solid" 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/bios');
                  }}
                  style={{ fontSize: '0.85rem', padding: '10px 16px', textDecoration: 'none', width: '220px', textAlign: 'center', justifyContent: 'center', boxSizing: 'border-box' }}
                >
                  FULL BIOS
                </button>
              </div>
            </div>
            
            {/* Right Column: 2x2 Photo Grid */}
            <div className="intro-photo-grid">
              <img src="/Picture2.jpg?v=173" alt="Alan Wong Coaching" className="intro-photo-img hide-on-mobile" />
              <img src="/669402914_10162897006154021_8910858062313522465_n.jpg" alt="Alan Wong Physiotherapy" className="intro-photo-img offset-image" />
              <img src="/2.jpeg" alt="Alan Wong Training" className="intro-photo-img img-bottom-focus hide-on-mobile" />
              <img src="/515440915_10161817225954021_4705122261009137400_n.jpg" alt="Alan Wong Weightlifting" className="intro-photo-img offset-image" />
            </div>
          </div>
          
          {/* Bottom Section: Full Width Lists */}
          <div className="intro-lists-section">
            <div className="intro-list-block">
              <h4 className="intro-list-title">Qualifications</h4>
              <ul className="intro-ul">
                <li><strong>MSc Strength and Conditioning</strong> (Distinction), University of Salford, UK</li>
                <li><strong>BEd (Hons) Physical Education</strong>, Education University of Hong Kong</li>
                <li>International Strength and Conditioning Specialist, NSCA</li>
                <li>Certified Weightlifting Coach, USA Weightlifting</li>
                <li>International Certified Personal Trainer, NASM</li>
                <li>Certified Sports Trainer, Australia Sports Medicine</li>
              </ul>
            </div>
            <div className="intro-list-block">
              <h4 className="intro-list-title">Professional Experience</h4>
              <ul className="intro-ul">
                <li><strong>Doctor of Physiotherapy Candidate</strong>, University of Sydney, 2025-2027</li>
                <li><strong>Senior Lecturer (Sports)</strong>, Hong Kong Metropolitan University, 2022-2025</li>
                <li>High Performance Manager, The University of Hong Kong, 2020-2022</li>
                <li>Health and Fitness Manager, The University of Hong Kong, 2015-2020</li>
                <li>Personal Trainer, Fitness First Hong Kong, 2013-2014</li>
                <li>Volleyball Coach and Personal Trainer, 2009-2013</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3: Core PT Specialties */}
      <section id="specialties" className="narrative-specialties">
        <div className="container" style={{ maxWidth: '1400px' }}>
          <h2 className="section-title specialties-heading">Our Specialised Training Tailored for You</h2>
          <p className="specialties-subtitle">
            Alan specialises in <strong className="text-gold">strength and conditioning</strong>, <strong className="text-gold">health-focused fitness</strong>, and <strong className="text-gold">injury prevention</strong> — tailored to your goals, lifestyles, and busy schedule.
          </p>
          <div className="specialties-grid">
            
            {/* Card 1 */}
            <div className="specialty-card" onClick={() => window.open('https://calendar.app.google/ntmZjrDmT3ZZ2b549', '_blank', 'noopener,noreferrer')}>
              <div className="specialty-bg bg-strength"></div>
              <div className="specialty-content">
                <h3 className="specialty-title">Strength and Conditioning</h3>
                <p className="specialty-text">
                  Periodized specific training for peak performance
                </p>
                <button className="specialty-btn">Book a Sports Profiling</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="specialty-card" onClick={() => window.open('https://calendar.app.google/ntmZjrDmT3ZZ2b549', '_blank', 'noopener,noreferrer')}>
              <div className="specialty-bg bg-health"></div>
              <div className="specialty-content">
                <h3 className="specialty-title">Health and Fitness</h3>
                <p className="specialty-text">
                  Stimulating and Rejuvenating training for body and mind
                </p>
                <button className="specialty-btn">Book an Initial Consult</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="specialty-card" onClick={() => window.open('https://calendar.app.google/ntmZjrDmT3ZZ2b549', '_blank', 'noopener,noreferrer')}>
              <div className="specialty-bg bg-weightlifting"></div>
              <div className="specialty-content">
                <h3 className="specialty-title">Olympic Weightlifting</h3>
                <p className="specialty-text">
                  The most effective way for strength and performance gain
                </p>
                <button className="specialty-btn">Book a Lifting Analysis</button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="specialty-card" onClick={() => window.open('https://calendar.app.google/ntmZjrDmT3ZZ2b549', '_blank', 'noopener,noreferrer')}>
              <div className="specialty-bg bg-prevention"></div>
              <div className="specialty-content">
                <h3 className="specialty-title">Injury Prevention</h3>
                <p className="specialty-text">
                  Protective strengthening for recreational athletes and weekend warriors
                </p>
                <button className="specialty-btn">Book a Risk Screening</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Phase 4: Dynamic Impact Section */}
      <section className="narrative-impact">
        <div className="container">
          <div className="impact-grid">
            {/* Left Column: Photo */}
            <div className="impact-image-container">
              <img src="/OC advisor.jpeg" alt="Alan Wong Olympic Rings" className="impact-image" />
            </div>
            
            {/* Right Column: Title & Stats */}
            <div className="impact-content">
              <h2 className="section-title impact-title">EXPERIENCE THAT INFORMS EVERY SESSION</h2>
              
              <div className="impact-stats-grid">
                <div className="impact-stat-item">
                  <AnimatedNumber target={17} />
                  <p className="impact-stat-desc">Years of high-performance coaching experience.</p>
                </div>
                <div className="impact-stat-item">
                  <AnimatedNumber target={30} suffix="+" />
                  <p className="impact-stat-desc">National athletes trained across 4 different countries.</p>
                </div>
                <div className="impact-stat-item">
                  <AnimatedNumber target={5} />
                  <p className="impact-stat-desc">Athletes helped from non-selection to full Olympic qualification.</p>
                </div>
                <div className="impact-stat-item">
                  <AnimatedNumber target={5} />
                  <p className="impact-stat-desc">Advisory roles (3 active, 2 former) sitting on National Sports Associations.</p>
                </div>
                <div className="impact-stat-item impact-stat-full">
                  <AnimatedNumber target={38} prefix="AU $" suffix="M" />
                  <p className="impact-stat-desc">Sports funding directed through strategic institutional projects and initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Phase 4.5: Coaching Packages */}
        <section id="pricing" className="narrative-pricing">
          <div className="container" style={{ maxWidth: '1100px' }}>
            <h2 className="section-title specialties-heading">COACHING PACKAGES</h2>
            <p className="specialties-subtitle">
              All packages include the <strong className="text-gold">same coaching quality</strong>. You do not pay more to receive better service — you simply <strong className="text-gold">pay less</strong> when you <strong className="text-gold">commit to more</strong>.
            </p>
          </div>
          
          {/* New Unified Coaching Packages Section */}
          <div className="unified-pricing-section">
            <div className="unified-pricing-bg"></div>
            
            <div className="unified-pricing-container">
              
              {/* Left Column: Common Features */}
              <div className="unified-features-panel">
                <ul className="unified-feature-list">
                  <li>
                    <div className="unified-icon-wrapper"><Clock size={24} /></div>
                    <div className="unified-feature-text">
                      <strong>45-minute Personal Training Sessions</strong>
                      <p>1-to-1 expert coaching sessions tailored to you</p>
                    </div>
                  </li>
                  <li>
                    <div className="unified-icon-wrapper"><ClipboardList size={24} /></div>
                    <div className="unified-feature-text">
                      <strong>Personalized Exercise Prescription</strong>
                      <p>Evidence-informed exercise to optimise your progress</p>
                    </div>
                  </li>
                  <li>
                    <div className="unified-icon-wrapper"><TrendingUp size={24} /></div>
                    <div className="unified-feature-text">
                      <strong>Periodised Programming & Planning</strong>
                      <p>Progressive training plan for peak performance</p>
                    </div>
                  </li>
                  <li>
                    <div className="unified-icon-wrapper"><Handshake size={24} /></div>
                    <div className="unified-feature-text">
                      <strong>Ongoing Coach Support</strong>
                      <p>Guidance, feedback, and accountability every step</p>
                    </div>
                  </li>
                  <li>
                    <div className="unified-icon-wrapper"><LineChart size={24} /></div>
                    <div className="unified-feature-text">
                      <strong>Assessments & Reports</strong>
                      <p>Track progress with assessments and insights</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Right Column: Pricing Pillars */}
              <div className="unified-pillars-panel">
                <div className="unified-pillar">
                  <div className="pillar-header">START</div>
                  <div className="pillar-content">
                    <div className="pillar-price">$150<span> / session</span></div>
                    <div className="pillar-desc">1x session / week</div>
                  </div>
                </div>

                <div className="unified-pillar popular">
                  <div className="pillar-badge">MOST POPULAR</div>
                  <div className="pillar-header">BUILD</div>
                  <div className="pillar-content">
                    <div className="pillar-price">$130<span> / each</span></div>
                    <div className="pillar-desc">2x sessions / week</div>
                  </div>
                </div>

                <div className="unified-pillar">
                  <div className="pillar-header">PERFORM</div>
                  <div className="pillar-content">
                    <div className="pillar-price">$110<span> / each</span></div>
                    <div className="pillar-desc">3x sessions / week</div>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Flexibility Notice */}
            <div style={{ textAlign: 'center', marginTop: '3.5rem', marginBottom: '2rem', padding: '0 2rem' }}>
              <h3 style={{ color: '#D4AF37', letterSpacing: '2px', fontSize: '1.2rem', marginBottom: '0.8rem' }}>COMPLETE FLEXIBILITY</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                Pay only for the sessions you complete each week—<br />
                <strong style={{ color: '#D4AF37' }}>No lock-in contracts, upfront packages, or make-up sessions required.</strong>
              </p>
            </div>

            {/* Bottom Button */}
            <div className="unified-cta-container">
              <a className="unified-cta-btn" href="https://calendar.app.google/ntmZjrDmT3ZZ2b549" target="_blank" rel="noopener noreferrer">
                BOOK INITIAL CONSULTATION FOR FREE
              </a>
            </div>
            
          </div>

          <div className="container" style={{ maxWidth: '1100px' }}>
            <p className="specialties-subtitle" style={{ marginTop: '2.5rem', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
              All in-person coaching is conducted exclusively at <strong className="text-gold">Fitness First Titanium Barangaroo</strong>.
            </p>
          </div>
        </section>

      {/* Phase 5: Testimonials */}
      <section className="narrative-testimonials">
        <div className="container" style={{ maxWidth: '100%', padding: '0 2rem' }}>
          <h2 className="section-title specialties-heading" style={{ marginBottom: '3rem', color: '#D4AF37' }}>TRUSTED BY ATHLETES, PARTNERS, AND PROFESSIONALS</h2>
          
          <div className="testimonials-slider-container">
            <div className="testimonials-track">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="testimonial-card">
                  <div className="testimonial-author">
                    <img src={t.photo} alt={t.name} className="testimonial-photo" />
                    <div className="testimonial-author-info">
                      <h4 className="testimonial-name">{t.name}</h4>
                      <p className="testimonial-title">{t.title}</p>
                    </div>
                  </div>
                  <div className="testimonial-text-wrapper">
                    <p className="testimonial-text-small">{t.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
