import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, Instagram, Phone, MapPin, Clock, ChevronRight, Send, MessageSquare } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
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

    setIsSubmitting(true);
    const message = `Olá! Gostaria de fazer um pedido:\n\n*Nome:* ${formData.name}\n*E-mail:* ${formData.email}\n*Mensagem:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/558898033002?text=${encodedMessage}`;
    
    // Feedback visual
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para o WhatsApp.",
    });

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 500);
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

    setIsSubmitting(true);
    const subject = encodeURIComponent(`Pedido de ${formData.name}`);
    const body = encodeURIComponent(`Nome: ${formData.name}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.message}`);
    const emailUrl = `mailto:spansivainformatica@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Abrindo cliente de e-mail",
      description: "Seu cliente de e-mail será aberto.",
    });

    setTimeout(() => {
      try {
        const link = document.createElement('a');
        link.href = emailUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        window.location.href = emailUrl;
      }
      setIsSubmitting(false);
    }, 500);
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
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden" aria-label="Entre em contato">
      {/* Efeitos visuais sutis em tom vermelho */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-primary/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Badge superior */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 mb-6"
          >
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold tracking-wider text-foreground">FALE CONOSCO</span>
          </motion.div>

          {/* Título */}
          <div className="relative">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 flex flex-col sm:block items-center justify-center">
              <span className="text-foreground">ENTRE EM</span>
              <span className="text-primary hidden sm:inline mx-2 sm:mx-3 md:mx-4">/</span>
              <span className="text-primary relative mt-2 sm:mt-0">
                CONTATO
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary"
                />
              </span>
            </h1>
          </div>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed font-light tracking-wide"
          >
            Tire suas dúvidas, faça seu pedido ou solicite um orçamento personalizado. 
            <span className="text-primary font-medium"> Nossa equipe está pronta para ajudar!</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 0.6,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="relative"
          >
            {/* Card do formulário */}
            <div className="relative bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 
                          border border-border/50 contact-glow overflow-hidden
                          h-full">
              
              {/* Efeito de brilho de fundo */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent 
                            opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Cantos decorativos */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/30 rounded-tl-lg opacity-50"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/30 rounded-tr-lg opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/30 rounded-bl-lg opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/30 rounded-br-lg opacity-50"></div>

              {/* Título do formulário */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 rounded-lg">
                    <Send className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Envie sua mensagem</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Preencha os campos abaixo e escolha como prefere enviar seu pedido
                </p>
              </div>

              {/* Formulário */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5" noValidate>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-1">
                    <span>Nome completo</span>
                    <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      className={`bg-card/90 backdrop-blur-sm border-border/70 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-10
                                ${errors.name ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      required
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                  {errors.name && (
                    <p id="name-error" className="text-sm text-destructive flex items-center gap-1" role="alert">
                      <span>⚠</span> {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-1">
                    <span>E-mail</span>
                    <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`bg-card/90 backdrop-blur-sm border-border/70 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 pl-10
                                ${errors.email ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      required
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                    </div>
                  </div>
                  {errors.email && (
                    <p id="email-error" className="text-sm text-destructive flex items-center gap-1" role="alert">
                      <span>⚠</span> {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-1">
                    <span>Sua mensagem</span>
                    <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descreva seu pedido, dúvidas ou solicitação..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`bg-card/90 backdrop-blur-sm border-border/70 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none
                                ${errors.message ? "border-destructive focus:border-destructive focus:ring-destructive/20" : ""}`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      required
                    />
                    <div className="absolute left-3 top-3 text-muted-foreground">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                  </div>
                  {errors.message && (
                    <p id="message-error" className="text-sm text-destructive flex items-center gap-1" role="alert">
                      <span>⚠</span> {errors.message}
                    </p>
                  )}
                </div>

                {/* Botões de envio */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                  <Button 
                    type="button" 
                    size="lg" 
                    className="w-full bg-gradient-to-br from-green-600 via-green-500 to-green-600 hover:from-green-500 hover:via-green-400 hover:to-green-500 font-semibold shadow-lg hover:shadow-[0_8px_30px_hsl(142,71%,45%,0.5)] transition-all duration-300 group relative overflow-hidden border border-green-600/30"
                    onClick={sendToWhatsApp}
                    disabled={isSubmitting}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
                    <MessageCircle className="w-5 h-5 mr-2 relative z-10" />
                    <span className="relative z-10">{isSubmitting ? "Enviando..." : "WhatsApp"}</span>
                  </Button>
                  
                  <Button 
                    type="button" 
                    size="lg" 
                    className="w-full bg-gradient-to-br from-primary via-primary/90 to-primary hover:from-primary/90 hover:via-primary/80 hover:to-primary/90 font-semibold shadow-lg hover:shadow-[0_8px_30px_hsl(var(--primary)/0.5)] transition-all duration-300 group relative overflow-hidden border border-primary/30"
                    onClick={sendToEmail}
                    disabled={isSubmitting}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
                    <Mail className="w-5 h-5 mr-2 relative z-10" />
                    <span className="relative z-10">{isSubmitting ? "Enviando..." : "E-mail"}</span>
                  </Button>
                </div>
              </form>

              {/* Linha de progresso animada */}
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{
                  width: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </div>

            {/* Sombra projetada */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-3 
                          bg-primary/10 blur-sm rounded-full opacity-0 
                          hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 0.6,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="space-y-4 sm:space-y-6"
          >
            {/* WhatsApp */}
            <div className="group relative cursor-pointer">
              <a
                href="https://wa.me/558898033002"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 
                          border border-border/50 contact-card-glow overflow-hidden
                          flex items-center gap-4 transition-all duration-300 
                          group-hover:border-green-500/40 group-hover:contact-card-glow-hover
                          hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Efeito de brilho de fundo */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-500/5 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Ícone */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500/20 via-green-500/15 to-green-500/10 
                                rounded-xl flex items-center justify-center border border-green-500/30 
                                group-hover:border-green-500/50 group-hover:scale-110 transition-all duration-300">
                    <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="relative z-10 flex-1">
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 group-hover:text-green-500 transition-colors duration-300">
                    WhatsApp
                  </h4>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    +55 88 9803-3002
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">Clique para conversar agora</p>
                </div>

                {/* Setinha */}
                <ChevronRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-green-500 transition-colors duration-300 flex-shrink-0" />
              </a>
            </div>

            {/* Instagram */}
            <div className="group relative cursor-pointer">
              <a
                href="https://instagram.com/spansiva_tec.aplicada"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 
                          border border-border/50 contact-card-glow overflow-hidden
                          flex items-center gap-4 transition-all duration-300 
                          group-hover:border-pink-500/40 group-hover:contact-card-glow-hover
                          hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Efeito de brilho de fundo */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/5 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Ícone */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-500/20 via-pink-500/15 to-pink-500/10 
                                rounded-xl flex items-center justify-center border border-pink-500/30 
                                group-hover:border-pink-500/50 group-hover:scale-110 transition-all duration-300">
                    <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-pink-500" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="relative z-10 flex-1">
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 group-hover:text-pink-500 transition-colors duration-300">
                    Instagram
                  </h4>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    @spansiva_tec.aplicada
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">Siga-nos para novidades</p>
                </div>

                {/* Setinha */}
                <ChevronRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-pink-500 transition-colors duration-300 flex-shrink-0" />
              </a>
            </div>

            {/* E-mail */}
            <div className="group relative cursor-pointer">
              <a
                href="mailto:spansivainformatica@gmail.com"
                className="relative bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 
                          border border-border/50 contact-card-glow overflow-hidden
                          flex items-center gap-4 transition-all duration-300 
                          group-hover:border-primary/40 group-hover:contact-card-glow-hover
                          hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Efeito de brilho de fundo */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Ícone */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 
                                rounded-xl flex items-center justify-center border border-primary/30 
                                group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="relative z-10 flex-1">
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    E-mail
                  </h4>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 break-all">
                    spansivainformatica@gmail.com
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">Envie sua mensagem por e-mail</p>
                </div>

                {/* Setinha */}
                <ChevronRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
              </a>
            </div>

            {/* Informações de funcionamento */}
            <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 rounded-lg">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-foreground">Horário de Atendimento</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Segunda a Sexta</span>
                  <span className="text-sm font-medium text-foreground">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Sábado</span>
                  <span className="text-sm font-medium text-foreground">8:00 - 12:00</span>
                </div>
                <div className="pt-2 border-t border-border/30">
                  <p className="text-xs text-muted-foreground">*Resposta em até 2 horas úteis</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Rodapé da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              <span className="text-foreground font-semibold">Atendimento personalizado</span> para sua melhor experiência
            </span>
          </div>
        </motion.div>
      </div>

      {/* Efeitos CSS customizados */}
      <style jsx>{`
        .tech-grid {
          background-image: 
            linear-gradient(to right, rgba(239, 68, 68, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(239, 68, 68, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .contact-glow {
          box-shadow: 
            0 0 15px rgba(239, 68, 68, 0.08),
            0 0 30px rgba(239, 68, 68, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        
        .contact-card-glow {
          box-shadow: 
            0 0 10px rgba(239, 68, 68, 0.05),
            0 0 20px rgba(239, 68, 68, 0.03),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        
        .contact-card-glow-hover {
          box-shadow: 
            0 10px 30px rgba(239, 68, 68, 0.15),
            0 0 40px rgba(239, 68, 68, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Contact;