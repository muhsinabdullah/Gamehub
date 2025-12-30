import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Games", path: "/all-games" },
    { name: "My Profile", path: "/profile" },
    { name: "My Installation", path: "/installation" },
  ];

  return (
    <nav className={`shadow-md fixed w-full z-50 transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img src={logo} alt="Gamehub Logo" className="h-10 w-auto" />
            </NavLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium hover:text-indigo-500 transition ${
                    isActive ? "text-indigo-600" : darkMode ? "text-white" : "text-gray-800"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Dark/Light Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Login */}
            <NavLink
              to="/login"
              className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
            >
              Login
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden px-4 pt-2 pb-4 space-y-2 transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block font-medium hover:text-indigo-500 transition ${
                  isActive ? "text-indigo-600" : darkMode ? "text-white" : "text-gray-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="flex items-center justify-between mt-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
            >
              Login
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
