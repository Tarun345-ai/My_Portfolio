import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Hi, I'm Tarun 👋</h1>

      <h2>Aspiring Full Stack Developer</h2>

      <p>
        I build responsive and user-friendly web applications using modern 
        technologies like React and JavaScript. Passionate about solving 
        real-world problems and continuously learning new skills.
      </p>

      <button onClick={() => navigate("/projects")}>
        View My Work
      </button>
    </div>
  );
}

export default Home;