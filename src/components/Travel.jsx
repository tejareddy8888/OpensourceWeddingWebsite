import { useEffect, useRef } from 'react';

const Travel = ({ visible }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (visible && sectionRef.current) {
      sectionRef.current.classList.remove('animate-hidden');
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, [visible]);

  const accommodations_providedByUs = [
    {
      name: "Chandaka Nature Resort",
      description: "The main wedding venue - A beautiful nature resort where all the main ceremonies will take place including Mil Jhul, Sangeet, and Wedding Ceremony",
      address: "Kantabada_Deras Dam, Barapita, Bhubaneswar, Odisha 751024, India",
      locationUrl: "https://maps.google.com/?q=Chandaka+Nature+Resort+Bhubaneswar+India",
      checkIn: "November 25, 2025",
      checkOut: "November 27, 2025",
      status: "Booked"
    },
    {
      name: "Deras Nature Camp",
      description: "Additional eco-friendly accommodation near the wedding venue - Perfect for guests who want to stay close to Chandaka Wildlife Sanctuary",
      address: "Deras Dam,Mendhasal, Bhubaneswar, Odisha 752054, India",
      locationUrl: "https://maps.google.com/?q=Deras+Nature+Camp+Bhubaneswar+Odisha",
      checkIn: "November 25, 2025",
      checkOut: "November 27, 2025",
      status: "Booked"
    },
    {
      name: "Svanir Wilderness Ecostay",
      description: "Eco-friendly wilderness accommodation offering a unique nature experience with comfortable amenities. Perfect for guests who want to immerse themselves in the natural beauty of the Chandaka area.",
      address: "Svanir Wilderness Ecostay, Near Chandaka Wildlife Sanctuary, Bhubaneswar, Odisha, India",
      locationUrl: "https://maps.google.com/?q=Svanir+Wilderness+Ecostay+Chandaka+Bhubaneswar+Odisha",
      checkIn: "November 25, 2025",
      checkOut: "November 27, 2025",
      status: "Booked"
    }
  ];
  const otherAccommodation_recommendations = [
    {
      name: "IRA By Orchid Bhubaneswar",
      description: "Luxury hotel in the heart of Bhubaneswar with modern amenities, excellent dining options, and professional service. Approximately 20 km from the wedding venue.",
      address: "Plot No. 1, Jaydev Vihar, Bhubaneswar, Odisha 751013, India",
      locationUrl: "https://maps.google.com/?q=IRA+By+Orchid+Bhubaneswar+Jaydev+Vihar",
      status: "Available for booking"
    },
    {
      name: "Ginger Bhubaneswar",
      description: "Contemporary business hotel with comfortable rooms, fitness center, and convenient location near major attractions. About 18 km from the wedding venue with easy road connectivity.",
      address: "Opposite Nalco Headquarters, Jayadev Vihar, Nandankanan Rd, Nayapalli, Bhubaneswar, Odisha 751013, India",
      locationUrl: "https://maps.google.com/?q=Ginger+Bhubaneswar+IRC+Village",
      status: "Available for booking"
    },
    {
      name: "Welcome ITC Hotel Bhubaneswar",
      description: "Premium business hotel offering spacious rooms, multiple dining options, and excellent connectivity to both airport and railway station. Located 22 km from the wedding venue.",
      address: "D/1, Dumduma, Bhubaneswar, Odisha 751019, India",
      locationUrl: "https://maps.google.com/?q=Welcome+ITC+Hotel+Bhubaneswar+Jaydev+Vihar",
      status: "Available for booking"
    },
    {
      name: "Mayfair Lagoon",
      description: "Luxury heritage hotel featuring beautiful gardens, spa facilities, swimming pool, and fine dining restaurants. One of Bhubaneswar's most prestigious hotels, located 19 km from the venue.",
      address: "8-B, Jaydev Vihar, Bhubaneswar, Odisha 751013, India",
      locationUrl: "https://maps.google.com/?q=Mayfair+Lagoon+Bhubaneswar+Jaydev+Vihar",
      status: "Available for booking"
    }
  ];

  return (
    <section id="travel" className="section py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">How to Reach &amp; Where to Stay</h2>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-serif mb-4">How to Reach</h3>
            <div className="bg-secondary p-6 rounded-lg shadow-md space-y-6">
              <div>
                <h4 className="text-xl font-medium mb-2">By Air</h4>
                <p>Biju Patnaik International Airport (BBI) - 25 km from venue. Direct flights available from major Indian cities.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">By Train</h4>
                <p>Bhubaneswar Railway Station - 20 km from venue. Well connected to major cities across India.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">By Road</h4>
                <p>Chandaka Nature Resort is accessible via NH16. GPS coordinates available for easy navigation.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Airport Transfers</h4>
                <p>We have reserved logistics provider. With prior information, we can reserve the time slots for transfers To/Fro.</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-serif mb-4">Accommodations Provided by Us</h3>
            <p className="text-gray-600 mb-6">These accommodations are arranged by us for our guests. Please confirm your attendance for booking arrangements.</p>
            {accommodations_providedByUs.map((acc, index) => (
              <div key={index} className="bg-secondary p-6 rounded-lg shadow-md mb-6 border-l-4 border-primary">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-medium">{acc.name}</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${acc.status === 'Booked' ? 'bg-green-100 text-green-800' :
                    acc.status === 'Unconfirmed' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                    {acc.status}
                  </span>
                </div>
                <p className="mb-3">{acc.description}</p>
                <div className="mb-4">
                  <button
                    onClick={() => window.open(acc.locationUrl, '_blank')}
                    className="font-medium text-bride_green hover:text-bride_green/80 transition-colors duration-300 mb-1 flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    View on Map
                    <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                  <p className="text-gray-600 text-sm">{acc.address}</p>
                </div>
                <p className="mb-2"><strong>Check-In:</strong> {acc.checkIn}</p>
                <p className="mb-2"><strong>Check-Out:</strong> {acc.checkOut}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-4">Other Accommodation Recommendations</h3>
            <p className="text-gray-600">If you prefer to book your own accommodation, here are some recommended hotels.</p>
            <p className="text-red-600 mb-6">Unfortunately, there are not many hotel close by the venue (we have logistics, so no worries :P, we got you covered)</p>
            {otherAccommodation_recommendations.map((acc, index) => (
              <div key={index} className="bg-secondary p-6 rounded-lg shadow-md mb-6 border-l-4 border-bride_green">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-medium">{acc.name}</h4>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {acc.status}
                  </span>
                </div>
                <p className="mb-3">{acc.description}</p>
                <div className="mb-4">
                  <button
                    onClick={() => window.open(acc.locationUrl, '_blank')}
                    className="font-medium text-bride_green hover:text-bride_green/80 transition-colors duration-300 mb-1 flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    View on Map
                    <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                  <p className="text-gray-600 text-sm">{acc.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;