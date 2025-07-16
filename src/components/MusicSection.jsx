import React from "react";

const MusicSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-yellow-400">Latest Drop</h2>
      <div className="max-w-3xl mx-auto">
        <iframe
          title="Audiomack Player"
          src="https://audiomack.com/embed/dhanny-boi/song/sample-track"
          width="100%"
          height="180"
          frameBorder="0"
          scrolling="no"
          className="rounded-xl shadow-lg"
        ></iframe>
        <p className="text-gray-400 text-sm mt-4">Streaming now on Audiomack</p>
      </div>
    </section>
  );
};

export default MusicSection;
