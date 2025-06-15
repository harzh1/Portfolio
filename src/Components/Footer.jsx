import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = React.memo(() => {
  const socialLinks = [
    { icon: <Github />, url: "https://github.com/harzh1" },
    { icon: <Linkedin />, url: "https://linkedin.com/in/rajharzh" },
    { icon: <Twitter />, url: "#" },
  ];
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-6 text-center text-white">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className=":text-white hover:text-red-400 transition duration-300"
            >
              {React.cloneElement(link.icon, { size: 24 })}
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Harsh Raj. All Rights Reserved.</p>
        <p className="text-sm mt-2">
          Built with React, Vite, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
});

export default Footer;
