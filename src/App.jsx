import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Events from './components/Events';
import Intro from './components/Intro';
import RSVP from './components/RSVP';
import Travel from './components/Travel';
import EventDetails from './components/EventDetails';

// Import individual blog components
import PuriTemple from './components/Blogs/PuriTemple';
import ChilikaLake from './components/Blogs/ChilakaLake';
import KonarkSunTemple from './components/Blogs/KonarkSunTemple';
import LingarajTemple from './components/Blogs/LingarrajTemple';
import UdayagiriKhandagiri from './components/Blogs/UdayagiriKhandagiri';
import NandankananZoo from './components/Blogs/NandankananZoo';
import ChandakaDampara from './components/Blogs/ChandakaDampara';
import KalaBhoomiMuseum from './components/Blogs/KalaBhoomiMuseum';
import OdishaStateMuseum from './components/Blogs/OdishaStateMuseum';
import PuriBeach from './components/Blogs/PuriBeach';
import Bhitarkanika from './components/Blogs/Bhitarkanika';

// Main page component
const MainPage = () => {
  const [elementsVisible, setElementsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Intro visible={elementsVisible['intro']} />
        <Events visible={elementsVisible['events']} />
        <RSVP visible={elementsVisible['rsvp']} />
        <Travel visible={elementsVisible['travel']} />
        <EventDetails visible={elementsVisible['features']} />
        <Blog visible={elementsVisible['travelblog']} />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main wedding website */}
          <Route path="/" element={<MainPage />} />

          {/* Individual blog routes */}
          <Route path="/blogs/puri-temple" element={<PuriTemple />} />
          <Route path="/blogs/puri-beach" element={<PuriBeach />} />
          <Route path="/blogs/chilika-lake" element={<ChilikaLake />} />
          <Route path="/blogs/konark-sun-temple" element={<KonarkSunTemple />} />
          <Route path="/blogs/lingaraj-temple" element={<LingarajTemple />} />
          <Route path="/blogs/udayagiri-khandagiri" element={<UdayagiriKhandagiri />} />
          <Route path="/blogs/nandankanan-zoo" element={<NandankananZoo />} />
          <Route path="/blogs/chandaka-dampara" element={<ChandakaDampara />} />
          <Route path="/blogs/kala-bhoomi-museum" element={<KalaBhoomiMuseum />} />
          <Route path="/blogs/odisha-state-museum" element={<OdishaStateMuseum />} />
          <Route path="/blogs/bhitarkanika" element={<Bhitarkanika />} />

          {/* Catch all route - redirect to home */}
          <Route path="*" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;