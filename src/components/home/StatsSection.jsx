import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Users, Award, Globe } from 'lucide-react'

const StatsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const stats = [
    {
      icon: TrendingUp,
      number: "10+",
      label: "Years in the Trenches",
      description: "Enterprise cybersecurity & AI systems"
    },
    {
      icon: Users,
      number: "50+",
      label: "Systems Built",
      description: "From zero funding to enterprise grade"
    },
    {
      icon: Award,
      number: "100%",
      label: "Battle-Tested",
      description: "Every system forged in real fire"
    },
    {
      icon: Globe,
      number: "A MARE AD MARE",
      label: "Canadian Sovereignty",
      description: "From sea to sea, built for Canada"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-royal-500 to-crown-500"></div>
        <div className="absolute inset-0 bg-pattern"></div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6"
          >
            Built from <span className="shimmer-text">Battle</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto"
          >
            Real experience. Real systems. Real results. From nation-state malware to enterprise AI—this is what battle-tested looks like.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group h-full"
            >
              <motion.div
                className="royal-card text-center hover:shadow-2xl hover:border-crown-300 transition-all duration-500 h-full flex flex-col justify-between min-h-[320px]"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex-1 flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Number */}
                  <motion.div
                    className="mb-4 flex-shrink-0"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  >
                    <div className="h-16 flex items-center justify-center">
                      <span className={`font-royal font-bold text-royal-800 group-hover:text-crown-600 transition-colors ${
                        stat.number.includes('MARE') 
                          ? 'text-xl md:text-2xl leading-tight' 
                          : 'text-4xl md:text-5xl'
                      }`}>
                        {stat.number}
                      </span>
                    </div>
                  </motion.div>

                  {/* Label */}
                  <div className="mb-4 flex-1 flex items-start justify-center">
                    <h3 className="font-royal font-semibold text-xl text-royal-700 group-hover:text-crown-600 transition-colors text-center">
                      {stat.label}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-auto">
                  <p className="font-modern text-royal-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-crown-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  initial={false}
                  animate={{ 
                    borderRadius: ["12px", "16px", "12px"],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.button
            className="royal-button text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Experience Battle-Tested AI
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection
