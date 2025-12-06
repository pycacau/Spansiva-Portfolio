import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Zap, Shield } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
      icon: Shield,
      title: "Qualidade",
      description: "Produtos e serviços de alta confiabilidade",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-card relative overflow-hidden" aria-label="Sobre a empresa">
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
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
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-background p-8 sm:p-10 rounded-lg border border-border hover:border-primary transition-all duration-300 card-hover-glow h-full flex flex-col"
              whileHover={{ y: -4 }}
            >
              <div className="mb-5">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">{feature.title}</h3>
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
