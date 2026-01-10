import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sparkles, Zap, Shield, Trophy, ChevronRight } from "lucide-react";

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
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Nvidia-Logo.png",
      color: "#76B900",
      category: "GPU"
    },
    { 
      name: "AMD", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/AMD-Logo.png",
      color: "#ED1C24",
      category: "Processador"
    },
    { 
      name: "Intel", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Intel-Logo.png",
      color: "#0071C5",
      category: "Processador"
    },
    { 
      name: "ASUS", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Asus-Logo.png",
      color: "#000000",
      category: "Hardware"
    },
    { 
      name: "MSI", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/MSI-Logo.png",
      color: "#FF0000",
      category: "Hardware"
    },
    { 
      name: "Corsair", 
      logo: "https://logos-world.net/wp-content/uploads/2021/03/Corsair-Logo.png",
      color: "#FF0000",
      category: "Periféricos"
    },
    { 
      name: "HyperX", 
      logo: "https://logos-world.net/wp-content/uploads/2021/03/HyperX-Logo.png",
      color: "#FF4400",
      category: "Periféricos"
    },
    { 
      name: "Razer", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Razer-Logo.png",
      color: "#00FF00",
      category: "Gaming"
    },
    { 
      name: "Logitech", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Logitech-Logo.png",
      color: "#00B8FF",
      category: "Periféricos"
    },
    { 
      name: "Samsung", 
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Samsung-Logo.png",
      color: "#1428A0",
      category: "Monitores"
    },
    { 
      name: "HP", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/HP-Logo.png",
      color: "#0096D6",
      category: "Computadores"
    },
    { 
      name: "Canon", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Canon-Logo.png",
      color: "#BC002D",
      category: "Impressoras"
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden" id="partners" aria-label="Marcas parceiras">
      {/* Efeitos visuais sutis em tom vermelho - FUNDO ESCURO ORIGINAL */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-primary/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Cabeçalho com título branco e vermelho */}
        <motion.div 
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: isMobile ? 0.4 : 0.5, 
            ease: "easeOut" 
          }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Badge superior */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 mb-6"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold tracking-wider text-foreground">PARCERIAS OFICIAIS</span>
          </motion.div>

          {/* Título com "Marcas" branco e "Parceiras" vermelho */}
          <div className="relative">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 flex flex-col sm:block items-center justify-center">
              <span className="text-foreground">MARCAS</span>
              <span className="text-primary hidden sm:inline mx-2 sm:mx-3 md:mx-4">/</span>
              <span className="text-primary relative mt-2 sm:mt-0">
                PARCEIRAS
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary"
                />
              </span>
            </h1>
          </div>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground px-4 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
          >
            Trabalhamos com as <span className="text-foreground font-medium">principais marcas</span> do mercado para oferecer produtos de <span className="text-primary font-medium">alta performance</span> e qualidade premium
          </motion.p>

          {/* Indicador de carrossel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full"
          >
            <ChevronRight className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Arraste para ver mais marcas</span>
            <ChevronRight className="w-4 h-4 text-primary animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Carrossel de marcas */}
        <div className="relative">
          {/* Gradientes laterais */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background via-background/90 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background via-background/90 to-transparent z-20 pointer-events-none"></div>

          {/* Carrossel principal */}
          <div className="relative overflow-hidden py-4">
            {/* Primeiro carrossel (esquerda para direita) */}
            <motion.div
              className="flex gap-4 sm:gap-6 mb-6"
              animate={{ 
                x: [0, -window.innerWidth]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear"
                }
              }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <CarouselCard key={`carousel-1-${brand.name}-${index}`} brand={brand} index={index} isInView={isInView} />
              ))}
            </motion.div>

            {/* Segundo carrossel (direita para esquerda) */}
            <motion.div
              className="flex gap-4 sm:gap-6"
              animate={{ 
                x: [-window.innerWidth, 0]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear"
                }
              }}
            >
              {[...brands.slice().reverse(), ...brands.slice().reverse()].map((brand, index) => (
                <CarouselCard key={`carousel-2-${brand.name}-${index}`} brand={brand} index={index} isInView={isInView} reverse />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Rodapé da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Garantia de <span className="text-foreground font-semibold">qualidade</span> em todos os produtos
            </span>
          </div>
        </motion.div>
      </div>

      {/* Efeitos CSS customizados */}
      <style jsx>{`
        .tech-grid {
          background-image: 
            linear-gradient(to right, rgba(239, 68, 68, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(239, 68, 68, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .brand-glow {
          box-shadow: 
            0 0 15px rgba(239, 68, 68, 0.08),
            0 0 30px rgba(239, 68, 68, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        
        .brand-glow-hover {
          box-shadow: 
            0 15px 40px rgba(239, 68, 68, 0.15),
            0 0 60px rgba(239, 68, 68, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
};

// Componente de card para o carrossel
const CarouselCard = ({ brand, index, isInView, reverse = false }: any) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex-shrink-0 w-[140px] xs:w-[160px] sm:w-[180px] md:w-[200px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: reverse ? 15 : -15 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.4,
          delay: index * 0.02,
          ease: "easeOut"
        }}
        whileHover={!isMobile ? { 
          scale: 1.05,
          y: -4,
          transition: { type: "spring", stiffness: 400, damping: 25 }
        } : {}}
        className="group relative cursor-pointer"
      >
        {/* Badge da categoria */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-30">
          <div className="px-2 py-1 bg-gradient-to-r from-primary to-primary/90 rounded-full text-[10px] font-bold text-white whitespace-nowrap shadow-sm border border-primary/20">
            {brand.category}
          </div>
        </div>

        {/* Card principal */}
        <div className="relative bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 
                      border border-border/50 brand-glow overflow-hidden
                      transition-all duration-300 group-hover:border-primary/30 group-hover:brand-glow-hover
                      min-h-[120px] sm:min-h-[140px] flex flex-col items-center justify-center">
          
          {/* Efeito de brilho de fundo */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Cantos decorativos */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/30 rounded-tl-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/30 rounded-tr-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/30 rounded-bl-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/30 rounded-br-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
          
          {/* Logo container */}
          <div className="relative z-10 w-full h-14 sm:h-16 flex items-center justify-center mb-2">
            {/* Glow effect */}
            <div className="absolute w-16 h-16 sm:w-20 sm:h-20 bg-primary/5 rounded-full blur-md group-hover:blur-lg 
                          group-hover:bg-primary/10 transition-all duration-300"></div>
            
            {/* Logo */}
            <img 
              src={brand.logo} 
              alt={brand.name}
              className="relative z-20 max-w-full max-h-full object-contain 
                       opacity-75 group-hover:opacity-100 transition-all duration-300 
                       grayscale group-hover:grayscale-0 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'relative z-20 text-sm font-bold text-foreground text-center';
                fallback.textContent = brand.name;
                target.parentElement?.appendChild(fallback);
              }}
            />
          </div>
          
          {/* Nome da marca */}
          <div className="relative z-10 text-center">
            <div className="text-xs sm:text-sm font-medium text-foreground tracking-wide opacity-90 
                          group-hover:opacity-100 transition-opacity duration-300">
              {brand.name}
            </div>
            <div className="h-[1px] w-10 mx-auto bg-gradient-to-r from-transparent via-primary/40 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"></div>
          </div>
          
          {/* Linha de progresso animada */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{
              width: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        </div>
        
        {/* Sombra projetada */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-3 
                      bg-primary/15 blur-sm rounded-full opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.div>
    </div>
  );
};

export default Partners;