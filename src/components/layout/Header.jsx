import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Crown, ChevronDown } from 'lucide-react'
import { useElitePopup } from '../../hooks/useElitePopup.jsx'

const Header = () => {
  const { openElitePopup } = useElitePopup()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }, [location])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Financing', path: '/financing' },
    { name: 'Tools', path: '/tools' },
    {
      name: 'Services',
      path: '/services',
      submenu: [
        { name: 'DFY Ecommerce', path: '/services/dfy-ecommerce' },
        { name: 'DFY Automations', path: '/services/dfy-automations' },
        { name: 'DFY Solutions', path: '/services/dfy' },
        { name: 'Consulting', path: '/services/consulting' },
        { name: 'Speaking', path: '/services/speaking' }
      ]
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <motion.header
      className="fixed top-0 w-full z-50 bg-[#B8935A] shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="container-max px-8">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden bg-white p-1"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <img 
                src="https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757106723/logo_2_mtcs2m.png" 
                alt="True North AI Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-royal font-bold text-xl text-white group-hover:text-crown-400 transition-colors">
                TRUE NORTH AI
              </span>
              <span className="font-modern text-xs text-white/80 tracking-wider">
                A MARE AD MARE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {/* Primary Navigation - Core Pages */}
            <div className="flex items-center space-x-4">
              {navItems.slice(0, 3).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-royal font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                    location.pathname === item.path
                      ? 'text-crown-600 bg-white/15'
                      : 'text-white hover:text-crown-400 hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Separator */}
            <div className="mx-3 h-6 w-px bg-white/30"></div>

            {/* Business Solutions */}
            <div className="flex items-center space-x-3">
              {navItems.slice(3, 5).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-royal font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                    location.pathname === item.path
                      ? 'text-crown-600 bg-white/15'
                      : 'text-white hover:text-crown-400 hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Separator */}
            <div className="mx-3 h-6 w-px bg-white/30"></div>

            {/* Services with Enhanced Dropdown */}
            <div className="relative group">
              <div
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center space-x-2 font-royal font-medium text-white hover:text-crown-400 transition-all duration-200 px-3 py-2 rounded-lg hover:bg-white/5">
                  <span>Services</span>
                  <ChevronDown className="w-3 h-3" />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      className="absolute top-full right-0 mt-3 w-72 bg-white rounded-xl shadow-2xl border border-royal-200 overflow-hidden"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 py-4 bg-gradient-to-r from-royal-50 to-crown-50 border-b border-royal-100">
                        <p className="text-sm font-bold text-royal-800">Our Services</p>
                        <p className="text-xs text-royal-600 mt-1">Complete AI solutions for your business</p>
                      </div>
                      <div className="py-2">
                        {navItems[5].submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-6 py-3 text-royal-800 hover:bg-royal-50 hover:text-crown-600 transition-colors font-modern"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                      <div className="px-6 py-4 bg-royal-50 border-t border-royal-100">
                        <Link
                          to="/services"
                          className="text-sm font-bold text-crown-600 hover:text-crown-700 transition-colors"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Separator */}
            <div className="mx-3 h-6 w-px bg-white/30"></div>

            {/* Final Navigation Items */}
            <div className="flex items-center space-x-3">
              {navItems.slice(6).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-royal font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                    location.pathname === item.path
                      ? 'text-crown-600 bg-white/15'
                      : 'text-white hover:text-crown-400 hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="ml-6">
              <motion.button
                onClick={openElitePopup}
                className="royal-button text-sm font-royal font-medium px-4 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-royal-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-royal-200 mt-4 p-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full py-3 font-royal font-medium text-royal-800"
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            className="pl-4 pb-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="block py-2 font-modern text-royal-600 hover:text-crown-600"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block py-3 font-royal font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'text-crown-600'
                          : 'text-white hover:text-crown-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <button 
                onClick={openElitePopup}
                className="royal-button w-full mt-4"
              >
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
