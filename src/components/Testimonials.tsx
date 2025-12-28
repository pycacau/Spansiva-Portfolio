import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Testimonials = () => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { 
    once: true, 
    amount: isMobile ? 0.1 : 0.2,
    margin: "0px 0px -100px 0px"
  });
  const items = [
    {
      name: "Carlos M.",
      text: "Comprei um PC gamer completo na Spansiva. Performance incrível e entrega rápida! Recomendo muito.",
      rating: 5,
    },
    {
      name: "Fernanda S.",
      text: "Adquiri uma impressora e vários acessórios gamers. Qualidade excelente e preço justo. Super satisfeita!",
      rating: 5,
    },
    {
      name: "Ricardo A.",
      text: "Melhor loja de produtos gamers! Atendimento impecável e produtos de primeira linha. Voltarei com certeza.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-card relative overflow-hidden" id="testimonials" aria-label="Depoimentos de clientes">
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute top-0 right-1/3 w-56 h-56 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-56 h-56 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: isMobile ? 0.4 : 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">O que nossos clientes dizem</h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4 leading-relaxed font-light tracking-wide">Prova social para decidir hoje</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: isMobile ? 0.4 : 0.5, 
                delay: isMobile ? i * 0.05 : i * 0.08,
                ease: "easeOut"
              }}
              className="glass-card-premium p-8 sm:p-10 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 h-full flex flex-col card-hover-glow"
              whileHover={!isMobile ? { y: -6, scale: 1.02 } : {}}
            >
              <div className="flex mb-4 gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary" />
                ))}
              </div>
              <p className="mb-6 text-base sm:text-lg text-foreground leading-relaxed flex-grow italic">"{t.text}"</p>
              <p className="text-sm sm:text-base font-semibold text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

