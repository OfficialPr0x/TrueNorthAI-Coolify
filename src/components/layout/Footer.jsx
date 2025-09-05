import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Crown, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { name: 'DFY AI Solutions', path: '/services/dfy' },
      { name: 'AI Consulting', path: '/services/consulting' },
      { name: 'Speaking & Events', path: '/services/speaking' },
    ],
    Company: [
      { name: 'About Jaryd', path: '/about' },
      { name: 'Our Mission', path: '/about#mission' },
      { name: 'Contact Us', path: '/contact' },
    ],
    Legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
    ]
  }

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ]

  return (
    <footer className="bg-gradient-to-br from-royal-900 to-royal-800 text-white">
      {/* CTA Section */}
      <div className="border-b border-royal-700">
        <div className="container-max py-12 px-6 md:px-8 lg:px-12">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-royal font-bold text-3xl md:text-4xl mb-4 text-white">
              Ready to Build AI That Actually Works?
            </h3>
            <p className="font-modern text-royal-200 text-lg mb-8">
              Let's discuss your vision and craft a battle-tested strategy that delivers real results.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              whileHover={{ scale: 1.02 }}
            >
              <Link
                to="/contact"
                className="bg-crown-gradient text-white font-royal font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Transformation
              </Link>
              <Link
                to="/about"
                className="bg-white/10 backdrop-blur-sm text-white font-royal font-semibold text-lg px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Learn About Jaryd
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-max py-20 px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Company Info - Takes up more space */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center space-x-4 mb-8 group">
              <motion.div
                className="flex items-center justify-center w-20 h-20 rounded-full shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white p-2"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <img 
                  src="https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757106723/logo_2_mtcs2m.png" 
                  alt="True North AI Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-royal font-bold text-2xl text-white">TRUE NORTH AI</span>
                <span className="font-modern text-crown-300 tracking-wider text-lg">
                  A MARE AD MARE
                </span>
              </div>
            </Link>
            
            <p className="font-modern text-royal-200 mb-8 leading-relaxed text-lg max-w-md">
              Battle-tested AI systems built from real experience. From sea to sea, we transform Canadian businesses with AI that actually works.
            </p>
            
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full hover:bg-crown-600 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections - Better spacing */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-royal font-bold text-xl mb-6 text-crown-400">
                  {category}
                </h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="font-modern text-royal-200 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block text-lg"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section - Separate row */}
        <motion.div
          className="mt-16 pt-12 border-t border-royal-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 text-royal-200">
              <div className="w-12 h-12 bg-crown-600 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-royal font-semibold text-white text-lg">Email Us</p>
                <p className="font-modern">contact@truenorthai.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-royal-200">
              <div className="w-12 h-12 bg-crown-600 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-royal font-semibold text-white text-lg">Call Us</p>
                <p className="font-modern">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-royal-200">
              <div className="w-12 h-12 bg-crown-600 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-royal font-semibold text-white text-lg">Visit Us</p>
                <p className="font-modern">Toronto, ON, Canada</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-royal-700">
        <div className="container-max py-6 px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 max-w-7xl mx-auto">
            <motion.p
              className="font-modern text-royal-300 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © {currentYear} True North AI. All rights reserved. Battle-tested solutions guaranteed.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="font-modern text-royal-300">
                Built with 🇨🇦 in Toronto
              </span>
              <span className="font-modern text-royal-300">
                •
              </span>
              <span className="font-modern text-royal-300">
                A MARE AD MARE
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
