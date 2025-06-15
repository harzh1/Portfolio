import React, { forwardRef, useRef, useEffect } from "react";

const Glass = forwardRef(
  ({ children, className, isInteractive = false, ...props }, ref) => {
    const internalRef = useRef(null);

    useEffect(() => {
      const node = internalRef.current;
      if (!node || !isInteractive) return;

      const handleMouseMove = (e) => {
        const rect = node.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const midCardX = rect.width / 2;
        const midCardY = rect.height / 2;

        const rotateX = (y - midCardY) / 12;
        const rotateY = (x - midCardX) / -12;

        node.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        node.style.setProperty("--glow-x", `${x}px`);
        node.style.setProperty("--glow-y", `${y}px`);
      };

      const handleMouseLeave = () => {
        node.style.transform =
          "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
      };

      node.addEventListener("mousemove", handleMouseMove);
      node.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        node.removeEventListener("mousemove", handleMouseMove);
        node.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, [isInteractive]);

    const combinedRef = (node) => {
      internalRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };

    const glassClasses = isInteractive
      ? "interactive-glass-card"
      : "glass-container";

    return (
      <div
        ref={combinedRef}
        className={`${glassClasses} relative bg-black/20 dark:bg-black/30 backdrop-blur-lg border border-white/10 shadow-lg shadow-black/25 rounded-3xl transition-all duration-300 ease-out ${className}`}
        {...props}
      >
        <div className="relative z-10 p-8">{children}</div>
        <div className="glass-border absolute inset-0 rounded-3xl pointer-events-none" />
        {isInteractive && (
          <div className="interactive-glow absolute inset-0 rounded-3xl pointer-events-none" />
        )}
      </div>
    );
  }
);

export default Glass;
