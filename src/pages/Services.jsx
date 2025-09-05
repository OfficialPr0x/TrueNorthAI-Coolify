import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Crown, ArrowRight, Wrench, Users, Mic, CheckCircle, Star } from 'lucide-react'

const Services = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const services = [
    {
      icon: Wrench,
      title: "DFY AI Solutions",
      subtitle: "Complete Done-For-You Systems",
      description: "Premium AI implementations delivered turnkey. We handle everything from strategy to deployment while you focus on reaping the royal rewards.",
      features: [
        "Custom AI Development & Architecture",
        "Full Implementation & Integration", 
        "Comprehensive Training & Documentation",
        "6-Month Optimization & Support",
        "24/7 Priority Royal Support",
        "Guaranteed ROI or Money Back"
      ],
      pricing: {
        starting: "$50,000",
        typical: "$75,000 - $150,000",
        enterprise: "Custom Pricing"
      },
      timeline: "30-90 Days",
      guarantee: "100% Success Guarantee",
      link: "/services/dfy",
      gradient: "from-crown-600 to-crown-800",
      bgGradient: "from-crown-50 to-crown-100",
      popular: true
    },
    {
      icon: Users,
      title: "AI Consulting",
      subtitle: "Strategic Royal Guidance",
      description: "High-level strategic consulting for enterprises ready to dominate their industry with AI. Executive-level expertise, board-room ready solutions.",
      features: [
        "Strategic AI Planning & Roadmapping",
        "Executive & Board Presentations",
        "ROI Analysis & Business Case Development",
        "Change Management Strategy",
        "Technology Stack Recommendations",
        "Quarterly Strategic Reviews"
      ],
      pricing: {
        starting: "$25,000",
        typical: "$35,000 - $75,000",
        enterprise: "Retainer Available"
      },
      timeline: "2-6 Months",
      guarantee: "Strategic Success Guarantee",
      link: "/services/consulting",
      gradient: "from-royal-600 to-royal-800",
      bgGradient: "from-royal-50 to-royal-100"
    },
    {
      icon: Mic,
      title: "Speaking & Events",
      subtitle: "Thought Leadership",
      description: "Book our AI royalty for keynotes, workshops, and podcasts. Share the stage with industry leaders and elevate your event's prestige.",
      features: [
        "Keynote Speaking (30-90 minutes)",
        "Executive Workshops & Masterclasses",
        "Podcast Guest Appearances",
        "Panel Discussion Participation",
        "Custom Content Development",
        "Post-Event Consultation"
      ],
      pricing: {
        starting: "$15,000",
        typical: "$20,000 - $50,000",
        enterprise: "Multi-Event Packages"
      },
      timeline: "2-8 Weeks",
      guarantee: "Standing Ovation Guarantee",
      link: "/services/speaking",
      gradient: "from-emerald-600 to-emerald-800",
      bgGradient: "from-emerald-50 to-emerald-100"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Royal Consultation",
      description: "Deep-dive discovery session to understand your vision and challenges"
    },
    {
      step: "02", 
      title: "Strategic Blueprint",
      description: "Custom strategy and implementation roadmap tailored to your kingdom"
    },
    {
      step: "03",
      title: "Royal Execution",
      description: "Flawless implementation with white-glove service and regular updates"
    },
    {
      step: "04",
      title: "Ongoing Sovereignty",
      description: "Continuous optimization and support to maintain your competitive crown"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-royal-900 via-royal-800 to-crown-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-crown-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-royal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-max relative z-10">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
              initial={{ scale: 0 }}
              animate={heroInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Crown className="w-5 h-5 text-crown-400" />
              <span className="font-royal font-medium">Royal Services</span>
            </motion.div>

            <h1 className="font-royal font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
              Choose Your Path to
              <span className="block shimmer-text">AI Sovereignty</span>
            </h1>
            
            <p className="font-elegant text-xl md:text-2xl text-royal-200 leading-relaxed mb-8">
              Three distinct paths to AI excellence, each crafted for different stages of your royal journey. 
              Which crown will you claim?
            </p>

            <motion.button
              className="crown-button text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Royal Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        
        <div className="container-max relative z-10">
          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
              Royal Service <span className="shimmer-text">Offerings</span>
            </h2>
            <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
              Premium AI solutions designed for discerning enterprises who demand nothing less than excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <motion.div
                  className="royal-card h-full hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Popular Badge */}
                  {service.popular && (
                    <motion.div
                      className="absolute -top-3 -right-3 bg-crown-gradient text-white font-royal font-bold text-xs px-3 py-1 rounded-full shadow-lg"
                      initial={{ scale: 0, rotate: -15 }}
                      animate={servicesInView ? { scale: 1, rotate: -15 } : { scale: 0, rotate: -15 }}
                      transition={{ duration: 0.6, delay: 1 }}
                    >
                      MOST POPULAR
                    </motion.div>
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-8">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
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
                      <h4 className="font-royal font-semibold text-lg text-royal-800 mb-4">What's Included:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="font-modern text-royal-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing & Details */}
                    <div className="mb-8 p-6 bg-royal-50/50 rounded-xl border border-royal-200">
                      <div className="grid grid-cols-2 gap-4 text-center mb-4">
                        <div>
                          <p className="font-modern text-royal-600 text-xs mb-1">Starting At</p>
                          <p className="font-royal font-bold text-xl text-royal-800">{service.pricing.starting}</p>
                        </div>
                        <div>
                          <p className="font-modern text-royal-600 text-xs mb-1">Timeline</p>
                          <p className="font-royal font-bold text-xl text-royal-800">{service.timeline}</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 text-emerald-600">
                          <Star className="w-4 h-4" />
                          <span className="font-modern font-semibold text-sm">{service.guarantee}</span>
                        </div>
                      </div>
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
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-royal-50 to-crown-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
              Our Royal <span className="shimmer-text">Process</span>
            </h2>
            <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
              A proven methodology that ensures your path to AI sovereignty is smooth, successful, and royal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Step Number */}
                <motion.div
                  className="w-20 h-20 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="font-royal font-bold text-2xl text-white">{step.step}</span>
                </motion.div>

                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-royal-300 to-crown-300 z-0" />
                )}

                <h3 className="font-royal font-bold text-xl text-royal-800 mb-4">
                  {step.title}
                </h3>
                <p className="font-modern text-royal-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-royal-900 to-crown-900 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-royal font-bold text-4xl md:text-5xl mb-6">
              Ready to Claim Your
              <span className="block text-crown-400">Digital Crown?</span>
            </h2>
            
            <p className="font-elegant text-xl text-royal-200 max-w-3xl mx-auto mb-8">
              Don't let another quarter pass watching competitors claim the throne. 
              Your royal transformation begins with a single conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="crown-button text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Royal Consultation
              </motion.button>
              
              <motion.button
                className="bg-white/10 backdrop-blur-sm text-white font-royal font-semibold text-lg px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Service Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Services
