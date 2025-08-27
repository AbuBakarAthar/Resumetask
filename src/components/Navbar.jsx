import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Code, Mail, Award } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Award },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Contact', href: '#contact', icon: Mail }
  ]

  const handleClick = (href) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <motion.div
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="logo-circle">
              <span>AM</span>
            </div>
            <span className="logo-text">Adam M.</span>
          </motion.div>

          <div className="nav-links desktop">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(item.href)
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <item.icon size={16} />
                {item.name}
              </motion.a>
            ))}
          </div>

          <motion.button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="mobile-menu-content">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={(e) => {
                    e.preventDefault()
                    handleClick(item.href)
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <item.icon size={20} />
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid transparent;
        }

        .navbar.scrolled {
          background: rgba(15, 23, 42, 0.9);
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .logo-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3B82F6, #14B8A6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          font-weight: 700;
          color: white;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #F8FAFC, #14B8A6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          gap: 32px;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #CBD5E1;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #14B8A6;
          background: rgba(20, 184, 166, 0.1);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: #CBD5E1;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .mobile-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 300px;
          background: rgba(30, 41, 59, 0.95);
          backdrop-filter: blur(20px);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 999;
        }

        .mobile-menu-content {
          padding: 100px 32px 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #CBD5E1;
          text-decoration: none;
          font-weight: 500;
          padding: 16px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: #14B8A6;
          background: rgba(20, 184, 166, 0.1);
        }

        @media (max-width: 768px) {
          .desktop {
            display: none;
          }
          
          .mobile-toggle {
            display: block;
          }
          
          .nav-container {
            padding: 0 16px;
          }
          
          .logo-text {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar