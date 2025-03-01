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

      
      gsap.set(card, {
        x: index === 0 ? '-50%' : index === 1 ? '50%' : 0,
        y: index === 2 ? '50%' : '-50%',
        scale: 1.2,
        rotation: index === 0 ? -5 : index === 1 ? 5 : 0
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom center",
          scrub: 1,
        }
      });

      tl.fromTo(card,
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          delay: index * 0.2
        }
      );

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
    <></>
  )
};

export default CardSection;