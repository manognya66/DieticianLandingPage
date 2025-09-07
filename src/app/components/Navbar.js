"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-lg z-50 shadow-md"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-green-600">NutriLife</h1>
        <ul className="hidden md:flex gap-6 text-gray-700 font-semibold">
          <li><a href="#home" className="hover:text-green-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-green-600 transition">About</a></li>
          <li><a href="#services" className="hover:text-green-600 transition">Services</a></li>
          <li><a href="#plans" className="hover:text-green-600 transition">Plans</a></li>
          <li><a href="#testimonials" className="hover:text-green-600 transition">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-green-600 transition">Contact</a></li>
        </ul>
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1 w-6 h-6 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-full h-0.5 bg-gray-700 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-full h-0.5 bg-gray-700 transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block w-full h-0.5 bg-gray-700 transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white w-full text-center flex flex-col gap-4 py-4 font-semibold text-gray-700"
        >
          <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-green-600 transition">Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-green-600 transition">About</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)} className="hover:text-green-600 transition">Services</a></li>
          <li><a href="#plans" onClick={() => setIsOpen(false)} className="hover:text-green-600 transition">Plans</a></li>
          <li><a href="#testimonials" onClick={() => setIsOpen(false)} className="hover:text-green-600 transition">Testimonials</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-green-600 transition">Contact</a></li>
        </motion.ul>
      )}
    </motion.nav>
  );
}
