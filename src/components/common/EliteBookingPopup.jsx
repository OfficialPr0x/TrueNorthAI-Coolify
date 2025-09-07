import { motion, AnimatePresence } from 'framer-motion'
import { Crown, X, Calendar, Shield, Zap, CheckCircle, Loader } from 'lucide-react'
import { useState } from 'react'

const EliteBookingPopup = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [bookingError, setBookingError] = useState(null)
  const [currentStep, setCurrentStep] = useState(1) // 1: Info, 2: Booking

  const benefits = [
    "Direct access to Jaryd Paquette",
    "Battle-tested AI strategy session",
    "Custom roadmap for your business",
    "No corporate fluff or sales pitch",
    "Enterprise-grade confidentiality",
    "Canadian sovereignty-first approach"
  ]

  const handleBooking = () => {
    setIsLoading(true)
    setBookingError(null)

    // Move to step 2 (booking integration)
    setTimeout(() => {
      setCurrentStep(2)
      setIsLoading(false)
    }, 500)
  }

  const handleBackToInfo = () => {
    setCurrentStep(1)
    setBookingError(null)
  }

  const handleBookingComplete = () => {
    // Handle successful booking completion
    setTimeout(() => {
      onClose()
      setCurrentStep(1) // Reset for next time
    }, 1000)
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
            className={`bg-white rounded-2xl shadow-2xl border border-crown-200 w-full mx-4 max-w-4xl overflow-hidden flex flex-col ${
              currentStep === 1 ? 'max-h-[90vh]' : 'max-h-[80vh]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Premium Header */}
            <div className={`relative bg-gradient-to-br from-crown-900 via-crown-800 to-royal-900 text-white overflow-hidden flex-shrink-0 ${
              currentStep === 1 ? 'p-4 md:p-6 lg:p-8' : 'p-3 md:p-4'
            }`}>
              {/* Step Indicator */}
              <div className={`flex items-center justify-center ${
                currentStep === 1 ? 'mb-2 md:mb-4' : 'mb-1 md:mb-2'
              }`}>
                <div className="flex items-center space-x-2">
                  <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold ${
                    currentStep >= 1 ? 'bg-white text-royal-600' : 'bg-white/30 text-white/50'
                  }`}>
                    1
                  </div>
                  <div className={`w-4 md:w-8 h-0.5 ${currentStep >= 2 ? 'bg-white' : 'bg-white/30'}`}></div>
                  <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold ${
                    currentStep >= 2 ? 'bg-white text-royal-600' : 'bg-white/30 text-white/50'
                  }`}>
                    2
                  </div>
                </div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 bg-crown-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-royal-400 rounded-full blur-2xl"></div>
              </div>

              {currentStep === 1 ? (
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <motion.div
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-crown-gradient rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Crown className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                    </motion.div>
                    <div>
                      <h2 className="font-royal font-bold text-lg md:text-xl lg:text-2xl mb-1">
                        Elite Strategy Session
                      </h2>
                      <p className="font-modern text-crown-200 text-xs md:text-sm lg:text-lg">
                        Direct Access to Jaryd Paquette
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors backdrop-blur-sm flex-shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleBackToInfo}
                      className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
                    >
                      Back
                    </button>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors backdrop-blur-sm flex-shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Elite Badge - Only show on step 1 */}
              {currentStep === 1 && (
                <motion.div
                  className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-emerald-gradient text-white font-royal font-bold text-xs md:text-sm px-2 py-1 md:px-4 md:py-2 rounded-full shadow-lg"
                  initial={{ scale: 0, rotate: -15 }}
                  animate={{ scale: 1, rotate: -15 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  ELITE ACCESS
                </motion.div>
              )}
            </div>

            {/* Content */}
            <div className={`flex-1 overflow-y-auto ${currentStep === 1 ? 'p-6' : 'p-0'}`}>
              {currentStep === 1 ? (
                // Step 1: Information & Benefits
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* Left Column */}
                  <div>
                    {/* Value Proposition */}
                    <div className="mb-6">
                      <h3 className="font-royal font-bold text-xl md:text-2xl text-royal-800 mb-3">
                        Get Battle-Tested AI Strategy
                      </h3>
                      <p className="font-modern text-royal-600 leading-relaxed text-sm md:text-base">
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
                        className="w-full bg-crown-gradient text-white font-royal font-bold text-base md:text-lg py-3 md:py-4 px-4 md:px-6 rounded-xl shadow-2xl hover:shadow-crown-500/25 transition-all duration-300 flex items-center justify-center space-x-2 md:space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={!isLoading ? { scale: 1.02, y: -2 } : {}}
                        whileTap={!isLoading ? { scale: 0.98 } : {}}
                      >
                        {isLoading ? (
                          <>
                            <Loader className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                            <span className="text-sm md:text-base">Preparing Booking...</span>
                          </>
                        ) : (
                          <>
                            <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="text-sm md:text-base">Continue to Booking</span>
                          </>
                        )}
                      </motion.button>

                      <motion.button
                        onClick={onClose}
                        className="w-full bg-white border-2 border-royal-300 text-royal-700 font-royal font-semibold py-2 md:py-3 px-4 md:px-6 rounded-xl hover:bg-royal-50 transition-all duration-300 text-sm md:text-base"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Maybe Later
                      </motion.button>
                    </div>
                  </div>
                </div>
              ) : (
                // Step 2: Clean Cal.com Booking Interface
                <div className="bg-white rounded-lg overflow-hidden">
                  <iframe
                    src="https://cal.com/truenorthai/30min?embed=1"
                    width="100%"
                    height="550"
                    frameBorder="0"
                    title="Book Elite Strategy Session"
                    className="w-full"
                    onLoad={() => {
                      // Handle successful booking completion
                      const handleMessage = (event) => {
                        if (event.origin === 'https://cal.com' && event.data?.type === 'booking_success') {
                          handleBookingComplete()
                        }
                      }
                      window.addEventListener('message', handleMessage)
                    }}
                  ></iframe>
                </div>
              )}

              {/* Trust Indicators - Only show on step 1 */}
              {currentStep === 1 && (
                <div className="text-center mt-6 pt-4 border-t border-royal-200">
                  <p className="font-modern text-royal-500 text-sm">
                    🇨🇦 Proudly Canadian • Enterprise-Grade Security • No Corporate BS
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EliteBookingPopup
