/* eslint-disable no-unused-vars */
import React from "react"; //
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, CheckCircle, Users, Globe, Lightbulb } from 'lucide-react';
import PropTypes from 'prop-types';
const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
const CardContent = ({ children }) => {
  return (
    <div className="p-0">
      {children}
    </div>
  );
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};
const AboutSection = () => {
  const stats = [
    { title: "Years of Excellence", value: "20+" },
    { title: "Global Clients", value: "1000+" },
    { title: "Team Members", value: "50+" },
    { title: "Countries", value: "50+" }
  ];

  const services = [
    "Digital Transformation",
    "Cloud Solutions",
    "AI & Machine Learning",
    "Cybersecurity",
    "IT Consulting",
    "Software Development"
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-700 mb-6">
            Transforming Businesses Through Technology
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pinnacle Tech is a global leader in IT services, digital solutions, and business consulting. 
            We partner with organizations worldwide to help them achieve excellence through technological innovation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-purple-700">{stat.value}</h3>
                <p className="text-gray-600 mt-2">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vision and Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <Globe className="w-12 h-12 text-purple-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-purple-700 mb-3">Global Reach</h3>
            <p className="text-gray-600">
              Operating across continents to deliver world-class solutions to our clients
            </p>
          </div>
          <div className="text-center p-6">
            <Lightbulb className="w-12 h-12 text-purple-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-purple-700 mb-3">Innovation First</h3>
            <p className="text-gray-600">
              Pioneering cutting-edge solutions to drive business transformation
            </p>
          </div>
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-purple-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-purple-700 mb-3">Customer Success</h3>
            <p className="text-gray-600">
              Committed to delivering exceptional value and sustainable growth
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-700" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">
            Ready to Transform Your Business?
          </h2>
          <button className="inline-flex items-center px-6 py-3 bg-purple-700 text-white rounded-md hover:bg-purple-600 transition-colors">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;