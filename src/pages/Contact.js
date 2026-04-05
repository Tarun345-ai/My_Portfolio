import resume from "../assets/Resume (2).pdf";
function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>

      <p>Email: tarun@example.com</p>

      <p>
        GitHub: 
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          Visit
        </a>
      </p>

      <p>
        LinkedIn: 
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          Visit
        </a>
      </p>
      <a href={resume} download>
        <button>Download Resume</button>
      </a>
    </div>
  );
}

export default Contact;