import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  User,
  Briefcase,
  Home as HomeIcon,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";

const Header = React.memo(
  ({
    activeSection,
    scrollToSection,
    isMenuOpen,
    setIsMenuOpen,
    theme,
    setTheme,
  }) => {
    const navLinks = [
      { id: "home", title: "Home", icon: <HomeIcon size={18} /> },
      { id: "about", title: "About", icon: <User size={18} /> },
      { id: "projects", title: "Projects", icon: <Briefcase size={18} /> },
      { id: "contact", title: "Contact", icon: <Mail size={18} /> },
    ];

    const headerClasses =
      "fixed z-50 transition-all duration-300 ease-in-out bg-black/30 backdrop-blur-lg top-0 left-0 w-full border-b border-white/10 md:top-5 md:left-1/2 md:-translate-x-1/2 md:w-auto md:rounded-full md:border";

    return (
      <>
        <header className={headerClasses}>
          <div className="container mx-auto px-4 py-2 flex justify-between items-center md:w-auto md:mx-0 md:gap-2">
            <div className="text-xl font-bold text-white md:hidden">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                MyPortfolio
              </a>
            </div>
            <nav className="hidden md:flex items-center gap-1 relative">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 rounded-full transition-colors duration-300 z-10 flex items-center gap-2 ${
                    activeSection === link.id
                      ? "text-white"
                      : "text-white hover:text-white"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                  <span className="text-sm font-medium">{link.title}</span>
                  {activeSection === link.id && (
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-full -z-10 ring-1 ring-inset ring-white/20"
                      layoutId="active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 28,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">Toggle theme</span>
                {theme === "light" ? (
                  <Moon size={20} className="text-white" />
                ) : (
                  <Sun size={20} className="text-white-50" />
                )}
              </button>
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white p-1"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </header>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className={`flex items-center gap-3 text-2xl font-semibold transition-colors duration-300 ${
                    activeSection === link.id
                      ? "text-red-400"
                      : "text-yellow-50 hover:text-red-400"
                  }`}
                >
                  {React.cloneElement(link.icon, { size: 24 })} {link.title}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </>
    );
  }
);

export default Header;
