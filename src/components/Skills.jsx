import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Cloud, Settings, Shield, Database, GitBranch } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming & Scripting',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Go', level: 85 },
        { name: 'Bash', level: 95 },
        { name: 'PowerShell', level: 80 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS', level: 95 },
        { name: 'Azure', level: 90 },
        { name: 'GCP', level: 85 },
        { name: 'IBM Cloud', level: 75 },
        { name: 'VMware', level: 80 }
      ]
    },
    {
      icon: Settings,
      title: 'DevOps Tools',
      skills: [
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes', level: 90 },
        { name: 'Terraform', level: 95 },
        { name: 'Ansible', level: 85 },
        { name: 'Jenkins', level: 90 }
      ]
    },
    {
      icon: GitBranch,
      title: 'CI/CD & Automation',
      skills: [
        { name: 'GitLab CI/CD', level: 90 },
        { name: 'GitHub Actions', level: 85 },
        { name: 'ArgoCD', level: 80 },
        { name: 'Spinnaker', level: 75 },
        { name: 'CircleCI', level: 80 }
      ]
    },
    {
      icon: Database,
      title: 'Monitoring & Observability',
      skills: [
        { name: 'Prometheus', level: 90 },
        { name: 'Grafana', level: 90 },
        { name: 'Datadog', level: 85 },
        { name: 'ELK Stack', level: 80 },
        { name: 'New Relic', level: 75 }
      ]
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      skills: [
        { name: 'SonarQube', level: 85 },
        { name: 'Snyk', level: 80 },
        { name: 'HashiCorp Vault', level: 85 },
        { name: 'SOC2', level: 90 },
        { name: 'HIPAA', level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Comprehensive expertise across the DevOps and Cloud Infrastructure ecosystem
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="category-header">
                <div className="category-icon">
                  <category.icon size={24} />
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="certifications"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3>Key Technologies & Expertise</h3>
          <div className="tech-tags">
            {[
              'AWS EKS', 'Azure AKS', 'GCP GKE', 'Terraform', 'Kubernetes', 'Docker',
              'Jenkins', 'GitLab CI/CD', 'Prometheus', 'Grafana', 'Helm', 'ArgoCD',
              'Ansible', 'Vault', 'SonarQube', 'Datadog', 'ElasticSearch', 'Redis',
              'PostgreSQL', 'MongoDB', 'Istio', 'Linkerd', 'Nginx', 'Traefik'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="tech-tag"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .skills {
          background: var(--primary-bg);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .skill-category {
          background: var(--secondary-bg);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-teal));
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .skill-category:hover::before {
          transform: scaleX(1);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .category-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-teal));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .category-header h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name {
          font-weight: 500;
          color: var(--text-primary);
        }

        .skill-percentage {
          font-size: 0.9rem;
          color: var(--accent-teal);
          font-weight: 600;
        }

        .skill-bar {
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-blue), var(--accent-teal));
          border-radius: 3px;
          position: relative;
        }

        .skill-progress::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 4px;
          height: 100%;
          background: white;
          border-radius: 2px;
        }

        .certifications {
          text-align: center;
        }

        .certifications h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .tech-tag {
          padding: 0.5rem 1rem;
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-blue);
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid rgba(59, 130, 246, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tech-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.2);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skill-category {
            padding: 1.5rem;
          }

          .tech-tags {
            gap: 0.5rem;
          }

          .tech-tag {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills