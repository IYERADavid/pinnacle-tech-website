/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useForm } from "@formspree/react";

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
  const [state, handleSubmit] = useForm("myFormspreeID");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.workEmail || !validateEmail(formData.workEmail)) {
      newErrors.workEmail = 'Must be a valid email';
    }
    if (!formData.jobTitle) newErrors.jobTitle = 'Job title is required';
    if (!formData.company) newErrors.company = 'Company is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleSubmit(e); // Send data to Formspree on valid submission
    }
  };

  if (state.succeeded) {
    return <p className="text-center text-purple-700">Thank you for contacting us! We’ll get back to you soon.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-50 shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-black-900 mb-6 text-center">How can we help you?</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="col-span-1">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-700"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>
          <div className="col-span-1">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-700"
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>
        <div className="mb-6">
          <input
            type="email"
            name="workEmail"
            placeholder="Work Email"
            value={formData.workEmail}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-700"
          />
          {errors.workEmail && <p className="text-red-500 text-sm mt-1">{errors.workEmail}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="col-span-1">
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-700"
            />
            {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
          </div>
          <div className="col-span-1">
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-700"
            />
            {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
          </div>
        </div>
        <div className="mb-6">
          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-700"
            rows="5"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <div className="mb-6">
          <label className="flex items-center text-gray-700">
            <input type="checkbox" className="mr-2 accent-purple-700" required />
            <span>I confirm, I have read and agree to the <a href="/privacy-policy" className="text-purple-700 underline">Privacy Policy</a>.</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-700 text-white p-3 rounded-md hover:bg-purple-700 transition duration-300 font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};


export default{ Contact } ;
