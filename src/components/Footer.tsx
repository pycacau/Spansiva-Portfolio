import { Instagram, Mail, MessageCircle, MapPin, FileText, Shield, HelpCircle, Phone } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-background via-card to-background border-t border-primary/20 relative overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
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
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Sobre nós
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("services")} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Produtos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("portfolio")} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Destaques
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("contact")} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    Contato
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
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center justify-center sm:justify-start gap-2 group"
                  >
                    <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Termos de Uso</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/faq" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center justify-center sm:justify-start gap-2 group"
                  >
                    <HelpCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Perguntas Frequentes</span>
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
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center justify-center sm:justify-start gap-2 group"
                  >
                    <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>+55 88 9803-3002</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:spansivainformatica@gmail.com" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center justify-center sm:justify-start gap-2 group break-all"
                  >
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-xs">spansivainformatica@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://instagram.com/spansiva_tec.aplicada" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center justify-center sm:justify-start gap-2 group"
                  >
                    <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>@spansiva_tec.aplicada</span>
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
        <div className="border-t border-primary/20 py-6">
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
                className="text-primary hover:text-primary/80 font-semibold transition-colors duration-200 hover:underline"
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
