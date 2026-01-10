import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Award, Zap, ShieldCheck, Users, Clock, Target, Star, Heart } from "lucide-react";

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
      title: "Experiência Comprovada",
      description: "+15 anos de expertise em tecnologia e hardware de ponta",
      value: "Desde 2010",
      color: "#EF4444"
    },
    {
      icon: Zap,
      title: "Atendimento Ágil",
      description: "Soluções rápidas e suporte técnico especializado 24/7",
      value: "Resposta Rápida",
      color: "#3B82F6"
    },
    {
      icon: ShieldCheck,
      title: "Qualidade Garantida",
      description: "Produtos premium com garantia estendida e suporte completo",
      value: "100% Garantia",
      color: "#10B981"
    },
    {
      icon: Users,
      title: "Clientes Satisfeitos",
      description: "+500 clientes atendidos com soluções personalizadas",
      value: "Fidelização",
      color: "#8B5CF6"
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Foco na Qualidade",
      description: "Selecionamos cada produto com rigor para garantir excelência",
      highlight: "Produtos Premium"
    },
    {
      icon: Star,
      title: "Inovação Constante",
      description: "Sempre atualizados com as últimas tendências em tecnologia gamer",
      highlight: "Tecnologia de Ponta"
    },
    {
      icon: Heart,
      title: "Paixão pela Tecnologia",
      description: "Entendemos suas necessidades e amamos o que fazemos",
      highlight: "Atendimento Humanizado"
    },
    {
      icon: Clock,
      title: "Compromisso com Prazos",
      description: "Entrega rápida e soluções dentro do prazo combinado",
      highlight: "Pontualidade"
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden" aria-label="Sobre a empresa">
      {/* Efeitos visuais sutis em tom vermelho */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-primary/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Badge superior */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 mb-6"
          >
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold tracking-wider text-foreground">NOSSA ESSÊNCIA</span>
          </motion.div>

          {/* Título */}
          <div className="relative">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 flex flex-col sm:block items-center justify-center">
              <span className="text-foreground">SOBRE A</span>
              <span className="text-primary hidden sm:inline mx-2 sm:mx-3 md:mx-4">/</span>
              <span className="text-primary relative mt-2 sm:mt-0">
                SPANSIVA
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary"
                />
              </span>
            </h1>
          </div>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed font-light tracking-wide"
          >
            Somos especialistas em tecnologia gamer, oferecendo 
            <span className="text-primary font-medium"> PCs de alta performance</span>, 
            <span className="text-foreground font-medium"> impressoras profissionais</span> e os melhores acessórios para transformar seu setup.
          </motion.p>
        </motion.div>

        {/* Diferenciais em grid 2x2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Nossos Diferenciais</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O que nos torna referência no mercado de tecnologia gamer
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5,
                  delay: 0.5 + (index * 0.1),
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={!isMobile ? { 
                  y: -6,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                } : {}}
                className="group relative cursor-pointer"
              >
                {/* Card principal */}
                <div className="relative bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 
                              border border-border/50 about-glow overflow-hidden
                              transition-all duration-300 group-hover:border-primary/30 group-hover:about-glow-hover
                              h-full flex flex-col">
                  
                  {/* Efeito de brilho de fundo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Cantos decorativos */}
                  <div className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-t border-l border-primary/30 rounded-tl-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-t border-r border-primary/30 rounded-tr-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-b border-l border-primary/30 rounded-bl-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-b border-r border-primary/30 rounded-br-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Ícone */}
                  <div className="relative mb-3 sm:mb-4">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 
                                  rounded-lg sm:rounded-xl flex items-center justify-center
                                  border border-primary/30 group-hover:border-primary/50 
                                  transition-all duration-300 group-hover:scale-110 overflow-hidden">
                      
                      {/* Efeito de brilho animado */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                    -translate-x-full group-hover:translate-x-full"></div>
                      
                      <feature.icon 
                        className="w-6 h-6 sm:w-8 sm:h-8 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" 
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1">
                    {/* Título */}
                    <h3 className="text-sm sm:text-base font-bold mb-2 group-hover:text-primary 
                                  transition-colors duration-300 leading-tight tracking-tight">
                      {feature.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 font-light 
                                group-hover:text-foreground/90 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Valor destacado */}
                    <div className="mt-auto">
                      <div className="px-2 sm:px-3 py-1 sm:py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
                        <span className="text-xs sm:text-sm font-bold text-primary">{feature.value}</span>
                      </div>
                    </div>
                  </div>

                  {/* Linha de progresso animada */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
                    animate={{
                      width: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                </div>

                {/* Sombra projetada */}
                <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-2 sm:h-3 
                              bg-primary/10 blur-sm rounded-full opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Valores em grid 2x2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Nossos Valores</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam cada decisão e ação na Spansiva
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5,
                  delay: 0.7 + (index * 0.1),
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={!isMobile ? { 
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                } : {}}
                className="group relative"
              >
                {/* Card de valor */}
                <div className="relative bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 
                              border border-border/50 values-glow overflow-hidden
                              transition-all duration-300 group-hover:border-primary/20 group-hover:values-glow-hover
                              h-full">
                  
                  {/* Ícone */}
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 rounded-lg sm:rounded-xl">
                      <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-foreground">{value.title}</h4>
                  </div>

                  {/* Descrição */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 font-light">
                    {value.description}
                  </p>

                  {/* Destaque */}
                  <div className="mt-auto pt-3 border-t border-border/20">
                    <span className="text-xs font-semibold text-primary">{value.highlight}</span>
                  </div>

                  {/* Linha decorativa */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-transparent"
                    animate={{
                      width: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.4
                    }}
                  />
                </div>

                {/* Sombra suave */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-2 
                              bg-primary/5 blur-sm rounded-full opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rodapé da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              <span className="text-foreground font-semibold">Paixão por tecnologia</span> que transforma setups em experiências extraordinárias
            </span>
          </div>
        </motion.div>
      </div>

      {/* Efeitos CSS customizados */}
      <style jsx>{`
        .tech-grid {
          background-image: 
            linear-gradient(to right, rgba(239, 68, 68, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(239, 68, 68, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .about-glow {
          box-shadow: 
            0 0 10px rgba(239, 68, 68, 0.05),
            0 0 20px rgba(239, 68, 68, 0.03),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        
        .about-glow-hover {
          box-shadow: 
            0 10px 30px rgba(239, 68, 68, 0.12),
            0 0 40px rgba(239, 68, 68, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .values-glow {
          box-shadow: 
            0 0 8px rgba(239, 68, 68, 0.04),
            0 0 15px rgba(239, 68, 68, 0.02),
            inset 0 1px 0 rgba(255, 255, 255, 0.03);
        }
        
        .values-glow-hover {
          box-shadow: 
            0 8px 25px rgba(239, 68, 68, 0.1),
            0 0 35px rgba(239, 68, 68, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </section>
  );
};

export default About;