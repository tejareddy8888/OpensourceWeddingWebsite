import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine which section is currently in view
      const sections = [
        'intro',
        'countdown',
        'events',
        'travel',
        'features',
        'rsvp'
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items in logical order
  const navItems = [
    { id: 'intro', label: 'Home' },
    { id: 'countdown', label: 'Countdown' },
    { id: 'events', label: 'Event Details' },
    { id: 'travel', label: 'Travel' },
    { id: 'features', label: 'Things to Do' },
    { id: 'rsvp', label: 'RSVP' }
  ];

  return (
    <>
      {/* Logo - positioned independently */}
      <div className="fixed top-4 left-4 z-50">
        <a href="#intro" className="flex items-center">
          <img
            src="/WL.png"
            alt="Susnata & Saiteja Wedding Logo"
            className={`w-auto transition-all duration-300 ${isScrolled
              ? 'h-16 sm:h-20 md:h-24'
              : 'h-20 sm:h-24 md:h-28 lg:h-32'
              }`}
          />
        </a>
      </div>

      {/* Header with navigation only */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
        : 'bg-transparent py-4'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm lg:text-base font-medium transition-all duration-300 relative ${activeSection === item.id
                    ? 'text-primary'
                    : isScrolled
                      ? 'text-gray-700 hover:text-primary'
                      : 'text-gray-800 hover:text-primary'
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md transition-colors duration-300 absolute right-4"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-gray-800'
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen
          ? 'max-h-96 opacity-100'
          : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
          <nav className="bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block px-4 py-3 text-base font-medium rounded-md transition-colors duration-300 ${index === 0 ? 'ml-20 sm:ml-24 md:ml-28' : ''
                    } ${activeSection === item.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;