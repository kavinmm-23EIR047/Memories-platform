// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
// import { FiDownload } from "react-icons/fi";

// const videoList = [
//  "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1719050000/home3_a2tmdc.mp4",
//   "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1719050100/home1_imx7y3.mp4",
//   "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1719050200/home5_yqxdji.mp4"
// ];

// const Home = () => {
//   const [videoIndex, setVideoIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setVideoIndex((prev) => (prev + 1) % videoList.length);
//     }, 8000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div
//       className="h-[90vh] relative overflow-hidden flex flex-col justify-center items-center text-white mt-10"

//       style={{ backgroundColor: "rgb(44,21,4)" }} // ✅ Navbar background color
//     >
//       {/* 🎥 Video Background */}
//       <AnimatePresence mode="wait">
//         <motion.video
//           key={videoIndex}
//           src={videoList[videoIndex]}
//           autoPlay
//           muted
//           loop
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//         />
//       </AnimatePresence>

//       {/* 🌓 Light/Dark overlay filter */}
//      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent z-0" />

//       {/* 🌟 Foreground Content */}
//       <div className="relative z-10 text-center px-4">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-6xl font-pai font-normal text-[#f1c709] drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
//         >
//           Memories <span className="font-pai font-normal text-[#ffffff] drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">Platform</span>
//         </motion.h1>

// <motion.p
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   transition={{ delay: 0.5 }}
//   className="mt-4 text-lg md:text-2xl text-white font-mui text-center max-w-3xl mx-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
//   style={{
//     textShadow: '0 0 6px #ffffff, 0 0 12px #f1c709, 0 0 20px #f1c709',
//     animation: 'glowQuote 2s ease-in-out infinite',
//   }}
// >
//   “Collect Memories, Not Things.”
// </motion.p>



//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.7 }}
//           className="mt-6 text-lg md:text-xl text-[#f1c709] font-semibold font-edu drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
//         >
//           Explore All States
//         </motion.div>

//         {/* 📄 Brochure Button */}
//         <motion.a
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.9 }}
//           href="/brouchure.pdf"
//           download
//           className="mt-8 inline-flex items-center gap-2 px-6 py-2 rounded-full font-semibold shadow border border-yellow-200 bg-[#f1c306] text-[#010002] hover:scale-105 hover:shadow-lg transition duration-300"
//         >
//           <FiDownload className="text-xl" />
//           Download Brochure
//         </motion.a>

//         {/* 🔗 Social Icons */}
//         <div className="mt-6 flex gap-6 text-3xl justify-center">
//         <a
//     href="https://www.instagram.com/memoriesplatform_holidays?igsh=aG5iaWFuOHNjZWR1"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-white bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full hover:scale-110 transition duration-300 text-xl"
//   >
//     <FaInstagram />
//   </a>

//   {/* Threads (using image with same size & bg circle) */}
//   <a
//     href="https://www.threads.com/@memoriesplatform_holidays?invite=0 https://www.threads.net/@memoriesplatform_holidays"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="bg-black p-2 rounded-full hover:scale-110 transition duration-300"
//   >
//     <img
//       src="https://toppng.com/uploads/preview/instagram-threads-logo-white-logo-icon-hd-png-11688671430stcpk0vzgp.png"
//       alt="Threads"
//       className="w-5 h-5"
//     />
//   </a>

//   {/* WhatsApp */}
//   <a
//     href="https://wa.me/9629932787"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-white bg-green-500 p-2 rounded-full hover:scale-110 transition duration-300 text-xl"
//   >
//     <FaWhatsapp />
//   </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;





// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
// import { FiDownload } from "react-icons/fi";

// const videoList = [
//   "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1719050000/home3_a2tmdc.mp4",
//   "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1719050100/home1_imx7y3.mp4",
//   "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1719050200/home5_yqxdji.mp4"
// ];

// const Home = () => {
//   const [videoIndex, setVideoIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setVideoIndex((prev) => (prev + 1) % videoList.length);
//     }, 8000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div
//       className="h-[90vh] relative overflow-hidden flex flex-col justify-center items-center text-white mt-10"
//       style={{ backgroundColor: "rgb(44,21,4)" }}
//     >
//       {/* 🎥 Video Background */}
//       <AnimatePresence mode="wait">
//         <motion.video
//           key={videoIndex}
//           src={videoList[videoIndex]}
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//         />
//       </AnimatePresence>

//       {/* 🌓 Overlay Filter */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent z-0" />

//       {/* 🌟 Foreground Content */}
//       <div className="relative z-10 text-center px-4">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-6xl font-pai font-normal text-[#f1c709] drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
//         >
//           Memories{" "}
//           <span className="font-pai font-normal text-[#ffffff] drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">
//             Platform
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mt-4 text-lg md:text-2xl text-white font-mui text-center max-w-3xl mx-auto drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
//           style={{
//             textShadow: "0 0 6px #ffffff, 0 0 12px #f1c709, 0 0 20px #f1c709",
//             animation: "glowQuote 2s ease-in-out infinite"
//           }}
//         >
//           “Collect Memories, Not Things.”
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.7 }}
//           className="mt-6 text-lg md:text-xl text-[#f1c709] font-semibold font-edu drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
//         >
//           Explore All States
//         </motion.div>

