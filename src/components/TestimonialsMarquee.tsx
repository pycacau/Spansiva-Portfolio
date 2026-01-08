import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card";

const TestimonialsMarquee = () => {
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
        name: "Carlos M.",
        handle: "@carlos_gamer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Comprei um PC gamer completo na Spansiva. Performance incrível e entrega rápida! Recomendo muito.",
      rating: 5,
    },
    {
      author: {
        name: "Fernanda S.", 
        handle: "@fernanda_tech",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "Adquiri uma impressora e vários acessórios gamers. Qualidade excelente e preço justo. Super satisfeita!",
      rating: 5,
    },
    {
      author: {
        name: "Ricardo A.",
        handle: "@ricardo_dev",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "Melhor loja de produtos gamers! Atendimento impecável e produtos de primeira linha. Voltarei com certeza.",
      rating: 5,
    },
    {
      author: {
        name: "Juliana P.",
        handle: "@juliana_office",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "Serviço de recarga de cartuchos excelente! Economizei muito e a qualidade das impressões continua perfeita.",
      rating: 5,
    },
    {
      author: {
        name: "Marcos R.",
        handle: "@marcos_pro",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: "Notebook de alta performance que comprei superou todas as expectativas. Ótimos produtos e atendimento!",
      rating: 5,
    },
    {
      author: {
        name: "Aline B.",
        handle: "@aline_creator",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "Encontrei tudo que precisava para meu setup gamer. Preços competitivos e entrega super rápida.",
      rating: 5,
    }
  ];

  return (
    <section className={cn(
      "py-16 sm:py-20 md:py-24 relative overflow-hidden",
      "border-t border-b border-primary/10"
    )} id="testimonials-marquee" aria-label="Depoimentos de clientes em carrossel">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: isMobile ? 0.4 : 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4 leading-relaxed font-light tracking-wide">
            Depoimentos em movimento de quem confia na Spansiva
          </p>
        </motion.div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:20s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <motion.div
                    key={`${setIndex}-${i}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5,
                      delay: (setIndex * testimonials.length + i) * 0.1
                    }}
                    className="relative flex flex-col"
                    whileHover={!isMobile ? { y: -4, scale: 1.02 } : {}}
                  >
                    <div className="flex mb-2 gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, idx) => (
                        <Star 
                          key={idx} 
                          className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary hover:scale-110 transition-transform duration-300" 
                          style={{ transitionDelay: `${idx * 50}ms` }} 
                        />
                      ))}
                    </div>
                    
                    <TestimonialCard
                      author={testimonial.author}
                      text={testimonial.text}
                      className="glass-card-premium border border-primary/20 hover:border-primary/50 card-hover-glow"
                    />
                  </motion.div>
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-card sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-card sm:block" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
