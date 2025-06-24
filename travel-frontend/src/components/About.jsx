import { motion } from "framer-motion";
import aboutImage from "../assets/logos/about.jpeg";
import {
  Target,
  Eye,
  User2,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f5f5f5] py-20 px-4 md:px-8 font-['Open_Sans']"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#fecc00] font-edu">
            About <span className="text-[#060304] font-semibold">Us</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto font-hmu">
            Learn more about who we are and why we do what we do.
          </p>
        </motion.div>

        {/* Image + Description */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.img
            src={aboutImage}
            alt="About Bus"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:max-w-md rounded-2xl shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center"
          >
            <p className="text-lg leading-relaxed text-gray-700 font-medium font-mui">
              We provide <span className="text-amber-600 font-semibold">budget-friendly premium packages</span> for college IVs, school trips, family vacations, and group events across South India. Our focus: safety, comfort & unforgettable journeys.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[rgb(44,21,4)] border border-[#fecc00]/30 backdrop-blur-md bg-opacity-95 p-6 md:p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <Target className="mx-auto text-[#fecc00] mb-4" size={36} />
            <h3 className="text-2xl font-semibold text-[#fecc00] mb-4">
               Expedition 
            </h3>
            <p className="text-[#d1d1d1] text-base leading-relaxed font-mui">
              "Inspiring Journeys, Creating Memories – Multiple Destination at a Time."
Would you like it to sound more adventurous, luxurious, family-friendly, or eco-conscious? I can Design it your Travel.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-[rgb(44,21,4)] border border-[#fecc00]/30 backdrop-blur-md bg-opacity-95 p-6 md:p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <Eye className="mx-auto text-[#fecc00] mb-4" size={36} />
            <h3 className="text-2xl font-semibold text-[#fecc00] mb-4">
             Field of Innovation
            </h3>
            <p className="text-[#d1d1d1] text-base leading-relaxed font-mui">
              Guiding Journeys, Crafting Dreams — Where Every Destination Becomes a Story
— Where Technology Meets Wonder, and Every Journey Begins with a Natural Spark of Discovery.
            </p>
          </motion.div>

          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="bg-[rgb(44,21,4)] border border-[#fecc00]/30 backdrop-blur-md bg-opacity-95 p-6 md:p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <User2 className="mx-auto text-[#fecc00] mb-4" size={36} />
            <h3 className="text-2xl font-semibold text-[#fecc00] mb-4">
              About Us
            </h3>
            <p className="text-[#e0e0e0] text-base leading-relaxed font-mui">
              IAt MEMORIESPLATFORM - HOLIDAYS, we believe that every journey should be as unique and unforgettable as the traveler embarking on it. Founded with a passion for exploration and a commitment to excellence, we’ve been crafting exceptional travel experiences that go beyond the ordinary.

From serene escapes to adrenaline-filled adventures, our expert team combines insider knowledge, personalized service, and innovative technology to bring your travel dreams to life. Whether you're planning a weekend getaway or a once-in-a-lifetime expedition, we’re here to guide you every step of the way.

With a global network of partners and a heart rooted in hospitality, we’re not just planning trips — we’re creating memories, forging connections, and inspiring the spirit of discovery.

Let’s turn your next destination into a meaningful story.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
