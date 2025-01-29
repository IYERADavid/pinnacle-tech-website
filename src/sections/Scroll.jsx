/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import block_chain from "../assets/images/block_chain.jpg";
import ai_powered from "../assets/images/ai_powered.jpg";
import cloud_solution1 from "../assets/images/cloud_solution1.jpg";
import digital_transformation from "../assets/images/digital_transformation.jpg";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { image: digital_transformation, title: "Blockchain Solutions", description: "Transform your business with secure blockchain technology" },
  { image: ai_powered, title: "AI-Powered Innovation", description: "Leverage artificial intelligence for smarter operations" },
  { image: cloud_solution1, title: "Cloud Solutions", description: "Scale your infrastructure with cloud technology" }
];

const CardSection = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const sections = cardRefs.current;
    sections.forEach((section, index) => {
      gsap.fromTo(
       "sections",
        { opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          }
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-black min-h-screen flex flex-col gap-20 py-20 items-center overflow-hidden">
      {cards.map((item, index) => (
        <div
          key={index}
          ref={el => cardRefs.current[index] = el}
          className={`relative flex items-center justify-center w-[510px] h-[300px] bg-gray-900 rounded-none overflow-hidden shadow-lg group transition-transform transform
    ${index === 0 ? "self-start ml-20" : ""}
    ${index === cards.length - 1 ? "self-end mr-20" : ""}
  `}
        >
          <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h2 className="text-3xl font-bold">{item.title}</h2>
            <p className="text-lg mt-2 max-w-md text-center">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;