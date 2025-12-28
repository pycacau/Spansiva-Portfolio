import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Laptop2, Printer, RotateCcw, Settings2 } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.2,
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
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Soluções completas em tecnologia e informática
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="glass-card p-6 sm:p-8 rounded-2xl hover:border-primary/60 transition-all duration-500 card-hover-glow group h-full flex flex-col backdrop-blur-md border border-primary/20 shadow-lg shadow-primary/5 hover:shadow-primary/20"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 group-hover:scale-110 border border-primary/20">
                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary drop-shadow-lg" strokeWidth={2} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
