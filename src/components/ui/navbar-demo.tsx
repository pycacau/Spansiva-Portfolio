import { Home, Info, Wrench, Briefcase, Phone } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Início', url: '#hero', icon: Home },
    { name: 'Sobre', url: '#about', icon: Info },
    { name: 'Produtos', url: '#services', icon: Wrench },
    { name: 'Destaques', url: '#portfolio', icon: Briefcase },
    { name: 'Contato', url: '#contact', icon: Phone }
  ]

  return <NavBar items={navItems} />
}
