import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Camera, Star, Trophy, Eye, Phone, MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Portfolio = () => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { 
    once: true, 
    amount: isMobile ? 0.1 : 0.2,
    margin: "0px 0px -100px 0px"
  });

  const portfolioItems = [
    {
      title: "Cadeira Gamer FOX Racer",
      category: "Acessórios",
      image: "/IMG_0440.jpg",
      rating: 4.9,
      featured: true,
      description: "Ergonomia premium para longas sessões"
    },
    {
      title: "Notebook Samsung",
      category: "Notebooks",
      image: "/IMG_0453.jpg",
      rating: 4.8,
      featured: true,
      description: "Alta performance e mobilidade"
    },
    {
      title: "Headphones JBL",
      category: "Acessórios",
      image: "/IMG_0454.jpg",
      rating: 4.7,
      featured: false,
      description: "Som imersivo e qualidade superior"
    },
    {
      title: "Gabinete PC Preto",
      category: "PCs Gamer",
      image: "/IMG_0465.jpg",
      rating: 4.9,
      featured: true,
      description: "Design agressivo com iluminação RGB"
    },
    {
      title: "Gabinete PC Branco",
      category: "PCs Gamer",
      image: "/IMG_0467.jpg",
      rating: 4.8,
      featured: false,
      description: "Estilo minimalista e sofisticado"
    },
    {
      title: "Monitores ALLTEK",
      category: "Monitores",
      image: "/IMG_0469.jpg",
      rating: 4.6,
      featured: true,
      description: "Alta taxa de atualização e cores vivas"
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden" aria-label="Produtos em destaque">
      {/* Efeitos visuais sutis em tom vermelho */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-primary/5 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] bg-primary/4 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="text-center mb-8 sm:mb-12"
        >
          {/* Badge superior */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 mb-4 sm:mb-6"
          >
            <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-foreground">PRODUTOS DESTAQUE</span>
          </motion.div>

          {/* Título */}
          <div className="relative">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-3 sm:mb-4 flex flex-col sm:block items-center justify-center">
              <span className="text-foreground">PRODUTOS</span>
              <span className="text-primary hidden sm:inline mx-1 sm:mx-2 md:mx-3">/</span>
              <span className="text-primary relative mt-1 sm:mt-0">
                DESTAQUE
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="absolute -bottom-0.5 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary via-primary/80 to-primary"
                />
              </span>
            </h1>
          </div>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base text-muted-foreground max-w-xl sm:max-w-2xl mx-auto px-3 sm:px-4 leading-relaxed font-light tracking-wide"
          >
            Confira nossos <span className="text-primary font-medium">produtos mais populares</span>. 
            <span className="text-foreground font-medium"> Entre em contato</span> para consultar valores e condições especiais!
          </motion.p>
        </motion.div>

        {/* Grid de produtos - 2 colunas mobile, 3 colunas desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {portfolioItems.map((item, index) => {
            const [imageError, setImageError] = useState(false);
            const [isHovered, setIsHovered] = useState(false);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={!isMobile ? { 
                  y: -6,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                } : {}}
                onMouseEnter={() => !isMobile && setIsHovered(true)}
                onMouseLeave={() => !isMobile && setIsHovered(false)}
                onTouchStart={() => isMobile && setIsHovered(true)}
                onTouchEnd={() => isMobile && setIsHovered(false)}
                className="group relative cursor-pointer"
                role="article"
                aria-label={`Produto: ${item.title}`}
              >
                {/* Badge "Em Destaque" */}
                {item.featured && (
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 z-30">
                    <div className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gradient-to-r from-primary to-primary/90 rounded-full text-[8px] sm:text-xs font-bold text-white shadow-md">
                      DESTAQUE
                    </div>
                  </div>
                )}

                {/* Card principal */}
                <div className="relative bg-card rounded-lg sm:rounded-xl md:rounded-2xl 
                              border border-border/50 portfolio-glow overflow-hidden
                              transition-all duration-300 group-hover:border-primary/30 group-hover:portfolio-glow-hover
                              h-full flex flex-col">
                  
                  {/* Efeito de brilho de fundo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Cantos decorativos */}
                  <div className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-t border-l border-primary/30 rounded-tl opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-t border-r border-primary/30 rounded-tr opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-b border-l border-primary/30 rounded-bl opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-b border-r border-primary/30 rounded-br opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Container da imagem */}
                  <div className="aspect-square sm:aspect-video overflow-hidden bg-gradient-to-br from-muted/80 via-muted/60 to-muted/40 relative">
                    {!imageError ? (
                      <motion.img
                        src={item.image}
                        alt={`${item.title} - ${item.category}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        onError={() => setImageError(true)}
                        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                        transition={{ 
                          duration: 0.5,
                          ease: "easeOut"
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10">
                        <div className="text-center p-3 sm:p-4">
                          <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-primary/40 mx-auto mb-2" />
                          <p className="text-primary text-xs sm:text-sm font-semibold mb-1 line-clamp-1">{item.title}</p>
                          <p className="text-muted-foreground text-[10px] sm:text-xs">{item.category}</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay no hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    
                    {/* Botão de ação no hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-2 right-2 sm:top-3 sm:right-3"
                    >
                      <button 
                        className="p-1 sm:p-1.5 bg-gradient-to-br from-primary to-primary/90 rounded-full shadow-md hover:shadow-primary/30 transition-all duration-300"
                        aria-label="Ver detalhes"
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToContact();
                        }}
                      >
                        <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                      </button>
                    </motion.div>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="p-2.5 sm:p-3 md:p-4 flex-1">
                    {/* Categoria */}
                    <div className="mb-1 sm:mb-1.5">
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded text-[10px] sm:text-xs font-semibold text-primary">
                        {item.category}
                      </span>
                    </div>
                    
                    {/* Título */}
                    <h3 className="text-xs sm:text-sm font-bold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {item.title}
                    </h3>
                    
                    {/* Descrição */}
                    <p className="text-[10px] sm:text-xs text-muted-foreground mb-2 line-clamp-2">
                      {item.description}
                    </p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-0.5 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${i < Math.floor(item.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground/30'}`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] sm:text-xs font-medium text-muted-foreground ml-0.5">{item.rating}</span>
                    </div>
                    
                    {/* Botão "Entre em contato" */}
                    <div className="mt-auto pt-2 border-t border-border/30">
                      <button
                        onClick={scrollToContact}
                        className="w-full group/btn relative overflow-hidden"
                      >
                        <div className="relative flex items-center justify-center gap-1 p-1.5 sm:p-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded sm:rounded-lg hover:from-primary/20 hover:to-primary/10 transition-all duration-300 border border-primary/20 group-hover/btn:border-primary/40">
                          <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                          <span className="text-[10px] sm:text-xs font-semibold text-primary truncate">Entre em contato</span>
                          <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary/60 ml-auto flex-shrink-0" />
                          
                          {/* Efeito de brilho animado */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent 
                                        opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 
                                        -translate-x-full group-hover/btn:translate-x-full"></div>
                        </div>
                      </button>
                      
                      <p className="text-[9px] sm:text-xs text-muted-foreground text-center mt-1">
                        Consulte valores e condições
                      </p>
                    </div>
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
                      delay: index * 0.3
                    }}
                  />
                </div>
                
                {/* Sombra projetada */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4/5 h-2 
                              bg-primary/10 blur-sm rounded-full opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Botão principal de contato */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-6 sm:mt-8"
        >
          <button
            onClick={scrollToContact}
            className="group relative inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 bg-gradient-to-r from-primary to-primary/90 rounded-full text-sm sm:text-base font-semibold text-white shadow-md sm:shadow-lg hover:shadow-[0_6px_30px_hsl(var(--primary)/0.5)] transition-all duration-300 overflow-hidden"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="truncate">Falar com especialista</span>
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 ml-1 flex-shrink-0" />
            
            {/* Efeito de brilho animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                          -translate-x-full group-hover:translate-x-full"></div>
          </button>
        </motion.div>

        {/* Rodapé da seção */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-4 sm:mt-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">
              <span className="text-foreground font-semibold">Atendimento personalizado</span> para você
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
          background-size: 40px 40px;
        }
        
        .portfolio-glow {
          box-shadow: 
            0 0 8px rgba(239, 68, 68, 0.05),
            0 0 15px rgba(239, 68, 68, 0.03),
            inset 0 1px 0 rgba(255, 255, 255, 0.03);
        }
        
        .portfolio-glow-hover {
          box-shadow: 
            0 8px 20px rgba(239, 68, 68, 0.1),
            0 0 30px rgba(239, 68, 68, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;