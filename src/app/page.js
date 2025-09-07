import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import PlansSection from "./components/PlansSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PlansSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
