import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Award, ShieldCheck, Truck } from "lucide-react";

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="mb-12 px-4"
          >
            <div className="flex flex-col items-center gap-8">
              <div className="relative">
                <img 
                  src="/logomarca.png" 
                  alt="Spansiva Logo" 
                  className="h-40 sm:h-56 md:h-72 lg:h-96 w-auto filter drop-shadow-[0_0_16px_hsl(0,100%,50%)] drop-shadow-[0_0_32px_hsl(0,100%,50%)] drop-shadow-[0_0_48px_hsl(0,100%,50%)] drop-shadow-[0_0_64px_hsl(0,100%,50%)] animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-primary/40 blur-3xl -z-10 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 px-4 max-w-3xl mx-auto leading-relaxed"
          >
            PCs gamer, impressoras e acessórios premium. Tudo que você precisa para elevar sua experiência gaming ao próximo nível.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-primary mb-10 px-4"
          >
            <span className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              <span className="text-2xl">📍</span> Guaraciaba do Norte
            </span>
          </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 justify-center px-4 mb-12"
        >
          <Button 
            size="lg" 
            onClick={() => scrollToSection("services")} 
            className="text-lg sm:text-xl px-8 py-6 neon-ring w-full sm:w-auto hover:scale-105 transition-transform tech-glow font-semibold"
          >
            Ver Produtos
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => scrollToSection("contact")} 
            className="text-lg sm:text-xl px-8 py-6 neon-ring w-full sm:w-auto hover:scale-105 transition-transform border-2 font-semibold"
          >
            Fale conosco
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto px-4 mb-16"
        >
          <motion.div 
            className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary transition-all duration-300 card-hover-glow backdrop-blur-md"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="p-3 rounded-xl bg-primary/20 neon-ring">
              <Award className="w-8 h-8 text-primary flex-shrink-0" />
            </div>
            <p className="text-base sm:text-lg font-semibold">Garantia de 12 meses</p>
          </motion.div>
          <motion.div 
            className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary transition-all duration-300 card-hover-glow backdrop-blur-md"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="p-3 rounded-xl bg-primary/20 neon-ring">
              <Truck className="w-8 h-8 text-primary flex-shrink-0" />
            </div>
            <p className="text-base sm:text-lg font-semibold">Entrega rápida</p>
          </motion.div>
          <motion.div 
            className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-3 hover:border-primary transition-all duration-300 card-hover-glow backdrop-blur-md"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="p-3 rounded-xl bg-primary/20 neon-ring">
              <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0" />
            </div>
            <p className="text-base sm:text-lg font-semibold">Suporte especializado</p>
          </motion.div>
        </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[5]"
        >
          <button 
            onClick={() => scrollToSection("about")} 
            className="animate-bounce hover:scale-110 transition-transform p-2 rounded-full bg-background/50 backdrop-blur-sm border border-primary/30 hover:border-primary"
            aria-label="Rolar para baixo"
          >
            <ChevronDown size={32} className="text-primary" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
