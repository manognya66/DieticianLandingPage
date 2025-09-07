"use client";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter Plan",
    price: "₹999 / month",
    features: ["Personalized diet chart", "Weekly progress check", "Email support"],
    popular: false,
  },
  {
    name: "Advanced Plan",
    price: "₹1999 / month",
    features: ["Custom meal plan + recipes", "Bi-weekly check-ins", "Priority email & chat support"],
    popular: true,
  },
  {
    name: "Premium Plan",
    price: "₹2999 / month",
    features: ["Personalized diet + exercise plan", "Weekly video consultation", "24/7 support", "Exclusive recipes & tips"],
    popular: false,
  },
];

export default function PlansSection() {
  return (
    <section id="plans" className="py-24 px-4 sm:px-6 md:px-12 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Choose Your Plan
        </motion.h2>
        <motion.p
          className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Flexible plans to suit your lifestyle and health goals.
        </motion.p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className={`relative bg-white rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform ${
              plan.popular ? "border-4 border-green-500" : ""
            }`}
          >
            {plan.popular && (
              <span className="absolute top-0 -translate-y-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm sm:text-base font-semibold">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-green-600 mb-4">{plan.name}</h3>
            <p className="text-2xl sm:text-3xl md:text-3xl font-extrabold mb-6 text-gray-700">{plan.price}</p>
            <ul className="text-gray-700 mb-6 space-y-2 text-sm sm:text-base md:text-base">
              {plan.features.map((feature, i) => (
                <li key={i} className="before:content-['✔'] before:text-green-500 before:mr-2">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-green-600 text-white rounded-xl font-semibold shadow-lg hover:bg-white hover:text-green-600 hover:shadow-xl transition text-base sm:text-lg md:text-lg">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
