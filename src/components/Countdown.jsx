import { useState, useEffect, useRef } from 'react';

const Countdown = ({ weddingDate, visible }) => {
  const sectionRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    if (visible && sectionRef.current) {
      sectionRef.current.classList.remove('animate-hidden');
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, [visible]);

  useEffect(() => {
    const targetDate = new Date(weddingDate).getTime();
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        // Wedding day has passed
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };
    
    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Cleanup
    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section id="countdown" className="section py-20 bg-white animate-hidden animate-item" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">Countdown to Our Big Day</h2>
        
        <div className="bg-primary bg-opacity-10 py-12 px-4 rounded-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-1">{timeLeft.days}</div>
              <div className="text-gray-600">Days</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-1">{timeLeft.hours}</div>
              <div className="text-gray-600">Hours</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-1">{timeLeft.minutes}</div>
              <div className="text-gray-600">Minutes</div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-1">{timeLeft.seconds}</div>
              <div className="text-gray-600">Seconds</div>
            </div>
          </div>
          
          {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && (
            <div className="text-center mt-8 text-xl font-medium text-primary">
              Our wedding day has arrived! We can't wait to celebrate with you!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Countdown;