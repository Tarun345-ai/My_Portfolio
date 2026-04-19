import { motion } from 'framer-motion';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React',
  'Node.js', 'MongoDB', 'Git', 'GitHub'
];

function About() {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="page-title">About me</h1>

      <div className="about-card">
        <p>
          I am Tarun, a full-stack developer from Bengaluru with a strong interest
          in building modern, performant web applications. I enjoy turning ideas
          into real products using React, Node.js, and MongoDB.
        </p>
        <p>
          Currently deepening my skills in backend development and cloud deployment.
          Always learning — always building.
        </p>
      </div>

      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map(s => <span key={s} className="skill-chip">{s}</span>)}
      </div>
    </motion.div>
  );
}

export default About;