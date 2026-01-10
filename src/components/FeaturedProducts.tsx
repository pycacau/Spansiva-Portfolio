import { motion } from "framer-motion";

interface FeaturedProductsProps {
  isInView: boolean;
  isMobile: boolean;
}

const FeaturedProducts = ({ isInView, isMobile }: FeaturedProductsProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="glass-card-premium rounded-2xl p-6 text-center border border-primary/20 hover:border-primary/40 transition-all duration-300">
          <div className="text-2xl mb-3">🎮</div>
          <h3 className="text-lg font-semibold mb-2">Gaming</h3>
          <p className="text-sm text-muted-foreground">Placas de vídeo e processadores de última geração</p>
        </div>
        <div className="glass-card-premium rounded-2xl p-6 text-center border border-primary/20 hover:border-primary/40 transition-all duration-300">
          <div className="text-2xl mb-3">⚡</div>
          <h3 className="text-lg font-semibold mb-2">Performance</h3>
          <p className="text-sm text-muted-foreground">Componentes de alta performance para profissionais</p>
        </div>
        <div className="glass-card-premium rounded-2xl p-6 text-center border border-primary/20 hover:border-primary/40 transition-all duration-300">
          <div className="text-2xl mb-3">🖥️</div>
          <h3 className="text-lg font-semibold mb-2">Workstation</h3>
          <p className="text-sm text-muted-foreground">Soluções completas para estações de trabalho</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProducts;
