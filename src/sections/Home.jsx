import { useState, useEffect } from 'react';
import { Moon, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import ai_powered from "../assets/images/ai_powered.jpg"
import 'aos/dist/aos.css';
import virtual_reality from "../assets/images/virtual_reality.jpg";
import block_chain from "../assets/images/block_chain.jpg";
import PropTypes from 'prop-types';

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

  const [mounted, setMounted] = useState(false);
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
  const { theme, setTheme } = useTheme();


  const scrollToSection = () => {
    if (innovationSectionRef.current) {
      innovationSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  // state to manage navbar visibility
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      // show the navbar if the user scrolls up
      if (currentScrollPosition < lastScrollPosition || currentScrollPosition < 10) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPosition]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Language Selector Component
  const LanguageSelector = () => {
    const languages = [
      { code: 'en', name: 'English' },
      { code: 'fr', name: 'Français' },
    ];

    return (
      <div className="relative">
        <button
          onClick={() => setIsLanguageSelectorOpen(!isLanguageSelectorOpen)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
        >
          <Globe className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>
        {isLanguageSelectorOpen && (
          <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setIsLanguageSelectorOpen(false); // close the selector
                }}
                className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  lang.code ? 'font-bold' : ''
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <nav
        className={`bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed top-0 w-full z-50 shadow-sm transition-transform duration-300 ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-32">
                <span className="text-xl font-bold text-purple-700 dark:text-purple-500">PinnacleTech</span>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex">
              <a
                href="#servicesSectionRef"
                className="h-16 px-4 flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-800 dark:hover:text-purple-400 transition-colors duration-150"
              >
                Services
              </a>
              <a
                href="#industrySectionRef"
                className="h-16 px-4 flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-800 dark:hover:text-purple-400 transition-colors duration-150"
              >
                Industries
              </a>
              <a
                href="#innovationSectionRef"
                className="h-16 px-4 flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-800 dark:hover:text-purple-400 transition-colors duration-150"
              >
                Insights
              </a>
              <a
                href="#aboutSectionRef"
                className="h-16 px-4 flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-800 dark:hover:text-purple-400 transition-colors duration-150"
              >
                About Us
              </a>
            </div>

            {/* theme switcher and language */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleThemeChange}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
              >
                {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </nav>

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
                  <button
                    onClick={scrollToSection}
                    className="group inline-flex items-center bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors duration-300"
                  >
                    {slide.ctaText}
                    <i className="fa-solid fa-chevron-right ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  innovationSectionRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default Home;