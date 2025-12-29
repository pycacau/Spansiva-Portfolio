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
    <div className="min-h-screen relative overflow-hidden overflow-x-hidden max-w-full">
      <CodeBackground />
      <Navigation />
      <div className="relative z-[2] overflow-x-hidden max-w-full">
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
        className={`fixed right-4 sm:right-6 md:right-8 z-[90] flex items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-gradient-to-br from-green-600 via-green-600 to-green-700 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white shadow-2xl hover:shadow-[0_8px_40px_hsl(142,71%,45%,0.5)] transition-all duration-300 text-sm sm:text-base font-semibold tracking-wide hover:scale-110 hover:-translate-y-1 group relative overflow-hidden ${
          isFooterVisible ? 'bottom-24 sm:bottom-28 md:bottom-32' : 'bottom-4 sm:bottom-6 md:bottom-8'
        }`}
        aria-label="Fale agora pelo WhatsApp"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
        <span className="hidden sm:block relative z-10">Fale agora</span>
        <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
      </a>
    </div>
  );
};

export default Index;
