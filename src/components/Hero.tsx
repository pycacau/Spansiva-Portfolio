import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden grid-overlay tech-grid" aria-label="Hero section">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse tech-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse tech-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse tech-glow" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 sm:pt-24 md:pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <div className="flex flex-col items-center">
              <div className="relative">
                <img 
                  src="/logomarca.png" 
                  alt="Spansiva Logo" 
                  className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 w-auto filter drop-shadow-[0_0_16px_hsl(0,100%,50%)] drop-shadow-[0_0_32px_hsl(0,100%,50%)] drop-shadow-[0_0_48px_hsl(0,100%,50%)] drop-shadow-[0_0_64px_hsl(0,100%,50%)] animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-primary/40 blur-3xl -z-10 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4"
          >
            PCs gamer, impressoras e acessórios premium. Tudo que você precisa para elevar sua experiência gaming ao próximo nível.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection("services")} 
              className="text-lg sm:text-xl px-10 py-7 btn-premium w-full sm:w-auto font-semibold tracking-wide shadow-2xl"
            >
              Ver Produtos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection("contact")} 
              className="text-lg sm:text-xl px-10 py-7 neon-ring w-full sm:w-auto border-2 font-semibold tracking-wide bg-background/50 backdrop-blur-sm hover:bg-background/70"
            >
              Fale conosco
            </Button>
          </motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-[5]"
        >
          <button 
            onClick={() => scrollToSection("about")} 
            className="animate-bounce hover:scale-110 transition-transform p-3 rounded-full bg-background/70 backdrop-blur-md border-2 border-primary/40 hover:border-primary shadow-lg hover:shadow-primary/50"
            aria-label="Rolar para baixo"
          >
            <ChevronDown size={28} className="text-primary" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
