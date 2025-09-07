"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 md:px-12 bg-white relative overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left px-2 sm:px-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-4 sm:mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            With years of experience in nutrition and wellness coaching, we help 
            individuals achieve their health goals through personalized meal plans 
            and lifestyle guidance. Trusted by 500+ clients worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mt-6 md:mt-0"
        >
          <Image
            src="/assets/medium-shot-doctor-talking-patient-about-vegetables.jpg"
            alt="Dietician consulting patient"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg object-cover w-full max-w-xs sm:max-w-sm md:max-w-md transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
