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
    
    window.location.href = emailUrl;
    
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
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-card via-background/95 to-background relative overflow-hidden" aria-label="Faça o seu pedido">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
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
                <Label htmlFor="name" className="text-sm font-medium">
                  Nome <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-card ${errors.name ? "border-destructive" : ""}`}
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
                <Label htmlFor="email" className="text-sm font-medium">
                  E-mail <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-card ${errors.email ? "border-destructive" : ""}`}
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
                <Label htmlFor="message" className="text-sm font-medium">
                  Mensagem <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte-nos como podemos ajudar..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-card ${errors.message ? "border-destructive" : ""}`}
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
                  className="w-full bg-green-600 hover:bg-green-700 font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                  onClick={sendToWhatsApp}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar via WhatsApp
                </Button>
                <Button 
                  type="button" 
                  size="lg" 
                  className="w-full btn-premium font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                  onClick={sendToEmail}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar via E-mail
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
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-card/60 via-card/50 to-card/60 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 card-hover-glow group backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+55 88 9803-3002</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/spansiva_tec.aplicada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-card/60 via-card/50 to-card/60 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 card-hover-glow group backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold text-foreground">Instagram</p>
                    <p className="text-sm text-muted-foreground">@spansiva_tec.aplicada</p>
                  </div>
                </a>

                <a
                  href="mailto:spansivainformatica@gmail.com"
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-card/60 via-card/50 to-card/60 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 card-hover-glow group backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold text-foreground">E-mail</p>
                    <p className="text-sm text-muted-foreground break-all">spansivainformatica@gmail.com</p>
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
