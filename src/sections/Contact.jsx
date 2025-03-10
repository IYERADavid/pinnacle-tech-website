/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { ArrowRight } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    jobTitle: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [state, handleSubmit] = useForm("xdkoekad");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.workEmail || !validateEmail(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid work email';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleSubmit(e);
    }
  };
  if (state.succeeded) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg">
        <p className="text-lg font-semibold text-green-700">
          ✓ Thank you for contacting us! We&apos;ll respond within 24 business hours.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-100 py-16 px-auto px-10">
      <div className="text-center mt-20 my-auto bg-gradient-to-r from-purple-700 to-blue-600 rounded-2xl p-12 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Lead Your Digital Evolution?
        </h2>
        <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
          Schedule your complimentary technology assessment with our solution architects.
        </p>
        <button 
          className="inline-flex items-center px-8 py-4 bg-white text-purple-700 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg"
          aria-label="Start digital transformation consultation">
          Start Your Journey
          <ArrowRight className="ml-3 w-6 h-6" />
        </button>
      </div>
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">How Can We Partner with You?</h2>
          <p className="text-gray-600">Complete the form below and our experts will contact you within 24 hours</p>
        </div>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" 
                
                placeholder="John"
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm mt-1 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.firstName}
                </p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Work Email *
            </label>
            <input
              type="email"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="john.doe@company.com"  
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="E.g., Chief Technology Officer" 
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all min-h-[120px]" 
              placeholder="Briefly describe your business needs..." 
            />
          </div>
          <div className="flex items-start space-x-3">
            <input 
              type="checkbox" 
              required
              className="mt-1 h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500" 
            />
            <p className="text-sm text-gray-600">
              I agree to the {' '}
              <a href="/privacy-policy" className="text-purple-600 hover:text-purple-700 font-medium underline">
                Privacy Policy
              </a>
              {' '} and consent to communications
            </p>
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-gradient-to-r from-purple-700 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-md hover:shadow-lg" 
          >
            {state.submitting ? 'Sending...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default { Contact };