import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Crown, Mail, Phone, MapPin, Clock, ArrowRight, Shield, CheckCircle } from 'lucide-react'
import SEO from '../components/common/SEO'

const Contact = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [formRef, formInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get a real response within 24 hours",
      contact: "team@truenorthai.group",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with Jaryd or his team",
      contact: "+1 (555) 123-4567",
      action: "Schedule Call"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "True North AI headquarters in Toronto",
      contact: "Toronto, ON, Canada",
      action: "Get Directions"
    }
  ]

  const services = [
    "DFY AI Solutions",
    "Strategic AI Consulting", 
    "Speaking & Events",
    "Custom AI Development",
    "AI Strategy & Roadmap",
    "Other (Please Specify)"
  ]

  const budgetRanges = [
    "Under $25K",
    "$25K - $50K",
    "$50K - $100K", 
    "$100K - $250K",
    "$250K - $500K",
    "$500K+"
  ]

  const timeline = [
    "ASAP - Within 30 Days",
    "1-3 Months",
    "3-6 Months",
    "6-12 Months",
    "12+ Months",
    "Just Exploring"
  ]

  return (
    <>
      <SEO
        title="Contact True North AI - Get Started with Canada's Premier AI Agency"
        description="Ready to transform your business with AI? Contact True North AI today. Speak directly with Jaryd Paquette and our expert team. Premium AI consulting, DFY solutions, and strategic guidance. Get your free royal consultation."
        keywords="contact True North AI, AI agency Canada contact, Jaryd Paquette contact, AI consulting quote, premium AI services, Canadian AI experts, AI strategy consultation, business AI transformation"
        image="https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757285058/Screenshot_2025-09-07_182252_g5knbj.png"
      />
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
              <span className="font-royal font-medium">Get In Touch</span>
            </motion.div>

            <h1 className="font-royal font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
              Start Your AI
              <span className="block shimmer-text">Transformation</span>
            </h1>
            
            <p className="font-elegant text-xl md:text-2xl text-royal-200 leading-relaxed mb-8">
              Ready to build AI systems that actually work? Let's talk about your vision, 
              challenges, and how battle-tested experience can get you there.
            </p>

            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="font-modern font-medium text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 text-crown-400" />
                <span className="font-modern font-medium text-sm">24hr Response</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2">
                <Shield className="w-5 h-5 text-royal-400" />
                <span className="font-modern font-medium text-sm">Confidential</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
              Connect with <span className="shimmer-text">True North AI</span>
            </h2>
            <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
              Multiple ways to reach us and begin your AI transformation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="royal-card text-center group hover:shadow-2xl transition-all duration-500"
              >
                <motion.div
                  className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="font-royal font-bold text-2xl text-royal-800 mb-4 group-hover:text-royal-600 transition-colors">
                  {method.title}
                </h3>
                
                <p className="font-modern text-royal-600 mb-4">
                  {method.description}
                </p>

                <p className="font-elegant text-lg text-royal-800 mb-6">
                  {method.contact}
                </p>

                <motion.button
                  className="royal-button w-full"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {method.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gradient-to-br from-royal-50 to-crown-50">
        <div className="container-max">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
                Request Your <span className="shimmer-text">Consultation</span>
              </h2>
              <p className="font-elegant text-xl text-royal-600">
                Tell us about your AI vision and we'll craft a battle-tested strategy that works
              </p>
            </div>

            <motion.div
              className="royal-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={formInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form className="space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-royal font-semibold text-royal-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-royal-300 rounded-lg focus:border-crown-500 focus:ring-2 focus:ring-crown-200 transition-all duration-300 font-modern"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div>
                    <label className="block font-royal font-semibold text-royal-800 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-royal-300 rounded-lg focus:border-crown-500 focus:ring-2 focus:ring-crown-200 transition-all duration-300 font-modern"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-royal font-semibold text-royal-800 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-royal-300 rounded-lg focus:border-crown-500 focus:ring-2 focus:ring-crown-200 transition-all duration-300 font-modern"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block font-royal font-semibold text-royal-800 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-royal-300 rounded-lg focus:border-crown-500 focus:ring-2 focus:ring-crown-200 transition-all duration-300 font-modern"
                      placeholder="CEO, CTO, etc."
                    />
                  </div>
                </div>

                {/* Company Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-royal font-semibold text-royal-800 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-royal-300 rounded-lg focus:border-crown-500 focus:ring-2 focus:ring-crown-200 transition-all duration-300 font-modern"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block font-royal font-semibold text-royal-800 mb-2">
                      Company Size
                    </label>
                    <select className="w-full px-4 py-3 border border-royal-300 rounded-lg focus:border-crown-500 focus:ring-2 focus:ring-crown-200 transition-all duration-300 font-modern">
                      <option>Select Company Size</option>
                      <option>1-10 employees</option>
                      <option>11-50 employees</option>
                      <option>51-200 employees</option>
                      <option>201-1000 employees</option>
                      <option>1000+ employees</option>
                    </select>
                  </div>
                </div>

                {/* Service Interest */}
                <div>
                  <label className="block font-royal font-semibold text-royal-800 mb-4">
                    Which services interest you? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((service, index) => (
                      <label key={index} className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-5 h-5 text-crown-600 border-royal-300 rounded focus:ring-crown-200"
                        />
                        <span className="font-modern text-royal-700 group-hover:text-crown-600 transition-colors">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-royal font-semibold text-royal-800 mb-2">
                      Budget Range
                    </label>
                    <select className="w-full px-4 py-3 border border-royal-300 rounded-lg focus:border-crown-500 focus:ring-2 focus:ring-crown-200 transition-all duration-300 font-modern">
                      <option>Select Budget Range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-royal font-semibold text-royal-800 mb-2">
                      Timeline
                    </label>
                    <select className="w-full px-4 py-3 border border-royal-300 rounded-lg focus:border-crown-500 focus:ring-2 focus:ring-crown-200 transition-all duration-300 font-modern">
                      <option>Select Timeline</option>
                      {timeline.map((time, index) => (
                        <option key={index}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-royal font-semibold text-royal-800 mb-2">
                    Tell us about your AI goals and challenges
                  </label>
                  <textarea
                    rows="6"
                    className="w-full px-4 py-3 border border-royal-300 rounded-lg focus:border-crown-500 focus:ring-2 focus:ring-crown-200 transition-all duration-300 font-modern resize-none"
                    placeholder="Describe your current challenges, AI goals, and what success looks like for your organization..."
                  ></textarea>
                </div>

                {/* Privacy Notice */}
                <div className="bg-royal-50 border border-royal-200 rounded-lg p-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-crown-600 border-royal-300 rounded focus:ring-crown-200 mt-0.5"
                    />
                    <span className="font-modern text-royal-700 text-sm leading-relaxed">
                      I agree to the <span className="text-crown-600 font-semibold">Privacy Policy</span> and 
                      consent to True North AI contacting me about their services. All information will be 
                      treated with complete confidentiality.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <motion.button
                    type="submit"
                    className="group bg-crown-gradient text-white font-royal font-bold text-xl px-12 py-5 rounded-xl shadow-2xl hover:shadow-crown-500/25 transition-all duration-300 flex items-center space-x-3 mx-auto"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Crown className="w-6 h-6" />
                    <span>Request Consultation</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <p className="font-modern text-royal-600 text-sm mt-4">
                    We'll respond within 24 hours with your personalized consultation details
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Office Hours & Guarantee */}
      <section className="section-padding bg-gradient-to-br from-royal-900 to-crown-900 text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-royal font-bold text-3xl mb-6">Office Hours</h3>
              <div className="space-y-4 font-modern text-royal-200">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 2:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-crown-400 font-semibold">
                    🔥 Emergency AI Support: Available 24/7 for Active Clients
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-royal font-bold text-3xl mb-6">Our Promise</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="font-modern text-royal-200">
                    <span className="text-white font-semibold">24-Hour Response:</span> We respond to all inquiries within 24 hours
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-crown-400 flex-shrink-0 mt-1" />
                  <p className="font-modern text-royal-200">
                    <span className="text-white font-semibold">Confidentiality:</span> Your information is protected with enterprise-grade security
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Crown className="w-6 h-6 text-royal-400 flex-shrink-0 mt-1" />
                  <p className="font-modern text-royal-200">
                    <span className="text-white font-semibold">Personal Attention:</span> Every client gets direct access to experienced professionals
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </motion.div>
    </>
  )
}

export default Contact
