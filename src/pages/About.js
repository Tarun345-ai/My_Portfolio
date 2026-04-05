import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>About Me</h1>
      {/* your content */}
    </motion.div>
  );
}

export default About;