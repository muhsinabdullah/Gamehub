import { NavLink, Link } from "react-router";
import { Menu, X, Gamepad2, User, Download } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <Gamepad2 size={18} /> },
    { name: "All Games", path: "/games", icon: <Gamepad2 size={18} /> },
    { name: "My Profile", path: "/profile", icon: <User size={18} /> },
    { name: "My Installations", path: "/installations", icon: <Download size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-base-100/80 border-b border-base-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Gamehub Logo" className="w-10 h-10" />
            <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Gamehub
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-1 font-medium transition-all
                  ${
                    isActive
                      ? "text-primary"
                      : "text-base-content/70 hover:text-primary"
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}

            {/* Login Button */}
            <Link
              to="/login"
              className="px-5 py-2 rounded-xl font-semibold text-white
              bg-gradient-to-r from-primary to-secondary
              hover:scale-105 transition-transform shadow-lg"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden btn btn-ghost"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-base-100 border-t border-base-300">
          <div className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg
                  ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-base-200"
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-4 py-2 rounded-xl font-semibold text-white
              bg-gradient-to-r from-primary to-secondary"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
