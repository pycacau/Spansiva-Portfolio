import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Laptop2, Printer, RotateCcw, Settings2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Services = () => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { 
    once: true, 
    amount: isMobile ? 0.1 : 0.2,
    margin: "0px 0px -100px 0px"
  });

  const services = [
    {
      icon: Laptop2,
      title: "Vendas de Computadores, Notebook",
      description: "Computadores desktop e notebooks de alta performance para todas as necessidades. Montamos seu PC personalizado ou oferecemos notebooks prontos para uso.",
    },
    {
      icon: Printer,
      title: "Impressoras",
      description: "Impressoras profissionais e domésticas para todas as necessidades. Modelos jato de tinta, laser e multifuncionais das melhores marcas.",
    },
    {
      icon: RotateCcw,
      title: "Recargas de Cartucho",
      description: "Serviço de recarga de cartuchos com qualidade garantida. Economize e preserve o meio ambiente com nossas recargas profissionais.",
    },
    {
      icon: Settings2,
      title: "Manutenção & Locação",
      description: "Serviços completos de manutenção preventiva e corretiva. Também oferecemos locação de equipamentos para eventos e necessidades temporárias.",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden" aria-label="Nossos produtos">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Produtos</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed font-light tracking-wide">
            Soluções completas em tecnologia e informática
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: isMobile ? 0.4 : 0.6, 
                delay: isMobile ? index * 0.05 : index * 0.1,
                ease: "easeOut"
              }}
              className="glass-card-premium p-4 sm:p-6 lg:p-8 xl:p-10 rounded-xl sm:rounded-2xl card-hover-glow group h-full flex flex-col relative overflow-hidden"
              whileHover={!isMobile ? { y: -6, scale: 1.02 } : {}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 transition-all duration-300 border border-primary/30 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
                  <service.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
                </div>
                <h3 className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight tracking-tight">{service.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed flex-grow font-light group-hover:text-foreground/90 transition-colors duration-300">{service.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
