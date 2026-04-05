import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Hi, I'm Tarun 👋</h1>

      <h2>Aspiring Full Stack Developer</h2>

      <p>
        I build responsive and user-friendly web applications using modern 
        technologies like React and JavaScript.
      </p>

      <button onClick={() => navigate("/projects")}>
        View My Work
      </button>
    </motion.div>
  );
}

export default Home;