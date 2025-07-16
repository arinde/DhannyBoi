import React from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Image1.jfif')" }}
    >
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Dhanny Boi</h1>
          <p className="text-lg md:text-xl mb-6">Afrobeats Sensation | Feel the Rhythm, Live the Vibe</p>
          <a
            href="https://audiomack.com/dhanny-boi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition"
          >
            <FaPlay />
            Listen Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
