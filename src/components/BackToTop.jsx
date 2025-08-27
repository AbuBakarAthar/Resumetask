import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp size={24} />
          
          <style jsx>{`
            .back-to-top {
              position: fixed;
              bottom: 2rem;
              right: 2rem;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background: linear-gradient(135deg, var(--accent-blue), var(--accent-teal));
              color: white;
              border: none;
              cursor: pointer;
              z-index: 1000;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
              transition: all 0.3s ease;
            }

            .back-to-top:hover {
              box-shadow: 0 6px 25px rgba(59, 130, 246, 0.4);
            }

            @media (max-width: 768px) {
              .back-to-top {
                bottom: 1rem;
                right: 1rem;
                width: 45px;
                height: 45px;
              }
            }
          `}</style>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop