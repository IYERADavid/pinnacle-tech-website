/* eslint-disable no-unused-vars */
import React from "react";
import digital_transformation from "../assets/images/digital_transformation.jpg";
import IT_consulting1 from "../assets/images/IT_consulting1.jpg";
import IT_consulting2 from "../assets/images/IT_consulting2.jpg";
import cyber_security1 from "../assets/images/cyber_security1.jpg";
import managed_operation from "../assets/images/managed_operation.jpg";
import cloud_solution1 from "../assets/images/cloud_solution1.jpg";
import software_development from "../assets/images/software_development.jpg";
const Services = () => {
  const services = [
    {
      category: "Cloud Solutions",
      title: "Cloud Infrastructure Management",
      image: cloud_solution1,
      hoverDetails: "Optimize your business operations with our comprehensive cloud infrastructure management services. We ensure seamless integration, scalability, and security for your cloud environment.",
    },
    {
      category: "Cybersecurity",
      title: "Advanced Threat Protection",
      image: cyber_security1,
      hoverDetails: "Protect your organization from cyber threats with our advanced threat protection services. We provide real-time monitoring, incident response, and vulnerability assessments.",
    },
    {
      category: "Data Analytics",
      title: "Business Intelligence Solutions",
      image: IT_consulting2,
      hoverDetails: "Unlock the power of your data with our business intelligence solutions. We help you analyze and visualize data to make informed decisions and drive growth.",
    },
    {
      category: "IT Consulting",
      title: "Strategic IT Consulting",
      image: IT_consulting1,
      hoverDetails: "Navigate the complexities of technology with our strategic IT consulting services. We provide expert advice to align your IT strategy with your business goals.",
    },
    {
      category: "Managed Services",
      title: "Comprehensive IT Support",
      image: digital_transformation,
      hoverDetails: "Focus on your core business while we handle your IT needs. Our managed services include 24/7 support, system monitoring, and proactive maintenance.",
    },
    {
      category: "Software Development",
      title: "Custom Software Development",
      image: software_development,
      hoverDetails: "Tailor-made software solutions to meet your unique business needs. Our team of experts develops scalable and efficient applications that enhance productivity.",
    },
  ];

  
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-[276px] h-[424px] rounded-none overflow-hidden group cursor-pointer"
            >
             { /* Image Container with Zoom Effect */}
              <div className="relative h-full transform transition-transform duration-500 group-hover:scale-105">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </div>

              {/* Persistent Heading */}
              <div className="absolute top-0 left-0 w-full p-6 z-10">
                <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-1">
                  {service.category}
                </h4>
                <h3 className="text-xl font-bold leading-6">{service.title}</h3>
              </div>

              {/* Slide-up Description */}
              <div className="absolute inset-0 bg-gray-900/95 p-6 flex flex-col justify-end transform transition-all duration-500 translate-y-full group-hover:translate-y-0">
                <div className="mb-4">
                  <p className="text-gray-100 text-sm leading-relaxed">
                    {service.hoverDetails}
                  </p>
                </div>
                <button className="self-start px-4 py-2 text-xs font-semibold text-white uppercase tracking-widest border border-white rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300">
                  Explore Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
