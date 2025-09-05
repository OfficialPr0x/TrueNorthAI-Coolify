import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Wrench, Crown, CheckCircle, Star, ArrowRight, Shield, Zap, Target } from 'lucide-react'

const DFYServices = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })

  const packages = [
    {
      name: "Foundation Build",
      price: "$5,000",
      description: "Essential AI systems for startups and small businesses ready to compete with the big players",
      features: [
        "AI Strategy & Implementation Plan",
        "Single Platform Solution (Web/Mobile)",
        "Basic AI Tool or Extension",
        "2 Months Support & Optimization",
        "Training for up to 3 team members",
        "Monthly Performance Reviews"
      ],
      timeline: "15-30 Days",
      guarantee: "ROI Guarantee or Money Back"
    },
    {
      name: "Professional Grade",
      price: "$10,000",
      description: "Comprehensive AI solutions for growing businesses ready to scale with real impact",
      features: [
        "Multi-Platform AI Implementation",
        "Custom Web App or SaaS Solution",
        "Advanced AI Tools & Integrations",
        "4 Months Support & Optimization",
        "Training for up to 10 team members",
        "Bi-weekly Strategy Sessions",
        "Dedicated Account Manager",
        "Priority Support"
      ],
      timeline: "30-60 Days",
      guarantee: "300% ROI Guarantee",
      popular: true
    },
    {
      name: "Enterprise Arsenal",
      price: "$15,000",
      description: "Full-scale AI transformation for established enterprises ready to dominate their industry",
      features: [
        "Full-Scale AI Infrastructure",
        "Agent Systems & Automation",
        "iOS/Android + Web Applications",
        "Advanced SaaS Platform Development",
        "6 Months Support & Optimization",
        "Training for Unlimited team members",
        "Weekly Strategy Sessions",
        "Dedicated AI Development Team",
        "24/7 White-Glove Support",
        "Custom Integrations & APIs"
      ],
      timeline: "45-90 Days",
      guarantee: "500% ROI Guarantee"
    }
  ]

  const solutions = [
    {
      icon: Target,
      title: "Customer Intelligence AI",
      description: "Predict customer behavior and optimize pricing using battle-tested algorithms from cybersecurity threat prediction",
      results: "Real results: 40% increase in customer retention"
    },
    {
      icon: Zap,
      title: "Operational Excellence AI",
      description: "Streamline operations with automation systems built like counterintelligence—efficient, secure, bulletproof",
      results: "Real results: 60% reduction in operational costs"
    },
    {
      icon: Crown,
      title: "Revenue Optimization AI",
      description: "Maximize revenue streams using AI models that have survived real-world pressure testing",
      results: "Real results: 250% increase in revenue growth"
    },
    {
      icon: Shield,
      title: "Risk Management AI",
      description: "Proactively identify risks with systems designed by someone who's defended against nation-state attacks",
      results: "Real results: 90% reduction in compliance issues"
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
      <section className="section-padding bg-gradient-to-br from-crown-900 via-crown-800 to-royal-900 text-white relative overflow-hidden">
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
              <Wrench className="w-5 h-5 text-crown-400" />
              <span className="font-royal font-medium">DFY Solutions</span>
            </motion.div>

            <h1 className="font-royal font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
              Battle-Tested AI Systems
              <span className="block shimmer-text">Built For You</span>
            </h1>
            
            <p className="font-elegant text-xl md:text-2xl text-royal-200 leading-relaxed mb-8">
              Complete AI implementations forged in real-world fire. From cybersecurity-grade architecture 
              to mental health tech—we build systems that actually work because they have to.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                className="crown-button text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Transformation
              </motion.button>
              
              <motion.button
                className="bg-white/10 backdrop-blur-sm text-white font-royal font-semibold text-lg px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Case Studies
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="font-royal font-bold text-3xl text-crown-400 mb-2">98%</div>
                <div className="font-modern text-royal-200 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="font-royal font-bold text-3xl text-crown-400 mb-2">30 Days</div>
                <div className="font-modern text-royal-200 text-sm">Average Deploy</div>
              </div>
              <div className="text-center">
                <div className="font-royal font-bold text-3xl text-crown-400 mb-2">400%</div>
                <div className="font-modern text-royal-200 text-sm">Average ROI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
              Battle-Tested AI <span className="shimmer-text">Solutions</span>
            </h2>
            <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
              Turnkey AI systems forged in real-world fire—from cybersecurity to business intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="royal-card group hover:shadow-2xl transition-all duration-500"
              >
                <motion.div
                  className="w-16 h-16 bg-crown-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <solution.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="font-royal font-bold text-2xl text-royal-800 mb-4 group-hover:text-crown-600 transition-colors">
                  {solution.title}
                </h3>
                
                <p className="font-modern text-royal-600 leading-relaxed mb-6">
                  {solution.description}
                </p>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-emerald-700">
                    <Star className="w-5 h-5" />
                    <span className="font-royal font-semibold">{solution.results}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
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
              Choose Your <span className="shimmer-text">Arsenal</span>
            </h2>
            <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
              Three tiers of battle-tested AI systems, each designed to give you the competitive edge you need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <motion.div
                  className={`royal-card h-full hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${
                    pkg.popular ? 'border-crown-300 shadow-crown-100' : ''
                  }`}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <motion.div
                      className="absolute -top-3 -right-3 bg-crown-gradient text-white font-royal font-bold text-xs px-3 py-1 rounded-full shadow-lg"
                      initial={{ scale: 0, rotate: -15 }}
                      whileInView={{ scale: 1, rotate: -15 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      MOST CHOSEN
                    </motion.div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="font-royal font-bold text-2xl text-royal-800 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="font-royal font-bold text-4xl text-crown-600 mb-4">
                      {pkg.price}
                    </div>
                    <p className="font-modern text-royal-600">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="font-modern text-royal-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Details */}
                  <div className="mb-8 p-4 bg-royal-50 rounded-lg border border-royal-200">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="font-modern text-royal-600 text-xs mb-1">Timeline</p>
                        <p className="font-royal font-bold text-lg text-royal-800">{pkg.timeline}</p>
                      </div>
                      <div>
                        <p className="font-modern text-royal-600 text-xs mb-1">Guarantee</p>
                        <p className="font-royal font-bold text-sm text-emerald-600">{pkg.guarantee}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="w-full crown-button"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Claim This Package
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="font-elegant text-lg text-royal-600 mb-6">
              Not sure which arsenal fits your business needs?
            </p>
            <motion.button
              className="royal-button text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Strategy Session
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-crown-900 to-royal-900 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-royal font-bold text-4xl md:text-5xl mb-6">
              Your AI Arsenal
              <span className="block text-crown-400">Is Ready for Deployment</span>
            </h2>
            
            <p className="font-elegant text-xl text-royal-200 max-w-3xl mx-auto mb-8">
              Don't let another quarter pass while competitors gain ground. 
              Your battle-tested AI transformation starts with one conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="group bg-white text-crown-800 font-royal font-bold text-xl px-12 py-5 rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Crown className="w-6 h-6" />
                <span>Deploy Your AI Arsenal</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            <motion.div
              className="mt-8 pt-6 border-t border-white/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center space-x-2 text-emerald-300">
                <Shield className="w-5 h-5" />
                <span className="font-royal font-semibold">100% Success Guarantee or Full Refund</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default DFYServices
