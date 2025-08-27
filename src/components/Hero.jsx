import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, MapPin, Phone } from 'lucide-react'

const Hero = () => {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Senior DevOps Engineer | Site Reliability Engineer | Cloud Infrastructure & Reliability Architect"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => setShowCursor(false), 500)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-avatar"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="avatar-circle">
              <span>AM</span>
            </div>
            <div className="avatar-ring" />
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Adam M.
          </motion.h1>

          <div className="hero-title">
            <span>{text}</span>
            {showCursor && <span className="cursor">|</span>}
          </div>

          <motion.div
            className="hero-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="info-item">
              <Mail size={16} />
              <span>adam.devops10@gmail.com</span>
            </div>
            <div className="info-item">
              <Phone size={16} />
              <span>(346) 214-6503</span>
            </div>
            <div className="info-item">
              <MapPin size={16} />
              <span>Austin, Texas 78617, USA</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
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
              <Mail size={20} />
              Get In Touch
            </motion.a>
            
            <motion.a
              href="#"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%);
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #3B82F6, #14B8A6);
          border-radius: 50%;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-avatar {
          margin-bottom: 2rem;
          position: relative;
          display: inline-block;
        }

        .avatar-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3B82F6, #14B8A6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          position: relative;
          z-index: 2;
        }

        .avatar-ring {
          position: absolute;
          top: -10px;
          left: -10px;
          width: 140px;
          height: 140px;
          border: 2px solid rgba(59, 130, 246, 0.3);
          border-radius: 50%;
          animation: rotate 20s linear infinite;
        }

        .hero-name {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #F8FAFC, #14B8A6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-title {
          font-size: 1.3rem;
          color: #CBD5E1;
          margin-bottom: 2rem;
          min-height: 2.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        .cursor {
          animation: pulse 1s infinite;
          color: #3B82F6;
        }

        .hero-info {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #94A3B8;
          font-size: 0.9rem;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 4rem;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: #94A3B8;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .scroll-indicator:hover {
          color: #14B8A6;
        }

        .scroll-indicator span {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .hero-name {
            font-size: 2.5rem;
          }
          
          .hero-title {
            font-size: 1rem;
            padding: 0 1rem;
          }
          
          .hero-info {
            flex-direction: column;
            gap: 1rem;
          }
          
          .hero-cta {
            flex-direction: column;
            align-items: center;
          }
          
          .avatar-circle {
            width: 100px;
            height: 100px;
            font-size: 2rem;
          }
          
          .avatar-ring {
            width: 120px;
            height: 120px;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero