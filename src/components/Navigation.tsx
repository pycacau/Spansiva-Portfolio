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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20" : "bg-transparent"
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
            className="neon-ring text-sm hover:scale-105 transition-transform tech-glow"
          >
            <Phone className="w-4 h-4 mr-1 xl:mr-2" /> <span className="hidden xl:inline">Contato</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-md border-t border-primary/20 animate-fade-in">
          <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col gap-3">
            <Button 
              onClick={() => scrollToSection("hero")} 
              variant="ghost" 
              className="flex items-center gap-2 justify-start hover:bg-primary/10 hover:text-primary transition-all"
            >
              <Home className="w-4 h-4" /> Início
            </Button>
            <Button 
              onClick={() => scrollToSection("about")} 
              variant="ghost" 
              className="flex items-center gap-2 justify-start hover:bg-primary/10 hover:text-primary transition-all"
            >
              <Info className="w-4 h-4" /> Sobre
            </Button>
            <Button 
              onClick={() => scrollToSection("services")} 
              variant="ghost" 
              className="flex items-center gap-2 justify-start hover:bg-primary/10 hover:text-primary transition-all"
            >
              <Wrench className="w-4 h-4" /> Produtos
            </Button>
            <Button 
              onClick={() => scrollToSection("portfolio")} 
              variant="ghost" 
              className="flex items-center gap-2 justify-start hover:bg-primary/10 hover:text-primary transition-all"
            >
              <Briefcase className="w-4 h-4" /> Destaques
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")} 
              variant="default" 
              className="w-full neon-ring tech-glow hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4 mr-2" /> Contato
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
