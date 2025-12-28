import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.2,
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
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Confira alguns dos nossos produtos gamers mais populares
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {portfolioItems.map((item, index) => {
            const [imageError, setImageError] = useState(false);
            const [isHovered, setIsHovered] = useState(false);
            const [displayedCategory, setDisplayedCategory] = useState("");
            const [displayedTitle, setDisplayedTitle] = useState("");
            
            useEffect(() => {
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
            }, [isHovered, item.category, item.title]);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ y: -12, scale: 1.03, rotateY: 2 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="group relative overflow-hidden rounded-2xl border border-primary/20 hover:border-primary/60 transition-all duration-700 card-hover-glow glass-card cursor-pointer backdrop-blur-md shadow-xl shadow-primary/10 hover:shadow-primary/30"
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                role="article"
                aria-label={`Produto: ${item.title}`}
              >
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-muted/80 via-muted/60 to-muted/40 relative">
                  {!imageError ? (
                    <motion.img
                      src={item.image}
                      alt={`${item.title} - ${item.category}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onError={() => setImageError(true)}
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.15 }}
                      transition={{ 
                        duration: 0.8, 
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
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
                <div className="absolute inset-0 flex items-end p-4 sm:p-6 pointer-events-none">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <p className="text-primary text-xs sm:text-sm font-semibold mb-2 uppercase tracking-wide">
                      {displayedCategory}
                      {isHovered && displayedCategory.length < item.category.length && (
                        <span className="animate-pulse">|</span>
                      )}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {displayedTitle}
                      {isHovered && displayedTitle.length < item.title.length && (
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
