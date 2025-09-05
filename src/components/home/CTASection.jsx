import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Crown, ArrowRight, Shield, Zap, Clock, CheckCircle } from 'lucide-react'
import { useElitePopup } from '../../hooks/useElitePopup.jsx'

const CTASection = () => {
  const { openElitePopup } = useElitePopup()
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const urgencyFeatures = [
    {
      icon: Clock,
      text: "Limited Spots Available",
      subtext: "Only 5 royal clients per quarter"
    },
    {
      icon: Shield,
      text: "100% Success Guarantee",
      subtext: "Or your investment returned"
    },
    {
      icon: Zap,
      text: "Fast-Track Implementation",
      subtext: "Live in 30 days or less"
    }
  ]

  const bonuses = [
    "Complete DFY AI Solution Implementation ($15,000 value)",
    "Comprehensive AI Strategy & Consulting ($25,000 value)", 
    "Executive Training & Workshops ($10,000 value)",
    "6 Months Priority Support & Optimization ($8,000 value)",
    "Exclusive Royal AI Playbook & Resources ($5,000 value)",
    "Private Royal Client Network Access ($7,000 value)",
    "Monthly Strategy Sessions with AI Royalty ($5,000 value)"
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-crown-600 via-crown-700 to-royal-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-crown-900/50 to-royal-900/50"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-crown-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Crown Animation */}
      <motion.div
        className="absolute top-16 left-1/2 transform -translate-x-1/2 hidden lg:block"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Crown className="w-24 h-24 text-crown-300/30" />
      </motion.div>

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Urgency Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-red-400/30"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="w-3 h-3 bg-red-400 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="font-royal font-bold text-red-300">URGENT: Limited Transformation Spots</span>
          </motion.div>

          <h2 className="font-royal font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Your AI Transformation
            <span className="block text-crown-300">Starts Here</span>
          </h2>
          
          <p className="font-elegant text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Don't let another quarter pass watching competitors surge ahead with AI. 
            The time for battle-tested transformation is <span className="text-crown-300 font-bold">NOW</span>.
          </p>

          {/* Timer */}
          <motion.div
            className="bg-black/30 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="font-royal font-semibold text-crown-300 mb-2">
              Q1 2024 Transformation Enrollment Closes In:
            </p>
            <div className="grid grid-cols-4 gap-2 text-center">
              {['07', '23', '45', '12'].map((time, index) => (
                <div key={index} className="bg-crown-gradient rounded-lg p-3">
                  <span className="font-royal font-bold text-2xl text-white block">{time}</span>
                  <span className="font-modern text-xs text-white/80">
                    {['DAYS', 'HRS', 'MIN', 'SEC'][index]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Urgency Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {urgencyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:border-crown-400/50 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="w-12 h-12 bg-crown-gradient rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="font-royal font-bold text-lg text-white mb-2">
                {feature.text}
              </h3>
              <p className="font-modern text-white/70 text-sm">
                {feature.subtext}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 text-center mb-16"
        >
          <h3 className="font-royal font-bold text-3xl md:text-4xl text-white mb-6">
            Claim Your Royal Throne Today
          </h3>
          
          <p className="font-elegant text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            Join the exclusive ranks of AI royalty. Transform your business into an industry sovereign 
            with our premium DFY solutions and world-class consulting.
          </p>

          {/* Bonuses */}
          <div className="bg-emerald-500/20 rounded-xl p-6 mb-8 border border-emerald-400/30">
            <h4 className="font-royal font-bold text-xl text-emerald-300 mb-4">
              🎁 Complete Royal Transformation Bundle (Worth $75,000)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              {bonuses.map((bonus, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="font-modern text-white text-sm">{bonus}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <p className="font-modern text-white/70 text-sm mb-2">Complete Royal Transformation Bundle:</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-right">
                <span className="font-modern text-red-400 line-through text-2xl">$75,000</span>
                <p className="font-modern text-red-300 text-sm">Regular Value</p>
              </div>
              <span className="font-royal font-bold text-5xl md:text-6xl text-white">$9,995</span>
              <div className="text-left">
                <span className="font-modern text-emerald-400 text-xl font-bold">Save $65,005</span>
                <p className="font-modern text-emerald-300 text-sm">87% OFF</p>
              </div>
            </div>
            <p className="font-modern text-center text-white/60 text-sm mt-2">
              Limited Time: Only 10 Royal Bundles Available This Quarter
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={openElitePopup}
              className="group bg-white text-crown-800 font-royal font-bold text-xl px-12 py-5 rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center space-x-3"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Crown className="w-6 h-6" />
              <span>Get Elite Bundle Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              onClick={openElitePopup}
              className="bg-transparent border-2 border-white text-white font-royal font-semibold text-lg px-8 py-4 rounded-xl hover:bg-white hover:text-crown-800 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Elite Consultation
            </motion.button>
          </div>

          {/* Guarantee */}
          <motion.div
            className="mt-8 pt-6 border-t border-white/20"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center justify-center space-x-2 text-emerald-300">
              <Shield className="w-5 h-5" />
              <span className="font-royal font-semibold">100% Royal Satisfaction Guarantee</span>
            </div>
            <p className="font-modern text-white/70 text-sm mt-2">
              Not satisfied? Get your full investment back within 30 days.
            </p>
          </motion.div>
        </motion.div>

        {/* Final Urgency */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <p className="font-elegant text-lg text-white/80 mb-4">
            ⚠️ Only 3 royal spots remain for Q1 2024
          </p>
          <p className="font-modern text-white/60 text-sm">
            Don't let your competitors claim the throne while you wait.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
