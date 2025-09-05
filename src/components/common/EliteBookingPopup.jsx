import { motion, AnimatePresence } from 'framer-motion'
import { Crown, X, Calendar, Shield, Zap, CheckCircle, Loader } from 'lucide-react'
import { useState } from 'react'
import calApi from '../../services/calApi'

const EliteBookingPopup = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [bookingError, setBookingError] = useState(null)

  const benefits = [
    "Direct access to Jaryd Paquette",
    "Battle-tested AI strategy session",
    "Custom roadmap for your business",
    "No corporate fluff or sales pitch",
    "Enterprise-grade confidentiality",
    "Canadian sovereignty-first approach"
  ]

  const handleBooking = async () => {
    setIsLoading(true)
    setBookingError(null)

    try {
      // Get available event types
      const eventTypes = await calApi.getEventTypes()

      // Find the elite consultation event type (you may need to adjust this based on your Cal.com setup)
      const eliteEventType = eventTypes.eventTypes?.find(et =>
        et.title?.toLowerCase().includes('elite') ||
        et.title?.toLowerCase().includes('consultation') ||
        et.title?.toLowerCase().includes('strategy')
      )

      if (eliteEventType) {
        // Redirect to Cal.com booking page for the specific event type
        window.open(`https://cal.com/jaryd-paquette/${eliteEventType.slug}`, '_blank')
      } else if (eventTypes.eventTypes?.length > 0) {
        // Use the first available event type
        const firstEventType = eventTypes.eventTypes[0]
        window.open(`https://cal.com/jaryd-paquette/${firstEventType.slug}`, '_blank')
      } else {
        // Fallback: redirect to general Cal.com profile
        window.open('https://cal.com/jaryd-paquette', '_blank')
      }

      // Close popup after successful redirect
      setTimeout(() => {
        onClose()
      }, 1000)

    } catch (error) {
      console.error('Booking error:', error)
      setBookingError('Unable to connect to booking system. Please try again or contact us directly.')

      // Fallback to email contact
      setTimeout(() => {
        window.location.href = 'mailto:jaryd@truenorthai.group?subject=Elite Strategy Session Inquiry'
        onClose()
      }, 3000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl border border-crown-200 max-w-4xl w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Premium Header */}
            <div className="relative bg-gradient-to-br from-crown-900 via-crown-800 to-royal-900 p-8 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 bg-crown-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-royal-400 rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-16 h-16 bg-crown-gradient rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Crown className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h2 className="font-royal font-bold text-2xl md:text-3xl mb-1">
                      Elite Strategy Session
                    </h2>
                    <p className="font-modern text-crown-200 text-lg">
                      Direct Access to Jaryd Paquette
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Elite Badge */}
              <motion.div
                className="absolute -top-3 -right-3 bg-emerald-gradient text-white font-royal font-bold text-sm px-4 py-2 rounded-full shadow-lg"
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: -15 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                ELITE ACCESS
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  {/* Value Proposition */}
                  <div className="mb-6">
                    <h3 className="font-royal font-bold text-2xl text-royal-800 mb-3">
                      Get Battle-Tested AI Strategy
                    </h3>
                    <p className="font-modern text-royal-600 leading-relaxed">
                      Skip the theory and corporate consultants. Get direct access to someone who's 
                      built AI systems that survived real-world pressure.
                    </p>
                  </div>

                  {/* What You Get */}
                  <div className="bg-gradient-to-br from-royal-50 to-crown-50 rounded-xl p-5 mb-6">
                    <h4 className="font-royal font-bold text-lg text-royal-800 mb-3">
                      What You Get in Your Elite Session:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="font-modern text-royal-700 text-sm">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  {/* Urgency & Scarcity */}
                  <div className="bg-crown-50 border border-crown-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Zap className="w-5 h-5 text-crown-600" />
                      <span className="font-royal font-bold text-crown-800">Limited Availability</span>
                    </div>
                    <p className="font-modern text-crown-700 text-sm">
                      Jaryd only takes on <strong>5 new elite consultations per month</strong> to ensure 
                      maximum attention and results for each client.
                    </p>
                  </div>

                  {/* Guarantee */}
                  <div className="flex items-center justify-center space-x-3 mb-6">
                    <Shield className="w-6 h-6 text-emerald-500" />
                    <span className="font-royal font-semibold text-emerald-700 text-center">
                      100% Satisfaction Guaranteed or Full Refund
                    </span>
                  </div>

                  {/* Error Message */}
                  {bookingError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                      <p className="text-red-700 text-sm font-medium">{bookingError}</p>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      onClick={handleBooking}
                      disabled={isLoading}
                      className="w-full bg-crown-gradient text-white font-royal font-bold text-lg py-4 px-6 rounded-xl shadow-2xl hover:shadow-crown-500/25 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={!isLoading ? { scale: 1.02, y: -2 } : {}}
                      whileTap={!isLoading ? { scale: 0.98 } : {}}
                    >
                      {isLoading ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" />
                          <span>Connecting...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          <span>Book Your Elite Session Now</span>
                        </>
                      )}
                    </motion.button>
                    
                    <motion.button
                      onClick={onClose}
                      className="w-full bg-white border-2 border-royal-300 text-royal-700 font-royal font-semibold py-3 px-6 rounded-xl hover:bg-royal-50 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Maybe Later
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="text-center mt-6 pt-4 border-t border-royal-200">
                <p className="font-modern text-royal-500 text-sm">
                  🇨🇦 Proudly Canadian • Enterprise-Grade Security • No Corporate BS
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EliteBookingPopup
