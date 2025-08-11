import { useEffect, useRef } from 'react';

const Features = ({ visible }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (visible && sectionRef.current) {
      sectionRef.current.classList.remove('animate-hidden');
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, [visible]);

  const dressCodeDetails = [
    {
      title: 'Day 1 - Mil Jhul (Meet & Greet)',
      decorDetails: 'It has a very casual setting in a lawn.',
      dressCodeDetails: 'Anything fun, mix n match, indowestern, relaxed vibe',
      colors: 'bg-gradient-to-br from-green-100 to-green-200 text-green-900 border-green-300',
      suggestedColors: ['Green'] // Added suggested colors
    },
    {
      title: 'Day 2 - Sangeet (Evening)',
      decorDetails: 'Cocktail evening with music and dance performances.',
      dressCodeDetails: 'Semi-formal, cocktail attire, sparkly, shimmery or blingy, bright colors, traditional or western',
      colors: 'bg-gradient-to-br from-purple-100 to-purple-200 text-purple-900 border-purple-300',
      suggestedColors: ['Black', 'Maroon', 'Silver'] // Added suggested colors
    },
    {
      title: 'Day 3 - Wedding Ceremony',
      decorDetails: 'Traditional bicultural wedding ceremony with Telugu and Odiya rituals.',
      dressCodeDetails: 'Traditional Indian attire, sarees, lehengas, sherwanis, bright festive colors',
      colors: 'bg-gradient-to-br from-red-100 to-red-200 text-red-900 border-red-300',
      suggestedColors: ['Red', 'Gold', 'Orange'] // Added suggested colors
    },
    {
      title: 'General Guidelines',
      decorDetails: 'Nature resort setting with outdoor and indoor venues.',
      dressCodeDetails: 'Comfortable footwear recommended, light fabrics for weather, avoid all white',
      colors: 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-900 border-blue-300',
      suggestedColors: ['Any'] // Added suggested colors
    }
  ];

  return (
    <section id="features" className="section py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-8">Dress Code & Event Details</h2>
        
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            No matter what you do, just look cool and we have hired a cool photographer squad to capture those rare moments from everyone!
          </p>
          <p className="text-gray-600">
            Here's what to expect and what to wear for each celebration
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {dressCodeDetails.map((event, index) => (
            <div 
              key={index} 
              className={`${event.colors} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 transform hover:-translate-y-1`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-serif mb-3 font-bold">{event.title}</h3>
                <div className="w-16 h-1 bg-current opacity-50 rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6" />
                    </svg>
                    Setting & Decor
                  </h4>
                  <p className="text-sm opacity-90 leading-relaxed">{event.decorDetails}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Dress Code
                  </h4>
                  <p className="text-sm opacity-90 leading-relaxed">{event.dressCodeDetails}</p>
                  <div className="flex items-center mt-2">
                    {event.suggestedColors && event.suggestedColors.map((color, index) => (
                      <div key={index} className="flex items-center mr-3">
                        <span 
                          className="w-4 h-4 rounded-full mr-1" 
                          style={{ backgroundColor: color.toLowerCase() }}
                        ></span>
                        <span className="text-xs">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-bride_green/10 p-8 rounded-xl max-w-3xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-serif mb-4 text-primary">Photography Note</h3>
            <p className="text-gray-700 leading-relaxed">
              Our professional photography team will be capturing candid moments throughout all events. 
              Feel free to be yourselves and enjoy every moment - we'll make sure to preserve these memories beautifully!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;