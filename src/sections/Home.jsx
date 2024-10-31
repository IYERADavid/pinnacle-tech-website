/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from 'prop-types';
import { ArrowRight, CheckCircle, Users, Globe, Lightbulb } from 'lucide-react';

  

const Home = () => {
  
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = {
    Services: [
      { title: 'Digital Transformation', items: ['Cloud Computing', 'AI & ML', 'Data Analytics'] },
      { title: 'Enterprise Solutions', items: ['ERP Services', 'CRM Solutions', 'Business Intelligence'] },
      { title: 'Cybersecurity', items: ['Security Operations', 'Risk Management', 'Compliance'] },
    ],
    Industries: [
      { title: 'Banking & Finance', items: ['Retail Banking', 'Investment Services', 'Insurance'] },
      { title: 'Healthcare', items: ['Digital Health', 'Medical Devices', 'Healthcare Analytics'] },
      { title: 'Manufacturing', items: ['Smart Manufacturing', 'Supply Chain', 'Quality Control'] },
    ],
    Insights: [
      { title: 'Research', items: ['Reports', 'Case Studies', 'Whitepapers'] },
      { title: 'Thought Leadership', items: ['Blogs', 'Articles', 'Newsletters'] },
      { title: 'Events', items: ['Webinars', 'Conferences', 'Workshops'] },
    ]
  };




  return (
    <div className="min-h-screen bg-gray-50">
      {/* Background Images */}
      {/* Add your background images here using absolute positioning */}
      <div className="fixed inset-0 z-0">
        {/* Image 1 - Top Section */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-cover bg-center"
          style={{
            backgroundImage: "url('./assets/images/background.jpg')", // Replace with your image path
            opacity: 0.7
          }}
        />
        {/* Image 2 - Middle Section */}
        <div className="absolute top-1/3 left-0 w-full h-1/3 bg-cover bg-center"
          style={{
            backgroundImage: "url('./assets/images/artificial_intelligence.jpg')", // Replace with your image path
            opacity: 0.7
          }}
        />
        {/* Image 3 - Bottom Section */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/cyber_security.jpg/1920/600')", // Replace with your image path
            opacity: 0.7
          }}
        />
      </div>

      <nav className="bg-white border-b relative z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-32">
                <span className="text-xl font-bold text-purple-800">PinnacleTech</span>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex">
              {Object.keys(menuItems).map((category) => (
                <div 
                  key={category}
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className="relative"
                >
                  <button 
                    className={`h-16 px-4 text-gray-700 hover:text-purple-800 relative
                      ${hoveredCategory === category ? 'text-purple-800 border-b-2 border-purple-800' : ''}`}
                  >
                    {category}
                  </button>
                  
                  {/* Mega Menu Dropdown */}
                  {hoveredCategory === category && (
                    <div 
                      className="absolute left-0 w-screen bg-white border-b shadow-lg animate-fadeIn"
                      style={{ width: '100vw', left: '50%', transform: 'translateX(-50%)' }}
                      onMouseEnter={() => setHoveredCategory(category)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      <div className="max-w-7xl mx-auto p-8 grid grid-cols-3 gap-8">
                        {menuItems[category].map((section, idx) => (
                          <div key={idx} className="space-y-4">
                            <h3 className="text-lg font-semibold text-purple-800">{section.title}</h3>
                            <ul className="space-y-2">
                              {section.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <a href="#" className="text-gray-600 hover:text-purple-800 block py-1 transition-colors duration-150">
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Additional Nav Items */}
              <a href="#" className="h-16 px-4 flex items-center text-gray-700 hover:text-purple-800 transition-colors duration-150">
                About Us
              </a>
              <button 
                onClick={() => scrollToSection('careers')} 
                className="h-16 px-4 flex items-center text-gray-700 hover:text-purple-800 transition-colors duration-150"
              >
                Careers
              </button>
              <button 
                onClick={() => scrollToSection('Contact')} 
                className="h-16 px-4 flex items-center text-gray-700 hover:text-purple-800 transition-colors duration-150"
              >
                Contact Us
              </button>
            </div>

            {/* Globe Icon */}
            <div className="flex items-center">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay when mega menu is open */}
      {hoveredCategory && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          style={{ top: '64px' }}
        />
      )}

      {/* Main Content Area */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto p-4">
          <div className="mt-4 p-4 bg-white bg-opacity-90 rounded-lg shadow">
            <p className="text-gray-600">Hover over the navigation items above to see the mega menus.</p>
          </div>

          {/* Careers Section */}
          <div id="careers" className="mt-20 p-8 bg-white bg-opacity-90 rounded-lg shadow">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Careers</h2>
            <div className="space-y-4">
              <p className="text-gray-700">Join our team and be part of something extraordinary.</p>
              {/* Add your careers content here */}
            </div>
          </div>

          {/* Contact Section */}
          <div id="contact" className="mt-20 p-8 bg-white bg-opacity-90 rounded-lg shadow">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">Contact Us</h2>
            <div className="space-y-4">
              <p className="text-gray-700">Get in touch with our team.</p>
              {/* Add your contact form or contact information here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Add required keyframes for fadeIn animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px) translateX(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0) translateX(-50%);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.2s ease-out forwards;
  }

  html {
    scroll-behavior: smooth;
  }
`;
document.head.appendChild(style);

export default Home;