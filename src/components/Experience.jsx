import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building2, TrendingUp } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      id: 1,
      title: 'Senior DevOps Engineer',
      company: 'Fastly',
      period: '07/2022 – Present',
      location: 'Remote',
      achievements: [
        'Led the implementation of CI/CD pipelines using Jenkins and GitLab CI, reducing deployment times by 40%',
        'Managed cloud infrastructure on AWS and Azure, improving system reliability and reducing costs by 25%',
        'Automated security practices with tools like SonarQube, Snyk, and Aqua Security, ensuring SOC2 and HIPAA compliance',
        'Spearheaded the migration to containerized environments using Docker and Kubernetes, improving scalability by 30%',
        'Optimized monitoring and observability with Prometheus, Grafana, and Datadog, leading to 30% faster incident resolution',
        'Worked cross-functionally to align DevOps practices with Agile/Scrum, improving team productivity and deployment frequency'
      ]
    },
    {
      id: 2,
      title: 'Site Reliability Engineer',
      company: 'LaunchDarkly',
      period: '01/2020 – 06/2022',
      location: 'San Francisco, CA',
      achievements: [
        'Designed and managed highly available, multi-region infrastructure on AWS and GCP, implementing failover strategies and disaster recovery plans to maintain 99.99% uptime',
        'Automated infrastructure provisioning and scaling with Terraform and CloudFormation, reducing deployment cycles by 35%',
        'Built and optimized CI/CD pipelines with Jenkins and GitLab CI, integrating automated testing and security scans',
        'Enhanced observability by implementing Prometheus, Grafana, and Datadog dashboards, cutting MTTR by 30%',
        'Improved incident management processes with PagerDuty and OpsGenie, enabling faster escalation workflows'
      ]
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      company: 'Medallia',
      period: '06/2017 – 12/2019',
      location: 'Palo Alto, CA',
      achievements: [
        'Designed and implemented CI/CD pipelines using Jenkins and GitLab CI, cutting deployment times by 40%',
        'Managed and optimized AWS and Azure infrastructure, achieving 30% cost savings via rightsizing and autoscaling',
        'Automated provisioning and configuration of cloud resources with Terraform and CloudFormation',
        'Orchestrated containerized workloads with Kubernetes (EKS, AKS), boosting system reliability by 50%',
        'Strengthened cloud security posture by integrating SonarQube, Snyk, and Aqua Security into pipelines'
      ]
    }
  ]

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Building scalable, reliable infrastructure across leading technology companies
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="timeline-marker">
                <div className="marker-dot" />
                <div className="marker-line" />
              </div>
              
              <motion.div
                className="timeline-content"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="experience-header">
                  <div className="experience-title">
                    <h3>{exp.title}</h3>
                    <div className="company-info">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="experience-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="achievements">
                  <h4>
                    <TrendingUp size={18} />
                    Key Achievements
                  </h4>
                  <ul>
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.2 + achIndex * 0.1 + 0.5 
                        }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3>Career Impact Summary</h3>
          <div className="impact-grid">
            <div className="impact-item">
              <div className="impact-number">40%</div>
              <div className="impact-text">Faster Deployments</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">99.9%</div>
              <div className="impact-text">System Uptime</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">30%</div>
              <div className="impact-text">Cost Reduction</div>
            </div>
            <div className="impact-item">
              <div className="impact-number">50%</div>
              <div className="impact-text">Scalability Improvement</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .experience {
          background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
        }

        .timeline {
          position: relative;
          padding: 2rem 0;
          margin-bottom: 4rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-blue), var(--accent-teal));
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }

        .marker-dot {
          width: 16px;
          height: 16px;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-teal));
          border-radius: 50%;
          border: 4px solid var(--primary-bg);
          position: relative;
        }

        .marker-dot::after {
          content: '';
          position: absolute;
          top: -8px;
          left: -8px;
          width: 32px;
          height: 32px;
          border: 2px solid var(--accent-blue);
          border-radius: 50%;
          opacity: 0.3;
          animation: pulse 2s infinite;
        }

        .timeline-content {
          width: calc(50% - 2rem);
          background: var(--secondary-bg);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid var(--border-color);
          position: relative;
          transition: all 0.3s ease;
        }

        .timeline-item:nth-child(odd) .timeline-content {
          margin-right: auto;
          margin-left: 0;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: auto;
          margin-right: 0;
        }

        .timeline-content::before {
          content: '';
          position: absolute;
          top: 24px;
          width: 0;
          height: 0;
          border: 12px solid transparent;
        }

        .timeline-item:nth-child(odd) .timeline-content::before {
          right: -24px;
          border-left-color: var(--secondary-bg);
        }

        .timeline-item:nth-child(even) .timeline-content::before {
          left: -24px;
          border-right-color: var(--secondary-bg);
        }

        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: var(--accent-blue);
        }

        .experience-header {
          margin-bottom: 1.5rem;
        }

        .experience-title {
          margin-bottom: 1rem;
        }

        .experience-title h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .company-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--accent-teal);
          font-weight: 600;
        }

        .experience-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .achievements h4 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .achievements ul {
          list-style: none;
          padding: 0;
        }

        .achievements li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .achievements li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent-teal);
          font-weight: bold;
        }

        .experience-summary {
          text-align: center;
        }

        .experience-summary h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .impact-item {
          text-align: center;
          padding: 2rem;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 16px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
        }

        .impact-item:hover {
          transform: translateY(-5px);
          background: rgba(59, 130, 246, 0.2);
        }

        .impact-number {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-teal));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .impact-text {
          color: var(--text-secondary);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 2rem;
          }

          .timeline-marker {
            left: 2rem;
          }

          .timeline-content {
            width: calc(100% - 4rem);
            margin-left: 4rem !important;
            margin-right: 0 !important;
          }

          .timeline-content::before {
            left: -24px !important;
            right: auto !important;
            border-right-color: var(--secondary-bg) !important;
            border-left-color: transparent !important;
          }

          .impact-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .impact-item {
            padding: 1.5rem;
          }

          .impact-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .impact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default Experience