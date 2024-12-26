/* eslint-disable no-unused-vars */
/*import React, { useMemo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import block_chain from "../assets/images/block_chain.jpg";
import ai_powered from "../assets/images/ai_powered.jpg";
import cloud_solution1 from "../assets/images/cloud_solution1.jpg";

gsap.registerPlugin(ScrollTrigger);
function MyComponent() {
  const containerRef = useRef(null);
  const images = useMemo(
    () => [block_chain, ai_powered, cloud_solution1],
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    const imageElements = images.map((_, index) => {
      return document.getElementById(`image-${index}`);
    });

    // Calculate positions for each image
    const positions = [
      { x: '10%', y: '10%' },  // Top left with padding
      { x: '50%', y: '50%' },  // Center
      { x: '90%', y: '90%' }   // Bottom right with padding
    ];

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Add animations for each image
    imageElements.forEach((image, index) => {
      // Initial state
      gsap.set(image, {
        opacity: 0,
        scale: 0.8,
        x: positions[index].x,
        y: positions[index].y,
        xPercent: -50,
        yPercent: -50,
      });

      // Add to timeline with sequence
      tl.to(image, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }, index * 0.5) // Stagger the animations
      
      // If not the last image, fade it out before the next one appears
      if (index < imageElements.length - 1) {
        tl.to(image, {
          opacity: 0.3,
          scale: 0.9,
          duration: 0.5,
        }, `>0.5`);
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [images]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#f5f5f5'
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          id={`image-${index}`}
          src={image}
          alt={`Scroll sequence ${index + 1}`}
          style={{
            position: 'absolute',
            width: '400px',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '8px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          }}
        />
      ))}
    </div>
  );
}

export default MyComponent;*/

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const images = [
  'block_chain.jpg',
  'ai_powered.jpg',
  'cloud_solution1.jpg',
  'cyber_security2.jpg',
];

function MyComponent() {
  useEffect(() => {
    const imageElements = images.map((image, index) => {
      const imageElement = document.getElementById(`image-${index}`);
      return imageElement;
    });

    gsap.to(imageElements[0], {
      y: 0,
      x: 100, // start from top left, 100px from the left edge
      opacity: 1,
      scrollTrigger: {
        trigger: '#container',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    gsap.to(imageElements[1], {
      y: 0,
      x: 0, // start from center
      opacity: 1,
      scrollTrigger: {
        trigger: '#container',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    gsap.to(imageElements[2], {
      y: 0,
      x: -100, // start from right bottom, 100px from the right edge
      opacity: 1,
      scrollTrigger: {
        trigger: '#container',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });

    gsap.to(imageElements[3], {
      y: 0,
      x: 0, // start from center
      opacity: 1,
      scrollTrigger: {
        trigger: '#container',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  }, []);

  return (
    <div id="container">
      {images.map((image, index) => (
        <img
          key={index}
          id={`image-${index}`}
          src={image}
          style={{
            opacity: 0,
            transform: 'translateY(100px)',
            position: 'absolute', // add this to position the images absolutely
          }}
        />
      ))}
    </div>
  );
}

export default MyComponent;