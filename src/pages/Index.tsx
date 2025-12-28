import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import CodeBackground from "@/components/CodeBackground";

const Index = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Se o footer está visível na tela (dentro de 200px do bottom)
        setIsFooterVisible(rect.top < windowHeight - 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CodeBackground />
      <Navigation />
      <div className="relative z-[2]">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Partners />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      <a
        href="https://wa.me/558898033002"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed right-4 sm:right-6 md:right-8 z-[90] flex items-center gap-2 px-4 sm:px-5 py-3 rounded-full bg-primary text-primary-foreground shadow-lg neon-ring hover:scale-105 transition-all duration-300 text-sm sm:text-base hover:shadow-primary/50 tech-glow ${
          isFooterVisible ? 'bottom-24 sm:bottom-28 md:bottom-32' : 'bottom-4 sm:bottom-6 md:bottom-8'
        }`}
        aria-label="Fale agora pelo WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="hidden sm:block font-semibold">Fale agora</span>
      </a>
    </div>
  );
};

export default Index;
