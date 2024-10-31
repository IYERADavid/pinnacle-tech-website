/* eslint-disable no-unused-vars */
import React from "react";
const Services = () => {
  const services = [
    {
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge digital solutions",
      image: "/api/placeholder/400/300",
      categories: [
        "Cloud Migration",
        "Process Automation",
        "Data Analytics",
        "AI Implementation"
      ]
    },
    {
      title: "IT Consulting",
      description: "Strategic technology consulting for business growth",
      image: "/api/placeholder/400/300",
      categories: [
        "Technology Strategy",
        "Digital Roadmap",
        "IT Assessment",
        "Architecture Design"
      ]
    },
    {
      title: "Managed Services",
      description: "End-to-end IT management and support",
      image: "/api/placeholder/400/300",
      categories: [
        "Infrastructure Management",
        "Security Operations",
        "Help Desk Support",
        "Network Management"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.categories.map((category, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;