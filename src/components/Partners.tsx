import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.2,
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
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden" id="partners" aria-label="Marcas parceiras">
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">Marcas parceiras</h2>
          <p className="text-sm sm:text-base text-muted-foreground px-4">Hardware e periféricos de alto desempenho</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.05,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="glass-card rounded-2xl p-6 sm:p-8 text-center border border-primary/20 hover:border-primary/60 transition-all duration-500 card-hover-glow flex items-center justify-center min-h-[120px] bg-background/60 backdrop-blur-sm shadow-lg shadow-primary/5 hover:shadow-primary/20"
              whileHover={{ scale: 1.08, y: -4 }}
            >
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="max-w-full max-h-20 object-contain opacity-80 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 filter brightness-0 invert hover:brightness-100 hover:invert-0"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('span');
                  fallback.textContent = brand.name;
                  fallback.className = 'text-sm sm:text-base font-bold text-foreground';
                  target.parentElement?.appendChild(fallback);
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

