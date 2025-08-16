import { useState, useEffect, useRef } from 'react';

const RSVP = ({ visible }) => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    canAttend: '',
    familyName: '',
    numberOfPeople: '',
    arrivalDate: '',
    arrivalTime: '',
    stayAtDerasNatureCamp: '',
    departureDate: '',
    departureTime: '',
    needTransfer: '',
    comments: ''
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

    // Validate required fields
    if (!formData.canAttend.trim()) {
      setSubmitError('Please select whether you can attend.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.familyName.trim()) {
      setSubmitError('Please enter your family name.');
      setIsSubmitting(false);
      return;
    }

    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdn8w60gHDFizcrcKmwWwjsN9HmeXL3sYAMot_HbtUsWNlpVg/formResponse';

    const formSubmitData = new FormData();

    // Helper function to append only non-empty values
    const appendIfNotEmpty = (entryId, value) => {
      if (value && value.trim() !== '') {
        formSubmitData.append(entryId, value);
      }
    };

    // Required fields - always append
    formSubmitData.append('entry.877086558', formData.canAttend);
    formSubmitData.append('entry.1498135098', formData.familyName);

    // Optional fields - only append if they have values
    appendIfNotEmpty('entry.804560134', formData.numberOfPeople);

    // Handle arrival date
    if (formData.arrivalDate) {
      const [year, month, day] = formData.arrivalDate.split('-'); // Assuming YYYY-MM-DD format
      appendIfNotEmpty('entry.1424661284_year', year);
      appendIfNotEmpty('entry.1424661284_month', month);
      appendIfNotEmpty('entry.1424661284_day', day);
    }

    // Handle arrival time
    if (formData.arrivalTime) {
      const [hours, minutes] = formData.arrivalTime.split(':');
      appendIfNotEmpty('entry.647675901_hour', hours);
      appendIfNotEmpty('entry.647675901_minute', minutes);
    }

    appendIfNotEmpty('entry.1750924207', formData.stayAtDerasNatureCamp);

    // Handle departure date
    if (formData.departureDate) {
      const [year, month, day] = formData.departureDate.split('-'); // Assuming YYYY-MM-DD format
      appendIfNotEmpty('entry.1386550255_year', year);
      appendIfNotEmpty('entry.1386550255_month', month);
      appendIfNotEmpty('entry.1386550255_day', day);
    }

    // Handle departure time
    if (formData.departureTime) {
      const [hours, minutes] = formData.departureTime.split(':');
      appendIfNotEmpty('entry.1136018907_hour', hours);
      appendIfNotEmpty('entry.1136018907_minute', minutes);
    }

    appendIfNotEmpty('entry.486253220', formData.needTransfer);
    appendIfNotEmpty('entry.583435899', formData.comments);

    try {
      const response = await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formSubmitData
      });

      setSubmitSuccess(true);

      setFormData({
        canAttend: '',
        familyName: '',
        numberOfPeople: '',
        arrivalDate: '',
        arrivalTime: '',
        stayAtDerasNatureCamp: '',
        departureDate: '',
        departureTime: '',
        needTransfer: '',
        comments: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your RSVP. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="section py-20 bg-secondary animate-hidden animate-item" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">RSVP</h2>

        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
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
              <p className="text-center mb-8 text-gray-600">We hope you can join us! Please RSVP by September 30, 2025.</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Can you attend? */}
                <div className="border-b border-gray-200 pb-6">
                  <label className="block mb-4 text-base font-medium text-gray-700">
                    Can you attend? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="canAttend"
                        value="Yes,  I'll be there"
                        checked={formData.canAttend === "Yes,  I'll be there"}
                        onChange={handleChange}
                        className="mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="text-gray-700">Yes, I'll be there</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="canAttend"
                        value="Sorry, can't make it"
                        checked={formData.canAttend === "Sorry, can't make it"}
                        onChange={handleChange}
                        className="mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="text-gray-700">Sorry, can't make it</span>
                    </label>
                  </div>
                </div>

                {/* Family Name */}
                <div className="border-b border-gray-200 pb-6">
                  <label htmlFor="familyName" className="block mb-3 text-base font-medium text-gray-700">
                    Family Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="familyName"
                    name="familyName"
                    value={formData.familyName}
                    onChange={handleChange}
                    className="w-full px-0 py-2 border-0 border-b-2 border-gray-200 focus:border-primary focus:ring-0 bg-transparent text-gray-700 placeholder-gray-400"
                    placeholder="Your answer"
                  />
                </div>

                {/* How many people joining? */}
                <div className="border-b border-gray-200 pb-6">
                  <label className="block mb-4 text-base font-medium text-gray-700">
                    How many people joining? <span className="text-gray-400 text-sm">(Optional)</span>
                  </label>
                  <div className="flex flex-wrap gap-4 sm:gap-8 justify-center sm:justify-between">
                    {[1, 2, 3, 4, 5].map(num => (
                      <label key={num} className="flex flex-col items-center cursor-pointer">
                        <span className="mb-2 text-sm text-gray-600">{num}</span>
                        <input
                          type="radio"
                          name="numberOfPeople"
                          value={num.toString()}
                          checked={formData.numberOfPeople === num.toString()}
                          onChange={handleChange}
                          className="h-5 w-5 text-primary focus:ring-primary border-gray-300"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Date of Arrival */}
                <div className="border-b border-gray-200 pb-6">
                  <label htmlFor="arrivalDate" className="block mb-3 text-base font-medium text-gray-700">
                    Date of Arrival <span className="text-gray-400 text-sm">(Optional)</span>
                  </label>
                  <div className="flex space-x-2 text-sm">
                    <input
                      type="date"
                      id="arrivalDate"
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleChange}
                      min="2025-11-20"
                      max="2025-11-26"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Time of Arrival */}
                <div className="border-b border-gray-200 pb-6">
                  <label className="block mb-3 text-base font-medium text-gray-700">
                    Time of Arrival  <span className="text-gray-400 text-sm">(Optional) (24 Hour Format)</span>
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="time"
                      name="arrivalTime"
                      value={formData.arrivalTime}
                      onChange={handleChange}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Are you willing to stay at Deras Nature Camp */}
                <div className="border-b border-gray-200 pb-6">
                  <label className="block mb-4 text-base font-medium text-gray-700">
                    Are you willing to stay at Our Provided Accomodation? <span className="text-gray-400 text-sm">(Optional)</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="stayAtDerasNatureCamp"
                        value="Yes"
                        checked={formData.stayAtDerasNatureCamp === "Yes"}
                        onChange={handleChange}
                        className="mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="stayAtDerasNatureCamp"
                        value="No"
                        checked={formData.stayAtDerasNatureCamp === "No"}
                        onChange={handleChange}
                        className="mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                {/* Date of Departure */}
                <div className="border-b border-gray-200 pb-6">
                  <label htmlFor="departureDate" className="block mb-3 text-base font-medium text-gray-700">
                    Date of Departure <span className="text-gray-400 text-sm">(Optional)</span>
                  </label>
                  <div className="flex space-x-2 text-sm">
                    <input
                      type="date"
                      id="departureDate"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleChange}
                      min="2025-11-26"
                      max="2025-11-30"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Time of Departure */}
                <div className="border-b border-gray-200 pb-6">
                  <label className="block mb-3 text-base font-medium text-gray-700">
                    Time of Departure <span className="text-gray-400 text-sm">(Optional) (24 Hour Format)</span>
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="time"
                      name="departureTime"
                      value={formData.departureTime}
                      onChange={handleChange}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Do you need transfer? */}
                <div className="border-b border-gray-200 pb-6">
                  <label className="block mb-4 text-base font-medium text-gray-700">
                    Do you need transfer? <span className="text-gray-400 text-sm">(Optional)</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="needTransfer"
                        value="yes"
                        checked={formData.needTransfer === "yes"}
                        onChange={handleChange}
                        className="mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="needTransfer"
                        value="no"
                        checked={formData.needTransfer === "no"}
                        onChange={handleChange}
                        className="mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                {/* Comments */}
                <div className="border-b border-gray-200 pb-6">
                  <label htmlFor="comments" className="block mb-3 text-base font-medium text-gray-700">
                    Any comments or special requests? <span className="text-gray-400 text-sm">(Optional)</span>
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                    placeholder="Let us know if you have any dietary restrictions, accessibility needs, or other special requests..."
                  />
                </div>

                {/* Error Message */}
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
                    <div className="flex">
                      <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-red-700 text-sm">{submitError}</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;