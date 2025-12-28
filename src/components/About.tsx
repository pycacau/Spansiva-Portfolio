import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Zap, ShieldCheck } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.2,
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
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-card/95 to-card relative overflow-hidden" aria-label="Sobre a empresa">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
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
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Somos uma loja especializada em produtos gamers, oferecendo PCs de alta performance, impressoras profissionais e os melhores acessórios para sua experiência gaming. Com foco em qualidade, performance e atendimento personalizado, temos tudo que você precisa para montar o setup dos seus sonhos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-primary/20 hover:border-primary/60 transition-all duration-500 card-hover-glow h-full flex flex-col backdrop-blur-md shadow-lg shadow-primary/5 hover:shadow-primary/20"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="mb-5">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 w-fit mb-5 shadow-lg shadow-primary/20 border border-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
                  <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary drop-shadow-lg" strokeWidth={2} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
