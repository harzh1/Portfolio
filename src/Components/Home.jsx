import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FadeIn from "./Fader";

const GlassyButton = ({ children, className = "", ...props }) => (
  <motion.button
    className={`relative overflow-hidden rounded-full font-bold transition-all duration-300 group ${className}`}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    <span className="absolute inset-0 bg-black/20 backdrop-blur-lg rounded-full ring-1 ring-inset ring-white/20 transition-colors group-hover:bg-black/30" />
    <span className="relative z-10 px-8 py-3 flex items-center justify-center gap-2">
      {children}
    </span>
  </motion.button>
);

const Home = React.memo(({ scrollToSection }) => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center text-center px-4"
  >
    <FadeIn>
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
        Harsh Raj
      </h1>
      <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
        A Full-Stack Developer building robust and scalable web applications.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <GlassyButton
          onClick={() => scrollToSection("projects")}
          className="text-white"
        >
          View My Work <ArrowRight size={20} />
        </GlassyButton>
      </motion.div>
    </FadeIn>
  </section>
));

export default Home;
