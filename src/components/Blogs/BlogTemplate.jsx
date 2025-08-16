import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogTemplate = ({ blogData }) => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Add this new function after the existing handleBackClick function
  const handleHomeClick = () => {
    navigate('/');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle case where blogData is not provided
  if (!blogData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-gray-800 mb-4">Blog post not found</h1>
          <button
            onClick={() => navigate('/')}
            className="btn btn-primary"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const {
    title,
    subtitle,
    category,
    author,
    estimatedTime,
    distanceFromVenue,
    heroImage,
    content = [],
    tips = [],
    nearbyAttractions,
    transportation = [],
    bestTimeToVisit,
    activities = []
  } = blogData;

  const handleBackClick = () => {
    navigate('/');
    // The scroll will happen when the page loads and the hash is processed
    setTimeout(() => {
      const element = document.getElementById('travelblog');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white" ref={sectionRef}>
      {/* Header with Navigation */}
      <div className={`bg-gradient-to-r ${category?.gradient || 'from-primary/10 to-bride_green/10'} py-16`}>
        {/* Top Navigation Bar */}
        <div className="container mx-auto px-4 mb-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/WL.png"
                alt="Susnata & Saiteja Wedding Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleBackClick}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
              </button>

              <button
                onClick={handleHomeClick}
                className="inline-flex items-center px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors duration-200 rounded-lg"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {category && (
              <span className={`text-sm ${category.badgeStyle || 'bg-primary/20 text-primary'} px-3 py-1 rounded-full mb-4 inline-block`}>
                {category.name}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gray-800">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-600 mb-6">
                {subtitle}
              </p>
            )}
            <div className="flex items-center justify-center text-sm text-gray-500 space-x-4 flex-wrap">
              {author && <span>By {author}</span>}
              {author && estimatedTime && <span className="hidden sm:inline">•</span>}
              {estimatedTime && <span>Estimated Time: {estimatedTime}</span>}
              {estimatedTime && distanceFromVenue && <span className="hidden sm:inline">•</span>}
              {distanceFromVenue && <span>Distance from venue: {distanceFromVenue}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          {heroImage && (
            <div className="mb-12">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zODQgMjAwSDQxNlYyMzJIMzg0VjIwMFoiIGZpbGw9IiM5Q0E0QUYiLz4KPC9zdmc+';
                }}
              />
            </div>
          )}

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            {/* Main Content Sections */}
            {content.length > 0 && content.map((section, index) => (
              <div key={index} className="mb-8">
                {section.heading && <h2>{section.heading}</h2>}
                {section.description && <p>{section.description}</p>}

                {section.highlights && section.highlights.length > 0 && (
                  <ul>
                    {section.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <strong>{highlight.title}:</strong> {highlight.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Best Time to Visit */}
            {bestTimeToVisit && (
              <div className="mb-8">
                <h3>Best Time to Visit</h3>
                <p>{bestTimeToVisit}</p>
              </div>
            )}

            {/* Transportation */}
            {transportation.length > 0 && (
              <div className="bg-gray-50 p-6 rounded-lg my-6">
                <h4 className="text-lg font-semibold mb-3">How to Reach from Wedding Venue:</h4>
                <ul className="space-y-2">
                  {transportation.map((option, index) => (
                    <li key={index}>
                      <strong>{option.mode}:</strong> {option.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Activities */}
            {activities.length > 0 && (
              <div className="bg-blue-50 p-6 rounded-lg my-6">
                <h4 className="text-lg font-semibold mb-3">Things to Do:</h4>
                <ul className="space-y-2">
                  {activities.map((activity, index) => (
                    <li key={index}>
                      <strong>{activity.name}:</strong> {activity.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tips */}
            {tips.length > 0 && (
              <div className="mb-8">
                <h3>Tips for Visitors</h3>
                <ul>
                  {tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Nearby Attractions */}
            {nearbyAttractions && (
              <div className="mb-8">
                <h3>Nearby Attractions</h3>
                <p>{nearbyAttractions}</p>
              </div>
            )}
          </article>


          {/* Also add a Home button to the bottom navigation section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <button
                onClick={handleBackClick}
                className="inline-flex items-center px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200 rounded-lg"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Travel Guide
              </button>

              <button
                onClick={handleHomeClick}
                className="inline-flex items-center px-6 py-2 bg-primary text-white hover:bg-primary/90 transition-colors duration-200 rounded-lg"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTemplate;