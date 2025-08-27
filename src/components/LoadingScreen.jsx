import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <motion.div
          className="loading-logo"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="logo-circle">
            <span>AM</span>
          </div>
        </motion.div>
        
        <motion.h1
          className="loading-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Adam M.
        </motion.h1>
        
        <motion.p
          className="loading-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Senior DevOps Engineer
        </motion.p>
        
        <div className="progress-container">
          <motion.div
            className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        
        <motion.span
          className="progress-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {progress}%
        </motion.span>
      </div>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, #0F172A, #1E293B);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .loading-content {
          text-align: center;
        }

        .loading-logo {
          margin-bottom: 2rem;
        }

        .logo-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3B82F6, #14B8A6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin: 0 auto;
          border: 3px solid rgba(255, 255, 255, 0.2);
        }

        .loading-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #F8FAFC, #14B8A6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .loading-subtitle {
          color: #CBD5E1;
          font-size: 1.2rem;
          margin-bottom: 3rem;
        }

        .progress-container {
          width: 200px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          margin: 0 auto 1rem;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #3B82F6, #14B8A6);
          border-radius: 2px;
        }

        .progress-text {
          color: #CBD5E1;
          font-size: 0.9rem;
          font-weight: 500;
        }
      `}</style>
    </motion.div>
  )
}

export default LoadingScreen