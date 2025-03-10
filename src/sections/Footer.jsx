/* eslint-disable no-unused-vars */
import React from "react";


const Footer = () => {
  const footerLinks = {
    Services: [
      "Digital Transformation",
      "IT Consulting",
      "Managed Services",
      "Cloud Solutions",
      "Cybersecurity"
    ],
    Industries: [
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Retail",
      "Technology"
    ],
    Company: [
      "About Us",
      "Careers",
      "News & Media",
      "Investors",
      "Contact"
    ],
    Resources: [
      "Case Studies",
      "Whitepapers",
      "Blog",
      "Events",
      "Support"
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="" className="text-gray-400 hover:text-purple-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
           <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Email: <a href="mailto:pinnacletech6@gmail.com" className="text-gray-400 hover:text-purple-400">pinnacletech6@gmail.com</a></p>
              <p>Phone: <a href="tel:+250 798 697 626" className="text-gray-400 hover:text-purple-400">+250 798 697 626</a></p>
              <p>Address: 24V3+JJH, Kigali, Rwanda</p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="text-gray-400 text-sm">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-purple-400">LinkedIn</a>
                  <a href="#" className="text-gray-400 hover:text-purple-400">Twitter</a>
                  <a href="#" className="text-gray-400 hover:text-purple-400">Instagram</a>
                </div>
              </div>

              <div className="text-gray-400 text-sm">
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <div className="flex space-x-4">
                  <a href="privacy-policy" className="text-gray-400 hover:text-purple-400">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-purple-400">Terms of Service</a>
                  <a href="#" className="text-gray-400 hover:text-purple-400">Cookie Policy</a>
                </div>
              </div>
            </div>

            <div className="text-gray-400 text-sm">
              © 2025 Pinnacle Tech. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;