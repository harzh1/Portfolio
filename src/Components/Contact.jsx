import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import Glass from "./Glass";
import FadeIn from "./Fader";
import SubtleGlassButton from "./SubtleGlassButton";
import Section from "./Section";

const Contact = () => {
  const [status, setStatus] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent!");
      e.target.reset();
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      icon={<Mail size={45} className="text-white-600" />}
    >
      <div className="max-w-3xl mx-auto">
        <Glass>
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            action="mailto:raj.harsh2001@gmail.com"
            method="post"
          >
            <p className="text-center text-white">
              Have a project in mind or just want to say hi? Feel free to reach
              out.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-white/5 text-white p-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white placeholder-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full bg-white/5 text-white p-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white placeholder-white"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full bg-white/5 text-white p-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white placeholder-white"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="5"
                required
                className="w-full bg-white/5 text-white p-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white placeholder-white"
              ></textarea>
            </div>
            <div className="text-center">
              <SubtleGlassButton
                type="submit"
                className="text-white w-full md:w-auto"
              >
                <Send className="w-5 h-5" /> Send Message
              </SubtleGlassButton>
            </div>
            {status && <p className="text-center mt-4 text-white">{status}</p>}
          </form>
        </Glass>
      </div>
    </Section>
  );
};

export default Contact;
