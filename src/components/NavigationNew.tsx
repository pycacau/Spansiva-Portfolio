import { useState, useEffect } from "react";
import { Home, Info, Wrench, Briefcase, Phone } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const NavigationNew = () => {
  const [activeSection, setActiveSection] = useState("Início");

  const navItems = [
    { name: 'Início', url: '#hero', icon: Home },
    { name: 'Sobre', url: '#about', icon: Info },
    { name: 'Produtos', url: '#services', icon: Wrench },
    { name: 'Destaques', url: '#portfolio', icon: Briefcase },
    { name: 'Contato', url: '#contact', icon: Phone }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            const sectionName = section.charAt(0).toUpperCase() + section.slice(1);
            if (section === 'hero') setActiveSection('Início');
            else if (section === 'about') setActiveSection('Sobre');
            else if (section === 'services') setActiveSection('Produtos');
            else if (section === 'portfolio') setActiveSection('Destaques');
            else if (section === 'contact') setActiveSection('Contato');
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] pt-6">
      <div className="flex justify-center">
        <NavBar 
          items={navItems} 
          activeTab={activeSection}
          className="w-auto max-w-fit"
        />
      </div>
    </div>
  );
};

export default NavigationNew;
