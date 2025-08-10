import { useState, useEffect, useRef } from 'react';

const RSVP = ({ visible }) => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    phone: '',
    guests: 1,
    requests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  
  useEffect(() => {
    if (visible && sectionRef.current) {
      sectionRef.current.classList.remove('animate-hidden');
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, [visible]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    // Replace with your actual Google Form submission URL
    // You'll need to inspect your Google Form and get the form ID and field IDs
    const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
    
    // Create form data for submission
    const formSubmitData = new FormData();
    
    // Map your form fields to Google Form field IDs
    // Replace 'entry.123456789' with your actual Google Form field IDs
    formSubmitData.append('entry.123456789', formData.names);
    formSubmitData.append('entry.234567890', formData.email);
    formSubmitData.append('entry.345678901', formData.phone);
    formSubmitData.append('entry.456789012', formData.guests);
    formSubmitData.append('entry.567890123', formData.requests);
    
    try {
      // Due to CORS restrictions, direct submission might not work
      // You might need a proxy server or use a service like Netlify Forms
      // This is a simplified example
      const response = await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors', // This means you won't be able to access the response
        body: formSubmitData
      });
      
      // Since we're using no-cors, we can't actually check the response
      // So we'll just assume it worked
      setSubmitSuccess(true);
      setFormData({
        names: '',
        email: '',
        phone: '',
        guests: 1,
        requests: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your RSVP. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="section bg-secondary" ref={sectionRef}>
      <div className="container">
        <h2 className="text-4xl font-serif text-center mb-16">RSVP</h2>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          {submitSuccess ? (
            <div className="text-center py-8">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-2xl font-serif mb-2">Thank You!</h3>
              <p className="mb-6">Your RSVP has been submitted successfully.</p>
              <button 
                onClick={() => setSubmitSuccess(false)} 
                className="btn btn-primary"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <>
              <p className="text-center mb-8">We hope you can join us! Please RSVP by October 26, 2025.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="names" className="block mb-2 text-sm font-medium">Names</label>
                  <input
                    type="text"
                    id="names"
                    name="names"
                    value={formData.names}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="block mb-2 text-sm font-medium">Number of Guests</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="requests" className="block mb-2 text-sm font-medium">Special Requests</label>
                  <textarea
                    id="requests"
                    name="requests"
                    value={formData.requests}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>

                {submitError && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-md">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary w-full flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit RSVP'
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;