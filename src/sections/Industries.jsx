import React from 'react';
import education_icon from "../assets/images/education 11.jpg"
import healthcare_icon from "../assets/images/healthcare 11.jpg"
import finance_icon from "../assets/images/finance 11.jpg"
import retail_icon from "../assets/images/retail 11.jpg"
import manufacturing_icon from "../assets/images/manufacture11.jpg"
import  energy_icon from "../assets/images/energy 11.jpg"
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

const Industries = ({ industrySectionRef }) => {
  const industries = [
    {
      icon: manufacturing_icon,
      title: 'Manufacturing',
      description: 'Drive operational efficiency and innovation with our advanced manufacturing solutions, designed to optimize production and reduce costs.'
    },
    {
      icon: healthcare_icon,
      title: 'Healthcare',
      description: 'Empower your healthcare services with our state-of-the-art technology, ensuring better patient outcomes and operational efficiency.'
    },
    {
      icon: finance_icon,
      title: 'Finance',
      description: 'Innovate your financial operations with our AI-driven solutions that streamline processes and improve decision-making.'
    },
    {
      icon: retail_icon,
      title: 'Retail',
      description: 'Deliver exceptional customer experiences with our data-driven retail solutions, tailored to enhance engagement and boost sales.'
    },
    {
      icon: energy_icon,
      title: 'Energy',
      description: 'Lead the energy transition with our smart technologies that optimize resource management and support renewable energy integration.'
    },
    {
      icon: education_icon,
      title: 'Education',
      description: 'Empower educators and students with our advanced educational technologies, fostering a collaborative and immersive learning environment.'
    }
  ];

  return (
    <section id='industrySectionRef' ref={industrySectionRef} className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={`${industry.icon}`}
                  alt={industry.title}
                  className="h-12 w-12 mr-4"
                />
                <h3 className="text-xl font-bold text-gray-900">{industry.title}</h3>
              </div>
              <p className="text-gray-700">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
Industries.propTypes = {
  industrySectionRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};
export default Industries;