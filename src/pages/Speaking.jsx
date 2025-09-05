import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mic, Crown, CheckCircle, ArrowRight, Shield, Users, Calendar, Award } from 'lucide-react'

const Speaking = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })

  const speakingTypes = [
    {
      icon: Mic,
      title: "Keynote Speaking",
      description: "Real stories from the trenches—addiction recovery, cybersecurity battles, and AI transformation",
      features: ["30-90 minute authentic presentations", "Personal journey & battle stories", "Interactive Q&A sessions", "Real-world case studies"],
      duration: "30-90 minutes",
      audience: "50-5000+"
    },
    {
      icon: Users,
      title: "Executive Workshops",
      description: "Hands-on sessions with someone who's actually built AI systems that survived enterprise pressure",
      features: ["Battle-tested workshop format", "Real implementation strategies", "Actual deployment roadmaps", "No-BS collaboration exercises"],
      duration: "2-8 hours",
      audience: "10-50"
    },
    {
      icon: Calendar,
      title: "Panel Discussions",
      description: "Expert insights from real experience—cybersecurity, AI deployment, and recovery leadership",
      features: ["Real expertise sharing", "Authentic thought leadership", "Genuine audience engagement", "Meaningful networking"],
      duration: "45-90 minutes",
      audience: "100-2000+"
    },
    {
      icon: Award,
      title: "Podcast Appearances",
      description: "In-depth conversations about real AI journeys, authentic recovery stories, and battle-tested strategies",
      features: ["Long-form authentic discussions", "Technical deep dives from experience", "Real success & failure stories", "Unfiltered audience Q&A"],
      duration: "30-120 minutes",
      audience: "Digital"
    }
  ]

  const topics = [
    "From Addiction to AI: A Recovery Journey",
    "Cybersecurity Lessons for AI Security", 
    "Building AI Systems That Actually Work",
    "The Real Cost of AI Implementation",
    "Battle-Tested AI Strategy for Leaders",
    "Mental Health Tech: AI That Saves Lives",
    "Canadian AI Sovereignty: Why It Matters",
    "Leading Through Technology Disruption",
    "From Rock Bottom to AI Innovation",
    "Real-World AI Deployment Stories"
  ]

  const packages = [
    {
      name: "Authentic Keynote",
      price: "$15,000",
      description: "Real stories and battle-tested insights for your most important events",
      features: [
        "60-90 minute keynote presentation",
        "Custom content development",
        "Pre-event consultation call",
        "Professional speaker materials",
        "Post-event Q&A session",
        "Digital presentation materials"
      ],
      guarantee: "Standing Ovation Guarantee"
    },
    {
      name: "Executive Workshop",
      price: "$25,000",
      description: "Intensive battle-tested workshop experience for executive teams",
      features: [
        "Half or full-day workshop",
        "Interactive strategic sessions",
        "Custom workshop materials",
        "Implementation roadmap",
        "Follow-up consultation",
        "Team assessment tools",
        "90-day action plan",
        "Ongoing email support"
      ],
      guarantee: "Transformation Guarantee",
      popular: true
    },
    {
      name: "Authentic Leader",
      price: "$50,000+",
      description: "Multi-event package for maximum authentic impact and real thought leadership",
      features: [
        "Multiple speaking engagements",
        "Custom content suite",
        "Media interview training",
        "Thought leadership articles",
        "Social media content",
        "Industry report collaboration",
        "Executive coaching sessions",
        "Brand partnership opportunities",
        "Annual strategy sessions",
        "Priority booking access"
      ],
      guarantee: "Industry Leadership Guarantee"
    }
  ]

  const testimonials = [
    {
      quote: "Jaryd's keynote was unlike anything we'd heard before. His personal journey from addiction to AI innovation was powerful, and his technical insights were battle-tested. The audience was captivated by his authenticity.",
      author: "Jennifer Martinez",
      title: "Event Director, TechSummit 2024",
      event: "5,000+ attendees"
    },
    {
      quote: "Finally, a speaker who's actually built the systems he talks about. Jaryd's workshop was transformational—no fluff, just real strategies from someone who's been in the trenches. Worth every penny.",
      author: "David Chen",
      title: "CEO, Global Manufacturing Inc.",
      event: "C-Suite Workshop"
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
      <section className="section-padding bg-gradient-to-br from-emerald-900 via-emerald-800 to-royal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-float"></div>
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
              <Mic className="w-5 h-5 text-emerald-400" />
              <span className="font-royal font-medium">Speaking & Events</span>
            </motion.div>

            <h1 className="font-royal font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
              Authentic Leadership
              <span className="block shimmer-text">That Transforms</span>
            </h1>
            
            <p className="font-elegant text-xl md:text-2xl text-emerald-200 leading-relaxed mb-8">
              Book Jaryd for keynotes, workshops, and podcasts that deliver real stories, real experience, 
              and real impact—no corporate fluff or empty promises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                className="bg-emerald-gradient text-white font-royal font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Our Speakers
              </motion.button>
              
              <motion.button
                className="bg-white/10 backdrop-blur-sm text-white font-royal font-semibold text-lg px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Speaker Reel
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="font-royal font-bold text-3xl text-emerald-400 mb-2">200+</div>
                <div className="font-modern text-emerald-200 text-sm">Events Delivered</div>
              </div>
              <div className="text-center">
                <div className="font-royal font-bold text-3xl text-emerald-400 mb-2">50K+</div>
                <div className="font-modern text-emerald-200 text-sm">Audience Members</div>
              </div>
              <div className="text-center">
                <div className="font-royal font-bold text-3xl text-emerald-400 mb-2">9.8/10</div>
                <div className="font-modern text-emerald-200 text-sm">Average Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Speaking Types Section */}
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
              Speaking <span className="shimmer-text">Formats</span>
            </h2>
            <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
              From intimate boardroom sessions to grand keynotes, Jaryd delivers authentic insights in every format
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {speakingTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="royal-card group hover:shadow-2xl transition-all duration-500"
              >
                <motion.div
                  className="w-16 h-16 bg-emerald-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <type.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="font-royal font-bold text-2xl text-royal-800 mb-4 group-hover:text-emerald-600 transition-colors">
                  {type.title}
                </h3>
                
                <p className="font-modern text-royal-600 leading-relaxed mb-6">
                  {type.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-royal font-semibold text-lg text-royal-800 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                        <span className="font-modern text-royal-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-center">
                    <div className="font-modern text-emerald-600 text-xs mb-1">Duration</div>
                    <div className="font-royal font-semibold text-emerald-800">{type.duration}</div>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-center">
                    <div className="font-modern text-emerald-600 text-xs mb-1">Audience</div>
                    <div className="font-royal font-semibold text-emerald-800">{type.audience}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="section-padding bg-gradient-to-br from-royal-50 to-emerald-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
              Authentic Speaking <span className="shimmer-text">Topics</span>
            </h2>
            <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
              Real stories and battle-tested insights tailored for your audience and industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-emerald-200 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <h3 className="font-royal font-semibold text-royal-800 group-hover:text-emerald-600 transition-colors">
                    {topic}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="font-elegant text-lg text-royal-600 mb-6">
              Don't see your topic? Jaryd creates custom presentations for every audience.
            </p>
            <motion.button
              className="bg-emerald-gradient text-white font-royal font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Custom Topic
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Event Organizers <span className="shimmer-text">Say</span>
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
                  <div className="text-4xl text-emerald-300 mb-4">"</div>
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
                    <div className="font-royal font-bold text-emerald-600">{testimonial.event}</div>
                    <div className="font-modern text-royal-600 text-xs">Event Size</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 to-royal-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
              Speaking <span className="shimmer-text">Packages</span>
            </h2>
            <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
              Choose the perfect speaking package to elevate your event and inspire your audience
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
                    pkg.popular ? 'border-emerald-300 shadow-emerald-100' : ''
                  }`}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <motion.div
                      className="absolute -top-3 -right-3 bg-emerald-gradient text-white font-royal font-bold text-xs px-3 py-1 rounded-full shadow-lg"
                      initial={{ scale: 0, rotate: -15 }}
                      whileInView={{ scale: 1, rotate: -15 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      MOST REQUESTED
                    </motion.div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="font-royal font-bold text-2xl text-royal-800 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="font-royal font-bold text-4xl text-emerald-600 mb-4">
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

                  {/* Guarantee */}
                  <div className="mb-8 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="text-center">
                      <Shield className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                      <p className="font-royal font-semibold text-emerald-700 text-sm">{pkg.guarantee}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    className="w-full bg-emerald-gradient text-white font-royal font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book This Package
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-emerald-900 to-royal-900 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-royal font-bold text-4xl md:text-5xl mb-6">
              Elevate Your Event with
              <span className="block text-emerald-400">Authentic Leadership</span>
            </h2>
            
            <p className="font-elegant text-xl text-emerald-200 max-w-3xl mx-auto mb-8">
              Don't settle for corporate fluff and empty promises. Book Jaryd and give your audience 
              the real stories and transformational insights they deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="group bg-white text-emerald-800 font-royal font-bold text-xl px-12 py-5 rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Crown className="w-6 h-6" />
                <span>Book Jaryd</span>
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
                <span className="font-royal font-semibold">Standing Ovation Guarantee</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Speaking
