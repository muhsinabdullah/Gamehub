import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "All Games", path: "/games" },
    { name: "My Profile", path: "/profile" },
    { name: "My Installations", path: "/installations" },
    { name: "Login", path: "/login" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Gamehub Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Gamehub
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 text-gray-700 font-medium">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-purple-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" target="_blank" className="hover:text-blue-600 transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" target="_blank" className="hover:text-pink-500 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" target="_blank" className="hover:text-blue-400 transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" target="_blank" className="hover:text-red-600 transition-colors">
            <Youtube size={24} />
          </a>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-200 mt-4 py-4 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Gamehub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
