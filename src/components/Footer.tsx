import { Instagram, Mail, MessageCircle, MapPin, FileText, Shield, HelpCircle, Phone } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background via-card/95 to-background border-t border-primary/30 rounded-t-3xl">
      {/* Efeito de bolha 3D */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/10 via-transparent to-transparent blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary/20 via-primary/10 to-transparent blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-primary/30 via-primary/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-primary/40 via-primary/30 to-transparent blur-4xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-primary/50 via-primary/40 to-transparent blur-3xl"></div>
        
        {/* Bolhas flutuantes 3D */}
        <div className="absolute bottom-0 left-[10%] w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-0 left-[30%] w-24 h-24 bg-primary/15 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-0 left-[50%] w-28 h-28 bg-primary/25 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-0 left-[70%] w-20 h-20 bg-primary/20 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-0 left-[85%] w-16 h-16 bg-primary/15 rounded-full blur-md animate-float-delayed"></div>
        <div className="absolute bottom-0 right-[10%] w-36 h-36 bg-primary/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-0 right-[30%] w-28 h-28 bg-primary/25 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-0 right-[50%] w-24 h-24 bg-primary/15 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-0 right-[70%] w-20 h-20 bg-primary/20 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-0 right-[85%] w-16 h-16 bg-primary/15 rounded-full blur-md animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-10 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10">
            {/* Brand Section */}
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 sm:mb-3">
                SPANSIVA
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 font-medium">
                Tecnologia Aplicada
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Loja especializada em produtos gamers: PCs, impressoras e acessórios de alta performance.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-muted-foreground">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span>Guaraciaba do Norte - CE</span>
              </div>
            </div>

            {/* Informações */}
            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-foreground uppercase tracking-wide">Informações</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection("hero")} 
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 group relative"
                  >
                    <span className="relative z-10">Sobre nós</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("services")} 
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 group relative"
                  >
                    <span className="relative z-10">Produtos</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("portfolio")} 
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 group relative"
                  >
                    <span className="relative z-10">Destaques</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("contact")} 
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 group relative"
                  >
                    <span className="relative z-10">Contato</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Suporte */}
            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-foreground uppercase tracking-wide">Suporte</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a 
                    href="/termos" 
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center justify-center sm:justify-start gap-2 group relative"
                  >
                    <FileText className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 relative z-10 flex-shrink-0" />
                    <span className="relative z-10">Termos de Uso</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/faq" 
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center justify-center sm:justify-start gap-2 group relative"
                  >
                    <HelpCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 relative z-10 flex-shrink-0" />
                    <span className="relative z-10">Perguntas Frequentes</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-foreground uppercase tracking-wide">Contato</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a 
                    href="https://wa.me/558898033002" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center justify-center sm:justify-start gap-2 group relative"
                  >
                    <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 relative z-10 flex-shrink-0" />
                    <span className="relative z-10">+55 88 9803-3002</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:spansivainformatica@gmail.com" 
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center justify-center sm:justify-start gap-2 group break-all relative"
                  >
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 relative z-10" />
                    <span className="text-xs relative z-10">spansivainformatica@gmail.com</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://instagram.com/spansiva_tec.aplicada" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center justify-center sm:justify-start gap-2 group relative"
                  >
                    <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 relative z-10 flex-shrink-0" />
                    <span className="relative z-10">@spansiva_tec.aplicada</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li className="pt-2">
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold">CNPJ:</span> 13.463.803/0001-24
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/30 py-6 relative">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} Spansiva — Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <span>Desenvolvido por</span>
              <a 
                href="https://arturmaciel.pages.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold transition-all duration-300 hover:underline relative group"
              >
                <span className="relative z-10">Artur Maciel</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
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
