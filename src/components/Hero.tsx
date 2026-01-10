import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { RedAnimatedBackground } from "@/components/ui/red-animated-background";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
      <RedAnimatedBackground />
      
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
                  className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 w-auto filter drop-shadow-[0_0_4px_hsl(0,100%,50%)] drop-shadow-[0_0_8px_hsl(0,100%,50%)]"
                />
                <div className="absolute inset-0 bg-primary/10 blur-xl -z-10 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-light tracking-wide px-4 drop-shadow-md"
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
              className="text-lg sm:text-xl px-10 py-7 btn-premium w-full sm:w-auto font-semibold tracking-wide shadow-2xl hover:shadow-[0_8px_40px_hsl(var(--primary)/0.5)] transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver Produtos
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection("contact")} 
              className="text-lg sm:text-xl px-10 py-7 neon-ring w-full sm:w-auto border-2 font-semibold tracking-wide bg-gradient-to-br from-background/80 via-background/70 to-background/80 backdrop-blur-xl hover:from-background/90 hover:via-background/85 hover:to-background/90 transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10">Fale conosco</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
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
            className="animate-bounce hover:scale-110 transition-all duration-300 p-3 rounded-full bg-gradient-to-br from-background/80 via-background/70 to-background/80 backdrop-blur-xl border-2 border-primary/40 hover:border-primary/70 shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] group relative overflow-hidden"
            aria-label="Rolar para baixo"
          >
            <ChevronDown size={28} className="text-primary relative z-10 group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
