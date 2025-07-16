import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-8">For bookings, collaborations, or updates, drop your email below:</p>
      <form className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-md text-black"
          required
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-md font-semibold"
        >
          Join Fan List
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
