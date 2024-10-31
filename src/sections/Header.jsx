/* eslint-disable no-unused-vars */
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-4 text-sm">
          <a href="#" className="hover:text-purple-400">Investors</a>
          <a href="#" className="hover:text-purple-400">News & Media</a>
        </div>
        <div className="flex space-x-4 text-sm">
          <a href="#" className="hover:text-purple-400">Global</a>
          <button className="hover:text-purple-400">Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;