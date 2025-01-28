/* eslint-disable react/prop-types */
import React, { useMemo, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import block_chain from "../assets/images/block_chain.jpg";
import ai_powered from "../assets/images/ai_powered.jpg";
import cloud_solution1 from "../assets/images/cloud_solution1.jpg";

gsap.registerPlugin(ScrollTrigger);

function MyComponent() {
  const containerRef = useRef(null);
  const contentRefs = useRef([]);
  
  const content = useMemo(() => [
    {
      image: block_chain,
      title: "Blockchain Solutions",
      description: "Transform your business with secure blockchain technology"
    },
    {
      image: ai_powered,
      title: "AI-Powered Innovation",
      description: "Leverage artificial intelligence for smarter operations"
    },
    {
      image: cloud_solution1,
      title: "Cloud Solutions",
      description: "Scale your infrastructure with cloud technology"
    }
  ], []);

  useEffect(() => {
    const container = containerRef.current;
    const sections = contentRefs.current;
    
    sections.forEach((section, index) => {
      // Reset initial states
      gsap.set(section, {
        position: 'absolute',
        opacity: index === 0 ? 1 : 0,
        scale: index === 0 ? 1 : 1.05
      });

      // Create individual ScrollTriggers for better control
      ScrollTrigger.create({
        trigger: container,
        start: `${index * 33}% top`,
        end: `${(index + 1) * 33}% top`,
        scrub: 1,
        onEnter: () => {
          gsap.to(section, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
          });
          if (index > 0) {
            gsap.to(sections[index - 1], {
              opacity: 0,
              scale: 0.95,
              duration: 0.5,
              ease: "power2.in"
            });
          }
        },
        onLeaveBack: () => {
          gsap.to(section, {
            opacity: 0,
            scale: 1.05,
            duration: 0.5,
            ease: "power2.in"
          });
          if (index > 0) {
            gsap.to(sections[index - 1], {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "power2.out"
            });
          }
        }
      });
    });

    // Pin the container
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=200%",
      pin: true,
      pinSpacing: true
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#000'
      }}
    >
      {content.map((item, index) => (
        <div
          key={index}
          ref={el => contentRefs.current[index] = el}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            color: '#fff',
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: '#000',
            willChange: 'transform, opacity'
          }}
        >
          <div className="content-wrapper" style={{
            display: 'flex',
            width: '100%',
            maxWidth: '1400px',
            gap: '50px',
            alignItems: 'center',
            padding: '0 5%',
            margin: '0 auto'
          }}>
            <div className="text-content" style={{
              flex: '1',
              padding: '20px'
            }}>
              <h2 style={{
                fontSize: '3rem',
                marginBottom: '20px',
                fontWeight: 'bold'
              }}>{item.title}</h2>
              <p style={{
                fontSize: '1.5rem',
                lineHeight: '1.6',
                opacity: '0.8'
              }}>{item.description}</p>
            </div>
            <div className="image-content" style={{
              flex: '1',
              position: 'relative'
            }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '600px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  willChange: 'transform'
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;