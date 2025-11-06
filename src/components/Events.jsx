import { useEffect, useRef } from 'react';

const Events = ({ visible }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (visible && sectionRef.current) {
      sectionRef.current.classList.remove('animate-hidden');
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, [visible]);

const events = [
  {
    title: "Mil Jhul (Meet & Greet)",
    date: "25 November 2025",
    time: "1:00 PM - 4:00 PM",
    location: "Chandaka Nature Resort",
    locationUrl: "https://maps.google.com/?q=Chandaka+Nature+Resort+Bhubaneswar+India",
    address: "Kantabada_Deras Dam, Barapita, Bhubaneswar, Odisha 751024, India",
    description: "A warm welcome with fun games, friendly conversations, and lots of laughter as families meet!",
    dressCode: "Casual traditional attire — comfortable, colourful Indian wear",
    meals: ["Lunch", "Snacks"]
  },
  {
    title: "Sangeet",
    date: "25 November 2025",
    time: "6:30 PM - 11:30 PM",
    location: "Chandaka Nature Resort",
    locationUrl: "https://maps.google.com/?q=Chandaka+Nature+Resort+Bhubaneswar+India",
    address: "Kantabada_Deras Dam, Barapita, Bhubaneswar, Odisha 751024, India",
    description: "Time to shine! Music, dance performances, and celebration with signature cocktails flowing.",
    dressCode: "Western or Indo-western outfits — let's have fun, music and dancing!",
    meals: ["Dinner", "Cocktails"]
  },
  {
    title: "Wedding Ceremony",
    date: "26 November 2025",
    time: "8:30 AM - 12:30 PM",
    location: "Chandaka Nature Resort",
    locationUrl: "https://maps.google.com/?q=Chandaka+Nature+Resort+Bhubaneswar+India",
    address: "Kantabada_Deras Dam, Barapita, Bhubaneswar, Odisha 751024, India",
    description: "Traditional Telugu and Odiya rituals celebrating our union with sacred mantras and blessings.",
    dressCode: "Formal traditional Indian attire — sarees, lehengas, sherwanis, kurtas",
    meals: ["Breakfast", "Lunch"]
  }
];


  return (
    <section id="events" className="section py-20 bg-white animate-hidden animate-item" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-8">Event Details</h2>
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20 cursor-pointer group"
              onClick={() => {
                const startDate = '20251125T100000Z'; // November 25, 2025 10:00 AM UTC
                const endDate = '20251126T180000Z';   // November 26, 2025 6:00 PM UTC
                const title = encodeURIComponent('Susnata & Saiteja Wedding');
                const details = encodeURIComponent('Join us for our 2-day wedding celebration at Chandaka Nature Resort, Bhubaneswar');
                const location = encodeURIComponent('Chandaka Nature Resort, Bhubaneswar, India');

                const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
                window.open(googleCalendarUrl, '_blank');
              }}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-primary mb-3">When</h3>
                <p className="text-lg font-medium text-gray-800 mb-1 group-hover:text-primary transition-colors duration-300">25 - 26 November 2025</p>
                <div className="mt-3 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add to Calendar
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-bride_green/10 to-bride_green/5 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-bride_green/20 cursor-pointer group"
              onClick={() => window.open('https://maps.google.com/?q=Chandaka+Nature+Resort+Bhubaneswar+India', '_blank')}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-bride_green rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-bride_green mb-3">Where</h3>
                <p className="text-lg font-medium text-gray-800 mb-1 group-hover:text-bride_green transition-colors duration-300">Chandaka Nature Resort</p>
                <p className="text-gray-600">Bhubaneswar, India</p>
                <div className="mt-3 text-sm text-bride_green opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View on Map
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-groom_blue/10 to-groom_blue/5 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-groom_blue/20">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-groom_blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-groom_blue mb-3">Duration</h3>
                <p className="text-lg font-medium text-gray-800 mb-1">2 Days</p>
                <p className="text-gray-600">of festivities</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-serif text-center mb-8">Event Schedule</h3>

        <div className="bg-primary bg-opacity-10 py-12 px-4 rounded-lg max-w-4xl mx-auto">
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-serif mb-1 text-primary">{event.title}</h3>
                    <p className="text-sm text-gray-500 font-medium">{event.date}</p>
                  </div>
                  <span className="text-lg font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-center mt-2 md:mt-0">
                    {event.time}
                  </span>
                </div>

                {/* Meal Tags */}
                {event.meals && event.meals.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.meals.map((meal, mealIndex) => (
                      <span
                        key={mealIndex}
                        className={`text-xs px-3 py-1 rounded-full font-medium ${meal === 'Breakfast' ? 'bg-yellow-100 text-yellow-800' :
                            meal === 'Lunch' ? 'bg-green-100 text-green-800' :
                              meal === 'Dinner' ? 'bg-blue-100 text-blue-800' :
                                meal === 'Drinks' || meal === 'Cocktails' ? 'bg-purple-100 text-purple-800' :
                                  'bg-gray-100 text-gray-800'
                          }`}
                      >
                        🍽️ {meal}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mb-4">
                  {event.locationUrl ? (
                    <button
                      onClick={() => window.open(event.locationUrl, '_blank')}
                      className="font-medium text-bride_green hover:text-bride_green/80 transition-colors duration-300 mb-1 flex items-center group"
                    >
                      {event.location}
                      <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  ) : (
                    <p className="font-medium text-gray-800 mb-1">{event.location}</p>
                  )}
                  {event.address && (
                    <p className="text-gray-600 text-sm">{event.address}</p>
                  )}
                </div>

                <p className="text-gray-700 mb-4">{event.description}</p>

                {/* Dress Code */}
                {event.dressCode && (
                  <div className="bg-gray-50 p-3 rounded-md mb-4">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Dress Code:</span> {event.dressCode}
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      // Generate calendar event based on event data
                      const eventDate = index === 0 ? '20251124' : index === 1 ? '20251125' : index === 2 ? '20251125' : '20251126';
                      const startTime = event.time.split(' - ')[0];
                      const endTime = event.time.split(' - ')[1];

                      // Convert time to 24hr format for calendar
                      const convertTo24Hour = (time) => {
                        const [timePart, period] = time.split(' ');
                        let [hours, minutes] = timePart.split(':');
                        hours = parseInt(hours);
                        if (period === 'PM' && hours !== 12) hours += 12;
                        if (period === 'AM' && hours === 12) hours = 0;
                        return `${hours.toString().padStart(2, '0')}${minutes}00`;
                      };

                      const startDateTime = `${eventDate}T${convertTo24Hour(startTime)}Z`;
                      const endDateTime = `${eventDate}T${convertTo24Hour(endTime)}Z`;

                      const title = encodeURIComponent(`${event.title} - Susnata & Saiteja Wedding`);
                      const details = encodeURIComponent(event.description);
                      const location = encodeURIComponent(`${event.location}${event.address ? ', ' + event.address : ''}`);

                      const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDateTime}/${endDateTime}&details=${details}&location=${location}`;
                      window.open(googleCalendarUrl, '_blank');
                    }}
                    className="text-primary flex items-center hover:text-primary-dark transition-colors duration-300 bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-md"
                  >
                    Add to Calendar
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>

                  {event.locationUrl && (
                    <button
                      onClick={() => window.open(event.locationUrl, '_blank')}
                      className="text-bride_green flex items-center hover:text-bride_green/80 transition-colors duration-300 bg-bride_green/10 hover:bg-bride_green/20 px-4 py-2 rounded-md"
                    >
                      View on Map
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;