import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Bios.css';

export const Bios: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bios-page">
      <div className="bios-container">
        <header className="bios-header">
          <h1 className="bios-h1">About Alan Wong</h1>
          <h3 className="bios-h3">MSc, BEd, CSCS, USAW, CPT</h3>
        </header>

        {/* Intro Section */}
        <section className="bios-section">
          <div className="bios-text">
            <h2 className="bios-h2">Clinical Reasoning meets Human Performance</h2>
            <p><strong style={{ color: '#0B132B' }}>Alan Wong</strong> is a <strong>strength and conditioning coach</strong>, <strong>educator</strong>, <strong>sport performance professional</strong>, and <strong>Doctor of Physiotherapy student</strong> based in Sydney, Australia. His work brings together more than 15 years of experience across health and fitness, university teaching, sport performance, clinical exercise, coach education, and large-scale public health-related sport projects.</p>
            <p>Originally from Hong Kong, Alan moved to Australia in 2025 to commence his <strong>Doctor of Physiotherapy</strong> studies at the University of Sydney. Alongside his DPT study, he continues to coach as a <strong>Personal Trainer</strong> at <strong>Fitness First Titanium Barangaroo</strong>, helping clients build healthier, stronger, and more capable lives through evidence-informed training.</p>
            <p>Alan’s professional background is uncommon because it spans multiple worlds: coaching athletes, teaching university students, designing sport education curricula, supporting clinical exercise programmes, advising sport organisations, and now training toward a future career in physiotherapy.</p>
          </div>
          <div className="bios-image-col">
            <div className="bios-photo-grid">
              <img src="/Picture2.jpg?v=1779683435035" alt="Alan Wong Coaching" className="bios-photo-img" />
              <img src="/669402914_10162897006154021_8910858062313522465_n.jpg" alt="Alan Wong Physiotherapy" className="bios-photo-img offset-image" />
              <img src="/2.jpeg" alt="Alan Wong Training" className="bios-photo-img img-bottom-focus" />
              <img src="/515440915_10161817225954021_4705122261009137400_n.jpg" alt="Alan Wong Weightlifting" className="bios-photo-img offset-image" />
            </div>
          </div>
        </section>

        {/* Coaching & Performance */}
        <section className="bios-section reverse">
          <div className="bios-text">
            <h2 className="bios-h2">Coaching & Performance</h2>
            <p>Alan’s coaching philosophy can be summarised into <strong>3S – Strong, Sharp, and Steady</strong>. His experience spans personal training, strength and conditioning, Olympic weightlifting, sport performance, and clinical exercise environments.</p>
            <p>During his time at The University of Hong Kong, Alan managed health, fitness, high performance, and exercise clinic services, working with a wide range of populations including professionals, executives, national athletes, students, and patients referred through exercise clinics. He oversaw technical operations across the High Performance Centre, Exercise Clinic, Fitness Centre, and Exercise Laboratory at HKU.</p>
            <p>Whether working with busy professionals, athletes, or clients returning to training, Alan aims to make each session purposeful to the client’s lifestyle and goals.</p>
          </div>
          <div className="bios-image-col">
            <div className="bios-photo-grid">
              <img src="/5.jpg?v=1779686439318" alt="Alan Wong Coaching Athletes" className="bios-photo-img" />
              <img src="/50.jpeg?v=1779686439318" alt="Alan Wong Group Training" className="bios-photo-img offset-image" />
              <img src="/strength.jfif" alt="Alan Wong Strength Training" className="bios-photo-img" style={{ objectPosition: '20% top' }} />
              <img src="/Picture50.jpg?v=1779686439319" alt="Alan Wong Exercise Lab" className="bios-photo-img offset-image" />
            </div>
          </div>
        </section>

        {/* Teaching & Education */}
        <section className="bios-section">
          <div className="bios-text">
            <h2 className="bios-h2">Teaching & Education</h2>
            <p>Alan has a strong background in higher education and curriculum development. Before moving to Australia, he served as Lecturer and later <strong>Senior Lecturer in Sport Management and Sport Performance</strong> at Hong Kong Metropolitan University.</p>
            <p>His teaching experience included undergraduate sports science and sports management programmes, MBA programmes, and university-wide electives. He also taught an elective titled Exercise is Medicine to Medical students, and led annual international learning tours with students to LaLiga Business School in Madrid, Spain (see pictures).</p>
            <p>Alan’s teaching career has been recognised through major university awards, including the <strong>President’s Award for Excellence in Teaching</strong> in 2022 and the <strong>President’s Award for Distinguished Achievement</strong> in 2023 at Hong Kong Metropolitan University.</p>
          </div>
          <div className="bios-image-col">
            <div className="bios-photo-grid">
              <img src="/MBBS.jpg" alt="Alan Wong Teaching MBBS Students" className="bios-photo-img" style={{ objectPosition: '80% top' }} />
              <img src="/31.jpg?v=1779686439318" alt="Alan Wong LaLiga Business School Tour" className="bios-photo-img offset-image" />
              <img src="/515440915_10161817225954021_4705122261009137400_n.jpg" alt="Alan Wong Weightlifting" className="bios-photo-img" />
              <img src="/32.jpg?v=1779686439318" alt="Alan Wong Students" className="bios-photo-img offset-image" />
            </div>
          </div>
        </section>

        {/* Advisory & Industry Leadership */}
        <section className="bios-section reverse">
          <div className="bios-text">
            <h2 className="bios-h2">Advisory & Industry Leadership</h2>
            <p>Alan has contributed to sport development, coach education, and organisational advisory work across Hong Kong’s sport sector. His advisory and leadership experience includes roles with:</p>
            <ul>
              <li><strong>Consultant (Sport Education)</strong> – Sports Federation & Olympic Committee of Hong Kong, China</li>
              <li><strong>Consultant (Coach Education)</strong> – Hong Kong Sports Institute</li>
              <li><strong>Executive Vice President</strong> – Innovative Sports Technology and Cultural Development Ltd.</li>
              <li><strong>Vice President</strong> – Cheerleading Federation of Hong Kong, China</li>
              <li><strong>Vice President</strong> – China Hong Kong Society of Obstacle Sports</li>
              <li><strong>Standing Committee Member</strong> – Flying Disc Federation of Hong Kong, China</li>
              <li><strong>Academic Advisor</strong> – HKU SPACE</li>
            </ul>
            <p>Alan’s work in these roles has often sat at the intersection of sport, education, governance, coach development, and system-level programme design. This gives him a broader perspective than traditional personal training alone. His coaching is informed not only by exercise science, but also by how organisations develop systems, how people learn, and how long-term participation can be supported.</p>
          </div>
          <div className="bios-image-col">
            <div className="bios-photo-grid">
              <img src="/55.jpg?v=1779686439319" alt="Alan Wong Advisory 1" className="bios-photo-img" />
              <img src="/56.jpg?v=1779686439318" alt="Alan Wong Advisory 2" className="bios-photo-img offset-image" />
              <img src="/57.jpg?v=1779686439318" alt="Alan Wong Advisory 3" className="bios-photo-img" style={{ objectPosition: '15% top' }} />
              <img src="/58.jpg?v=1779686439319" alt="Alan Wong Advisory 4" className="bios-photo-img offset-image" style={{ objectPosition: '62% center' }} />
            </div>
          </div>
        </section>

        {/* Research, Projects & Publications */}
        <section className="bios-section">
          <div className="bios-text">
            <h2 className="bios-h2">Research, Projects & Publications</h2>
            <p>Alan has contributed to research, consultancy, and large-scale applied projects across health, sport, and education. He currently serves as <strong>Course Developer</strong> with Hong Kong Metropolitan University and leads the sports section of a six-year <strong>HK$405 million funded initiative</strong> designed to enhance sports education opportunities for underprivileged primary school children. He coordinates strategic partnerships with stakeholders including SF&OC, EDB, NSAs, NGOs, schools, and coaching professionals.</p>
            <p>Alan has also contributed to projects including:</p>
            <ul>
              <li>HKJC Project MuSE sports education curriculum development</li>
              <li>Strategic review of coach education programmes in Hong Kong</li>
              <li>ACSM Exercise is Medicine on Campus initiatives</li>
              <li>Exercise interventions for diabetes prevention</li>
              <li>Elder robustness and frailty-related programmes</li>
              <li>Network Meta-analysis of drug repurposing for low back pain and knee OA</li>
              <li>PEDro rater training</li>
            </ul>
            <p>His publication record includes contribution to a Cell Metabolism study (<a href="https://doi.org/10.1016/j.cmet.2019.11.001" target="_blank" rel="noopener noreferrer">Link</a>) on exercise and diabetes prevention, as well as a strategic review of coach education programmes in Hong Kong.</p>
          </div>
          <div className="bios-image-col">
            <div className="bios-photo-grid">
              <img src="/61.jpg?v=3" alt="Alan Wong Research 1" className="bios-photo-img" style={{ objectPosition: '20% top' }} />
              <img src="/62.png" alt="Alan Wong Research 2" className="bios-photo-img offset-image" />
              <img src="/63.jpeg" alt="Alan Wong Research 3" className="bios-photo-img" />
              <img src="/64.jpg?v=1779686439319" alt="Alan Wong Research 4" className="bios-photo-img offset-image" />
            </div>
          </div>
        </section>

        {/* Physiotherapy Training */}
        <section className="bios-section reverse">
          <div className="bios-text">
            <h2 className="bios-h2">Physiotherapy Training</h2>
            <p>Alan is currently completing the <strong>Doctor of Physiotherapy</strong> programme at the <strong>University of Sydney</strong>. This training has deepened his understanding of clinical reasoning, rehabilitation, movement assessment, health systems, and patient-centred care.</p>
            <p>In 2026, Alan completed a neurological rehabilitation placement at Prince of Wales Hospital in Sydney. This experience strengthened his interest in rehabilitation, functional recovery, and the role of movement in helping people regain confidence and independence.</p>
            <p>Alan’s long-term aspiration is to integrate physiotherapy, strength and conditioning, education, and sport performance into a coherent professional practice. His goal is to help people train safely, and build long-term health before problems become serious.</p>
          </div>
          <div className="bios-image-col">
            <div className="bios-photo-grid">
              <img src="/669402914_10162897006154021_8910858062313522465_n.jpg" alt="Alan Wong Physiotherapy Training" className="bios-photo-img" />
              <img src="/81.jpg" alt="Alan Wong Doctor of Physiotherapy" className="bios-photo-img offset-image" />
            </div>
          </div>
        </section>

        {/* Qualifications and Experience */}
        <section className="bios-lists-section">
          <div className="bios-list-block">
            <h4 className="bios-list-title">Qualifications</h4>
            <ul className="bios-ul">
              <li><strong>MSc Strength and Conditioning</strong> (Distinction), University of Salford, UK</li>
              <li><strong>BEd (Hons) Physical Education</strong>, Education University of Hong Kong</li>
              <li>International Strength and Conditioning Specialist, NSCA</li>
              <li>Certified Weightlifting Coach, USA Weightlifting</li>
              <li>International Certified Personal Trainer, NASM</li>
              <li>Certified Sports Trainer, Australia Sports Medicine</li>
            </ul>
          </div>
          <div className="bios-list-block">
            <h4 className="bios-list-title">Professional Experience</h4>
            <ul className="bios-ul">
              <li><strong>Doctor of Physiotherapy Candidate</strong>, University of Sydney, 2025-2027</li>
              <li><strong>Senior Lecturer (Sports)</strong>, Hong Kong Metropolitan University, 2022-2025</li>
              <li>High Performance Manager, The University of Hong Kong, 2020-2022</li>
              <li>Health and Fitness Manager, The University of Hong Kong, 2015-2020</li>
              <li>Personal Trainer, Fitness First Hong Kong, 2013-2014</li>
              <li>Volleyball Coach and Personal Trainer, 2009-2013</li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bios-cta-section">
          <p className="bios-cta-text">If Alan’s background and approach resonate with you, you are welcome to book a consultation or get in touch for collaboration.</p>
          <div className="bios-cta-buttons">
            <a href="https://calendar.app.google/ntmZjrDmT3ZZ2b549" target="_blank" rel="noopener noreferrer" className="bios-btn primary">BOOK A CONSULTATION</a>
            <Link to="/contact" className="bios-btn ghost" onClick={() => window.scrollTo(0, 0)}>CONTACT FOR COLLABORATION</Link>
          </div>
        </section>
      </div>
    </div>
  );
};
