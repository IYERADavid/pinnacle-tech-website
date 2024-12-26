/* eslint-disable no-unused-vars */
import React from 'react';

const Industries = () => {
  const industries = [
    {
      icon: 'industry-icon-1.svg',
      title: 'Manufacturing',
      description: 'Optimize your manufacturing operations with our industry-leading solutions.'
    },
    {
      icon: 'industry-icon-2.svg',
      title: 'Healthcare',
      description: 'Revolutionize your healthcare services with our cutting-edge technology.'
    },
    {
      icon: 'industry-icon-3.svg',
      title: 'Finance',
      description: 'Elevate your financial, insurance, and banking services with our secure and innovative platforms.'
    },
    {
      icon: 'industry-icon-4.svg',
      title: 'Retail',
      description: 'Enhance your retail experience with our data-driven insights and solutions.'
    },
    {
      icon: 'industry-icon-5.svg',
      title: 'Energy',
      description: 'Transform your energy operations with our sustainable and efficient technologies.'
    },
    {
      icon: 'industry-icon-6.svg',
      title: 'Education',
      description: 'Empower your educational institution with our innovative tech solutions.'
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
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
                  src={`/api/placeholder/${industry.icon}`}
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

export default Industries;