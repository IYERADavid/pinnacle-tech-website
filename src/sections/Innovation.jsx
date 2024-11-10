/* eslint-disable no-unused-vars */
import React from 'react';
import ai_powered from "../assets/images/ai_powered.jpg"
import block_chain from "../assets/images/block_chain.jpg"
import cyber_security2 from "../assets/images/cyber_security2.jpg"

const projects = [
  {
    title: "AI-Powered Analytics",
    description:
      "Leveraging artificial intelligence to deliver real-time insights that drive business growth.",
    image: ai_powered,
  },
  {
    title: "Blockchain Solutions",
    description:
      "Building secure, transparent blockchain applications tailored to industry needs.",
    image: block_chain,
  },
  {
    title: "Cybersecurity Innovations",
    description:
      "Advanced security solutions to protect data integrity and ensure privacy.",
    image: cyber_security2,
  },
];

const InnovationHub = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Innovation Hub</h2>
        <p className="text-gray-600 mb-10">
          Discover how Pinnacle Tech is pushing the boundaries in technology to deliver innovative solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationHub;