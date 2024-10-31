/* eslint-disable no-unused-vars */
import React from "react";

import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect, useState } from "react";





const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Transforming Business Through Technology",
      subtitle: "Digital solutions that drive innovation and growth",
      description: "Partner with Pinnacle Tech to accelerate your digital transformation journey and stay ahead in the evolving technology landscape.",
      ctaText: "Explore Our Solutions",
      bgImage: "/api/placeholder/1920/1080",
    },
    {
      title: "AI-Powered Enterprise Solutions",
      subtitle: "Intelligent automation for the modern business",
      description: "Leverage cutting-edge AI and ML technologies to optimize operations and enhance decision-making capabilities.",
      ctaText: "Discover AI Solutions",
      bgImage: "/api/placeholder/1920/1080",
    },
    {
      title: "Secure & Scalable Cloud Services",
      subtitle: "Cloud transformation that drives business value",
      description: "Build, migrate, and manage your cloud infrastructure with our comprehensive cloud services and solutions.",
      ctaText: "Learn About Cloud",
      bgImage: "/api/placeholder/1920/1080",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
          <img
            src={slide.bgImage}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  currentSlide === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ display: currentSlide === index ? 'block' : 'none' }}
              >
                <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">
                  {slide.subtitle}
                </h2>
                <h1 className="text-5xl font-bold text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  {slide.description}
                </p>
                <button className="group inline-flex items-center bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors duration-300">
                  {slide.ctaText}
                  <i className="fa-solid fa-chevron-right ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-purple-500 w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-30">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;