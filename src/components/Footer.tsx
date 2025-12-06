import { Instagram, Mail, MessageCircle, Cpu, Keyboard, MousePointer } from "lucide-react";
const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-primary/20 py-12 sm:py-16 relative overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-12">
          <div>
            <div className="mb-6 sm:mb-8">
              <img 
                src="/logomarca.png" 
                alt="Spansiva Logo" 
                className="h-20 sm:h-28 md:h-32 w-auto filter drop-shadow-[0_0_12px_hsl(0,100%,50%)] drop-shadow-[0_0_24px_hsl(0,100%,50%)] drop-shadow-[0_0_36px_hsl(0,100%,50%)]"
              />
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Loja especializada em produtos gamers: PCs, impressoras e acessórios de alta performance.
            </p>
            <div className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-base sm:text-lg text-primary font-semibold flex items-center gap-2">
                <span className="text-xl">📍</span> Guaraciaba do Norte
              </p>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <div className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 cursor-pointer">
                <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 cursor-pointer">
                <Keyboard className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 cursor-pointer">
                <MousePointer className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gradient">Links Rápidos</h4>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection("hero")} 
                className="block text-base sm:text-lg text-muted-foreground hover:text-primary transition-all duration-300 text-left hover:translate-x-2 w-fit"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection("services")} 
                className="block text-base sm:text-lg text-muted-foreground hover:text-primary transition-all duration-300 text-left hover:translate-x-2 w-fit"
              >
                Produtos
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")} 
                className="block text-base sm:text-lg text-muted-foreground hover:text-primary transition-all duration-300 text-left hover:translate-x-2 w-fit"
              >
                Destaques
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="block text-base sm:text-lg text-muted-foreground hover:text-primary transition-all duration-300 text-left hover:translate-x-2 w-fit"
              >
                Contato
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gradient">Contato</h4>
            <div className="space-y-4">
              <a 
                href="mailto:contato@spansiva.com" 
                className="flex items-center gap-3 text-base sm:text-lg text-muted-foreground hover:text-primary transition-all duration-300 group p-2 rounded-lg hover:bg-primary/10"
              >
                <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
                </div>
                <span className="break-all">contato@spansiva.com</span>
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-base sm:text-lg text-muted-foreground hover:text-primary transition-all duration-300 group p-2 rounded-lg hover:bg-primary/10"
              >
                <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
                </div>
                <span className="break-all">WhatsApp: (11) 99999-9999</span>
              </a>
              <a 
                href="https://instagram.com/spansiva" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-base sm:text-lg text-muted-foreground hover:text-primary transition-all duration-300 group p-2 rounded-lg hover:bg-primary/10"
              >
                <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 group-hover:scale-110 transition-transform" />
                </div>
                @spansiva
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/30 pt-8 sm:pt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm sm:text-base text-muted-foreground">© {new Date().getFullYear()} Spansiva — Todos os direitos reservados.</p>
            <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground flex-wrap justify-center">
              <span>Desenvolvido por</span>
              <a 
                href="https://arturmaciel.pages.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold transition-all duration-300 underline decoration-primary/50 hover:decoration-primary hover:scale-105"
              >
                Artur Maciel
              </a>
              <span>e</span>
              <span className="text-primary font-semibold">Ryan Maximus</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
