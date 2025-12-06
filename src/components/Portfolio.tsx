import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const portfolioItems = [
    {
      title: "PC Gamer RTX 4090",
      category: "PCs Gamer",
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&q=80",
    },
    {
      title: "Impressora Multifuncional",
      category: "Impressoras",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
    },
    {
      title: "Teclado Mecânico RGB",
      category: "Acessórios",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80",
    },
    {
      title: "Setup Gamer Completo",
      category: "PCs Gamer",
      image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=800&q=80",
    },
    {
      title: "Headset Gamer Pro",
      category: "Acessórios",
      image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800&q=80",
    },
    {
      title: "Monitor 4K 144Hz",
      category: "Acessórios",
      image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80",
    },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 bg-card relative overflow-hidden" aria-label="Produtos em destaque">
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
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
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-border hover:border-primary transition-all duration-300 card-hover-glow glass-card cursor-pointer"
              role="article"
              aria-label={`Produto: ${item.title}`}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.category}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-primary text-sm font-semibold mb-1">{item.category}</p>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
