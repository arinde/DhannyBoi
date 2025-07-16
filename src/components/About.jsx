// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-gradient-to-b from-black via-zinc-900 to-black"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/images/dhanny-profile.jpg"
          alt="Dhanny Boi"
          className="w-full rounded-3xl shadow-2xl object-cover max-h-[500px] border-4 border-yellow-500"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">About Dhanny Boi</h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Born in the heart of Lagos, Dhanny Boi is more than just music — he’s a movement.
            Fusing street rhythms with smooth melodies, his sound bridges heritage and hustle.
          </p>
          <p className="text-gray-500 font-light">
            From stage performances to viral freestyles, Dhanny Boi brings the fire, the flair,
            and the future of Afrobeat to every track.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
