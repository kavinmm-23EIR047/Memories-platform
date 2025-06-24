import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Assets
import collegeImg from "../assets/logos/collegeservice.jpeg";
import familyImg from "../assets/logos/familyservice.jpg";
import corporateImg from "../assets/logos/corporateservice.jpg";
import schoolImg from "../assets/logos/schoolservice.jpeg";



import celebel1 from '../assets/logos/celebel1.jpg';
import celebel2 from '../assets/logos/celebel2.jpg';
import celebel3 from '../assets/logos/celebel3.jpg';

import achievementImage from '../assets/logos/acheive.jpg'; // adjust path as needed

import img1 from '../assets/gallery/1.jpeg';
import img2 from '../assets/gallery/2.jpeg';
import img3 from '../assets/gallery/3.jpeg';
import img4 from '../assets/gallery/4.jpeg';
import img5 from '../assets/gallery/5.jpeg';
import img6 from '../assets/gallery/6.jpeg';
import img7 from '../assets/gallery/7.jpeg';
import img8 from '../assets/gallery/8.jpeg';
import img9 from '../assets/gallery/9.jpeg';
import img10 from '../assets/gallery/10.jpeg';
import img11 from '../assets/gallery/11.jpeg';
import img12 from '../assets/gallery/12.jpeg';
import img13 from '../assets/gallery/13.jpeg';
import img14 from '../assets/gallery/14.jpeg';
import img15 from '../assets/gallery/15.jpeg';
import img16 from '../assets/gallery/16.jpeg';
import img17 from '../assets/gallery/17.jpeg';
import img18 from '../assets/gallery/18.jpeg';
import img19 from '../assets/gallery/19.jpeg';
import img20 from '../assets/gallery/20.jpeg';
import img21 from '../assets/gallery/21.jpeg';

const galleryImages = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13, img14,
  img15, img16, img17, img18, img19, img20, img21,
];

// Data
const services = [
  { title: "College Trips", image: collegeImg },
   { title: "School Trip", image: schoolImg },
  { title: "Family Tour Packages", image: familyImg },
  { title: "Corporate Travel", image: corporateImg },
 
];

const headingTexts = [
  "South Indian",
  "North Indian",
  "Beach Getaways",
  "Cultural Heritage",
];

const packageCards = [
     {
    title: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1572886034137-b77ee990d594?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Experience Goa’s beaches, nightlife, Panjim markets, and historic forts in a relaxing 4-day trip.",
    videoUrl: "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1719050167/tn_w74k94.mp4",
    pdfUrl: "/pdfs/goa-package.pdf",
    link: "https://www.instagram.com/reel/DIOdJ4wpZii/?igsh=b3p1NXduaGs2ZXhv",
  },
  {
    title: "Kerala Explorer",
    image: "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Explore Vagamon, Cochin, Munnar, Wayanad, and Alleppey in this 5-day premium Kerala package.",
    videoUrl: "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1719050167/kerala_ltmprk.mp4",
    pdfUrl: "/pdfs/kerala-package.pdf",
    link: "https://www.instagram.com/reel/DDYm8g7JLSE/?igsh=MTZ1azZ2OGtmeGtuNw==",
  },
  {
    title: "Karnataka Heritage",
    image: "https://images.unsplash.com/photo-1631714712922-eaa39e4452fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Discover Mysore, Coorg, Hampi, and Gokarna in this 7-day Karnataka heritage tour.",
    videoUrl: "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1719050167/karnataka_atreyf",
    pdfUrl: "/pdfs/karnataka-package.pdf",
    link: "https://www.instagram.com/reel/DDZ3kECyMHz/?igsh=MTduYmZ5aG5zNnJqYQ==",
  },
  {
    title: "Goa Getaway",
    image: "https://images.unsplash.com/photo-1682743710558-b338ba285925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
    description:
      "Experience Goa’s beaches, nightlife, Panjim markets, and historic forts in a relaxing 4-day trip.",
    videoUrl:"https://res.cloudinary.com/dpdhfrk2t/video/upload/v1719050167/goa_bxy1hq",
    pdfUrl: "/pdfs/goa-package.pdf",
    link: "https://www.instagram.com/reel/DIOdJ4wpZii/?igsh=b3p1NXduaGs2ZXhv",
  },
  
];
{/* Image + Link Data */}
const celebrationData = [
  {
    image: celebel1,
    link: 'https://www.instagram.com/reel/DGQyHrCT7-h/?igsh=azhscGU1NnR4eWx5',
  },
  {
    image: celebel2,
    link: 'https://www.instagram.com/reel/DFwiyFlpeLy/?igsh=Y3ppY2JrNTF3aTZ0',
  },
  {
    image: celebel3,
    link: 'https://www.instagram.com/reel/DEZ46hZJijQ/?igsh=Zm5pbnI0YzIzMm42',
  },
];

