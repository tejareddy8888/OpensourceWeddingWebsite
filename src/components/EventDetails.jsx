import { useEffect, useRef } from 'react';

const EventDetails = ({ visible }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (visible && sectionRef.current) {
      sectionRef.current.classList.remove('animate-hidden');
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, [visible]);

  return (
    <section id="features" className="section py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-8">Get Ready to Celebrate! 🎉</h2>

        <div className="text-center mb-12 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Here's a quick video to give you a feel for our wedding celebrations and what to expect.
          </p>
          
          <div className="mb-8">
            <a 
              href="https://www.youtube.com/watch?v=bBg4XoyvHS8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch Wedding Inspiration Video
            </a>
          </div>

          <p className="text-gray-700 mb-4">
            Can't wait to celebrate with you all — it's going to be amazing! 💃🕺
          </p>
          <p className="text-gray-600 italic">
            Our professional photography team will capture all the beautiful moments, so just relax and enjoy!
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;