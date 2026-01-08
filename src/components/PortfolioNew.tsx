import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import InteractiveSelector from "@/components/ui/interactive-selector";
import { SectionBackground } from "@/components/ui/section-background";

const PortfolioNew = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  });

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 relative overflow-hidden" aria-label="Produtos em destaque">
      <SectionBackground variant="portfolio" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Produtos em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed font-light tracking-wide">
            Clique nas categorias para explorar nossos produtos gamers
          </p>
        </motion.div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <InteractiveSelector />
        </div>
      </div>
    </section>
  );
};

export default PortfolioNew;
