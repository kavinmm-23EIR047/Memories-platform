import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const videoList = [
  "/videos/home1.mp4",
  "/videos/home3.mp4",
  "/videos/home5.mp4"
];

const Home = () => {
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videoList.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="h-[90vh] relative overflow-hidden flex flex-col justify-center items-center text-white mt-10"

      style={{ backgroundColor: "rgba(8,4,5,1)" }} // ✅ Navbar background color
    >
      {/* 🎥 Video Background */}
      <AnimatePresence mode="wait">
        <motion.video
          key={videoIndex}
          src={videoList[videoIndex]}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* 🌓 Light/Dark overlay filter */}
     <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent z-0" />

      {/* 🌟 Foreground Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-[#f1c709] drop-shadow-lg"
        >
          Memories Platform
        </motion.h1>

<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="mt-4 text-lg md:text-2xl text-white font-semibold italic text-center max-w-3xl mx-auto"
  style={{
    textShadow: '0 0 6px #ffffff, 0 0 12px #f1c709, 0 0 20px #f1c709',
    animation: 'glowQuote 2s ease-in-out infinite',
  }}
>
  “Collect Memories, Not Things.”
</motion.p>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-lg md:text-xl text-[#f1c709] font-semibold"
        >
          Explore All States
        </motion.div>

        {/* 📄 Brochure Button */}
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          href="/brouchure.pdf"
          download
          className="mt-8 inline-flex items-center gap-2 px-6 py-2 rounded-full font-semibold shadow border border-yellow-200 bg-[#f1c306] text-[#010002] hover:scale-105 hover:shadow-lg transition duration-300"
        >
          <FiDownload className="text-xl" />
          Download Brochure
        </motion.a>

        {/* 🔗 Social Icons */}
        <div className="mt-6 flex gap-6 text-3xl justify-center">
          <a
            href="https://www.instagram.com/memoriesplatform_holidays?igsh=aG5iaWFuOHNjZWR1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 hover:scale-110 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-500 hover:scale-110 transition duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="https://wa.me/9629932787"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400 hover:scale-110 transition duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
