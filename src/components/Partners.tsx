import { motion } from "framer-motion";

const Partners = () => {
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4">Marcas parceiras</h2>
          <p className="text-sm sm:text-base text-muted-foreground px-4">Hardware e periféricos de alto desempenho</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card rounded-xl p-6 sm:p-8 text-center border border-border hover:border-primary transition-all duration-300 card-hover-glow flex items-center justify-center min-h-[120px] bg-background/60 backdrop-blur-sm"
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

