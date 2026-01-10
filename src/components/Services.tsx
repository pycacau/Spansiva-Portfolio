import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Laptop2, Printer, RotateCcw, Settings2, Zap, Shield, Award, Clock, ChevronRight } from "lucide-react";
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
      title: "Computadores & Notebooks",
      description: "PCs desktop e notebooks de alta performance. Montagem personalizada ou equipamentos prontos para uso imediato.",
      features: ["Montagem personalizada", "Hardware premium", "Garantia extendida"],
      color: "#3B82F6",
      stats: "+500 equipamentos"
    },
    {
      icon: Printer,
      title: "Impressoras",
      description: "Impressoras profissionais e domésticas. Modelos jato de tinta, laser e multifuncionais das principais marcas.",
      features: ["Multifuncionais", "Alta produtividade", "Suporte técnico"],
      color: "#EF4444",
      stats: "+50 modelos"
    },
    {
      icon: RotateCcw,
      title: "Recarga de Cartuchos",
      description: "Recarga profissional com qualidade garantida. Economize até 70% e preserve o meio ambiente.",
      features: ["Economia garantida", "Qualidade premium", "Ecológico"],
      color: "#10B981",
      stats: "+1000 recargas/mês"
    },
    {
      icon: Settings2,
      title: "Manutenção & Locação",
      description: "Serviços completos de manutenção e locação de equipamentos para eventos e necessidades temporárias.",
      features: ["Preventiva & Corretiva", "Suporte 24/7", "Equipamentos modernos"],
      color: "#8B5CF6",
      stats: "+200 serviços/mês"
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden" aria-label="Nossos serviços">
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
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold tracking-wider text-foreground">SERVIÇOS PREMIUM</span>
          </motion.div>

          {/* Título */}
          <div className="relative">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 flex flex-col sm:block items-center justify-center">
              <span className="text-foreground">NOSSOS</span>
              <span className="text-primary hidden sm:inline mx-2 sm:mx-3 md:mx-4">/</span>
              <span className="text-primary relative mt-2 sm:mt-0">
                SERVIÇOS
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
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed font-light tracking-wide"
          >
            Soluções completas em tecnologia com <span className="text-primary font-medium">qualidade premium</span> e <span className="text-foreground font-medium">suporte especializado</span>
          </motion.p>

          {/* Estatísticas principais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-8"
          >
            <div className="text-center p-3 bg-gradient-to-b from-card to-background rounded-xl border border-border/30">
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">+15</div>
              <div className="text-xs text-muted-foreground">Anos</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-b from-card to-background rounded-xl border border-border/30">
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">100%</div>
              <div className="text-xs text-muted-foreground">Garantia</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-b from-card to-background rounded-xl border border-border/30">
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-xs text-muted-foreground">Suporte</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Grid de serviços 2x2 para todas as telas */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5,
                delay: isMobile ? index * 0.05 : index * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={!isMobile ? { 
                y: -6,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              } : {}}
              className="group relative cursor-pointer"
            >
              {/* Card principal */}
              <div className="relative bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6
                            border border-border/50 service-glow overflow-hidden
                            transition-all duration-300 group-hover:border-primary/30 group-hover:service-glow-hover
                            h-full flex flex-col">
                
                {/* Efeito de brilho de fundo */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Cantos decorativos */}
                <div className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-t border-l border-primary/30 rounded-tl-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-t border-r border-primary/30 rounded-tr-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-b border-l border-primary/30 rounded-bl-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-b border-r border-primary/30 rounded-br-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Ícone com badge de número */}
                <div className="relative mb-3 sm:mb-4 md:mb-5">
                  {/* Badge de número */}
                  <div className="absolute -left-1 -top-1 sm:-left-2 sm:-top-2 z-20">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-xs font-bold text-white">{index + 1}</span>
                    </div>
                  </div>

                  {/* Container do ícone */}
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 
                                rounded-lg sm:rounded-xl flex items-center justify-center ml-3 sm:ml-4
                                border border-primary/30 group-hover:border-primary/50 
                                transition-all duration-300 group-hover:scale-110 overflow-hidden">
                    
                    {/* Efeito de brilho animado */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                  -translate-x-full group-hover:translate-x-full"></div>
                    
                    <service.icon 
                      className="w-6 h-6 sm:w-8 sm:h-8 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" 
                      strokeWidth={2.5}
                    />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  {/* Título */}
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 sm:mb-3 group-hover:text-primary 
                                transition-colors duration-300 leading-tight tracking-tight">
                    {service.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4 font-light 
                              group-hover:text-foreground/90 transition-colors duration-300 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1 sm:gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0"></div>
                        <span className="text-xs font-medium text-foreground/80 truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Estatística do serviço */}
                  <div className="mt-auto">
                    <div className="px-2 sm:px-3 py-1 sm:py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg sm:rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-primary">{service.stats}</span>
                        <ChevronRight className="w-3 h-3 text-primary/60" />
                      </div>
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

        {/* Rodapé da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-8 sm:mt-12 md:mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Garantia em todos os serviços</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-primary/20"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Suporte técnico especializado</span>
            </div>
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
        
        .service-glow {
          box-shadow: 
            0 0 10px rgba(239, 68, 68, 0.05),
            0 0 20px rgba(239, 68, 68, 0.03),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        
        .service-glow-hover {
          box-shadow: 
            0 10px 30px rgba(239, 68, 68, 0.12),
            0 0 40px rgba(239, 68, 68, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Services;