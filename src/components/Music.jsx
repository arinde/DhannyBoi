import React from "react";
import { motion } from "framer-motion";

const Music = () => {
  return (
    <section
      id="music"
      className="bg-black py-20 px-6 md:px-16 text-center relative z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-yellow-400 drop-shadow">
          🔥 Latest Drop
        </h2>
        <div className="max-w-3xl mx-auto bg-zinc-900 p-6 rounded-xl shadow-lg border border-yellow-600">
          <iframe
            title="Audiomack Player"
            src="https://audiomack.com/embed/dhanny-boi/song/sample-track"
            width="100%"
            height="180"
            frameBorder="0"
            scrolling="no"
            className="rounded-lg"
          ></iframe>
          <p className="text-gray-400 text-sm mt-4">Streaming now on Audiomack</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Music;