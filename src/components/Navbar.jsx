import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-16 py-4 ${
        scrolled ? "bg-black/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-400">Dhanny Boi</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#music" className="hover:text-yellow-400">Music</a>
          <a href="#video" className="hover:text-yellow-400">Videos</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;