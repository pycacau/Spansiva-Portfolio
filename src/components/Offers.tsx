import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Offers = () => {
  const [timeLeft, setTimeLeft] = useState<{ h: number; m: number; s: number }>({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date();
    target.setHours(23, 59, 59, 999);
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, target.getTime() - now.getTime());
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTimeLeft({ h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-background pt-20 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8 rounded-xl glass-card border border-primary/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 neon-ring"
        >
          <div className="flex-1">
            <p className="text-sm sm:text-base text-muted-foreground mb-2">⚡ Oferta relâmpago</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Até <span className="text-gradient">20% OFF</span> em produtos gamers hoje
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
            <div className="flex gap-3">
              <div className="glass-card px-4 sm:px-5 py-3 rounded-lg text-center min-w-[70px] border border-primary/20">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{timeLeft.h.toString().padStart(2, "0")}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Horas</div>
              </div>
              <div className="glass-card px-4 sm:px-5 py-3 rounded-lg text-center min-w-[70px] border border-primary/20">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{timeLeft.m.toString().padStart(2, "0")}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Min</div>
              </div>
              <div className="glass-card px-4 sm:px-5 py-3 rounded-lg text-center min-w-[70px] border border-primary/20">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{timeLeft.s.toString().padStart(2, "0")}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Seg</div>
              </div>
            </div>
            <Button 
              className="neon-ring w-full sm:w-auto text-base sm:text-lg px-6 py-6 hover:scale-105 transition-transform" 
              onClick={() => scrollToSection("contact")}
              size="lg"
            >
              Aproveitar agora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Offers;

