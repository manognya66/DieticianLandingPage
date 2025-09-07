"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  { 
    title: "Weight Management", 
    desc: "Custom diet plans to achieve your ideal body.",
    img: "/assets/istockphoto-954535878-612x612.jpg"
  },
  { 
    title: "Diabetes Care", 
    desc: "Manage sugar levels with smart nutrition.",
    img: "/assets/healthy-food-plate-guide-diabetic-600nw-2140270219.jpg"
  },
  { 
    title: "Sports Nutrition", 
    desc: "Boost performance with tailored meal strategies.",
    img: "/assets/istockphoto-638858000-612x612.jpg"
  },
];

const animations = [
  { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(6px)"]);

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-16 px-4 sm:px-6 md:px-12 flex flex-col justify-center items-center text-center overflow-hidden"
    >
      <motion.div
        style={{ scale, filter: blur }}
        className="absolute inset-0 bg-fixed bg-center bg-cover"
      >
        <Image
          src="/assets/brooke-lark-HlNcigvUi4Q-unsplash.jpg"
          alt="Parallax Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70"></div>
      </motion.div>

      <div className="relative max-w-6xl w-full flex flex-col justify-center items-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-items-center">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={animations[idx]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-3 hover:scale-105 flex flex-col items-center text-center p-4 sm:p-6 w-full sm:w-80 md:w-72"
            >
              <div className="w-full h-40 sm:h-44 relative mb-4 sm:mb-5 overflow-hidden rounded-2xl shadow-inner">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-green-600 mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
