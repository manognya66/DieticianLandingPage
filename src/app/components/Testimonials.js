export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-green-600 mb-10">
        What Our Clients Say
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <p className="text-gray-600 italic text-base sm:text-lg">
            “The personalized plan changed my life! I lost 10kg in 3 months and feel healthier than ever.”
          </p>
          <h4 className="mt-4 font-bold text-green-600 text-lg sm:text-xl">- Aditi Sharma</h4>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <p className="text-gray-600 italic text-base sm:text-lg">
            “I struggled with diabetes management, but with their guidance, I feel in control again.”
          </p>
          <h4 className="mt-4 font-bold text-green-600 text-lg sm:text-xl">- Rahul Mehta</h4>
        </div>
      </div>
    </section>
  );
}
