import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, Health, Fitness, SportPerformance, Executive, Research, Teaching, OlympicWeightlifting, InjuryPrevention, Bios } from './pages';
import './App.css';

// Placeholder Pages
const Contact = () => <div className="container section"><h1>Contact</h1></div>;

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bios" element={<Bios />} />
            <Route path="/health" element={<Health />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/executive" element={<Executive />} />
            <Route path="/research" element={<Research />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/sport-performance" element={<SportPerformance />} />
            <Route path="/olympic-weightlifting" element={<OlympicWeightlifting />} />
            <Route path="/injury-prevention" element={<InjuryPrevention />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
