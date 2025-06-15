import React from "react";

// --- ThemeProvider Component ---
// This component encapsulates all the theme and dynamic styling logic.
// It applies the correct background colors, text colors, fonts, and a CSS variable
// for the accent color, which allows the rest of the application to be theme-aware.
const ThemeProvider = ({ theme, lightAccent, darkAccent, children }) => {
  // Determine the current accent color based on the active theme
  const accentColor = theme === "light" ? lightAccent : darkAccent;

  return (
    <div
      // Base classes for typography and background color that change with the theme
      className="text-slate-900 dark:text-slate-100 antialiased relative bg-slate-100 dark:bg-gray-900 transition-colors duration-500"
      // Inject the dynamic accent color as a CSS variable for the whole app to use
      style={{ "--accent-color": accentColor }}
    >
      {/* Embedded CSS for global styles, fonts, and complex theme-dependent rules */}
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Poppins:wght@400;500;600&display=swap');
                
                body {
                    font-family: 'Poppins', sans-serif;
                }

                h1, h2, h3, h4, h5, h6 {
                    font-family: 'Share Tech Mono', monospace;
                }

                /* Text shadow for the main title on the home page */
                .main-title-shadow {
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                }
                .dark .main-title-shadow {
                    text-shadow: 0 0 15px rgba(255, 255, 255, 0.15);
                }

                /* CSS variables for interactive glass effects */
                :root {
                    --glow-x: 50%;
                    --glow-y: 50%;
                }

                /* Styling for the subtle border on glass elements */
                .glass-border {
                    will-change: background; 
                    padding: 1px;
                    -webkit-mask: 
                        linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    background: radial-gradient(
                        800px circle at 0% 100%,
                        rgba(255, 255, 255, 0.2),
                        transparent 40%
                    );
                }

                /* Base styles for the 3D tilt effect on interactive cards */
                .interactive-glass-card {
                    transform-style: preserve-3d;
                }

                /* The glow that follows the mouse inside an interactive card */
                .interactive-glow {
                    background: radial-gradient(
                        400px circle at var(--glow-x) var(--glow-y),
                        rgba(255, 255, 255, 0.15),
                        transparent 60%
                    );
                    opacity: 0;
                    transition: opacity 0.2s ease-in-out;
                }
                .interactive-glass-card:hover .interactive-glow {
                    opacity: 1;
                }

                .rounded-3xl .glass-border, .rounded-3xl .interactive-glow { border-radius: 24px; }
                .rounded-full .glass-border { border-radius: 9999px; }

                /* Styling for the custom color picker in the footer */
                .color-input-wrapper {
                    position: relative;
                    width: 40px;
                    height: 40px;
                }
                .color-input-wrapper input[type="color"] {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    cursor: pointer;
                }
                .color-input-wrapper .color-input-display {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: 2px solid rgba(255, 255, 255, 0.5);
                    transition: transform 0.2s ease;
                }
                .color-input-wrapper:hover .color-input-display {
                    transform: scale(1.1);
                }
            `}</style>
      {/* Renders the rest of the application */}
      {children}
    </div>
  );
};

export default ThemeProvider;
