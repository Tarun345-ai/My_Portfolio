import projects from '../data/projects';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <div className="projects-page">
      <h1 className="page-title">Projects</h1>
      <p className="page-sub">Things I have built.</p>

      <div className="project-grid">
        {projects.map((project, i) => (
          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <img src={project.image} alt={project.title} className="card-img" />
            <div className="card-body">
              <div className="card-tags">
                {project.tags?.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <h2 className="card-title">{project.title}</h2>
              <p className="card-desc">{project.description}</p>
              <div className="card-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="card-link">GitHub</a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="card-link">Live demo</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;