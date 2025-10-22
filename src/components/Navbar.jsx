import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'; // Hamburger & Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    'Home',
    'Customer',
    'Captain',
    'Search Ride',
    'About',
    'Safety',
    'Help',
  ];

  return (
    <nav className="bg-[#f8f6ff] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/Sa.png"
              alt="SagaRYD Logo"
              className="h-12 w-28 rounded-2xl hover:scale-105 transition"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-violet-700 font-semibold">
            {menuItems.map((item) => (
              <li key={item} className="relative cursor-pointer list-none group">
                {item}
                <span className="absolute left-0 bottom-[-3px] w-0 h-[3px] bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
            <button className="bg-violet-700 hover:bg-violet-800 text-white px-5 py-2 rounded-full transition transform hover:scale-105">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-violet-700 focus:outline-none"
            >
              {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#f8f6ff] px-4 pt-2 pb-4 space-y-2 text-violet-700 font-semibold">
          {menuItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer list-none border-b border-violet-200 py-2"
            >
              {item}
            </li>
          ))}
          <button className="w-full bg-violet-700 hover:bg-violet-800 text-white px-5 py-2 rounded-full transition transform hover:scale-105">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
