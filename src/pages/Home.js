import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import resume from '../assets/Resume (2).pdf';

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <span className="hero-badge">Open to opportunities</span>
      <h1 className="hero-heading">I build things<br />for the web.</h1>
      <p className="hero-sub">
        Full-stack developer based in Bengaluru.<br />
        React, Node, MongoDB — turning ideas into clean products.
      </p>
      <div className="hero-actions">
        <button className="btn-primary" onClick={() => navigate('/projects')}>
          View my work
        </button>
        <a href={resume} download>
          <button className="btn-outline">Download CV</button>
        </a>
      </div>
    </motion.div>
  );
}

export default Home;