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
    <section id="reviews" className="py-12 px-4 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
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
          <h3 className="text-2xl font-bold text-center mb-6">
            <span style={{ color: "#ffcc00" }}>Responsible</span>{" "}
            <span style={{ color: "#000200" }}>Reviews</span>
          </h3>

          {loading ? (
            <p className="text-center text-gray-500">Loading reviews...</p>
          ) : textReviews.length === 0 ? (
            <p className="text-center text-gray-500">
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
              modules={[Pagination, Autoplay]}
            >
              {textReviews.map((review, index) => {
                const rating =
                  review.rating !== undefined && review.rating !== null
                    ? parseFloat(review.rating)
                    : Math.round((Math.random() * 1.5 + 3.5) * 2) / 2;

                return (
                  <SwiperSlide key={index}>
                    <div
                      className="p-7 rounded-2xl shadow-sm h-full flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]"
                      style={{
                        backgroundColor: "#fff9e6",
                        border: "1px solid #ffcc00",
                      }}
                    >
                      <div className="flex items-center mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center font-bold mr-3"
                          style={{
                            backgroundColor: "#ffcc00",
                            color: "#000200",
                          }}
                        >
                          {getInitials(review.name || "Anonymous")}
                        </div>
                        <div>
                          <p
                            className="font-semibold"
                            style={{ color: "#000200" }}
                          >
                            {review.name || "Anonymous"}
                          </p>
                          <div className="flex text-yellow-500 text-sm">
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
                      <p className="text-gray-800">{review.comment}</p>
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
