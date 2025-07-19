import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react'; // Import icons from lucide-react

const App = () => {
  const [activeSection, setActiveSection] = useState('home'); // State to manage active section for navigation
  const [isOpen, setIsOpen] = useState(false) 

  const handleClick = () =>{
    setIsOpen(!isOpen)
  }

  // Dummy data for demonstration
  const artistName = "Dhanny Boy";
  const artistTagline = "Crafting Sounds, Shaping Worlds.";
  const musicReleases = [
    {
      id: 1,
      title: "Duro",
      genre: "Afro beat",
      releaseDate: "2025-07-08",
      albumArt: "https://placehold.co/400x400/000000/FFFFFF?text=Album+Art+1",
      spotifyEmbed: "https://open.spotify.com/track/5J7z02ikiyGoZ1SG72s5fY?si=BwST8Tn4RtuGeNsQUH5WnA&context=spotify%3Aalbum%3A30BotblTSupCLp5hqVLHZd", // Example embed
    },
    {
      id: 2,
      title: "Bad Boy Killer",
      genre: "R&B",
      releaseDate: "2022-09-27",
      albumArt: "https://placehold.co/400x400/000000/FFFFFF?text=Album+Art+2",
      spotifyEmbed: "https://open.spotify.com/embed/track/1P1xK2F1g0Y4Z3f2v7x9x9?utm_source=generator", // Example embed
    },
    {
      id: 3,
      title: "Rhythmic Journey",
      genre: "Hip Hop",
      releaseDate: "2023-07-20",
      albumArt: "https://placehold.co/400x400/000000/FFFFFF?text=Album+Art+3",
      spotifyEmbed: "https://open.spotify.com/embed/track/3f9j9j9j9j9j9j9j9j9j9j?utm_source=generator", // Example embed
    },
  ];

  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter antialiased">
    
      {/* Navigation Bar */}
      <nav className="fixed w-full h-24 z-50 bg-gray-950 bg-opacity-90 shadow-lg py-4 px-6 md:px-12 flex md:flex-row flex-col justify-between items-center backdrop-blur-sm">
         <div className='flex justify-between items-center space-x-64'>
        <a href="#home" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors duration-300">
          {artistName}
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">Home</a>
          <a href="#music" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">Music</a>
          <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">About</a>
          <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">Contact</a>
        </div>
        {/* Mobile menu button (optional, for full responsiveness) */}
        <button onClick={handleClick} className="md:hidden text-gray-300 hover:text-purple-400 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isOpen && 
        <div className="md:hidden flex flex-col space-y-4 bg-purple-800 px-16 py-3 shadow-md mt-4 rounded-3xl items-center">
          <a href="#home" onClick={handleClick} className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">Home</a>
          <a href="#music" onClick={handleClick} className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">Music</a>
          <a href="#about" onClick={handleClick} className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">About</a>
          <a href="#contact" onClick={handleClick} className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">Contact</a>
        </div>
        }
      </nav>

        

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center filter brightness-75 backdrop-blur-3xl" style={{ backgroundImage: "url('/daniel.jfif')" }}></div>
        <motion.div
          className="relative z-10 p-8 bg-black bg-opacity-50 rounded-xl shadow-2xl max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4" variants={itemVariants}>
            {artistName}
          </motion.h1>
          <motion.p className="text-xl md:text-2xl text-gray-200 mb-8" variants={itemVariants}>
            {artistTagline}
          </motion.p>
          <motion.a
            href="#music"
            className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Music
            <ArrowRight className="ml-2 inline-block w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 px-6 md:px-12 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">Latest Releases</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {musicReleases.map((release) => (
              <motion.div
                key={release.id}
                className="bg-gray-800 rounded-xl shadow-xl overflow-hidden"
                variants={cardVariants}
                whileHover="hover"
              >
                <img src={release.albumArt} alt={release.title} className="w-full h-64 object-cover rounded-t-xl" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/000000/FFFFFF?text=Album+Art'; }} />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{release.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{release.genre} • {release.releaseDate}</p>
                  {release.spotifyEmbed && (
                    <div className="mt-4">
                      <iframe
                        src={release.spotifyEmbed}
                        width="100%"
                        height="80"
                        frameBorder="0"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  )}
                  <a href="#" className="mt-4 inline-block text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300">
                    Listen Now <Play className="ml-1 inline-block w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12 bg-gray-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://placehold.co/600x400/000000/FFFFFF?text=Artist+Profile" alt="Artist Profile" className="rounded-xl shadow-2xl w-full h-auto object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/000000/FFFFFF?text=Artist+Profile'; }} />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-purple-400 mb-6">About {artistName}</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              {artistName} is an innovative music artist known for blending soulful melodies with cutting-edge electronic beats. Hailing from Lagos, Nigeria, {artistName} has captivated audiences worldwide with a unique sound that transcends genres and evokes deep emotions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From humble beginnings experimenting with sound in a home studio, {artistName} has grown into a celebrated figure in the independent music scene, constantly pushing boundaries and redefining what's possible in modern music.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-gray-900">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-purple-400 mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-8">
            For collaborations, bookings, or just to say hello, feel free to reach out!
          </p>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
              <Send className="ml-2 inline-block w-5 h-5" />
            </button>
          </form>
          <div className="mt-12 text-gray-400">
            <p className="mb-2">Email: <a href="mailto:danielarinde4@gmail.com" className="text-purple-400 hover:underline">danielarinde4@gmail.com</a></p>
            <p>Follow on social media:</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                <Facebook size={30} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                <Instagram size={30} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                <Twitter size={30} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                <Youtube size={30} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 bg-gray-950 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} {artistName}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
