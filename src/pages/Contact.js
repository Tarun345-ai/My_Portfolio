import { motion } from "framer-motion";
import resume from "../assets/Resume (2).pdf";

const links = [
  { icon: "✉️", label: "Email", value: "tarun@example.com", href: "mailto:tarun@example.com" },
  { icon: "💻", label: "GitHub", value: "github.com/your-username", href: "https://github.com/your-username" },
  { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/your-profile", href: "https://linkedin.com/in/your-profile" },
];

function Contact() {
  return (
    <div className="page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-header">
          <h1>Contact Me</h1>
          <p>Let's connect — I'm always open to new opportunities</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-links">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="contact-link-item"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contact-icon">{link.icon}</div>
                <div className="contact-info">
                  <strong>{link.label}</strong>
                  <span>{link.value}</span>
                </div>
                <span style={{ marginLeft: "auto", color: "#6c63ff" }}>→</span>
              </a>
            ))}
          </div>

          <a href={resume} download style={{ display: "block" }}>
            <button className="btn-primary" style={{ width: "100%", fontSize: 16 }}>
              Download Resume
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;