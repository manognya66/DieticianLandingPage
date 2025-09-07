"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  const heading = ["New Year,", "New You"];

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8 },
    }),
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-fixed bg-cover bg-center relative px-4 sm:px-6 md:px-8"
      style={{ backgroundImage: "url('assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Floating circles */}
      <div className="absolute top-10 left-5 w-3 sm:w-4 h-3 sm:h-4 bg-green-400 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-4 sm:w-6 h-4 sm:h-6 bg-green-300 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-1/3 right-20 w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full animate-pulse opacity-30"></div>

      <motion.div className="relative z-10 max-w-3xl px-2 sm:px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white">
          {heading.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              className="inline-block mr-2"
            >
              {i === 1 ? <span className="text-green-400">{word}</span> : word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="text-base sm:text-lg md:text-2xl mb-6 font-light text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Unlock your healthiest self with personalized diet and lifestyle guidance.
        </motion.p>

        <motion.button
          className="px-6 sm:px-8 py-2 sm:py-3 bg-green-600 text-white font-semibold rounded-xl shadow-lg hover:bg-white hover:text-green-600 hover:shadow-xl transition text-sm sm:text-lg md:text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Book a Free Consultation
        </motion.button>
        <motion.p
          className="text-green-300 mt-4 text-sm sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Start your transformation today!
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 flex justify-center w-full text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => {
          const nextSection = document.getElementById("about");
          nextSection?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-4xl sm:text-5xl md:text-6xl">⬇</span>
      </motion.div>
    </section>
  );
}