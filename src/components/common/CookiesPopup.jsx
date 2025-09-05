import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, CheckCircle, X } from 'lucide-react'

const CookiesPopup = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('truenorth-cookies-accepted')
    if (!cookiesAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('truenorth-cookies-accepted', 'true')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('truenorth-cookies-accepted', 'declined')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-end justify-center p-4"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl border border-royal-200 max-w-2xl w-full mx-4 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-royal-900 to-crown-900 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-crown-400" />
                  </div>
                  <div>
                    <h3 className="font-royal font-bold text-xl">Privacy & Cookies</h3>
                    <p className="font-modern text-royal-200 text-sm">Battle-Tested Security</p>
                  </div>
                </div>
                <button
                  onClick={declineCookies}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="font-modern text-royal-700 text-lg leading-relaxed mb-6">
                We use cookies to enhance your experience and analyze our site performance. 
                Your data is protected with <span className="font-semibold text-crown-600">enterprise-grade security</span> — 
                the same standards we use for our AI systems.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-royal font-semibold text-royal-800 text-sm">Essential Cookies</p>
                    <p className="font-modern text-royal-600 text-xs">Required for site functionality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-royal font-semibold text-royal-800 text-sm">Analytics Cookies</p>
                    <p className="font-modern text-royal-600 text-xs">Help us improve your experience</p>
                  </div>
                </div>
              </div>

              <div className="bg-royal-50 border border-royal-200 rounded-lg p-4 mb-6">
                <p className="font-modern text-royal-700 text-sm">
                  🇨🇦 <strong>Canadian Privacy Compliant:</strong> Your data stays in Canada and is never shared with third parties without your consent.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={acceptCookies}
                  className="flex-1 bg-crown-gradient text-white font-royal font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Accept All Cookies
                </motion.button>
                <motion.button
                  onClick={declineCookies}
                  className="flex-1 bg-white border-2 border-royal-300 text-royal-700 font-royal font-semibold py-4 px-6 rounded-xl hover:bg-royal-50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Essential Only
                </motion.button>
              </div>

              <p className="font-modern text-royal-500 text-xs text-center mt-4">
                You can change your preferences anytime in our{' '}
                <a href="/privacy" className="text-crown-600 hover:text-crown-700 font-semibold">
                  Privacy Policy
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookiesPopup
