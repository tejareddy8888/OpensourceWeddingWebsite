import { useState, useEffect } from 'react';
import Travel from './components/Travel';
import Header from './components/Header';
import Footer from './components/Footer';
import Countdown from './components/Countdown';
import RSVP from './components/RSVP';
import Events from './components/Events';
import Features from './components/Features';
import Intro from './components/Intro';

function App() {
  // State for animations
  const [elementsVisible, setElementsVisible] = useState({});

  // Animation effect
  useEffect(() => {
    const handleScroll = () => {
      // Implementation of scroll-based animations
      const animatedElements = document.querySelectorAll('.animate-item');

      animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
          rect.bottom >= 0
        );

        if (isVisible) {
          const id = el.closest('section')?.id;
          if (id) {
            setElementsVisible(prev => ({ ...prev, [id]: true }));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Wedding date for countdown - update this to your actual wedding date
  const weddingDate = "2025-11-26T10:45:00"; // November 26, 2025 at 10:45 AM

  return (
    <div className="App">
      <Header />
      <main>
        <Intro visible={elementsVisible['intro']} />
        <Countdown weddingDate={weddingDate} visible={elementsVisible['countdown']} />
        <Events visible={elementsVisible['events']} />
        <Travel visible={elementsVisible['travel']} />
        <Features visible={elementsVisible['features']} />
        <RSVP visible={elementsVisible['rsvp']} />
      </main>
      <Footer />
    </div>
  );
}

export default App;