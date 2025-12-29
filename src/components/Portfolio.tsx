import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
    },
    {
      title: "Notebook Samsung",
      category: "Notebooks",
      image: "/IMG_0453.jpg",
    },
    {
      title: "Headphones JBL",
      category: "Acessórios",
      image: "/IMG_0454.jpg",
    },
    {
      title: "Gabinete PC Preto",
      category: "PCs Gamer",
      image: "/IMG_0465.jpg",
    },
    {
      title: "Gabinete PC Branco",
      category: "PCs Gamer",
      image: "/IMG_0467.jpg",
    },
    {
      title: "Monitores ALLTEK",
      category: "Monitores",
      image: "/IMG_0469.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-card via-card/95 to-background relative overflow-hidden" aria-label="Produtos em destaque">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
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
            Confira alguns dos nossos produtos gamers mais populares
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {portfolioItems.map((item, index) => {
            const [imageError, setImageError] = useState(false);
            const [isHovered, setIsHovered] = useState(false);
            const [displayedCategory, setDisplayedCategory] = useState("");
            const [displayedTitle, setDisplayedTitle] = useState("");
            
            useEffect(() => {
              if (isMobile) {
                // Em mobile, sempre mostrar informações completas
                setDisplayedCategory(item.category);
                setDisplayedTitle(item.title);
                return;
              }

              if (isHovered) {
                // Reset
                setDisplayedCategory("");
                setDisplayedTitle("");
                
                // Type category
                let categoryIndex = 0;
                const categoryInterval = setInterval(() => {
                  if (categoryIndex < item.category.length) {
                    setDisplayedCategory(item.category.substring(0, categoryIndex + 1));
                    categoryIndex++;
                  } else {
                    clearInterval(categoryInterval);
                    
                    // Type title after category
                    setTimeout(() => {
                      let titleIndex = 0;
                      const titleInterval = setInterval(() => {
                        if (titleIndex < item.title.length) {
                          setDisplayedTitle(item.title.substring(0, titleIndex + 1));
                          titleIndex++;
                        } else {
                          clearInterval(titleInterval);
                        }
                      }, 30);
                    }, 200);
                  }
                }, 50);
                
                return () => {
                  clearInterval(categoryInterval);
                };
              } else {
                setDisplayedCategory("");
                setDisplayedTitle("");
              }
            }, [isHovered, item.category, item.title, isMobile]);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: isMobile ? 0.4 : 0.5, 
                  delay: isMobile ? index * 0.05 : index * 0.08,
                  ease: "easeOut"
                }}
                onHoverStart={() => !isMobile && setIsHovered(true)}
                onHoverEnd={() => !isMobile && setIsHovered(false)}
                className="group relative overflow-hidden rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 glass-card-premium cursor-pointer card-hover-glow"
                whileHover={!isMobile ? { y: -6, scale: 1.02 } : {}}
                role="article"
                aria-label={`Produto: ${item.title}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none z-10"></div>
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-muted/80 via-muted/60 to-muted/40 relative">
                  {!imageError ? (
                    <img
                      src={item.image}
                      alt={`${item.title} - ${item.category}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10">
                      <div className="text-center p-4">
                        <p className="text-primary text-sm font-semibold mb-2">{item.title}</p>
                        <p className="text-muted-foreground text-xs">{item.category}</p>
                      </div>
                    </div>
                  )}
                </div>
                {/* Informações sempre visíveis em mobile, animadas em desktop */}
                <div className="absolute inset-0 flex items-end p-3 sm:p-4 lg:p-6 pointer-events-none bg-gradient-to-t from-background/95 via-background/80 to-transparent">
                  <motion.div
                    initial={isMobile ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    animate={isMobile || isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <p className="text-primary text-xs font-semibold mb-1 sm:mb-2 uppercase tracking-wide">
                      {isMobile ? item.category : displayedCategory}
                      {!isMobile && isHovered && displayedCategory.length < item.category.length && (
                        <span className="animate-pulse">|</span>
                      )}
                    </p>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-foreground line-clamp-2">
                      {isMobile ? item.title : displayedTitle}
                      {!isMobile && isHovered && displayedTitle.length < item.title.length && (
                        <span className="animate-pulse">|</span>
                      )}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
