export default function CTASection() {
  return (
    <section 
      id="contact" 
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-green-600 text-white text-center"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
        Ready to Transform Your Health?
      </h2>
      <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 max-w-2xl mx-auto">
        Book your consultation today and take the first step towards a healthier you.
      </p>
      <button 
        className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-green-600 font-bold rounded-lg shadow hover:bg-gray-100 transition text-sm sm:text-base md:text-lg"
      >
        Get Started
      </button>
    </section>
  );
}
