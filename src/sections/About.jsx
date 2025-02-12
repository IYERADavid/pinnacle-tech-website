/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, CheckCircle, Users, Globe, Lightbulb } from 'lucide-react';
import { useInView } from "react-intersection-observer";
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

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
  const [ref, inView] = useInView({
    
  })
  const stats = [
    { title: "Years of Excellence", value: "20" },
    { title: "Global Clients", value: "1000" },
    { title: "Team Members", value: "50" },
    { title: "Countries", value: "50" }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-6">
            Transforming Businesses Through Technology
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pinnacle Tech is a global leader in IT services, digital solutions, and business consulting. 
            We partner with organizations worldwide to help them achieve excellence through technological innovation.
          </p>
        </div>

        {/* Stats Section */}

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold text-purple-700">
                  {inView ? <CountUp end={stat.value} duration={2} /> : 0}
                  {stat.value >= 50 && "+"}
                </h3>
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