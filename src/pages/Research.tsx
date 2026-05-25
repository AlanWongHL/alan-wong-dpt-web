import React, { useEffect } from 'react';
import { CallToAction } from '../components';
import './Health.css';

export const Research: React.FC = () => {
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
            CLINICAL<br />
            RESEARCH
          </h1>
        </div>
      </section>

      {/* Phase 2: Clear Explanation */}
      <section className="health-explanation">
        <div className="container health-explanation-grid">
          <div className="health-explanation-content">
            <p className="health-explanation-text">
              <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong> Nullam in venenatis enim. Sed rutrum aliquet tellus, eget lacinia mi luctus sit amet. Curabitur vel risus at sapien ullamcorper volutpat.
            </p>
            <p className="health-explanation-text">
              Suspendisse potenti. Duis dictum volutpat ex, et dapibus dolor ullamcorper vel. Phasellus vehicula condimentum elit, at feugiat justo egestas sit amet. Mauris tincidunt felis vitae nisl efficitur, sed sagittis odio vestibulum.
            </p>
          </div>
          <div className="health-explanation-image">
            <img src="/Picture2.jpg?v=1779683435037" alt="Research Overview" className="explanation-img" />
          </div>
        </div>
      </section>

      {/* Phase 3: Four Practical Pillars */}
      <section className="health-pillars">
        <div className="container">
          <h2 className="health-pillars-title">Our approach to Research</h2>
          <div className="health-grid">
            
            {/* Pillar 1 */}
            <div className="health-card">
              <div className="health-card-image">
                <img src="/DSC05779.JPG" alt="Alan Wong coaching TRX" className="pillar-img" />
              </div>
              <div className="health-card-content">
                <h3 className="health-card-title">Pillar 1 Placeholder</h3>
                <p className="health-card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in turpis vel justo feugiat tempus. Pellentesque eleifend ligula in cursus luctus. Etiam dapibus diam ut ligula tempor, sed viverra diam dictum.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="health-card">
              <div className="health-card-image">
                <img src="/Picture50.jpg" alt="Stimulating and Refreshing" className="pillar-img" />
              </div>
              <div className="health-card-content">
                <h3 className="health-card-title">Pillar 2 Placeholder</h3>
                <p className="health-card-text">
                  Proin malesuada tortor ac dolor egestas, non tempus dolor commodo. Ut nec lorem quis sapien pharetra cursus vitae ac tortor. Nullam consequat ligula a sem facilisis bibendum.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="health-card">
              <div className="health-card-image">
                <img src="/20161121_0025.jpg" alt="Exercise Capacity" className="pillar-img" />
              </div>
              <div className="health-card-content">
                <h3 className="health-card-title">Pillar 3 Placeholder</h3>
                <p className="health-card-text">
                  Aliquam erat volutpat. Nam pulvinar ligula ut est iaculis, vitae ultrices est bibendum. Sed at convallis ex, eget consequat lacus. Fusce malesuada sapien et velit rhoncus, eu semper sapien semper.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="health-card">
              <div className="health-card-image">
                <img src="/5.jpg" alt="Strength" className="pillar-img" />
              </div>
              <div className="health-card-content">
                <h3 className="health-card-title">Pillar 4 Placeholder</h3>
                <p className="health-card-text">
                  Donec laoreet, felis eget pellentesque ullamcorper, ligula sapien efficitur nisi, at ullamcorper massa diam et metus. Vestibulum sed sem sagittis, suscipit urna non, dignissim tellus.
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
