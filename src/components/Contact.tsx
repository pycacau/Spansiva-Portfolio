import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, Instagram } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Contact = () => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const isInView = useInView(ref, { 
    once: true, 
    amount: isMobile ? 0.1 : 0.2,
    margin: "0px 0px -100px 0px"
  });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    
    // Validation
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Nome deve ter pelo menos 2 caracteres";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "E-mail inválido";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToWhatsApp = () => {
    if (!validateForm()) {
      toast({
        title: "Erro de validação",
        description: "Por favor, corrija os campos destacados.",
        variant: "destructive",
      });
      return;
    }

    const message = `Olá! Gostaria de fazer um pedido:\n\n*Nome:* ${formData.name}\n*E-mail:* ${formData.email}\n*Mensagem:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/558898033002?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para o WhatsApp.",
    });
  };

  const sendToEmail = () => {
    if (!validateForm()) {
      toast({
        title: "Erro de validação",
        description: "Por favor, corrija os campos destacados.",
        variant: "destructive",
      });
      return;
    }

    const subject = encodeURIComponent(`Pedido de ${formData.name}`);
    const body = encodeURIComponent(`Nome: ${formData.name}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.message}`);
    const emailUrl = `mailto:spansivainformatica@gmail.com?subject=${subject}&body=${body}`;
    
    // Tenta abrir o cliente de email padrão
    // Se não funcionar, oferece alternativas
    try {
      // Cria um link temporário e clica nele para garantir compatibilidade
      const link = document.createElement('a');
      link.href = emailUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      // Fallback: usa window.location
      window.location.href = emailUrl;
    }
    
    toast({
      title: "Abrindo cliente de e-mail",
      description: "Seu cliente de e-mail será aberto.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 relative overflow-hidden" aria-label="Faça o seu pedido">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Faça o seu <span className="text-gradient">Pedido</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed font-light tracking-wide">
            Preencha o formulário e envie seu pedido
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: isMobile ? -20 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: isMobile ? 0.4 : 0.6, 
              ease: "easeOut"
            }}
            className="glass-card-premium p-8 sm:p-10 rounded-2xl"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6" noValidate>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nome <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-card/80 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${errors.name ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  required
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-destructive" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  E-mail <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-card/80 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${errors.email ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  required
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-destructive" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mensagem <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte-nos como podemos ajudar..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-card/80 backdrop-blur-sm border-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none ${errors.message ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  required
                />
                {errors.message && (
                  <p id="message-error" className="text-sm text-destructive" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  type="button" 
                  size="lg" 
                  className="w-full bg-gradient-to-br from-green-600 via-green-600 to-green-700 hover:from-green-500 hover:via-green-600 hover:to-green-700 font-semibold tracking-wide shadow-lg hover:shadow-[0_8px_40px_hsl(142,71%,45%,0.5)] transition-all duration-300 hover:scale-105 group relative overflow-hidden" 
                  onClick={sendToWhatsApp}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
                  <MessageCircle className="w-5 h-5 mr-2 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative z-10">Enviar via WhatsApp</span>
                </Button>
                <Button 
                  type="button" 
                  size="lg" 
                  className="w-full btn-premium font-semibold tracking-wide shadow-lg hover:shadow-[0_8px_40px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:scale-105 group relative overflow-hidden" 
                  onClick={sendToEmail}
                >
                  <Mail className="w-5 h-5 mr-2 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative z-10">Enviar via E-mail</span>
                </Button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isMobile ? 20 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: isMobile ? 0.4 : 0.6, 
              ease: "easeOut"
            }}
            className="space-y-6"
          >
            <div className="glass-card-premium p-8 sm:p-10 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gradient">Outras formas de contato</h3>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/558898033002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-card/80 via-card/70 to-card/80 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 card-hover-glow group backdrop-blur-xl hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/15 via-primary/10 to-primary/15 group-hover:from-primary/25 group-hover:via-primary/20 group-hover:to-primary/25 transition-all duration-300 border border-primary/20 group-hover:border-primary/40 relative z-10">
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <p className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">WhatsApp</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">+55 88 9803-3002</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/spansiva_tec.aplicada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-card/80 via-card/70 to-card/80 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 card-hover-glow group backdrop-blur-xl hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/15 via-primary/10 to-primary/15 group-hover:from-primary/25 group-hover:via-primary/20 group-hover:to-primary/25 transition-all duration-300 border border-primary/20 group-hover:border-primary/40 relative z-10">
                    <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <p className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Instagram</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">@spansiva_tec.aplicada</p>
                  </div>
                </a>

                <a
                  href="mailto:spansivainformatica@gmail.com"
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-card/80 via-card/70 to-card/80 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 card-hover-glow group backdrop-blur-xl hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/15 via-primary/10 to-primary/15 group-hover:from-primary/25 group-hover:via-primary/20 group-hover:to-primary/25 transition-all duration-300 border border-primary/20 group-hover:border-primary/40 relative z-10">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <p className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">E-mail</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 break-all">spansivainformatica@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
