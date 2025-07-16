// src/components/Video.jsx
import React from "react";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <section
      id="video"
      className="bg-zinc-950 py-20 px-6 md:px-16 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold mb-10 text-yellow-400 drop-shadow">
          🎬 Watch Dhanny
        </h2>
        <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden border border-yellow-500 shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/sample_video"
            title="Dhanny Boi Music Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-gray-400 text-sm mt-4">Subscribe to the YouTube channel for more visuals</p>
      </motion.div>
    </section>
  );
};

export default Video;
