import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Award, Zap, ShieldCheck } from "lucide-react";
import { SectionBackground } from "@/components/ui/section-background";

const About = () => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { 
    once: true, 
    amount: isMobile ? 0.1 : 0.2,
    margin: "0px 0px -100px 0px"
  });

  const features = [
    {
      icon: Award,
      title: "Experiência",
      description: "Anos de expertise em tecnologia e hardware",
    },
    {
      icon: Zap,
      title: "Rapidez",
      description: "Atendimento ágil e soluções eficientes",
    },
    {
      icon: ShieldCheck,
      title: "Qualidade",
      description: "Produtos e serviços de alta confiabilidade",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 relative overflow-hidden" aria-label="Sobre a empresa">
      <SectionBackground variant="about" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Sobre a <span className="text-gradient">Spansiva</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed font-light tracking-wide">
            Somos uma loja especializada em produtos gamers, oferecendo PCs de alta performance, impressoras profissionais e os melhores acessórios para sua experiência gaming. Com foco em qualidade, performance e atendimento personalizado, temos tudo que você precisa para montar o setup dos seus sonhos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: isMobile ? 0.4 : 0.6, 
                delay: isMobile ? index * 0.08 : index * 0.15,
                ease: "easeOut"
              }}
              className="glass-card-premium p-8 sm:p-10 rounded-2xl card-hover-glow h-full flex flex-col group relative overflow-hidden"
              whileHover={!isMobile ? { y: -6, scale: 1.02 } : {}}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-300 pointer-events-none"></div>
              <div className="mb-6 relative z-10">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 w-fit mb-6 border border-primary/30 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
                  <feature.icon className="w-12 h-12 sm:w-14 sm:h-14 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">{feature.title}</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light group-hover:text-foreground/90 transition-colors duration-300">{feature.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
