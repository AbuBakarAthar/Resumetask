import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Cloud, Shield, Database, Monitor } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      id: 1,
      title: 'Multi-Cloud GitOps CI/CD Platform for Enterprise Microservices',
      description: 'Designed and implemented a multi-cloud CI/CD platform enabling seamless deployment of 25+ microservices across AWS and Azure using GitOps workflows.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
      technologies: [
        'AWS EKS', 'Azure AKS', 'Terraform', 'Helm', 'ArgoCD', 'GitLab CI/CD', 
        'SonarQube', 'Trivy', 'Prometheus', 'Grafana', 'Alertmanager'
      ],
      highlights: [
        'Reduced production incident rates by 70%',
        'Cut MTTD by 45% and MTTR by 40%',
        'Automated environment provisioning',
        'Implemented canary deployments'
      ],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'HIPAA-Compliant Cloud-Native Healthcare Analytics Platform',
      description: 'Architected and deployed a HIPAA-compliant containerized healthcare analytics platform on AWS ECS with comprehensive security and monitoring.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
      technologies: [
        'AWS ECS', 'RDS', 'S3', 'KMS', 'Docker', 'Terraform', 'AWS VPC', 
        'IAM', 'CloudWatch', 'PagerDuty'
      ],
      highlights: [
        'Achieved HIPAA compliance',
        'Reduced infrastructure costs by 25%',
        'Implemented encryption at rest and in transit',
        'Automated backup and disaster recovery'
      ],
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world implementations showcasing expertise in cloud architecture and DevOps practices
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className={`project-overlay bg-gradient-to-br ${project.color}`}>
                  <project.icon size={48} color="white" />
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-actions">
                    <motion.button
                      className="action-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={18} />
                    </motion.button>
                    <motion.button
                      className="action-btn"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={18} />
                    </motion.button>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  <h4>
                    <Monitor size={16} />
                    Key Results
                  </h4>
                  <ul>
                    {project.highlights.map((highlight, hIndex) => (
                      <motion.li
                        key={hIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.2 + hIndex * 0.1 + 0.8 
                        }}
                      >
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  <h4>Technologies Used</h4>
                  <div className="tech-stack">
                    {project.technologies.map((tech, tIndex) => (
                      <motion.span
                        key={tech}
                        className="tech-badge"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.2 + tIndex * 0.05 + 1 
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="project-cta"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3>Interested in My Work?</h3>
          <p>Let's discuss how I can help build reliable, scalable infrastructure for your organization.</p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <ExternalLink size={20} />
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        .projects {
          background: var(--primary-bg);
        }

        .projects-grid {
          display: grid;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .project-card {
          background: var(--secondary-bg);
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          position: relative;
        }

        .project-card:hover {
          border-color: var(--accent-blue);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .project-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 0.9;
        }

        .project-content {
          padding: 2rem;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .project-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0;
          flex: 1;
          margin-right: 1rem;
        }

        .project-actions {
          display: flex;
          gap: 0.5rem;
        }

        .action-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          background: var(--accent-blue);
          color: white;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .project-highlights {
          margin-bottom: 2rem;
        }

        .project-highlights h4 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .project-highlights ul {
          list-style: none;
          padding: 0;
        }

        .project-highlights li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }

        .project-highlights li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--success);
          font-weight: bold;
        }

        .project-tech h4 {
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-badge {
          padding: 0.25rem 0.75rem;
          background: rgba(20, 184, 166, 0.1);
          color: var(--accent-teal);
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(20, 184, 166, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tech-badge:hover {
          background: rgba(20, 184, 166, 0.2);
          transform: translateY(-1px);
        }

        .project-cta {
          text-align: center;
          padding: 3rem;
          background: var(--secondary-bg);
          border-radius: 20px;
          border: 1px solid var(--border-color);
        }

        .project-cta h3 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .project-cta p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          .project-header {
            flex-direction: column;
            gap: 1rem;
          }

          .project-header h3 {
            margin-right: 0;
          }

          .project-actions {
            align-self: flex-start;
          }

          .project-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects