import { useState, useEffect } from "react";
import { Menu, X, Home, Info, Wrench, Briefcase, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // Prevenir scroll do body quando menu está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? "bg-background/90 backdrop-blur-xl border-b border-primary/30 shadow-lg shadow-primary/5" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4 relative z-10">
          {/* Logo removida conforme solicitado */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <Button 
            onClick={() => scrollToSection("hero")} 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2 text-sm xl:text-base hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <Home className="w-4 h-4" /> <span className="hidden xl:inline">Início</span>
          </Button>
          <Button 
            onClick={() => scrollToSection("about")} 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2 text-sm xl:text-base hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <Info className="w-4 h-4" /> <span className="hidden xl:inline">Sobre</span>
          </Button>
          <Button 
            onClick={() => scrollToSection("services")} 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2 text-sm xl:text-base hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <Wrench className="w-4 h-4" /> <span className="hidden xl:inline">Produtos</span>
          </Button>
          <Button 
            onClick={() => scrollToSection("portfolio")} 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2 text-sm xl:text-base hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <Briefcase className="w-4 h-4" /> <span className="hidden xl:inline">Destaques</span>
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")} 
            variant="default" 
            size="sm" 
            className="btn-premium text-sm font-semibold tracking-wide shadow-lg"
          >
            <Phone className="w-4 h-4 mr-1 xl:mr-2" /> <span className="hidden xl:inline">Contato</span>
          </Button>
        </div>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden text-foreground hover:text-primary transition-all duration-300 p-2 rounded-lg hover:bg-primary/10 relative z-[101]" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isMobileMenuOpen ? <X size={24} className="animate-fade-in" /> : <Menu size={24} />}
      </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
          onTouchStart={(e) => {
            // Prevenir que o toque no overlay feche o menu acidentalmente
            if (e.target === e.currentTarget) {
              setIsMobileMenuOpen(false);
            }
          }}
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 right-0 z-[100] animate-fade-in-up pointer-events-none">
          <div className="relative mx-4 mt-20 mb-4 rounded-2xl overflow-hidden pointer-events-auto"
            style={{
              background: `
                linear-gradient(135deg, 
                  hsl(var(--card) / 0.95) 0%, 
                  hsl(var(--card) / 0.90) 50%, 
                  hsl(var(--card) / 0.95) 100%
                ),
                radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, hsl(var(--primary) / 0.06) 0%, transparent 50%)
              `,
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid hsl(var(--primary) / 0.15)',
              boxShadow: `
                0 24px 70px hsl(0 0% 0% / 0.5),
                0 0 60px hsl(var(--primary) / 0.1),
                inset 0 1px 0 hsl(var(--primary) / 0.1),
                inset 0 -1px 0 hsl(var(--primary) / 0.05)
              `
            }}
          >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            
            <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
              <Button 
                onClick={() => scrollToSection("hero")} 
                variant="ghost" 
                className="flex items-center gap-3 justify-start w-full py-3 px-4 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-full" />
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" /> 
                <span className="font-medium">Início</span>
              </Button>
              <Button 
                onClick={() => scrollToSection("about")} 
                variant="ghost" 
                className="flex items-center gap-3 justify-start w-full py-3 px-4 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-full" />
                <Info className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" /> 
                <span className="font-medium">Sobre</span>
              </Button>
              <Button 
                onClick={() => scrollToSection("services")} 
                variant="ghost" 
                className="flex items-center gap-3 justify-start w-full py-3 px-4 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-full" />
                <Wrench className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" /> 
                <span className="font-medium">Produtos</span>
              </Button>
              <Button 
                onClick={() => scrollToSection("portfolio")} 
                variant="ghost" 
                className="flex items-center gap-3 justify-start w-full py-3 px-4 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-full" />
                <Briefcase className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" /> 
                <span className="font-medium">Destaques</span>
              </Button>
              
              {/* Divider */}
              <div className="my-2 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              
              <Button 
                onClick={() => scrollToSection("contact")} 
                variant="default" 
                className="w-full btn-premium font-semibold tracking-wide shadow-lg py-3 mt-2"
              >
                <Phone className="w-5 h-5 mr-2" /> Contato
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
