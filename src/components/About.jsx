import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 text-center md:text-left">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="/Image2.jfif"
          alt="Dhanny Boi"
          className="w-full h-auto rounded-2xl shadow-lg object-cover"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Dhanny Boi</h2>
          <p className="text-gray-700 text-lg mb-4">
            Dhanny Boi is a rising Afrobeats artist known for his electrifying sound and vibrant stage presence. With a passion rooted in the streets of Lagos and a voice that resonates with the heart of Africa, Dhanny Boi is on a mission to take Afrobeat to the world.
          </p>
          <p className="text-gray-600">
            From underground freestyle sessions to topping Audiomack playlists, his journey reflects pure talent, grit, and undeniable rhythm. Whether he's singing about love, hustle, or vibes — Dhanny keeps it real and makes you move.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
