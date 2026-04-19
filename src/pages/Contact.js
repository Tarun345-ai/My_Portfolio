import { motion } from 'framer-motion';
import resume from '../assets/Resume (2).pdf';

function Contact() {
  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="page-title">Contact me</h1>
      <p className="page-sub">Let's connect — I'm always open to new opportunities.</p>

      <div className="contact-card">
        <div className="contact-row">
          <span className="contact-label">Email</span>
          <a href="mailto:your-real-email@gmail.com">your-real-email@gmail.com</a>
        </div>
        <div className="contact-row">
          <span className="contact-label">GitHub</span>
          <a href="https://github.com/Tarun345-ai" target="_blank" rel="noreferrer">
            github.com/Tarun345-ai
          </a>
        </div>
        <div className="contact-row">
          <span className="contact-label">LinkedIn</span>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
            linkedin.com/in/your-profile
          </a>
        </div>
      </div>

      <a href={resume} download>
        <button className="btn-primary" style={{ marginTop: '28px' }}>Download resume</button>
      </a>
    </motion.div>
  );
}

export default Contact;