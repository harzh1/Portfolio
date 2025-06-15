import { motion } from "framer-motion";

function SubtleGlassButton({ children, className, ...props }) {
  return (
    <motion.button
      className={`relative overflow-hidden rounded-full font-bold transition-all duration-300 group ${className}`}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="absolute inset-0 bg-white/10 rounded-full ring-1 ring-inset ring-white/20 transition-colors group-hover:bg-white/20" />
      <span className="relative z-10 px-8 py-3 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}

export default SubtleGlassButton;
