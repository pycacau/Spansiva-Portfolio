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
  return (
    <div className="min-h-screen relative overflow-hidden">
      <CodeBackground />
      <Navigation />
      <div className="relative z-[2]">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Portfolio />
        <Partners />
        <Contact />
        <Footer />
      </div>
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-[100] flex items-center gap-2 px-4 sm:px-5 py-3 rounded-full bg-primary text-primary-foreground shadow-lg neon-ring hover:scale-105 transition-all duration-300 text-sm sm:text-base hover:shadow-primary/50 tech-glow"
        aria-label="Fale agora pelo WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="hidden sm:block font-semibold">Fale agora</span>
      </a>
    </div>
  );
};

export default Index;
