import { motion } from "framer-motion";

interface AnimatedDivProps {
  children: React.ReactNode;
  className: string;
}

const AnimatedDiv = ({ children, ...props }: AnimatedDivProps) => {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{ duration: 1 }}
      // viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
