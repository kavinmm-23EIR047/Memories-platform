import { useRef, useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Services from "./Services";
import Reviews from "./Reviews";
import Contact from "./Contact";

const MainScrollPage = () => {
  const sectionsRef = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false); // Modal state

  const scrollTo = (index) => {
    if (index >= 0 && index < sectionsRef.current.length) {
      sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const index = sectionsRef.current.findIndex(
        (section) =>
          section &&
          section.getBoundingClientRect().top >= 0 &&
          section.getBoundingClientRect().top < window.innerHeight / 2
      );
      if (index !== -1) setCurrentSection(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Sections */}
      <section ref={(el) => (sectionsRef.current[0] = el)} id="home" className="min-h-screen scroll-mt-24"><Home /></section>
      <section ref={(el) => (sectionsRef.current[1] = el)} id="about" className="min-h-screen scroll-mt-24"><About /></section>
      <section ref={(el) => (sectionsRef.current[2] = el)} id="services" className="min-h-screen scroll-mt-24"><Services /></section>
      <section ref={(el) => (sectionsRef.current[3] = el)} id="gallery" className="min-h-screen scroll-mt-24"><Gallery /></section>
      <section ref={(el) => (sectionsRef.current[4] = el)} id="reviews" className="min-h-screen scroll-mt-24"><Reviews /></section>
      <section ref={(el) => (sectionsRef.current[5] = el)} id="contact" className="min-h-screen scroll-mt-24"><Contact /></section>

      {/* Scroll Arrows */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
        {currentSection > 0 && (
          <button
            onClick={() => scrollTo(currentSection - 1)}
            className="bg-white border-4 border-yellow-400 text-yellow-400 w-14 h-14 rounded-full flex items-center justify-center text-[32px] font-extrabold animate-glow-yellow shadow-lg transition"
            title="Scroll Up"
          >
            ↑
          </button>
        )}

        {currentSection < sectionsRef.current.length - 1 && (
          <button
            onClick={() => scrollTo(currentSection + 1)}
            className="bg-white border-4 border-yellow-400 text-yellow-400 w-14 h-14 rounded-full flex items-center justify-center text-[32px] font-extrabold animate-glow-yellow shadow-lg transition"
            title="Scroll Down"
          >
            ↓
          </button>
        )}
      </div>

      {/* 👉 Enquiry Now Button */}
  <button
  onClick={() => setIsEnquiryOpen(true)}
  className="fixed top-1/2 right-5 transform -translate-y-1/2 rotate-90 origin-right bg-yellow-400 text-white font-bold py-2 px-4 rounded-l-xl shadow-lg z-[9999] animate-glow-yellow hover:bg-yellow-500"
>
  Enquiry Now
</button>

      {/* ✨ Modal Popup */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-2xl max-w-2xl w-full relative animate-fade-in">
            <button
              className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-red-500"
              onClick={() => setIsEnquiryOpen(false)}
            >
              ×
            </button>
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
};


export default MainScrollPage;
