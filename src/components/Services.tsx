import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Laptop, Printer, RefreshCw, Wrench } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      icon: Laptop,
      title: "Vendas de Computadores, Notebook",
      description: "Computadores desktop e notebooks de alta performance para todas as necessidades. Montamos seu PC personalizado ou oferecemos notebooks prontos para uso.",
    },
    {
      icon: Printer,
      title: "Impressoras",
      description: "Impressoras profissionais e domésticas para todas as necessidades. Modelos jato de tinta, laser e multifuncionais das melhores marcas.",
    },
    {
      icon: RefreshCw,
      title: "Recargas de Cartucho",
      description: "Serviço de recarga de cartuchos com qualidade garantida. Economize e preserve o meio ambiente com nossas recargas profissionais.",
    },
    {
      icon: Wrench,
      title: "Manutenção & Locação",
      description: "Serviços completos de manutenção preventiva e corretiva. Também oferecemos locação de equipamentos para eventos e necessidades temporárias.",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden" aria-label="Nossos produtos">
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute top-1/4 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 sm:p-10 rounded-xl hover:border-primary transition-all duration-300 card-hover-glow group h-full flex flex-col backdrop-blur-md"
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="bg-primary/20 w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors neon-ring group-hover:scale-110">
                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
