// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 py-6 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Dhanny Boi. All rights reserved.
    </footer>
  );
};

export default Footer;