// Card Component
const CardItem = ({ pkg }) => (
  <div className="bg-[#fffef8] shadow-lg rounded-lg overflow-hidden">
    <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-bold text-[#302d00] mb-2">{pkg.title}</h3>
      <p className="text-sm text-[#7c7a69] mb-3">{pkg.description}</p>
      <div className="aspect-video mb-3">
        <video
          src={pkg.videoUrl}
          controls
          className="w-full h-full object-cover rounded"
        />
      </div>
      <a
        href={pkg.pdfUrl}
        download
        className="bg-[#fef3c7] text-[#4a3f00] px-3 py-1 rounded text-sm font-medium hover:bg-[#fde68a] transition"
      >
        Download Package PDF
      </a>
      <a
        href={pkg.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-3 bg-[#facc15] text-[#1c1b00] px-4 py-2 rounded text-center hover:bg-[#eab308] transition"
      >
        Explore
      </a>
    </div>
  </div>
);


const Services = () => {
  const navigate = useNavigate();
  const [headingIndex, setHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadingIndex((prev) => (prev + 1) % headingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
  id="services"
  className="py-20 md:py-28 px-4 md:px-10 bg-gray-50 text-center font-['Open_Sans']"
>
  <div className="max-w-6xl mx-auto space-y-8">
    <h2 className="text-4xl md:text-5xl font-bold text-[#fecc00] font-mai">
      Our <span className="text-[#060304] font-semibold">Services</span>
    </h2>

        <Swiper
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="pb-12"
        >
         {services.map((service, index) => (
  <SwiperSlide key={index}>
    <div className="relative rounded-xl overflow-hidden shadow-md group transition-all duration-500">
      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Overlay (default dark, becomes gradient on hover) */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-gradient-to-tr group-hover:from-[#fecc00]/80 group-hover:to-[#ffb347]/90 transition-all duration-500 flex items-center justify-center">
        <h3 className="text-xl font-semibold text-white group-hover:text-black text-center px-4 font-mai drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)] group-hover:drop-shadow-none transition-all duration-500">
          {service.title}
        </h3>
      </div>
    </div>
  </SwiperSlide>
))}

        </Swiper>

        <motion.h2
          key={headingIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-[#fdcc00] mb-8 text-center font-edu"
        >
          {headingTexts[headingIndex]}{" "}
          <span className="text-[#070000] font-mui">Package Details</span>
        </motion.h2>

        <div className="block md:hidden font-mui">
          <Swiper
            autoplay={{ delay: 12000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {packageCards.map((pkg, index) => (
              <SwiperSlide key={index}>
                <CardItem pkg={pkg} navigate={navigate} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-4 font-mui">
          {packageCards.map((pkg, index) => (
            <CardItem key={index} pkg={pkg} navigate={navigate} />
          ))}
        </div>

        {/* Celebrations Gallery */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#060304] mt-16 mb-8 text-center font-mui">
          Celebrations <span className="text-[#fecc00] font-semibold font-edu">Gallery</span>
        </h2>

        <div className="block md:hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000 }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {celebrationData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer aspect-square">
                  <img
                    src={item.image}
                    alt={`Celebration ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition duration-300">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-3xl hover:text-pink-500 transition"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden md:grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {celebrationData.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer aspect-square"
            >
              <img
                src={item.image}
                alt={`Celebration ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition duration-300">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl hover:text-pink-500 transition"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#060304] mt-16 mb-6 text-center font-edu">
          Our <span className="text-[#fecc00] font-semibold font-mui">Achievements</span>
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10 font-cui">
          Over the years, we’ve celebrated milestones that reflect our strength, unity, and determination. 
          From setting records to inspiring communities, every achievement tells our story of passion and perseverance.
        </p>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 group">
            <a
              href="https://www.instagram.com/reel/DCePyl6otRU/?igsh=MWwwdW9vNGR1Zzg0MQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 text-white bg-black/60 p-2 rounded-full z-10 transition duration-300 group-hover:bg-gradient-to-tr group-hover:from-pink-500 group-hover:to-yellow-400"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <img
              src={achievementImage}
              alt="Record of Munnar – Single Stroke with 90 Jeeps"
              className="w-full h-60 object-cover"
            />
            <div className="bg-white p-6">
              <h3 className="text-xl font-semibold text-[#060304] mb-2 font-mui">
                Record of Munnar – <span className="font-edu text-[#fecc00]">Single Stroke with 90 Jeeps</span>
              </h3>
              <p className="text-gray-600 text-sm font-cui">
                Our team created history in Munnar by pulling 90 jeeps in a single stroke — a demonstration of incredible coordination, power, and team spirit.
              </p>
            </div>
          </div>
        </div>

        {/* Happy Moments Gallery */}
        <h2 className="text-2xl md:text-3xl text-[#060304] mt-16 mb-8 text-center font-edu">
          Happy <span className="text-[#fecc00] text-2xl md:text-3xl font-semibold font-mui">Moments Gallery</span>
        </h2>

        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 2500 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination,Navigation, Autoplay]}
        >
          {galleryImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative group rounded-xl overflow-hidden shadow-lg">
                <img
                  src={img}
                  alt={`Happy ${index + 1}`}
                  className="w-full h-60 object-cover rounded-xl transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
