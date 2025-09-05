import { motion } from 'framer-motion'
import { Crown, ArrowRight, Shield, Zap, Trophy } from 'lucide-react'
import { useElitePopup } from '../../hooks/useElitePopup.jsx'

const HeroSection = () => {
  const { openElitePopup } = useElitePopup()
  
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-royal-900 via-royal-800 to-crown-900 pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-crown-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-royal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-crown-500/5 to-transparent rounded-full"></div>
      </div>


      <div className="container-max relative z-10 text-center text-white">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto"
        >
          {/* Large Centered Logo */}
          <motion.div
            variants={fadeInUp}
            className="mb-2"
          >
            <motion.div
              className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 mx-auto flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757106723/logo_2_mtcs2m.png" 
                alt="True North AI Logo" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-royal font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none mb-2 text-shadow-royal tracking-wide"
            style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.5), 1px 1px 3px rgba(184,147,90,0.3)' }}
          >
            <span className="block shimmer-text drop-shadow-lg">TRUE NORTH</span>
            <span className="block text-white drop-shadow-lg">AI SYSTEMS</span>
            <span className="block text-crown-400 drop-shadow-lg">BUILT FROM BATTLE</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="font-elegant font-medium text-xl md:text-2xl lg:text-3xl text-royal-100 mb-12 leading-relaxed max-w-4xl mx-auto text-shadow-royal"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4), 1px 1px 2px rgba(184,147,90,0.3)' }}
          >
            <span className="text-crown-300 font-bold drop-shadow-lg">A MARE AD MARE</span> — From sea to sea, we build 
            <span className="text-white font-bold drop-shadow-lg"> AI that empowers people</span>, not replaces them. 
            Canadian-led, sovereignty-first technology that actually works.
          </motion.p>

          {/* Value Proposition */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {[
              { icon: Shield, text: "Battle-Tested Systems" },
              { icon: Crown, text: "Canadian Sovereignty" },
              { icon: Zap, text: "Real-World Impact" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <item.icon className="w-5 h-5 text-crown-400" />
                <span className="font-modern font-medium text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={openElitePopup}
              className="group bg-crown-gradient text-white font-royal font-semibold text-lg px-8 py-4 rounded-xl shadow-2xl border border-crown-600 hover:shadow-crown-500/25 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              className="group bg-white/10 backdrop-blur-sm text-white font-royal font-semibold text-lg px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Our Work
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 pt-12 pb-16 border-t border-white/10"
          >
            <p className="font-modern text-royal-300 text-sm mb-8">Building the Future of Canadian AI</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Placeholder for client logos */}
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="font-royal text-xs text-white/50">CLIENT</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
