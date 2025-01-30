
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { ThemeProvider } from 'next-themes';
import { ArrowRightIcon } from '@heroicons/react/solid';
import ai_powered from "../assets/images/ai_powered.jpg"
import 'aos/dist/aos.css';
import virtual_reality from "../assets/images/virtual_reality.jpg"
import block_chain from "../assets/images/block_chain.jpg"


const slides = [
  {
    title: "Transforming Business Through Technology",
    subtitle: "Digital solutions that drive innovation and growth",
    description: "Partner with Pinnacle Tech to accelerate your digital transformation journey and stay ahead in the evolving technology landscape.",
    ctaText: "Explore Our Solutions",
    bgImage: block_chain,
  },
  {
    title: "AI-Powered Enterprise Solutions",
    subtitle: "Intelligent automation for the modern business",
    description: "Leverage cutting-edge AI and ML technologies to optimize operations and enhance decision-making capabilities.",
    ctaText: "Discover AI Solutions",
    bgImage: virtual_reality,
  },
  {
    title: "Secure & Scalable Cloud Services",
    subtitle: "Cloud transformation that drives business value",
    description: "Build, migrate, and manage your cloud infrastructure with our comprehensive cloud services and solutions.",
    ctaText: "Learn About Cloud",
    bgImage: ai_powered,
  }
];


const Home = ({ innovationSectionRef }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  const handleScroll = () => {
    if (theme === 'light') {
      setTheme('dark');
  } else {
    setTheme('light');
  }
  };

  const scrollToSection = () => {
    if (innovationSectionRef.current) {
      innovationSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  //state to manage navbar visibility
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      // Show the navbar if the user scrolls up
      if (currentScrollPosition < lastScrollPosition || currentScrollPosition < 10) {
        setShowNavbar(true);  // Show the navbar if the user scrolls up
      } else {
        setShowNavbar(false);
      }

      setLastScrollPosition(currentScrollPosition); //update scroll positionnnnnnnnnnnn
      };
      
      window.addEventListener('scroll', handleScroll);
      return () =>  window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPosition]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = {
    Services: [
      { title: 'Digital Transformation', items: ['Cloud Computing', 'AI & ML', 'Data Analytics'] },
      { title: 'Enterprise Solutions', items: ['ERP Services', 'CRM Solutions', 'Business Intelligence'] },
      { title: 'Cybersecurity', items: ['Security Operations', 'Risk Management', 'Compliance'] },
    ],
    Industries: [
      { title: 'Banking & Finance', items: ['Retail Banking', 'Investment Services', 'Insurance'] },
      { title: 'Healthcare', items: ['Digital Health', 'Medical Devices', 'Healthcare Analytics'] },
      { title: 'Manufacturing', items: ['Smart Manufacturing', 'Supply Chain', 'Quality Control'] },
    ],
    Insights: [
      { title: 'Research', items: ['Reports', 'Case Studies', 'Whitepapers'] },
      { title: 'Thought Leadership', items: ['Blogs', 'Articles', 'Newsletters'] },
      { title: 'Events', items: ['Webinars', 'Conferences', 'Workshops'] },
    ]
  };

  const ThemeSwitch = () => {
    if (!mounted) return null;

    return (
      <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
        <button
          onClick={handleThemeChange}
          className={`p-2 rounded-md ${theme === 'light' ? 'bg-white shadow-sm' : ''}`}
          aria-label="Light Mode"
        >
        {theme === 'light' ? <Moon className = "w-4 h-4" /> : < Sun className = "w-4 h-4" />}
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`p-2 rounded-md ${theme === 'dark' ? 'bg-gray-700 shadow-sm' : ''}`}
          aria-label="Dark Mode"
        >
          <Moon className="w-4 h-4" />
        </button>
        <button
          onClick={() => setTheme('system')}
          className={`p-2 rounded-md ${theme === 'system' ? 'bg-white dark:bg-gray-700 shadow-sm' : ''}`}
          aria-label="System Theme"
        >
          <Monitor className="w-4 h-4" />
        </button>
      </div>
    );
  };

  if (!mounted) return null;


  return (
    <div className="min-h-screen bg-white dark:bg-white transition-colors duration-300">
      <nav className={`bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed top-0 w-full z-50 shadow-sm transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-32">
                <span className="text-xl font-bold text-purple-700 dark:text-purple-400">PinnacleTech</span>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex">
              {Object.keys(menuItems).map((category) => (
                <div 
                  key={category}
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className="relative"
                >
                  <button 
                    className={`h-16 px-4 text-gray-700 dark:text-gray-300 hover:text-purple-800 dark:hover:text-purple-400 relative
                      ${hoveredCategory === category ? 'text-purple-800 dark:text-purple-400 border-b-2 border-purple-800 dark:border-purple-400' : ''}`}
                  >
                    {category}
                  </button>
                  
                  {hoveredCategory === category && (
                    <div 
                      className="absolute left-0 w-screen bg-white dark:bg-gray-800 border-b shadow-lg animate-fadeIn"
                      style={{ width: '100vw', left: '50%', transform: 'translateX(-50%)' }}
                      onMouseEnter={() => setHoveredCategory(category)}
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      <div className="max-w-7xl mx-auto p-8 grid grid-cols-3 gap-8">
                        {menuItems[category].map((section, idx) => (
                          <div key={idx} className="space-y-4">
                            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-400">{section.title}</h3>
                            <ul className="space-y-2">
                              {section.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-purple-800 dark:hover:text-purple-400 block py-1 transition-colors duration-150">
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <a href="#" className="h-16 px-4 flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-800 dark:hover:text-purple-400 transition-colors duration-150">
                About Us
              </a>
            </div>

            {/* Theme Switcher and Language */}
            <div className="flex items-center gap-4">
              <ThemeSwitch />
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150">
                <Globe className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {hoveredCategory && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          style={{ top: '64px' }}
        />
      )}

      {/* Main Content Area */}
  
      
        <div className="relative h-screen bg-gray-900 overflow-hidden">
          {/* Background Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
              <img
                src={slide.bgImage}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Main Content */}

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
                    <button onClick={scrollToSection} className="group inline-flex items-center bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors duration-300">
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
          </div>
        );
      };

      export default Home;