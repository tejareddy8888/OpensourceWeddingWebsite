import { useEffect, useRef } from 'react';

const Intro = ({ visible }) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (visible && sectionRef.current) {
      sectionRef.current.classList.remove('animate-hidden');
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, [visible]);

  return (
        <section id="intro" className="section bg-secondary min-h-screen flex items-center relative overflow-hidden" ref={sectionRef}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-secondary">
        <img
          src="/huge.png"
          alt="Wedding Background"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10 animate-hidden animate-item">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 text-gray-800">You're Invited!</h1>
        <p className="text-xl md:text-2xl mb-2 text-gray-700">Join us in celebrating the wedding of</p>
        <p className="text-3xl md:text-4xl font-serif mb-6 text-primary">Susnata &amp; Saiteja</p>
        <p className="text-lg mb-4 text-gray-700">Wedding Date: November 26, 2025</p>
        <p className="text-lg mb-12 text-gray-700">A celebration amidst nature awaits you.</p>
        <a href="#rsvp" className="btn btn-primary text-lg px-8 py-3">RSVP</a>
      </div>
    </section>
  );
};

export default Intro;