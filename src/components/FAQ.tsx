import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, HelpCircle } from "lucide-react";
import CodeBackground from "./CodeBackground";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const faqs = [
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer: "Aceitamos diversas formas de pagamento, incluindo cartão de crédito (em até 12x sem juros), débito, PIX (com desconto), e boleto bancário. Todas as transações são processadas de forma segura."
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo de entrega varia conforme a localidade e o produto. Geralmente, produtos em estoque são enviados em até 2 dias úteis após a confirmação do pagamento. O prazo de entrega será informado no momento da compra."
    },
    {
      question: "Vocês oferecem garantia nos produtos?",
      answer: "Sim! Todos os nossos produtos possuem garantia do fabricante. Além disso, oferecemos garantia adicional de 12 meses em produtos selecionados. A garantia cobre defeitos de fabricação e problemas técnicos."
    },
    {
      question: "Posso montar um PC personalizado?",
      answer: "Sim! Oferecemos serviço de montagem de PCs personalizados. Você pode escolher cada componente de acordo com suas necessidades e orçamento. Nossa equipe técnica está disponível para auxiliar na escolha dos melhores componentes."
    },
    {
      question: "Vocês fazem manutenção de computadores?",
      answer: "Sim! Oferecemos serviços completos de manutenção preventiva e corretiva para computadores e notebooks. Também realizamos limpeza, atualização de software, formatação e reparos em hardware."
    },
    {
      question: "Como funciona a recarga de cartuchos?",
      answer: "Nossos técnicos especializados realizam a recarga de cartuchos com tinta de alta qualidade, garantindo impressões nítidas e duradouras. O serviço é rápido, econômico e ecológico. Traga seu cartucho vazio e retiramos em poucas horas."
    },
    {
      question: "Vocês oferecem suporte técnico?",
      answer: "Sim! Oferecemos suporte técnico especializado para todos os produtos vendidos. Nossa equipe está disponível para ajudar com instalação, configuração e resolução de problemas técnicos."
    },
    {
      question: "Posso trocar ou devolver um produto?",
      answer: "Sim, você tem até 7 dias corridos após o recebimento do produto para solicitar troca ou devolução, desde que o produto esteja em perfeito estado, com todas as embalagens e acessórios originais. Consulte nossa política completa de trocas e devoluções."
    },
    {
      question: "Vocês fazem entrega em outras cidades?",
      answer: "Sim! Realizamos entregas para todo o Brasil através de transportadoras parceiras. O frete é calculado no momento da compra de acordo com o peso, dimensões e localidade de entrega."
    },
    {
      question: "Como posso acompanhar meu pedido?",
      answer: "Após a confirmação do pagamento e envio do pedido, você receberá um código de rastreamento por e-mail e WhatsApp. Com esse código, você pode acompanhar seu pedido em tempo real no site da transportadora."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CodeBackground />
      <section id="faq" className="min-h-screen py-20 sm:py-24 bg-background relative overflow-hidden">
        {/* Efeitos visuais sutis em tom vermelho */}
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-primary/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Voltar</span>
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 shadow-lg shadow-primary/20">
                <HelpCircle className="w-8 h-8 text-primary" strokeWidth={2} />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                  Perguntas <span className="text-gradient">Frequentes</span>
                </h1>
                <p className="text-sm text-muted-foreground">
                  Encontre respostas para as dúvidas mais comuns
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="glass-card rounded-2xl border border-primary/20 mb-4 px-4 sm:px-6 backdrop-blur-md hover:border-primary/40 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 mt-1 flex-shrink-0">
                          <HelpCircle className="w-5 h-5 text-primary" strokeWidth={2} />
                        </div>
                        <span className="text-sm sm:text-base font-semibold text-foreground">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-0 pb-4 sm:pb-6 px-4 sm:px-0">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-12 sm:pl-14">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4">Não encontrou sua resposta?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Entre em contato conosco e nossa equipe terá prazer em ajudá-lo:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:spansivainformatica@gmail.com"
                className="text-sm sm:text-base text-primary hover:underline font-medium"
              >
                spansivainformatica@gmail.com
              </a>
              <a
                href="https://wa.me/558898033002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-primary hover:underline font-medium"
              >
                +55 88 9803-3002
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default FAQ;

