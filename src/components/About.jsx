import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, Clock, TrendingUp } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const stats = [
    { icon: Clock, label: 'Years Experience', value: '7+' },
    { icon: Award, label: 'Certifications', value: '15+' },
    { icon: TrendingUp, label: 'Success Rate', value: '99.9%' },
    { icon: Users, label: 'Teams Led', value: '10+' }
  ]

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about building reliable, scalable infrastructure solutions
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              Experienced DevOps & SRE engineer with 7+ years designing, automating, and scaling secure cloud infrastructures on AWS, Azure, and GCP. Skilled in cloud architecture, CI/CD, Infrastructure as Code, and container platforms. Proven track record in boosting reliability, deployment speed, and cost efficiency for modern tech teams.
            </p>
          </motion.div>
          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)'
                }}
              >
                <div className="stat-icon">
                  <stat.icon size={32} />
                </div>
                <div className="stat-info">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="highlights"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3>Key Achievements</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-number">40%</div>
              <div className="highlight-text">Faster Deployment Times</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">30%</div>
              <div className="highlight-text">Improved System Reliability</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">25%</div>
              <div className="highlight-text">Cloud Cost Reduction</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">99.9%</div>
              <div className="highlight-text">System Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about {
          background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
          align-items: start;
        }

        .about-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #CBD5E1;
          margin-bottom: 1.5rem;
          text-align: justify;
        }

        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .stat-card {
          background: var(--secondary-bg, #19202b);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          border: 1px solid var(--border-color, #23304a);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-blue, #3b82f6), var(--accent-teal, #14b8a6));
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .stat-card:hover::before {
          transform: scaleX(1);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-blue, #3b82f6), var(--accent-teal, #14b8a6));
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: white;
        }

        .stat-value {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-teal, #14b8a6);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-secondary, #94a3b8);
          font-size: 0.9rem;
        }

        .highlights {
          text-align: center;
        }

        .highlights h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--text-primary, #e2e8f0);
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .highlight-item {
          text-align: center;
          padding: 2rem;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 16px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
        }

        .highlight-item:hover {
          transform: translateY(-5px);
          background: rgba(59, 130, 246, 0.2);
        }

        .highlight-number {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--accent-blue, #3b82f6), var(--accent-teal, #14b8a6));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .highlight-text {
          color: var(--text-secondary, #94a3b8);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-stats {
            grid-template-columns: 1fr;
          }

          .highlights-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .highlight-item {
            padding: 1.5rem;
          }

          .highlight-number {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .highlights-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default About