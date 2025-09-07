export default function Footer() {
  return (
    <footer className="py-4 sm:py-6 px-4 sm:px-6 md:px-12 bg-gray-900 text-center text-gray-400 text-xs sm:text-sm md:text-base">
      © {new Date().getFullYear()} NutriLife. All rights reserved.
    </footer>
  );
}
