import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import FadeIn from "./Fader";
import Glass from "./Glass";
import Section from "./Section";
import profilePic from "../assets/me.jpg"; // Adjust the path as necessary
import { skills } from "../data/skills";

const About = () => {
  return (
    <Section
      id="about"
      title="About Me"
      icon={<User size={45} className="text-white-600" />}
    >
      <Glass>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 text-center flex-shrink-0">
            <img
              src={profilePic}
              alt="Harsh Raj"
              className="rounded-full w-56 h-56 mx-auto border-4 border-blue-500/30 dark:border-red-500/30 shadow-lg object-cover aspect-square"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-white">
              I am a B.Tech student in Electronics and Communication Engineering
              at IIT (ISM) Dhanbad, expecting to graduate in May 2025. As the
              Tech Team Head at Mailer Daemon, I lead a team in building
              full-stack applications for our campus community, including the
              official app used by over 1000 students and a placement
              preparation portal serving over 1500 students. I am passionate
              about creating efficient, user-centric solutions.
            </p>
            <h3 className="text-2xl font-semibold text-white mb-4 mt-4">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="uppercase rounded-full 
              bg-white/40 text-black  py-2 px-4 rounded-full text-sm font-medium "
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </Glass>
    </Section>
  );
};

export default About;
