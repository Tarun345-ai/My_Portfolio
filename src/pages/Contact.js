import { motion } from "framer-motion";
import resume from "../assets/Resume (2).pdf";

function Contact() {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Contact Me</h1>

      <p>Email: tarun@example.com</p>

      <p>
        GitHub: 
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          Visit Profile
        </a>
      </p>

      <p>
        LinkedIn: 
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          Visit Profile
        </a>
      </p>

      <a href={resume} download>
        <button>Download Resume</button>
      </a>
    </motion.div>
  );
}

export default Contact;