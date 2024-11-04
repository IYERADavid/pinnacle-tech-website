/* eslint-disable no-unused-vars */
import React from "react";
import cyber_security from "../assets/images/cyber_security.jpg";

const Insights = () => {
  const insights = [
    {
      category: "Report",
      title: "The Future of Digital Transformation",
      date: "October 25, 2024",
      image: cyber_security, 
    },
    {
      category: "Case Study",
      title: "Healthcare Provider Modernization",
      date: "October 23, 2024",
      image: "/api/placeholder/400/300"
    },
    {
      category: "Whitepaper",
      title: "AI in Manufacturing",
      date: "October 20, 2024",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 text-sm">
                  {insight.category}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-500 text-sm">{insight.date}</p>
                <h3 className="text-xl font-semibold mt-2 group-hover:text-purple-600">
                  {insight.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;