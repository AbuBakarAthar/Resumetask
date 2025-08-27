import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Message sent successfully!')
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adam.devops10@gmail.com',
      href: 'mailto:adam.devops10@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(346) 214-6503',
      href: 'tel:+13462146503'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Austin, Texas 78617, USA',
      href: 'https://maps.google.com/?q=Austin,Texas'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/adamdevops',
      color: '#0077B5'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/adamdevops',
      color: '#333'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/adamdevops',
      color: '#1DA1F2'
    }
  ]

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to discuss your next infrastructure project? Let's connect and build something amazing together.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="info-header">
              <h3>Let's Start a Conversation</h3>
              <p>
                I'm always excited to discuss new opportunities, share insights about DevOps practices, 
                or help solve infrastructure challenges. Reach out through any of the channels below.
              </p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="contact-method"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="method-icon">
                    <info.icon size={20} />
                  </div>
                  <div className="method-info">
                    <span className="method-label">{info.label}</span>
                    <span className="method-value">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-links">
              <h4>Connect on Social Media</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.2,
                      backgroundColor: social.color
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What would you like to discuss?"
                />
              </motion.div>

              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project, challenges, or how I can help..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Send size={20} />
                  </motion.div>
                ) : (
                  <Send size={20} />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info {
          padding: 2rem;
        }

        .info-header h3 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .info-header p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .contact-methods {
          margin-bottom: 3rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 16px;
          margin-bottom: 1rem;
          text-decoration: none;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
        }

        .contact-method:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateX(10px);
        }

        .method-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-teal));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .method-info {
          display: flex;
          flex-direction: column;
        }

        .method-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .method-value {
          font-weight: 500;
          color: var(--text-primary);
        }

        .social-links h4 {
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .social-grid {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          text-decoration: none;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          min-width: 80px;
        }

        .social-link:hover {
          color: white;
          transform: translateY(-2px);
        }

        .social-link span {
          font-size: 0.8rem;
          font-weight: 500;
        }

        .contact-form {
          background: var(--secondary-bg);
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid var(--border-color);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          color: var(--text-primary);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          font-size: 1rem;
          transition: all 0.3s ease;
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-blue);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-muted);
        }

        .submit-btn {
          width: 100%;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-teal));
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .submit-btn:hover {
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .social-grid {
            flex-wrap: wrap;
          }

          .contact-info {
            padding: 0;
          }

          .contact-form {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact