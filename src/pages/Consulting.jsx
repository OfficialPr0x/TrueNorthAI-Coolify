import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Crown, CheckCircle, ArrowRight, Shield, Brain, Target, TrendingUp } from 'lucide-react'

const Consulting = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })

  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Roadmap",
      description: "Real-world AI strategy built from actual implementation experience—not consultant theory",
      deliverables: ["Battle-Tested AI Assessment", "3-Year Implementation Roadmap", "Technology Stack from Real Deployments", "Budget Based on Actual Costs"],
      timeline: "2-4 Weeks"
    },
    {
      icon: Target,
      title: "Executive Advisory",
      description: "C-suite guidance from someone who's built AI systems that survived enterprise pressure",
      deliverables: ["Board-Ready Presentations", "Executive Reality Check Sessions", "Change Management from the Trenches", "Leadership Coaching with Real Experience"],
      timeline: "Ongoing"
    },
    {
      icon: TrendingUp,
      title: "ROI Optimization",
      description: "Maximize returns using optimization techniques learned from cybersecurity and threat detection",
      deliverables: ["ROI Analysis from Real Deployments", "Performance Metrics That Actually Matter", "Optimization Based on Real Data", "Quarterly Reality Reviews"],
      timeline: "3-6 Months"
    },
    {
      icon: Shield,
      title: "Risk & Compliance",
      description: "Navigate AI regulations with insights from someone who's defended against nation-state actors",
      deliverables: ["Security-First Compliance Framework", "Risk Assessment from Cybersecurity Experience", "Ethical AI Guidelines That Work", "Regulatory Updates from the Field"],
      timeline: "4-8 Weeks"
    }
  ]

  const packages = [
    {
      name: "Foundation Strategy",
      price: "$5,000",
      duration: "2-4 Weeks",
      description: "Essential AI strategy for small businesses ready to compete with enterprise-level intelligence",
      features: [
        "AI Readiness Assessment",
        "Strategic Roadmap Development",
        "Technology Stack Recommendations",
        "Executive Presentation",
        "3 Strategy Sessions",
        "Implementation Guide"
      ],
      guarantee: "Strategic Clarity Guarantee"
    },
    {
      name: "Strategic Transformation",
      price: "$15,000",
      duration: "2-3 Months",
      description: "Comprehensive AI strategy for growing businesses ready to scale with real competitive advantage",
      features: [
        "Complete AI Strategy & Roadmap",
        "Executive Team Workshops",
        "Change Management Strategy",
        "ROI Modeling & Analysis",
        "Bi-weekly Strategy Sessions",
        "Monthly Progress Reviews",
        "Implementation Support",
        "Priority Advisory Access"
      ],
      guarantee: "Transformation Success Guarantee",
      popular: true
    },
    {
      name: "Enterprise Command",
      price: "$25,000",
      duration: "3-6 Months",
      description: "Executive-level advisory for large enterprises ready to dominate their industry with AI",
      features: [
        "Enterprise-Wide AI Strategy",
        "C-Suite Advisory & Coaching",
        "Board-Level Presentations",
        "Multi-Department Integration",
        "Weekly Strategy Sessions",
        "Dedicated Senior Consultant",
        "Industry Speaking Opportunities",
        "Unlimited Strategic Support",
        "Competitive Intelligence",
        "M&A AI Due Diligence"
      ],
      guarantee: "Market Leadership Guarantee"
    }
  ]

  const testimonials = [
    {
      quote: "Jaryd's strategic guidance came from real experience, not theory. His cybersecurity background gave us AI security insights no other consultant could provide. We avoided major vulnerabilities and achieved 300% ROI.",
      author: "Sarah Chen",
      title: "CEO, TechVanguard Industries",
      result: "300% ROI"
    },
    {
      quote: "Finally, an AI consultant who's actually built systems that work under pressure. Jaryd's battle-tested approach saved us from costly mistakes and delivered real results.",
      author: "Michael Roberts", 
      title: "CTO, Global Manufacturing Corp",
      result: "$5M Saved"
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
          <div className="absolute top-20 left-10 w-72 h-72 bg-royal-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-crown-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
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
              <Users className="w-5 h-5 text-royal-400" />
              <span className="font-royal font-medium">AI Consulting</span>
            </motion.div>

            <h1 className="font-royal font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
              AI Strategy Born from
              <span className="block shimmer-text">Real Experience</span>
            </h1>
            
            <p className="font-elegant text-xl md:text-2xl text-royal-200 leading-relaxed mb-8">
              Strategic AI consulting from someone who's walked the walk—from cybersecurity trenches to enterprise AI deployments. 
              No theory. No fluff. Just battle-tested strategies that work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                className="royal-button text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Strategy Session
              </motion.button>
              
              <motion.button
                className="bg-white/10 backdrop-blur-sm text-white font-royal font-semibold text-lg px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Strategy Guide
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="font-royal font-bold text-3xl text-royal-400 mb-2">500+</div>
                <div className="font-modern text-royal-200 text-sm">Enterprises Advised</div>
              </div>
              <div className="text-center">
                <div className="font-royal font-bold text-3xl text-royal-400 mb-2">$2B+</div>
                <div className="font-modern text-royal-200 text-sm">Value Created</div>
              </div>
              <div className="text-center">
                <div className="font-royal font-bold text-3xl text-royal-400 mb-2">95%</div>
                <div className="font-modern text-royal-200 text-sm">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Battle-Tested <span className="shimmer-text">Consulting</span>
            </h2>
            <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
              Strategic AI guidance forged in real-world experience—from cybersecurity to enterprise deployment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="royal-card group hover:shadow-2xl transition-all duration-500"
              >
                <motion.div
                  className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="font-royal font-bold text-2xl text-royal-800 mb-4 group-hover:text-royal-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="font-modern text-royal-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-royal font-semibold text-lg text-royal-800 mb-3">Key Deliverables:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                        <span className="font-modern text-royal-600 text-sm">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-royal-50 border border-royal-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-modern text-royal-600 text-sm">Timeline:</span>
                    <span className="font-royal font-semibold text-royal-800">{service.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Real Clients <span className="shimmer-text">Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="royal-card group hover:shadow-2xl transition-all duration-500"
              >
                <div className="mb-6">
                  <div className="text-4xl text-royal-300 mb-4">"</div>
                  <p className="font-elegant text-lg text-royal-700 leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-royal-200">
                  <div>
                    <h4 className="font-royal font-semibold text-royal-800">{testimonial.author}</h4>
                    <p className="font-modern text-royal-600 text-sm">{testimonial.title}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-royal font-bold text-emerald-600">{testimonial.result}</div>
                    <div className="font-modern text-royal-600 text-xs">Result</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
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
              Choose Your Strategy <span className="shimmer-text">Level</span>
            </h2>
            <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
              Three tiers of battle-tested guidance, each designed for different scales of AI transformation
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
                    pkg.popular ? 'border-royal-300 shadow-royal-100' : ''
                  }`}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <motion.div
                      className="absolute -top-3 -right-3 bg-royal-gradient text-white font-royal font-bold text-xs px-3 py-1 rounded-full shadow-lg"
                      initial={{ scale: 0, rotate: -15 }}
                      whileInView={{ scale: 1, rotate: -15 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      BEST VALUE
                    </motion.div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="font-royal font-bold text-2xl text-royal-800 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="font-royal font-bold text-4xl text-royal-600 mb-2">
                      {pkg.price}
                    </div>
                    <div className="font-modern text-royal-500 text-sm mb-4">
                      {pkg.duration}
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

                  {/* Guarantee */}
                  <div className="mb-8 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="text-center">
                      <Shield className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                      <p className="font-royal font-semibold text-emerald-700 text-sm">{pkg.guarantee}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="w-full royal-button"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Select This Package
                  </motion.button>
                </motion.div>
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
              Ready to Build Your
              <span className="block text-royal-400">AI Competitive Edge?</span>
            </h2>
            
            <p className="font-elegant text-xl text-royal-200 max-w-3xl mx-auto mb-8">
              Don't navigate AI transformation with theory and guesswork. Get battle-tested strategy 
              from someone who's built systems that survived real-world pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="group bg-white text-royal-800 font-royal font-bold text-xl px-12 py-5 rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Crown className="w-6 h-6" />
                <span>Get Battle-Tested Strategy</span>
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
                <span className="font-royal font-semibold">Risk-Free Strategic Consultation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Consulting
