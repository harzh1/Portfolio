import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Github } from "lucide-react";
import Glass from "./Glass";
import SubtleGlassButton from "./SubtleGlassButton";
import Section from "./Section";
import { projects as projectData } from "../data/projects";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  liveURL,
  githubURL,
}) => (
  <Glass
    isInteractive={true}
    className="overflow-hidden h-full flex flex-col p-0"
  >
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl"
    />
    <div className="p-4 sm:p-6 flex flex-col flex-grow">
      <h3 className="text-lg sm:text-xl font-bold text-blue-100 mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-blue-200 mb-4 flex-grow">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full 
              bg-white/40 text-black"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap justify-between items-center mt-auto gap-3">
        <SubtleGlassButton className="flex-1 min-w-[140px]">
          <a
            href={liveURL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center text-blue-200 hover:text-blue-100 font-semibold transition duration-300 flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden"
          >
            <Code size={18} /> View Live
          </a>
        </SubtleGlassButton>
        <SubtleGlassButton className="flex-1 min-w-[140px]">
          <a
            href={githubURL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center text-blue-200 hover:text-purple-100 font-semibold transition duration-300 flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden"
          >
            <Github size={18} /> View Code
          </a>
        </SubtleGlassButton>
      </div>
    </div>
  </Glass>
);

const Projects = () => {
  return (
    <Section
      id="projects"
      title="My Work"
      icon={<Briefcase size={45} className="text-white-600" />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projectData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
