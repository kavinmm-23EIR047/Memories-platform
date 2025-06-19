import { motion } from "framer-motion";
import aboutImage from "../assets/logos/about.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f5f5f5] py-20 px-4 md:px-8 font-['Open_Sans']"
    >
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#fecc00] font-['Poppins']">
            About <span className="text-[#060304] font-semibold">Us</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Learn more about who we are and why we do what we do.
          </p>
        </div>

        {/* Image + Short About */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.img
            src={aboutImage}
            alt="About Bus"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:max-w-md rounded-xl shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-[#060304]"
          >
            <p className="text-lg leading-relaxed text-gray-700 font-medium text-center">
              We provide <span className="text-amber-600 font-semibold">premium bus services</span> for college IVs, school trips, family vacations, and group events across South India. Our commitment is to safety, comfort, and memorable journeys.
            </p>
          </motion.div>
        </div>

  {/* Card Grid */}
<div className="grid md:grid-cols-3 gap-8">
  {/* Mission */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="bg-[#060304] border border-[#a7a1a1] backdrop-blur-md bg-opacity-90 p-6 rounded-2xl shadow-md"
  >
    <h3 className="relative text-center text-2xl font-semibold text-[#fecc00] font-['Poppins'] mb-6 pb-2 after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0 after:w-2/3 after:border-b-[2px] after:border-[#a7a1a1]">
      Our Mission
    </h3>
  <p className="text-[#a7a1a1] text-base leading-relaxed text-center">
      To deliver safe, reliable, and memorable travel experiences across South India with excellent customer service and top-class vehicles.
    </p>
  </motion.div>

  {/* Vision */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="bg-[#060304] border border-[#a7a1a1] backdrop-blur-md bg-opacity-90 p-6 rounded-2xl shadow-md"
  >
    <h3 className="relative text-center text-2xl font-semibold text-[#fecc00] font-['Poppins'] mb-6 pb-2 after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0 after:w-2/3 after:border-b-[2px] after:border-[#a7a1a1]">
      Our Vision
    </h3>
 <p className="text-[#a7a1a1] text-base leading-relaxed text-center">
      To become the most trusted name in travel for South India, setting new standards in comfort, convenience, and customer satisfaction.
    </p>
  </motion.div>

  {/* About Me */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    className="bg-[#060304] border border-[#a7a1a1] backdrop-blur-md bg-opacity-90 p-6 rounded-2xl shadow-md"
  >
    <h3 className="relative text-center text-2xl font-semibold text-[#fecc00] font-['Poppins'] mb-6 pb-2 after:content-[''] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0 after:w-2/3 after:border-b-[2px] after:border-[#a7a1a1]">
      About Me
    </h3>
  <p className="text-[#a7a1a1] text-base leading-relaxed text-center">
      I'm Kavin MM, passionate about building tech-powered platforms that create impact. As the founder of AK WebFlair, I focus on delivering innovative solutions for digital growth and user-centric design.
    </p>
  </motion.div>
</div>


      </div>
    </section>
  );
};

export default About;
