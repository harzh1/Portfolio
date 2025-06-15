import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

// Component Imports
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Asset Imports
import darkBg from "./assets/dark-bg.jpg";
import lightBg from "./assets/light-bg.jpg";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs to manage scroll state without causing re-renders
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        let maxEntry = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (
              !maxEntry ||
              entry.intersectionRatio > maxEntry.intersectionRatio
            ) {
              maxEntry = entry;
            }
          }
        }
        if (maxEntry) {
          setActiveSection(maxEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px", // triggers earlier
        threshold: 0.1, // less strict
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [setActiveSection, isClickScrolling]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    // 1. Set the active section immediately for responsive UI
    setActiveSection(id);

    // 2. Lock the observer
    isClickScrolling.current = true;

    // 3. Close mobile menu if open
    setIsMenuOpen(false);

    // 4. Perform the scroll
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // 5. Unlock the observer after scroll completes
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000); // 1-second buffer for scroll to finish
  };

  return (
    <div className="text-gray-800 dark:text-yellow-50 antialiased relative bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="fixed inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={theme}
            src={theme === "dark" ? darkBg : lightBg}
            alt="Abstract background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />
      </div>

      <div className="relative z-10">
        <Header
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          theme={theme}
          setTheme={setTheme}
        />
        <main>
          <Home scrollToSection={scrollToSection} />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
