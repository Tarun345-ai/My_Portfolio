import projects from "../data/projects";

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>

      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            {project.video && (
         <iframe
             width="100%"
    height="200"
    src={project.video}
    title="project video"
    frameBorder="0"
    allowFullScreen
  ></iframe>
)}
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div>
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;