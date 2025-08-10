import { useEffect, useRef } from 'react';

const Travel = ({ visible }) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (visible && sectionRef.current) {
      sectionRef.current.classList.remove('animate-hidden');
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, [visible]);

  const accommodations = [
    {
      name: "The Plaza Hotel",
      description: "Our wedding venue with special rates for guests.",
      address: "768 5th Ave, New York, NY 10019",
      phone: "(212) 759-3000",
      website: "https://www.theplazany.com/",
      discount: "Use code WEDDING2023 for 15% off"
    },
    {
      name: "The Ritz-Carlton",
      description: "Luxury hotel within walking distance to the venue.",
      address: "50 Central Park S, New York, NY 10019",
      phone: "(212) 308-9100",
      website: "https://www.ritzcarlton.com/",
      discount: "No special rate available"
    },
    {
      name: "Park Hyatt New York",
      description: "Modern luxury hotel near the venue.",
      address: "153 W 57th St, New York, NY 10019",
      phone: "(646) 774-1234",
      website: "https://www.hyatt.com/",
      discount: "Use code Susnata&Saiteja for 10% off"
    }
  ];

  return (
    <section id="travel" className="section py-20 bg-secondary" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">How to Reach &amp; Where to Stay</h2>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-serif mb-4">How to Reach</h3>
            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <div>
                <h4 className="text-xl font-medium mb-2">By Air</h4>
                <p>JFK International Airport (18 miles), LaGuardia Airport (9 miles), Newark Liberty International Airport (25 miles)</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">By Train</h4>
                <p>Nearest Station: Grand Central Terminal – approximately 15 minutes by taxi.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">By Road</h4>
                <p>Driving directions available via GPS to St. Patrick's Cathedral, New York.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Resort Transfers</h4>
                <p>Shuttle service from JFK available with prior reservation.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-4">Where to Stay</h3>
            {accommodations.map((acc, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-medium mb-3">{acc.name}</h4>
                <p className="mb-2">{acc.description}</p>
                <p className="mb-2"><strong>Address:</strong> {acc.address}</p>
                <p className="mb-2"><strong>Phone:</strong> {acc.phone}</p>
                <p className="mb-2"><strong>Website:</strong> <a href={acc.website} target="_blank" rel="noopener noreferrer">{acc.website}</a></p>
                <p><strong>Discount:</strong> {acc.discount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;