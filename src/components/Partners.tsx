import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Partners = () => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { 
    once: true, 
    amount: isMobile ? 0.1 : 0.2,
    margin: "0px 0px -100px 0px"
  });
  
  const brands = [
    { 
      name: "NVIDIA", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Nvidia-Logo.png" 
    },
    { 
      name: "AMD", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/AMD-Logo.png" 
    },
    { 
      name: "Intel", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Intel-Logo.png" 
    },
    { 
      name: "ASUS", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Asus-Logo.png" 
    },
    { 
      name: "MSI", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/MSI-Logo.png" 
    },
    { 
      name: "Corsair", 
      logo: "https://logos-world.net/wp-content/uploads/2021/03/Corsair-Logo.png" 
    },
    { 
      name: "HyperX", 
      logo: "https://logos-world.net/wp-content/uploads/2021/03/HyperX-Logo.png" 
    },
    { 
      name: "Razer", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Razer-Logo.png" 
    },
    { 
      name: "Logitech", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Logitech-Logo.png" 
    },
    { 
      name: "Samsung", 
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Samsung-Logo.png" 
    },
    { 
      name: "HP", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/HP-Logo.png" 
    },
    { 
      name: "Canon", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Canon-Logo.png" 
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-card/50 to-background relative overflow-hidden" id="partners" aria-label="Marcas parceiras">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: isMobile ? 0.4 : 0.5, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Marcas <span className="text-gradient">Parceiras</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
            Hardware e periféricos de alto desempenho das melhores marcas do mercado
          </p>
        </motion.div>

        <div className="relative overflow-hidden py-4">
          <div className="flex brands-carousel">
            {/* Duplicar as marcas para criar loop infinito */}
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex-shrink-0 w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1rem)] lg:w-[calc(16.666%-1rem)] px-3 sm:px-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: isMobile ? 0.3 : 0.4, 
                    delay: isMobile ? (i % brands.length) * 0.03 : (i % brands.length) * 0.05,
                    ease: "easeOut"
                  }}
                  className="group relative glass-card-premium rounded-2xl p-6 sm:p-8 text-center border border-primary/20 hover:border-primary/60 transition-all duration-300 flex items-center justify-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px] card-hover-glow overflow-hidden"
                  whileHover={!isMobile ? { scale: 1.05, y: -6 } : {}}
                >
                  {/* Efeito de brilho no hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-primary/10 transition-all duration-300 pointer-events-none"></div>
                  
                  {/* Efeito de brilho animado */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
                  
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="relative z-10 max-w-full max-h-14 sm:max-h-18 md:max-h-20 lg:max-h-24 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0 filter group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = document.createElement('span');
                      fallback.textContent = brand.name;
                      fallback.className = 'relative z-10 text-xs sm:text-sm md:text-base font-bold text-foreground';
                      target.parentElement?.appendChild(fallback);
                    }}
                  />
                  
                  {/* Linha decorativa no hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Top border no hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

