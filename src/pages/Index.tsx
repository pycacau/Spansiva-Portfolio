import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import CodeBackground from "@/components/CodeBackground";

const Index = () => {
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
    </div>
  );
};

export default Index;
