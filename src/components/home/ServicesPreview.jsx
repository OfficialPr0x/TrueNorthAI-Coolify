import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowRight, Wrench, Users, Mic, Crown } from 'lucide-react'

const ServicesPreview = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const services = [
    {
      icon: Wrench,
      title: "DFY AI Solutions",
      subtitle: "Battle-Tested Systems Built for You",
      description: "Complete AI implementations forged in real-world fire. iOS/Android apps, WebApps, SaaS platforms, AI tools, extensions, and agent infrastructures that actually work.",
      features: ["Custom AI Development", "Multi-Platform Solutions", "Agent Infrastructure", "Full Support & Training"],
      price: "$5K - $15K",
      link: "/services/dfy",
      gradient: "from-crown-600 to-crown-800",
      bgGradient: "from-crown-50 to-crown-100"
    },
    {
      icon: Users,
      title: "AI Consulting",
      subtitle: "Strategy Born from Experience",
      description: "High-level strategic consulting from someone who's walked the walk. From startups to enterprises, we deliver AI strategies that work in the real world.",
      features: ["Strategic Planning", "Executive Workshops", "ROI Optimization", "Change Management"],
      price: "$5K - $25K",
      link: "/services/consulting",
      gradient: "from-royal-600 to-royal-800",
      bgGradient: "from-royal-50 to-royal-100"
    },
    {
      icon: Mic,
      title: "Speaking & Events",
      subtitle: "Authentic Leadership",
      description: "Book Jaryd for keynotes, workshops, and podcasts. Real stories, real experience, real impact—no corporate fluff or empty promises.",
      features: ["Keynote Speaking", "Executive Workshops", "Podcast Appearances", "Panel Discussions"],
      price: "From $15K",
      link: "/services/speaking",
      gradient: "from-emerald-600 to-emerald-800",
      bgGradient: "from-emerald-50 to-emerald-100"
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-crown-500 via-royal-500 to-emerald-500"></div>

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-crown-100 to-royal-100 rounded-full px-6 py-3 mb-6"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Crown className="w-5 h-5 text-crown-600" />
            <span className="font-royal font-medium text-royal-800">Our Services</span>
          </motion.div>

          <h2 className="font-royal font-bold text-4xl md:text-5xl lg:text-6xl text-royal-800 mb-6">
            Three Ways We
            <span className="block shimmer-text">Transform Canada</span>
          </h2>
          
          <p className="font-elegant text-xl text-royal-600 max-w-4xl mx-auto leading-relaxed">
            From complete AI system builds to strategic consulting to authentic thought leadership—
            choose the path that matches your vision and budget.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="royal-card h-full hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="font-royal font-bold text-2xl text-royal-800 group-hover:text-royal-600 transition-colors mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="font-elegant text-lg text-royal-600 mb-4">
                      {service.subtitle}
                    </p>
                    
                    <p className="font-modern text-royal-700 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-crown-500 rounded-full flex-shrink-0"></div>
                          <span className="font-modern text-royal-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="font-royal font-bold text-2xl text-royal-800">
                      {service.price}
                    </span>
                    <span className="font-modern text-royal-600 text-sm ml-2">
                      Investment
                    </span>
                  </div>

                  {/* CTA */}
                  <Link to={service.link}>
                    <motion.button
                      className={`w-full bg-gradient-to-r ${service.gradient} text-white font-royal font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-crown-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  animate={{ 
                    borderRadius: ["12px", "16px", "12px"],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />

                {/* Premium Badge for DFY */}
                {index === 0 && (
                  <motion.div
                    className="absolute -top-3 -right-3 bg-crown-gradient text-white font-royal font-bold text-xs px-3 py-1 rounded-full shadow-lg"
                    initial={{ scale: 0, rotate: -15 }}
                    animate={inView ? { scale: 1, rotate: -15 } : { scale: 0, rotate: -15 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    BATTLE-TESTED
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="royal-divider" />
          
          <p className="font-elegant text-lg text-royal-600 mb-8">
            Not sure which path fits your vision and budget?
          </p>
          
          <motion.button
            className="royal-button text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Your Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
