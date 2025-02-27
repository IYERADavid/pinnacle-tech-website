/* eslint-disable no-unused-vars */
import React from "react";
import digital_transformation from "../assets/images/digital_transformation.jpg";
import PropTypes from 'prop-types';
import IT_consulting1 from "../assets/images/IT_consulting1.jpg";
import IT_consulting2 from "../assets/images/IT_consulting2.jpg";
import cyber_security1 from "../assets/images/cyber_security1.jpg";
import managed_operation from "../assets/images/managed_operation.jpg";
import cloud_solution1 from "../assets/images/cloud_solution1.jpg";
import software_development from "../assets/images/software_development.jpg";
import digitalCreativeServices from "../assets/images/digitalCreativeServices.jpg";
import Emerging_Tech_Services from "../assets/images/Emerging_Tech_Services.jpg";

const Services = ({servicesSectionRef}) => {
  const services = [
    {
      category: "Cloud Solutions",
      title: "Cloud Infrastructure Management",
      image: cloud_solution1,
      hoverDetails: "Leverage enterprise-grade cloud solutions with full lifecycle management, ensuring optimal performance, cost-efficiency, and compliance across multi-cloud environments.",
    },
    {
      category: "Cybersecurity",
      title: "Advanced Threat Protection",
      image: cyber_security1,
      hoverDetails: "Enterprise-grade security operations with 24/7 threat monitoring, AI-powered anomaly detection, and incident response orchestration aligned with NIST frameworks.",
    },
    {
      category: "Data Analytics",
      title: "Business Intelligence Solutions",
      image: IT_consulting2,
      hoverDetails: "Transform raw data into actionable insights with predictive analytics powered by machine learning models and real-time dashboarding for C-level decision support.",
    },
    {
      category: "Emerging Tech Services",
      title: "Innovative & Disruptive Technologies",
      image: Emerging_Tech_Services,
      hoverDetails: "Implementation partner for blockchain, IoT, and AI solutions with proof-of-concept development and scalable deployment strategies for future-ready enterprises.",
    },
    {
      category: "Digital & Creative Services",
      title: "Design & Digital Experience",
      image: digitalCreativeServices,
      hoverDetails: "End-to-end digital transformation services including UX/UI design systems, omnichannel content strategy, and brand experience optimization through user-centric design methodologies.",
    },
    {
      category: "IT Consulting",
      title: "Strategic IT Consulting",
      image: IT_consulting1,
      hoverDetails: "Technology roadmap development aligned with business objectives, featuring IT maturity assessments, architecture modernization plans, and digital transformation ROI analysis.",
    },
    {
      category: "Managed Services",
      title: "Comprehensive IT Support",
      image: digital_transformation,
      hoverDetails: "Proactive IT operations management with SLA-backed performance guarantees, including network optimization, cloud governance, and continuous improvement through ITIL-aligned processes.",
    },
    {
      category: "Software Development",
      title: "Custom Software Development",
      image: software_development,
      hoverDetails: "Full-cycle software engineering services employing Agile DevOps practices, microservices architecture, and compliance-driven development for regulated industries.",
    },
  ];

  return (
    <section ref={servicesSectionRef} className="py-7 bg-gray-900 text-white">
      <div className="max-w-10xl mx-auto px-20 w-full">   
        <h2 className="text-4xl font-bold text-center mb-11 tracking-tight">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-10 mx-6 sm:mx-3">
          {services.map((service, index) => (
            <div  
              key={index}
              className="relative w-[370px] h-[470px] overflow-hidden rounded-none group cursor-pointer shadow-lg transform transition hover:scale-105"
            >  
             { /* Image Container */}
             <div className="relative h-full transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                <img
                  src={service.image}
                  alt={service.title}
                  loading= "lazy"
                  className= "w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-900/30 to-transparent transition-opacity duration-500 group-hover:opacity-100 opacity-90" />
              </div>

              {/* Heading */}
              <div className="absolute top-0 left-0 w-full p-6 space-y-2 z-10 transition-all duration-500 translate-y-0 group-hover:-translate-y-2">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest transition-all duration-500">
                  {service.category}
                </span>
                <h3 className="text-2xl font-bold leading-tight tracking-tight text-white">{service.title}</h3>
              </div>

              {/* Slide-up Description */}
              <div className="absolute inset-0 transition-all duration-500 p-6 flex flex-col justify-end transform translate-y-full group-hover:translate-y-0 shadow-xl border border-transparent group-hover:shadow-2xl group-hover:border-blue-400/20 bg-gradient-to-t from-black/70 to-transparent">  
                <div className="mb-4">
                  <p className="text-gray-100 text-sm leading-snug font-medium">
                    {service.hoverDetails}
                  </p>
                </div>
                <button className="self-start px-4 py-2 text-xs font-semibold text-white uppercase tracking-widest border border-white rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300"
                aria-label={`Explore ${service.title}`}
                >
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
Services.propTypes = {
  servicesSectionRef: PropTypes.object.isRequired,
};

export default Services;