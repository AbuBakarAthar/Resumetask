import { motion } from 'framer-motion'
import { Heart, Code2 } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-logo">
            <div className="logo-circle">
              <span>AM</span>
            </div>
            <div className="logo-info">
              <h4>Adam M.</h4>
              <p>Senior DevOps Engineer</p>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h5>Navigation</h5>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h5>Projects</h5>
              <ul>
                <li><a href="#projects">Featured Work</a></li>
                <li><a href="#contact">Collaboration</a></li>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Portfolio</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h5>Contact</h5>
              <ul>
                <li><a href="mailto:adam.devops10@gmail.com">Email</a></li>
                <li><a href="tel:+13462146503">Phone</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="copyright">
            <p>
              Made with <Heart size={16} className="heart" /> and <Code2 size={16} /> 
              by Adam M. © {new Date().getFullYear()}
            </p>
          </div>
          
          <div className="footer-badges">
            <span className="badge">AWS Certified</span>
            <span className="badge">Azure Expert</span>
            <span className="badge">Kubernetes Certified</span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--secondary-bg);
          border-top: 1px solid var(--border-color);
          padding: 4rem 0 2rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-teal));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
        }

        .logo-info h4 {
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .logo-info p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .link-group h5 {
          color: var(--text-primary);
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .link-group ul {
          list-style: none;
          padding: 0;
        }

        .link-group li {
          margin-bottom: 0.5rem;
        }

        .link-group a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .link-group a:hover {
          color: var(--accent-teal);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }

        .copyright {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .copyright p {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .heart {
          color: #EF4444;
          animation: pulse 2s infinite;
        }

        .footer-badges {
          display: flex;
          gap: 1rem;
        }

        .badge {
          padding: 0.25rem 0.75rem;
          background: rgba(20, 184, 166, 0.1);
          color: var(--accent-teal);
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(20, 184, 166, 0.2);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .footer-badges {
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 3rem 0 1rem;
          }

          .footer-logo {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer