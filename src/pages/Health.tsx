import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CallToAction } from '../components';
import './Health.css';

export const Health: React.FC = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="health-page">
      {/* Phase 1: The Strong Idea (Hero Section) */}
      <section className="health-hero">
        <div className="health-hero-overlay"></div>
        <div className="container health-hero-content">
          <h1 className="health-hero-title">
            TRAINING FOR<br />
            HEALTH
          </h1>
        </div>
      </section>

      {/* Phase 2: Clear Explanation */}
      <section className="health-explanation">
        <div className="container health-explanation-grid">
          <div className="health-explanation-content">
            <p className="health-explanation-text">
              <strong>Health is simple when we are healthy, but becomes complicated when we try to be healthier.</strong> We may think health as the absence of disease, but in real life, health means different things to each of us. For a parent, it may mean children growing, learning, eating well, building friendships, and enjoying life. For professionals, health may mean a sharp mind, resilient body, clear decision-making, emotional control, and high performance without suddenly breaking down.
            </p>
            <p className="health-explanation-text">
              Training with Alan approaches health as something actively pursued. It is built through movement, strength, fitness, recovery, routine, trust, and a deeper respect for life. Personal training becomes more than exercise. It is a structured way to protect and develop the body and mind that supports everything else you care about.
            </p>
          </div>

        </div>
      </section>

      {/* Phase 3: Four Practical Pillars */}
      <section className="health-pillars">
        <div className="container">
          <h2 className="health-pillars-title">Our approach to Health</h2>
          <div className="health-grid">
            
            {/* Pillar 1 */}
            <div className="health-card">

              <div className="health-card-content">
                <h3 className="health-card-title">Routine and Habit</h3>
                <p className="health-card-text">
                  Health begins with rhythm. Before searching for the "perfect" exercise, the first step is creating a routine that fits your real life. Personal training provides structure, accountability, and momentum, especially when you are busy or unsure where to start.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="health-card">
              
              <div className="health-card-content">
                <h3 className="health-card-title">Stimulating and Refreshing</h3>
                <p className="health-card-text">
                  Effective training should not leave you constantly exhausted. Done properly, it should feel stimulating and refreshing. The key is to apply the right stimulus at the right dose, so you leave sharper, smarter, more energetic, and perform better.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="health-card">
              
              <div className="health-card-content">
                <h3 className="health-card-title">Exercise Capacity</h3>
                <p className="health-card-text">
                  Cardiorespiratory fitness is one of the strongest indicators of long-term health. Training with Alan helps you understand your current capacity, find the right mode, intensity, and volume, and gradually build a body that can go far, steady, and injury-free.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="health-card">
              
              <div className="health-card-content">
                <h3 className="health-card-title">Strength</h3>
                <p className="health-card-text">
                  Research tells us that strengthening activities protect us from all-cause mortality and major chronic diseases. But strength is more than a health statistic, it supports posture, joint health, confidence, injury prevention, and the physical and mental resilience needed for demanding lives. Strength is the armour we build before life tests it.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Phase 4: Book a Consultation CTA */}
      <CallToAction />
    </div>
  );
};
