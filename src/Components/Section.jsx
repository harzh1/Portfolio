import React from "react";
import FadeIn from "./Fader";

const Section = ({ id, title, icon, children }) => (
  <section id={id} className="min-h-screen py-24 md:py-32">
    <div className="container mx-auto px-6">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 tracking-tight flex items-center justify-center gap-3">
          {icon} {title}
        </h2>
        {children}
      </FadeIn>
    </div>
  </section>
);

export default Section;
