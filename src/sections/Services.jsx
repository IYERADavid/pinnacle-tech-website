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
    <section className="py-12 bg-gray-900 text-white ">
      <div className="max-w-16xl mx-auto sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold text-white mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div key={index} className="relative overflow-hidden group">
              <img
                src={service.image}
                alt={service.title}
                className="w-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-center p-4 text-left transition-transform duration-500 group-hover:-translate-y-4">
                <h4 className="text-2xl font-semibold text-purple-400 uppercase">
                  {service.category}
                </h4>
                <h3 className="text-lg font-bold">{service.title}</h3>
              </div>
              {/* Hover details container */}
              <div
                className="absolute bottom-0 left-0 w-full p-4 text-white bg-gray-900 bg-opacity-50 transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p className="text-gray-300 text-center">{service.hoverDetails}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;