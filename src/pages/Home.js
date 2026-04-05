import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Hi, I'm Tarun 👋</h1>
      <h2>Frontend Developer</h2>
      
      <p>
        I am a passionate developer who loves building web applications 
        and learning new technologies.
      </p>

      <button onClick={() => navigate("/projects")}>
        View My Projects
      </button>
    </div>
  );
}

export default Home;