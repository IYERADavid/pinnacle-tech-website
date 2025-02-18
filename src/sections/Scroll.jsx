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
    gsap.utils.toArray(cardRefs.current).forEach((card, index) => {

      // Set initial positions before animations
      gsap.set(card, {
        x: index === 0 ? '-50%' : index === 1 ? '50%' : 0,
        y: index === 2 ? '50%' : '-50%',
        scale: 1.2,
        rotation: index === 0 ? -5 : index === 1 ? 5 : 0
      });

      // GSAP animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom center",
          scrub: 1,
        }
      });

      // Sequential animation with overlap
      tl.fromTo(card,
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          delay: index * 0.2 // Stagger delay
        }
      );

      // Continuous scale animation while in view
      ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => gsap.to(card, { scale: 1.05, duration: 0.8 }),
        onLeaveBack: () => gsap.to(card, { scale: 1, duration: 0.5 })
      });
    });

    return () => ScrollTrigger.getAll().forEach(instance => instance.kill());
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full bg-black min-h-screen py-20 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        {cards.map((item, index) => (
          <div
            key={index}
            ref={el => cardRefs.current[index] = el}
            className="relative w-full h-[400px] md:h-[600px] rounded-none overflow-hidden 
                     mx-auto transform transition-all duration-500 will-change-transform
                     group hover:scale-[1.03] hover:shadow-2xl"
            style={{ 
              maxWidth: 'min(95%, 1200px)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'
            }}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover 
                       transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 
                          flex flex-col items-center justify-end p-8 text-center">
              <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 opacity-0 group-hover:opacity-100 
                             transition-opacity duration-300">
                  {item.title}
                </h2>
                <p className="text-base md:text-xl text-gray-200 max-w-2xl translate-y-4 
                            group-hover:translate-y-0 opacity-0 group-hover:opacity-100 
                            transition-all duration-500 delay-100">
                  {item.description}
                </p>
              </div>
              <div className="w-full mt-8 relative opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500 delay-200">
                <div className="h-[2px] bg-white origin-left scale-x-0 
                              group-hover:scale-x-100 transition-transform duration-500"
                     style={{ transformOrigin: 'left center' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;