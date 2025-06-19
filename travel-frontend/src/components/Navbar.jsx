import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../assets/logos/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Buses", href: "gallery" },
    { name: "Contact", href: "contact" },
  ];

  const handleNavClick = (href) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${href}`;
    } else {
      scrollToSection(href);
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(8,4,5,1)] shadow-lg h-32 font-montserrat">
      <div className="flex justify-between items-center h-full px-6 max-w-7xl mx-auto">
        {/* Desktop Logo */}
        <div className="hidden md:flex items-center space-x-3 h-full">
          <img src={logo} alt="Logo" className="h-28 object-contain" />
        </div>

        {/* Mobile Logo */}
        <div className="flex md:hidden justify-center w-full absolute top-4 left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Logo" className="h-24 object-contain" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50 relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#f1c709] text-4xl font-bold focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-[#f1c709] text-sm md:text-base lg:text-lg tracking-wide items-center h-full">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="hover:text-[#a7a3a0] transition-colors duration-200"
              >
                {link.name}
              </button>
            </li>
          ))}
          <li>
            <RouterLink
              to="/feedback"
              className="text-[#a7a3a0] cursor-pointer"
            >
              Feedback
            </RouterLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[rgba(8,4,5,1)] transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } z-40 flex flex-col justify-between pt-28 pb-16`}
      >
        <ul className="flex flex-col items-start pl-8 gap-8 text-lg text-[#f1c709] font-bold tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button onClick={() => handleNavClick(link.href)}>{link.name}</button>
            </li>
          ))}
          <li>
            <RouterLink to="/feedback" onClick={() => setMenuOpen(false)} className="text-[#a7a3a0]">
              Feedback
            </RouterLink>
          </li>
        </ul>

        <div className="text-center px-6 mt-12">
          <p className="text-gray-300 text-sm mb-4">
            © 2025 Memories Platform. All rights reserved.
          </p>
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="h-24 object-contain" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
