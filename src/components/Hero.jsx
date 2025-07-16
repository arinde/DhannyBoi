// src/components/Hero.jsx
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/dhanny-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-400 drop-shadow-lg">
            Dhanny Boi
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mt-4 font-light max-w-xl mx-auto">
            Afrobeat royalty from the heart of Lagos 🇳🇬. Bold sound. Bigger dreams.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://audiomack.com/dhanny-boi"
              className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition shadow-lg"
            >
              Listen on Audiomack
            </a>
            <a
              href="https://youtube.com"
              className="flex items-center gap-2 border-2 border-yellow-400 py-3 px-6 rounded-full hover:bg-yellow-400 hover:text-black text-yellow-400 font-bold transition shadow-lg"
            >
              <FaYoutube /> Watch on YouTube
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
