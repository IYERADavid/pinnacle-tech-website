import React from "react";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const footerLinks = {
    Services: [
      "Digital Transformation",
      "IT Consulting",
      "Managed Services",
      "Cloud Solutions",
      "Cybersecurity",
    ],
    Industries: [
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Retail",
      "Technology",
    ],
    Company: ["About Us", "Careers", "News & Media", "Investors", "Contact"],
    Resources: ["Case Studies", "Whitepapers", "Blog", "Events", "Support"],
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Contact Us Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Contact Us</h3>
              <p>
                Email: <a href="mailto:pinnacletech6@gmail.com" className="hover:text-purple-400">pinnacletech6@gmail.com</a>
              </p>
              <p>
                Phone: <a href="tel:+250798697626" className="hover:text-purple-400">+250 798 697 626</a>
              </p>
              <p>Address: KG 403 St, Kigali, Rwanda</p>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Follow Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-purple-400" aria-label="LinkedIn">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://x.com/PinnacleTech6" className="hover:text-purple-400" aria-label="Twitter">
                  <FaXTwitter size={24} />
                </a>
                <a href="https://www.instagram.com/pinnacle_tech6/" className="hover:text-purple-400" aria-label="Instagram">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Legal</h3>
              <div className="flex space-x-4">
                <a href="/privacy-policy" className="hover:text-purple-400">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-purple-400">Terms of Service</a>
                <a href="/cookie-policy" className="hover:text-purple-400">Cookie Policy</a>
              </div>
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="text-center mt-8">
            © {new Date().getFullYear()} Pinnacle Tech. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
