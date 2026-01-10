import { Instagram, Mail, MessageCircle, MapPin, FileText, Shield, HelpCircle, Phone, Heart, ChevronRight, Sparkles, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("spansivainformatica@gmail.com")
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      })
      .catch(err => {
        console.error('Erro ao copiar email:', err);
      });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background via-card/95 to-background border-t border-primary/30 rounded-t-3xl">
      {/* Efeitos visuais */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-xl"></div>
        
        {/* Bolhas decorativas */}
        <div className="absolute top-1/4 left-[10%] w-16 h-16 bg-primary/10 rounded-full blur-lg animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-[15%] w-20 h-20 bg-primary/15 rounded-full blur-lg animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-[20%] w-12 h-12 bg-primary/10 rounded-full blur-md animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Linhas diagonais sutis */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter/CTO Superior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative -top-8"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Precisa de ajuda?</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Fale com nossos especialistas e encontre o produto ideal para você
                </p>
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/90 rounded-full text-sm font-semibold text-white shadow-lg hover:shadow-[0_8px_30px_hsl(var(--primary)/0.5)] transition-all duration-300 overflow-hidden"
              >
                <Phone className="w-4 h-4" />
                <span>Falar com Especialista</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Efeito de brilho animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                              -translate-x-full group-hover:translate-x-full"></div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8">
            {/* Brand Section */}
            <div className="text-center sm:text-left">
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gradient mb-2">
                  SPANSIVA
                </h2>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Tecnologia Premium</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Especialistas em tecnologia gamer, oferecendo produtos de alta performance e atendimento personalizado.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Guaraciaba do Norte - CE</span>
              </div>
            </div>

            {/* Links Rápidos */}
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-bold mb-4 text-foreground uppercase tracking-wide flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-primary" />
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                {[
                  { id: "hero", label: "Início" },
                  { id: "services", label: "Produtos" },
                  { id: "portfolio", label: "Destaques" },
                  { id: "about", label: "Sobre Nós" },
                  { id: "contact", label: "Contato" }
                ].map((item, index) => (
                  <li key={index}>
                    <motion.button 
                      whileHover={{ x: 4 }}
                      onClick={() => scrollToSection(item.id)} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-300"></div>
                      <span>{item.label}</span>
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-bold mb-4 text-foreground uppercase tracking-wide flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                Contato
              </h4>
              <ul className="space-y-3">
                <li>
                  <motion.a 
                    whileHover={{ x: 4 }}
                    href="https://wa.me/558898033002" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-green-500 transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <MessageCircle className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">+55 88 9803-3002</span>
                  </motion.a>
                </li>
                <li>
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="group relative cursor-pointer"
                  >
                    <button
                      onClick={copyEmailToClipboard}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 w-full text-left"
                    >
                      <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium truncate">spansivainformatica@gmail.com</span>
                    </button>
                    {emailCopied && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-8 left-0 bg-primary text-white text-xs px-2 py-1 rounded"
                      >
                        Copiado!
                      </motion.div>
                    )}
                  </motion.div>
                </li>
                <li>
                  <motion.a 
                    whileHover={{ x: 4 }}
                    href="https://instagram.com/spansiva_tec.aplicada" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-pink-500 transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <Instagram className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">@spansiva_tec.aplicada</span>
                  </motion.a>
                </li>
              </ul>
            </div>

            {/* Informações Legais */}
            <div className="text-center sm:text-left">
              <h4 className="text-sm font-bold mb-4 text-foreground uppercase tracking-wide flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                Informações
              </h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-primary/5 to-transparent p-3 rounded-lg border border-primary/10">
                  <p className="text-xs text-muted-foreground mb-1">
                    <span className="font-semibold text-foreground">CNPJ:</span> 13.463.803/0001-24
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Loja especializada em produtos gamers e tecnologia
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <a 
                    href="/termos" 
                    className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <FileText className="w-3 h-3" />
                    <span>Termos de Uso</span>
                  </a>
                  <a 
                    href="/faq" 
                    className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <HelpCircle className="w-3 h-3" />
                    <span>Perguntas Frequentes</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col items-center gap-4 mb-8 pt-6 border-t border-border/30">
            <h5 className="text-sm font-medium text-muted-foreground">Siga-nos nas redes sociais</h5>
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://instagram.com/spansiva_tec.aplicada"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gradient-to-br from-pink-500/10 to-pink-500/5 rounded-lg border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-pink-500" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://wa.me/558898033002"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                onClick={copyEmailToClipboard}
                className="p-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
                aria-label="E-mail"
              >
                <Mail className="w-5 h-5 text-primary" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/30 py-6 relative">
          {/* Linha decorativa superior */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Spansiva</span>
              <div className="w-1 h-1 rounded-full bg-primary/30"></div>
              <span>Todos os direitos reservados</span>
            </div>
            
            <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span>por</span>
              <a 
                href="https://arturmaciel.pages.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold transition-all duration-300 hover:underline"
              >
                Artur Maciel
              </a>
              <span>&</span>
              <span className="text-primary font-semibold">Ryan Maximus</span>
            </div>
          </div>
        </div>
      </div>

      {/* Efeitos CSS customizados */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .text-gradient {
          background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(0, 100%, 45%) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </footer>
  );
};

export default Footer;