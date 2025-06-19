import { FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";
import waveImage from "../assets/logos/footer.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#040100] text-white pt-10">
      
      {/* Decorative Wave Background */}
      <div
        className="w-full h-28 sm:h-32 md:h-40 lg:h-52 xl:h-56 2xl:h-60 bg-no-repeat bg-top bg-contain"
        style={{
          backgroundImage: `url(${waveImage})`,
        }}
      />

      {/* Footer Main Content */}
      <div className="px-6 py-10 relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-yellow-400">Memories Platform</h2>
          <p className="text-gray-300 leading-relaxed">
            Travel beyond boundaries with Memories Platform. Discover unforgettable holiday experiences crafted just for you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#about" className="hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="#services" className="hover:text-yellow-300 transition">Services</a></li>
            <li><a href="#reviews" className="hover:text-yellow-300 transition">Reviews</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Contact Us</h3>
          <p className="text-gray-300 mb-2">Phone: <a href="tel:+919629932787" className="hover:text-yellow-300 transition">+91 96299 32787</a></p>
          <p className="text-gray-300 mb-4">Email: <a href="mailto:memoriesplatform@gmail.com" className="hover:text-yellow-300 transition">memoriesplatform@gmail.com</a></p>

          <div className="flex gap-5 text-2xl mt-2">
            <a href="https://wa.me/9629932787" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp className="text-green-500 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/memoriesplatform_holidays?igsh=aG5iaWFuOHNjZWR1" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-pink-500 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-red-500 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-xs mt-10 border-t border-yellow-900 pt-4 px-4">
        &copy; {new Date().getFullYear()} Memories Platform. All rights reserved. Developed by{" "}
        <span className="text-yellow-300 font-medium">AK WebFlair Technologies</span>.
      </div>
    </footer>
  );
};

export default Footer;