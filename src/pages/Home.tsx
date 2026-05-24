import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    name: "Sarah Jenkins",
    title: "Olympic Weightlifter",
    photo: "https://i.pravatar.cc/150?img=1",
    review: "Alan completely transformed my approach to lifting. His periodised programming helped me break through a 2-year plateau and qualify for Nationals. His eye for biomechanics is unmatched."
  },
  {
    id: 2,
    name: "David Chen",
    title: "Corporate Executive",
    photo: "https://i.pravatar.cc/150?img=11",
    review: "As a busy executive, I needed someone who respected my time but pushed me hard. Alan's tailored approach improved my energy levels drastically while bulletproofing my back against injury."
  },
  {
    id: 3,
    name: "Emma Robertson",
    title: "Recreational Runner",
    photo: "https://i.pravatar.cc/150?img=5",
    review: "I came to Alan with chronic knee pain. Through careful assessment and targeted strengthening, I'm now running pain-free. He doesn't just treat the symptom; he builds resilience."
  },
  {
    id: 4,
    name: "Marcus Thorne",
    title: "Professional Rugby Player",
    photo: "https://i.pravatar.cc/150?img=14",
    review: "Alan's expertise in high-performance conditioning is elite. The transition from off-season to in-season under his guidance was the smoothest and strongest of my entire career."
  },
  {
    id: 5,
    name: "Jessica Alcott",
    title: "National Swim Coach",
    photo: "https://i.pravatar.cc/150?img=9",
    review: "Having Alan consult with our team elevated our entire dry-land program. His ability to translate complex sports science into practical coaching cues is a game-changer for our athletes."
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
      <section 
        className="hero-section full-bleed"
        onClick={() => navigate('/contact')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && navigate('/contact')}
        aria-label="Navigate to Contact"
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">
            <span className="hero-line line-1"><span className="hero-light">Get</span> <span className="hero-accent-large">STRONG</span></span>
            <span className="hero-line line-2"><span className="hero-light">Be</span> <span className="hero-accent-large">SHARP</span></span>
            <span className="hero-line line-3"><span className="hero-light">Go</span> <span className="hero-accent-large">STEADY</span></span>
          </h1>
          <p className="hero-subheadline">
            Evidence-informed <span className="text-gold">Personal Training</span> at <span className="text-gold">Fitness First Barangaroo</span>.<br />
            Optimising health and performance for busy professionals.
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
              BOOK A CONSULTATION
            </a>
            <button 
              className="hero-cta-button ghost" 
              tabIndex={-1}
              onClick={(e) => {
                e.stopPropagation();
                navigate('/bios');
              }}
            >
              EXPLORE TRAINER BIOS
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
              <h2 className="intro-subtitle">Clinical <span className="text-red">Reasoning</span> meets Human <span className="text-red">Performance</span></h2>
              <p className="intro-p">
                Alan Wong brings together an uncommon combination of expertise in personal health, sport performance, and physiotherapy training. Formerly a <strong>Senior Lecturer in Sport Performance</strong> in Hong Kong, Alan moved to Australia in 2025 to commence his <strong>Doctor of Physiotherapy</strong> studies at the University of Sydney. With over 15 years of experience across health, fitness, and higher education, Alan continues to coach as a <strong>Personal Trainer</strong> at <strong>Fitness First Titanium Barangaroo</strong> alongside his DPT study, helping people build healthier and stronger lives.
              </p>
              <p className="intro-p">
                Alan’s extensive experience has allowed him to coach a wide range of populations, including <strong>executives</strong>, young <strong>professionals</strong>, <strong>athletes</strong>, and referred <strong>patients</strong>. Whether you are a busy professional wanting to rebuild routine, an athlete seeking better performance, or someone who wants to train safely with long-term health in mind, Alan provides structured, effective, and tailored coaching to achieve your goals.
              </p>
              
              <div style={{ marginTop: '1.5rem' }}>
                <a 
                  className="hero-cta-button" 
                  href="https://calendar.app.google/ntmZjrDmT3ZZ2b549"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '1rem', padding: '12px 24px', textDecoration: 'none' }}
                >
                  BOOK A CONSULTATION
                </a>
              </div>
            </div>
            
            {/* Right Column: 2x2 Photo Grid */}
            <div className="intro-photo-grid">
              <img src="/Picture2.jpg" alt="Alan Wong Coaching" className="intro-photo-img" />
              <img src="/669402914_10162897006154021_8910858062313522465_n.jpg" alt="Alan Wong Physiotherapy" className="intro-photo-img offset-image" />
              <img src="/2.jpeg" alt="Alan Wong Training" className="intro-photo-img img-bottom-focus" />
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
      <section className="narrative-specialties">
        <div className="container" style={{ maxWidth: '1400px' }}>
          <h2 className="section-title specialties-heading">Our Specialised Training Tailored for You</h2>
          <p className="specialties-subtitle">
            Alan specialises in <strong className="text-gold">strength and conditioning</strong>, <strong className="text-gold">health-focused fitness</strong>, and <strong className="text-gold">injury prevention</strong> — tailored to your goals, lifestyles, and busy schedule.
          </p>
          <div className="specialties-grid">
            
            {/* Card 1 */}
            <div className="specialty-card" onClick={() => navigate('/contact')}>
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
            <div className="specialty-card" onClick={() => navigate('/contact')}>
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
            <div className="specialty-card" onClick={() => navigate('/contact')}>
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
            <div className="specialty-card" onClick={() => navigate('/contact')}>
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
          <div className="pricing-grid">
            
            {/* Card 1 */}
            <div className="pricing-card">
              <h3 className="pricing-title">Start</h3>
              <div className="pricing-subtitle">SINGLE SESSION</div>
              <div className="pricing-price">$150<span className="pricing-period"> / session</span></div>
              <ul className="pricing-features">
                <li className="highlight-feature">1 × 45-minute session</li>
                <li>Exercise prescription</li>
                <li>Periodised programming</li>
                <li>Progress assessment</li>
              </ul>
              <a className="pricing-btn" href="https://calendar.app.google/ntmZjrDmT3ZZ2b549" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', lineHeight: '1.3' }}>BOOK A CONSULT<br/>FOR FREE</a>
            </div>

            {/* Card 2 */}
            <div className="pricing-card popular">
              <div className="popular-badge">MOST POPULAR</div>
              <h3 className="pricing-title">Build</h3>
              <div className="pricing-subtitle">10-SESSION PACKAGE</div>
              <div className="pricing-price">$130<span className="pricing-period"> / session</span></div>
              <ul className="pricing-features">
                <li className="highlight-feature">10 × 45-minute sessions</li>
                <li>Exercise prescription</li>
                <li>Periodised programming</li>
                <li>Progress assessment and report</li>
              </ul>
              <a className="pricing-btn" href="https://calendar.app.google/ntmZjrDmT3ZZ2b549" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', lineHeight: '1.3' }}>BOOK A CONSULT<br/>FOR FREE</a>
            </div>

            {/* Card 3 */}
            <div className="pricing-card">
              <h3 className="pricing-title">Perform</h3>
              <div className="pricing-subtitle">20-SESSION PACKAGE</div>
              <div className="pricing-price">$110<span className="pricing-period"> / session</span></div>
              <ul className="pricing-features">
                <li className="highlight-feature">20 × 45-minute sessions</li>
                <li>Exercise prescription</li>
                <li>Periodised programming</li>
                <li>Progress assessment and report</li>
              </ul>
              <a className="pricing-btn" href="https://calendar.app.google/ntmZjrDmT3ZZ2b549" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', lineHeight: '1.3' }}>BOOK A CONSULT<br/>FOR FREE</a>
            </div>

          </div>
          <p className="specialties-subtitle" style={{ marginTop: '2.5rem', textAlign: 'center', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            <strong className="text-gold">No lock-in</strong>. Fully flexible. All in-person coaching is conducted exclusively at <strong className="text-gold">Fitness First Titanium Barangaroo</strong>.
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
                  <div className="quote-mark-small">"</div>
                  <p className="testimonial-text-small">{t.review}</p>
                  <div className="testimonial-author">
                    <img src={t.photo} alt={t.name} className="testimonial-photo" />
                    <div className="testimonial-author-info">
                      <h4 className="testimonial-name">{t.name}</h4>
                      <p className="testimonial-title">{t.title}</p>
                    </div>
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
