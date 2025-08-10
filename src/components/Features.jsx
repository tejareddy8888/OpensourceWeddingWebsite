import { useEffect, useRef } from 'react';

const Features = ({ visible }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (visible && sectionRef.current) {
      sectionRef.current.classList.remove('animate-hidden');
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, [visible]);

  const activities = [
    {
      title: 'Nature Walks',
      description: 'Explore scenic hiking trails and enjoy the surrounding nature.'
    },
    {
      title: 'Lake/Water Activities',
      description: 'Kayaking and boat rides are available on the nearby lake.'
    },
    {
      title: 'Spa & Relaxation',
      description: 'Unwind with resort spa services and relaxation options.'
    },
    {
      title: 'Local Attractions',
      description: 'Visit local landmarks and attractions during your stay.'
    },
    {
      title: 'Guided Tours',
      description: 'Guided tours available with prior reservation and schedules.'
    }
  ];

  return (
    <section id="features" className="section py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Things to Do</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {activities.map((act, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif mb-2">{act.title}</h3>
              <p>{act.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;