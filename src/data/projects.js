import project1 from "../assets/project_1.jpg";
import project2 from "../assets/Project_2.jpg";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    tags: ["React", "Vercel"],          // ← add tags here
    description: "Responsive portfolio built with React — dynamic project rendering, Framer Motion animations, and Cloudinary media hosting.",
    image: project1,
    github: "https://github.com/Tarun345-ai/My_Portfolio",
    demo: "https://my-portfolio-henna-xi-98.vercel.app/"
  },
  {
    id: 2,
    title: "Task Management App",
    tags: ["JavaScript", "React"],      // ← add tags here
    description: "Task management app built with React — add, delete, and track tasks with a clean, responsive UI.",
    image: project2,
    github: "https://github.com/Tarun345-ai",
    demo: "https://example.com"
  }
];

export default projects;