//         {/* 📄 Brochure Button */}
//         <motion.a
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.9 }}
//           href="/brouchure.pdf"
//           download
//           className="mt-8 inline-flex items-center gap-2 px-6 py-2 rounded-full font-semibold shadow border border-yellow-200 bg-[#f1c306] text-[#010002] hover:scale-105 hover:shadow-lg transition duration-300"
//         >
//           <FiDownload className="text-xl" />
//           Download Brochure
//         </motion.a>

//         {/* 🔗 Social Icons */}
//         <div className="mt-6 flex gap-6 text-3xl justify-center">
//           <a
//             href="https://www.instagram.com/memoriesplatform_holidays?igsh=aG5iaWFuOHNjZWR1"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full hover:scale-110 transition duration-300 text-xl"
//           >
//             <FaInstagram />
//           </a>

//           {/* Threads */}
//           <a
//             href="https://www.threads.net/@memoriesplatform_holidays"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-black p-2 rounded-full hover:scale-110 transition duration-300"
//           >
//             <img
//               src="https://toppng.com/uploads/preview/instagram-threads-logo-white-logo-icon-hd-png-11688671430stcpk0vzgp.png"
//               alt="Threads"
//               className="w-5 h-5"
//             />
//           </a>

//           {/* WhatsApp */}
//           <a
//             href="https://wa.me/9629932787"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white bg-green-500 p-2 rounded-full hover:scale-110 transition duration-300 text-xl"
//           >
//             <FaWhatsapp />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const videoList = [
  "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1719050000/home3_a2tmdc.mp4",
  "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1719050100/home1_imx7y3.mp4",
  "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1719050200/home5_yqxdji.mp4"
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
      style={{ backgroundColor: "#691303" }}
    >
      {/* 🎥 Video Background */}
      <AnimatePresence mode="wait">
        <motion.video
          key={videoIndex}
          src={videoList[videoIndex]}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* 🌓 Overlay Filter */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent z-0" />

      {/* 🌟 Foreground Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-pai font-normal text-[#f1c709] drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
        >
          Memories{" "}
          <span className="font-pai font-normal text-[#ffffff] drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">
            Platform
          </span>
        </motion.h1>

        {/* 🌟 Slogan - Collect Memories */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-2xl md:text-3xl font-bold text-center px-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-yellow-300 drop-shadow-lg"
          style={{
            textShadow: '0 0 8px rgba(255,255,255,0.6), 0 0 16px rgba(241,199,9,0.8)',
            animation: 'pulse-glow 2.5s ease-in-out infinite'
          }}
        >
          “Collect Memories, Not Things.”
        </motion.p>

        {/* 🌍 Leading Trip Planner - Glow Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-2xl md:text-3xl font-extrabold text-center px-6 text-[#fffaf0]"
          style={{
            textShadow: '0 0 10px rgba(255, 240, 180, 0.6), 0 0 20px rgba(255, 215, 100, 0.8)',
            animation: 'goldenPulse 2.5s ease-in-out infinite',
          }}
        >
          Leading Trip Planner
        </motion.p>

        {/* 💡 CSS Animations */}
        <style>
          {`
          @keyframes goldenPulse {
            0%, 100% {
              text-shadow: 0 0 10px rgba(255,235,130,0.8), 0 0 18px rgba(241,199,9,0.85);
            }
            50% {
              text-shadow: 0 0 14px rgba(255,255,180,0.9), 0 0 24px rgba(255,235,100,1);
            }
          }
          `}
        </style>

        {/* 🌍 Explore All States */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-lg md:text-xl text-[#f1c709] font-semibold font-edu drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
        >
          Explore All States
        </motion.div>

        {/* 📄 Brochure Download */}
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          href="/brouchure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-6 py-2 text-lg md:text-xl font-bold text-[#1a1200] bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
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
            aria-label="Instagram"
            className="text-white bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full hover:scale-110 transition duration-300 text-xl"
          >
            <FaInstagram />
          </a>

          {/* Threads */}
          <a
            href="https://www.threads.net/@memoriesplatform_holidays"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
            className="bg-black p-2 rounded-full hover:scale-110 transition duration-300"
          >
            <img
              src="https://toppng.com/uploads/preview/instagram-threads-logo-white-logo-icon-hd-png-11688671430stcpk0vzgp.png"
              alt="Threads"
              className="w-5 h-5"
            />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/9629932787"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white bg-green-500 p-2 rounded-full hover:scale-110 transition duration-300 text-xl"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

