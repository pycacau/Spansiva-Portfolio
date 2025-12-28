import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, FileText } from "lucide-react";
import CodeBackground from "./CodeBackground";

const TermsOfService = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sections = [
    {
      title: "1. Aceitação dos Termos",
      content: "Ao acessar e utilizar o site da Spansiva, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concorda com alguma parte destes termos, não deve utilizar nosso site."
    },
    {
      title: "2. Uso do Site",
      content: "O site da Spansiva destina-se a fornecer informações sobre nossos produtos e serviços. Você concorda em usar o site apenas para fins legais e de maneira que não infrinja os direitos de terceiros ou restrinja ou iniba o uso e aproveitamento do site por terceiros."
    },
    {
      title: "3. Produtos e Serviços",
      content: "Tentamos garantir que todas as informações sobre produtos, preços e disponibilidade sejam precisas. No entanto, reservamo-nos o direito de corrigir quaisquer erros, imprecisões ou omissões e de alterar ou atualizar informações a qualquer momento sem aviso prévio."
    },
    {
      title: "4. Propriedade Intelectual",
      content: "Todo o conteúdo do site, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da Spansiva ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais."
    },
    {
      title: "5. Limitação de Responsabilidade",
      content: "A Spansiva não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de usar o site ou os produtos adquiridos através dele."
    },
    {
      title: "6. Política de Privacidade",
      content: "Seus dados pessoais são tratados de acordo com nossa Política de Privacidade. Ao usar nosso site, você concorda com a coleta e uso de informações conforme descrito nessa política."
    },
    {
      title: "7. Alterações nos Termos",
      content: "Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site. É sua responsabilidade revisar periodicamente estes termos."
    },
    {
      title: "8. Lei Aplicável",
      content: "Estes termos são regidos pelas leis do Brasil. Qualquer disputa relacionada a estes termos será resolvida nos tribunais competentes do Brasil."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CodeBackground />
      <section id="terms" className="min-h-screen py-20 sm:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
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
                <FileText className="w-8 h-8 text-primary" strokeWidth={2} />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                  Termos de <span className="text-gradient">Uso</span>
                </h1>
                <p className="text-sm text-muted-foreground">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-md"
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                  {section.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4">Dúvidas sobre os Termos?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:
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

export default TermsOfService;

