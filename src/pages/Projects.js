import projects from "../data/projects";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>

      {projects.map((project) => (
        <motion.div
          className="project-card"
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} width="100%" />
          <p>{project.description}</p>

          <a href={project.github} target="_blank" rel="noreferrer">GitHub</a> | 
          <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
        </motion.div>
      ))}
    </div>
  );
}

export default Projects;