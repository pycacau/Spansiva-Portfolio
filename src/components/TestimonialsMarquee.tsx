import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, MessageCircle, Quote, Heart, Award, ChevronRight, User } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Testimonials = () => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { 
    once: true, 
    amount: isMobile ? 0.1 : 0.2,
    margin: "0px 0px -100px 0px"
  });

  const testimonials = [
    {
      author: {
        name: "Carlos Mendes",
        role: "Streamer - São Paulo/SP",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Montei todo meu setup gamer na Spansiva. A performance é incrível e o atendimento foi excepcional! Recomendo para todos os gamers brasileiros.",
      rating: 5,
      product: "PC Gamer Completo",
      location: "São Paulo"
    },
    {
      author: {
        name: "Fernanda Silva", 
        role: "Designer - Rio de Janeiro/RJ",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "Comprei minha impressora profissional e vários periféricos. Qualidade premium e entrega super rápida para o Rio! Super satisfeita!",
      rating: 5,
      product: "Impressora Profissional",
      location: "Rio de Janeiro"
    },
    {
      author: {
        name: "Ricardo Almeida",
        role: "Dev de Jogos - Belo Horizonte/MG",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "A melhor loja de tecnologia do Brasil! Produtos de primeira linha e suporte que faz toda diferença. Compro sempre aqui em BH!",
      rating: 5,
      product: "Notebook High-End",
      location: "Belo Horizonte"
    },
    {
      author: {
        name: "Juliana Pereira",
        role: "Professora - Porto Alegre/RS",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "Serviço de recarga de cartuchos excelente aqui no RS! Economizei muito e a qualidade continua perfeita. Muito obrigada!",
      rating: 5,
      product: "Recarga de Cartuchos",
      location: "Porto Alegre"
    },
    {
      author: {
        name: "Marcos Rodrigues",
        role: "Engenheiro - Brasília/DF",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: "Notebook para trabalho que superou todas as expectativas. Entrega rápida para Brasília e performance excepcional. Nota 10!",
      rating: 5,
      product: "Workstation Profissional",
      location: "Brasília"
    },
    {
      author: {
        name: "Aline Barbosa",
        role: "Criadora de Conteúdo - Salvador/BA",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Encontrei tudo para meu setup de streaming aqui na Bahia. Produtos premium e um atendimento que faz toda diferença! Recomendo!",
      rating: 5,
      product: "Setup Streaming",
      location: "Salvador"
    },
    {
      author: {
        name: "Roberto Santos",
        role: "Estudante - Fortaleza/CE",
        avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=150&h=150&fit=crop&crop=face"
      },
      text: "Primeiro PC gamer comprado na Spansiva e estou apaixonado! Entrega rápida para o Ceará e qualidade impecável. Valeu cada centavo!",
      rating: 5,
      product: "PC Gamer Iniciante",
      location: "Fortaleza"
    },
    {
      author: {
        name: "Patrícia Lima",
        role: "Administradora - Curitiba/PR",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
      },
      text: "Impressora multifuncional perfeita para meu escritório em Curitiba. Atendimento excelente e produto de alta qualidade!",
      rating: 5,
      product: "Impressora Multifuncional",
      location: "Curitiba"
    },
    {
      author: {
        name: "Lucas Oliveira",
        role: "Youtuber - Recife/PE",
        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
      },
      text: "Equipamentos top para produção de conteúdo aqui em Recife! A Spansiva entende as necessidades dos criadores brasileiros.",
      rating: 5,
      product: "Equipamentos para Youtube",
      location: "Recife"
    },
    {
      author: {
        name: "Camila Costa",
        role: "Arquiteta - Goiânia/GO",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face"
      },
      text: "Notebook potente para trabalhos de arquitetura. Entrega rápida em Goiânia e suporte técnico de qualidade. Recomendo!",
      rating: 5,
      product: "Notebook para Arquitetura",
      location: "Goiânia"
    },
    {
      author: {
        name: "Diego Martins",
        role: "Profissional de TI - Manaus/AM",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Mesmo aqui no Amazonas, a entrega foi rápida e o produto chegou perfeito. Melhor loja de tecnologia para o Norte do Brasil!",
      rating: 5,
      product: "Servidores e Rede",
      location: "Manaus"
    },
    {
      author: {
        name: "Mariana Ribeiro",
        role: "Esteticista - Florianópolis/SC",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
      },
      text: "Computador para controle do meu salão aqui em Floripa. Performance excelente e atendimento super atencioso. Adorei!",
      rating: 5,
      product: "Computador para Salão",
      location: "Florianópolis"
    }
  ];

  return (
    <section className={cn(
      "py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden"
    )} id="testimonials" aria-label="Depoimentos de clientes brasileiros">
      {/* Efeitos visuais sutis em tom vermelho */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-primary/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Cabeçalho */}
        <motion.div 
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
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold tracking-wider text-foreground">CLIENTES BRASILEIROS</span>
          </motion.div>

          {/* Título */}
          <div className="relative">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 flex flex-col sm:block items-center justify-center">
              <span className="text-foreground">OPINIÃO DOS</span>
              <span className="text-primary hidden sm:inline mx-2 sm:mx-3 md:mx-4">/</span>
              <span className="text-primary relative mt-2 sm:mt-0">
                CLIENTES
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
            A experiência de <span className="text-primary font-medium">gamers e profissionais brasileiros</span> que já transformaram seus setups com produtos <span className="text-foreground font-medium">Spansiva</span>
          </motion.p>

          {/* Indicador de carrossel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full"
          >
            <ChevronRight className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Arraste para ver mais depoimentos</span>
            <ChevronRight className="w-4 h-4 text-primary animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Carrossel de depoimentos */}
        <div className="relative mb-12">
          {/* Gradientes laterais */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background via-background/90 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background via-background/90 to-transparent z-20 pointer-events-none"></div>

          {/* Carrossel principal */}
          <div className="relative overflow-hidden py-4">
            {/* Primeiro carrossel (esquerda para direita) */}
            <motion.div
              className="flex gap-4 sm:gap-6 mb-6"
              animate={{ 
                x: [0, -window.innerWidth]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear"
                }
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCardCarousel 
                  key={`carousel-1-${testimonial.author.name}-${index}`} 
                  testimonial={testimonial} 
                  index={index} 
                  isInView={isInView}
                />
              ))}
            </motion.div>

            {/* Segundo carrossel (direita para esquerda) */}
            <motion.div
              className="flex gap-4 sm:gap-6"
              animate={{ 
                x: [-window.innerWidth, 0]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear"
                }
              }}
            >
              {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((testimonial, index) => (
                <TestimonialCardCarousel 
                  key={`carousel-2-${testimonial.author.name}-${index}`} 
                  testimonial={testimonial} 
                  index={index} 
                  isInView={isInView}
                  reverse
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Estatísticas brasileiras */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
        >
          <div className="text-center p-4 bg-gradient-to-b from-card to-background rounded-xl border border-border/30">
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">4.9</div>
            <div className="text-xs text-muted-foreground">Média Brasil</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-b from-card to-background rounded-xl border border-border/30">
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">12+</div>
            <div className="text-xs text-muted-foreground">Estados</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-b from-card to-background rounded-xl border border-border/30">
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">98%</div>
            <div className="text-xs text-muted-foreground">Recomendam</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-b from-card to-background rounded-xl border border-border/30">
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">500+</div>
            <div className="text-xs text-muted-foreground">Clientes</div>
          </div>
        </motion.div>

        {/* Rodapé da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Clientes de todo o Brasil</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-primary/20"></div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Compartilhe sua experiência</span>
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
        
        .testimonial-glow {
          box-shadow: 
            0 0 10px rgba(239, 68, 68, 0.05),
            0 0 20px rgba(239, 68, 68, 0.03),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        
        .testimonial-glow-hover {
          box-shadow: 
            0 10px 30px rgba(239, 68, 68, 0.12),
            0 0 40px rgba(239, 68, 68, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
};

// Componente de card para o carrossel
const TestimonialCardCarousel = ({ testimonial, index, isInView, reverse = false }: any) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: reverse ? 15 : -15 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.5,
          delay: index * 0.03,
          ease: [0.16, 1, 0.3, 1]
        }}
        whileHover={!isMobile ? { 
          y: -6,
          transition: { type: "spring", stiffness: 400, damping: 25 }
        } : {}}
        className="group relative cursor-pointer"
      >
        {/* Card principal */}
        <div className="relative bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 
                      border border-border/50 testimonial-glow overflow-hidden
                      transition-all duration-300 group-hover:border-primary/30 group-hover:testimonial-glow-hover
                      h-full flex flex-col">
          
          {/* Efeito de brilho de fundo */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Cantos decorativos */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/30 rounded-tl-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/30 rounded-tr-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/30 rounded-bl-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/30 rounded-br-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>

          {/* Ícone de aspas */}
          <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star 
                key={idx} 
                className={`w-4 h-4 ${idx < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground/30'}`}
              />
            ))}
            <span className="text-xs font-semibold text-primary ml-2">{testimonial.rating}.0</span>
          </div>

          {/* Texto do depoimento */}
          <div className="flex-1 mb-4">
            <p className="text-sm sm:text-sm text-muted-foreground leading-relaxed italic font-light group-hover:text-foreground/90 transition-colors duration-300 line-clamp-4">
              "{testimonial.text}"
            </p>
          </div>

          {/* Localização brasileira */}
          <div className="mb-3">
            <div className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-primary/5 to-primary/10 rounded text-xs font-medium text-primary">
              <span>📍</span>
              <span>{testimonial.location}</span>
            </div>
          </div>

          {/* Autor */}
          <div className="flex items-center gap-3 mt-auto pt-3 border-t border-border/30">
            <div className="relative">
              <img 
                src={testimonial.author.avatar} 
                alt={testimonial.author.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card"></div>
            </div>
            <div className="flex-1">
              <h4 className="text-sm sm:text-base font-bold text-foreground">{testimonial.author.name}</h4>
              <p className="text-xs text-muted-foreground">{testimonial.author.role}</p>
            </div>
          </div>

          {/* Produto adquirido */}
          <div className="mt-3">
            <div className="inline-flex items-center gap-2 px-2 py-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full">
              <Award className="w-3 h-3 text-primary" />
              <span className="text-xs font-medium text-primary">{testimonial.product}</span>
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
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-3 
                      bg-primary/10 blur-sm rounded-full opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.div>
    </div>
  );
};

export default Testimonials;