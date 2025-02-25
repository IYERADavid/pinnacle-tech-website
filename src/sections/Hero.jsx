/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ industrySectionRef, servicesSectionRef }) => {
  
  const scrollToSection = (sectionRef) => () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our IT initiative
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover the amazing features and services we offer. Join us today!
        </p>
        <div className="space-x-4">
          <button onClick={scrollToSection(servicesSectionRef)} className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition duration-300">
            Our services
          </button>
          <button onClick={scrollToSection(industrySectionRef)} className="bg-transparent border border-purple-700 text-purple-700 px-6 py-2 rounded-lg hover:bg-purple-50 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}
Hero.propTypes = {
  industrySectionRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  servicesSectionRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default Hero;
