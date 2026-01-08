import NavigationNew from "@/components/NavigationNew";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import PortfolioNew from "@/components/PortfolioNew";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import Partners from "@/components/Partners";
import { SilkBackground } from "@/components/ui/silk-background";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden overflow-x-hidden max-w-full bg-[#030303]">
      <SilkBackground />
      <NavigationNew />
      <div className="relative z-[2] overflow-x-hidden max-w-full">
        <Hero />
        <About />
        <Services />
        <PortfolioNew />
        <Partners />
        <TestimonialsMarquee />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
