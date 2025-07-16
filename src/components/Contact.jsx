// src/components/Contact.jsx
import React from "react";
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black py-20 px-6 md:px-16 text-center relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 drop-shadow">
          📩 Contact & Bookings
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          For bookings, inquiries, or collaborations with Dhanny Boi — reach out via email or socials.
        </p>
        <a
          href="mailto:bookings@dhannyboi.com"
          className="inline-block bg-yellow-400 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition shadow-lg"
        >
          bookings@dhannyboi.com
        </a>
        <div className="flex justify-center mt-10 gap-6 text-2xl text-white">
          <a href="https://instagram.com/dhannyboi" className="hover:text-yellow-400 transition">
            <FaInstagram />
          </a>
          <a href="https://spotify.com" className="hover:text-yellow-400 transition">
            <FaSpotify />
          </a>
          <a href="https://youtube.com" className="hover:text-yellow-400 transition">
            <FaYoutube />
          </a>
          <a href="https://tiktok.com/@dhannyboi" className="hover:text-yellow-400 transition">
            <FaTiktok />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
