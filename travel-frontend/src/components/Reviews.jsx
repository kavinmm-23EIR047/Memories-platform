import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const videoReviews = [
  { video: "/videos/review2.mp4" },
  { video: "/videos/review1.mp4" },
     { video: "/videos/review4.mp4" },
        { video: "/videos/review5.mp4" },
   { video: "/videos/review3.mp4" },
];

const getInitials = (name = "") =>
  name
    .split(" ")
    .map((n) => n[0]?.toUpperCase())
    .join("")
    .slice(0, 2);

const Reviews = () => {
  const [textReviews, setTextReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/feedbacks`)
      .then((res) => res.json())
      .then((data) => setTextReviews(data))
      .catch((err) => {
        console.error("Failed to load feedbacks:", err);
        setTextReviews([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
 <section
      id="reviews"
      className="bg-[#f5f5f5] py-20 px-4 md:px-8 font-['Open_Sans']"
    >

      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 font-edu"
          style={{ color: "#ffcc00" }}
        >
          Reviews
        </h2>

        {/* 🎥 Video Reviews */}
        <div className="mb-16">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 40000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            {videoReviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative w-full aspect-video">
                    <video
                      className="absolute inset-0 w-full h-full object-cover rounded-xl"
                      src={review.video}
                      controls
                      playsInline
                      preload="metadata"
                    />
                  </div>
                  <div className="p-4 bg-gray-100 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {review.name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ✨ Text Reviews */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-center mb-6 font-mui">
            <span style={{ color: "#ffcc00" }}>Responsible</span>{" "}
            <span style={{ color: "#000200" }}>Reviews</span>
          </h3>

          {loading ? (
            <p className="text-center text-gray-500 font-cui">Loading reviews...</p>
          ) : textReviews.length === 0 ? (
            <p className="text-center text-gray-500 font-cui">
              No reviews yet. Be the first to leave one!
            </p>
          ) : (
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Navigation,Pagination, Autoplay]}
            >
              {textReviews.map((review, index) => {
  const rating =
    review.rating !== undefined && review.rating !== null
      ? parseFloat(review.rating)
      : Math.round((Math.random() * 1.5 + 3.5) * 2) / 2;

  return (
    <SwiperSlide key={index}>
  <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-[#fceabb] via-[#f8b500] to-[#ffdd95] shadow-md hover:shadow-xl transition duration-300">
    {/* Inner container with larger size */}
    <div className="bg-[#fffdf7] rounded-2xl p-8 min-h-[240px] flex flex-col justify-between">
      {/* Header with initials */}
      <div className="flex items-center mb-5">
        <div className="w-12 h-12 rounded-full bg-[#f8b500] flex items-center justify-center text-white font-bold mr-4 font-cui text-lg shadow-sm">
          {getInitials(review.name || "Anonymous")}
        </div>
        <div>
          <p className="font-semibold text-gray-900 font-mui text-lg">
            {review.name || "Anonymous"}
          </p>
          <div className="flex text-yellow-500 text-base mt-1">
            {[...Array(5)].map((_, i) =>
              i + 1 <= Math.floor(rating) ? (
                <FaStar key={i} />
              ) : i + 0.5 === rating ? (
                <FaStarHalfAlt key={i} />
              ) : (
                <FaRegStar key={i} />
              )
            )}
          </div>
        </div>
      </div>
      {/* Comment */}
      <p className="text-gray-1100 text-2xl leading-relaxed font-cui">
  “{review.comment}”
</p>
    </div>
  </div>
</SwiperSlide>


                );
              })}
            </Swiper>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default Reviews;
