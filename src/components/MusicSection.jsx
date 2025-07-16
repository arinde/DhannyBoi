import React from "react";

const MusicSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-bold mb-8">Latest Releases</h2>
      <div className="max-w-3xl mx-auto">
        <iframe
          title="Audiomack Player"
          src="https://audiomack.com/embed/dhanny-boi/song/sample-track"
          scrolling="no"
          width="100%"
          height="180"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  );
};

export default MusicSection;
