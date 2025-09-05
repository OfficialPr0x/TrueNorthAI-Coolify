import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Crown, Shield, Zap, Target, Gem, Award } from 'lucide-react'

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const features = [
    {
      icon: Shield,
      title: "Battle-Tested Systems",
      description: "Built from real pain, not theory. Our AI works because it's forged in the trenches of actual problems",
      color: "crown"
    },
    {
      icon: Crown,
      title: "Canadian Sovereignty",
      description: "We're not exporting sovereignty—we're rebuilding it. Canada-first technology that serves our people",
      color: "royal"
    },
    {
      icon: Zap,
      title: "Real-World Impact",
      description: "From cybersecurity to mental health tech, we build solutions that save lives, not just make headlines",
      color: "crown"
    },
    {
      icon: Target,
      title: "Impossible Vision",
      description: "Because if no one else is doing it, we will. That's what True North means—finding your way forward",
      color: "royal"
    },
    {
      icon: Gem,
      title: "Authentic Intelligence",
      description: "Our AI doesn't just process data—it solves real problems because it's built by someone who needed it first",
      color: "crown"
    },
    {
      icon: Award,
      title: "Movement Building",
      description: "We're not just an agency—we're building systems, leaders, and culture that transforms Canada",
      color: "royal"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-royal-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-crown-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-royal-500/5 rounded-full blur-3xl"></div>

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-royal-100 rounded-full px-6 py-3 mb-6"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Crown className="w-5 h-5 text-crown-600" />
            <span className="font-royal font-medium text-crown-800">What Makes Us Different</span>
          </motion.div>

          <h2 className="font-royal font-bold text-4xl md:text-5xl lg:text-6xl text-royal-800 mb-6">
            Built from Battle,
            <span className="block shimmer-text">Not Boardrooms</span>
          </h2>
          
          <p className="font-elegant text-xl text-royal-600 max-w-4xl mx-auto leading-relaxed">
            This isn't academic theory or venture capital promises. These are systems forged in truth, 
            built by someone who needed them to work first—and now they work for you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="royal-card h-full hover:shadow-2xl hover:border-crown-300 transition-all duration-500 relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  feature.color === 'crown' 
                    ? 'from-crown-50/50 to-transparent' 
                    : 'from-royal-50/50 to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 ${
                      feature.color === 'crown' ? 'bg-crown-gradient' : 'bg-royal-gradient'
                    } rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className={`font-royal font-bold text-xl mb-4 ${
                    feature.color === 'crown' 
                      ? 'text-crown-800 group-hover:text-crown-600' 
                      : 'text-royal-800 group-hover:text-royal-600'
                  } transition-colors`}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="font-modern text-royal-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-xl border-2 ${
                    feature.color === 'crown' ? 'border-crown-400' : 'border-royal-400'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  animate={{ 
                    borderRadius: ["12px", "16px", "12px"],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                />

                {/* Floating Particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-crown-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={inView ? { 
                    y: [0, -10, 0],
                    opacity: [0, 1, 0]
                  } : {}}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="royal-divider" />
          
          <p className="font-elegant text-lg text-royal-600 mb-8 max-w-3xl mx-auto">
            "I don't believe in fake gurus, sugarcoated recovery, or surface-level tech. 
            I believe in systems that work because I needed them to work for me first."
          </p>
          
          <motion.button
            className="crown-button text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Experience True North AI
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
