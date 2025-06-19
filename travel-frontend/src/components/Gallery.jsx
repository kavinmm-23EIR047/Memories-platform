import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import bus1 from "../assets/gallery/bus1.jpeg";
import bus2 from "../assets/gallery/bus2.jpeg";
import bus3 from "../assets/gallery/bus3.jpeg";
import bus4 from "../assets/gallery/bus4.jpeg";
import bus5 from "../assets/gallery/bus5.jpeg";
import bus6 from "../assets/gallery/bus6.jpeg";
import bus7 from "../assets/gallery/bus7.jpeg";
import bus8 from "../assets/gallery/bus8.jpeg";
import bus9 from "../assets/gallery/bus9.jpeg";
import bus10 from "../assets/gallery/bus10.jpeg";

const buses = [
  { id: "bus1", name: "RKG", image: bus1 },
  { id: "bus2", name: "Sabari", image: bus2 },
  { id: "bus6", name: "Mano", image: bus6 },
  { id: "bus10", name: "Pettakarran", image: bus10 },
  { id: "bus9", name: "Jai Sri", image: bus9 },
  { id: "bus4", name: "Murugan", image: bus4 },
  { id: "bus3", name: "Nps", image: bus3 },
  { id: "bus5", name: "Chandru", image: bus5 },
  { id: "bus8", name: "Senthur", image: bus8 },
  { id: "bus7", name: "Traveller", image: bus7 },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-12 px-4 md:px-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-10 max-w-3xl mx-auto shadow-md text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#060304] font-['Poppins'] p-4 md-7">
          Our <span className="text-[#fecc00] font-semibold">Bus Gallery</span>
        </h2>

        <Swiper
          pagination={{
            el: ".custom-swiper-pagination",
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          modules={[Pagination, Navigation, Autoplay]}
          className="pb-12"
        >
          {buses.map((bus) => (
            <SwiperSlide key={bus.id}>
              <div className="relative w-full h-[400px] max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={bus.image}
                  alt={bus.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-center p-6 text-white text-center">
                  <h3 className="text-4xl font-bold mb-6">{bus.name}</h3>
                  <Link
                    to={`/gallery/${bus.id}`}
                    className="bg-gradient-to-r from-[#060304] via-[#fecc00] to-[#060304] 
                    text-white px-6 py-3 rounded-md 
                    hover:opacity-90 transition 
                    bg-[length:200%_200%] animate-gradient-x"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Target */}
        <div className="custom-swiper-pagination mt-6 flex justify-center items-center gap-2" />
      </div>
    </section>
  );
};

export default Gallery;
