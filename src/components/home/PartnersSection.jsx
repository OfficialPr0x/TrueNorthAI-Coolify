import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Crown, Users, TrendingUp, CreditCard, Smartphone, Globe, HeartHandshake } from 'lucide-react'

const PartnersSection = () => {
  const [partnersRef, partnersInView] = useInView({ threshold: 0.3, triggerOnce: true })

  const partners = [
    {
      name: "Swipe Pay Capital",
      description: "Business funding and capital solutions for growth-focused enterprises. Providing up to $10M in funding with 24-hour approval.",
      website: "https://www.swipepaycapital.com/",
      logo: "SPC",
      services: ["Business Loans", "Line of Credit", "Equipment Financing", "Invoice Factoring"],
      specialties: "Fast funding solutions for business growth and expansion",
      icon: TrendingUp,
      gradient: "from-green-600 to-green-800",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      name: "Swipe Pay",
      description: "Comprehensive payment processing solutions for businesses of all sizes. From POS systems to e-commerce gateways, simplifying payments everywhere.",
      website: "https://www.getswipepay.com/",
      logo: "SP",
      services: ["Payment Processing", "POS Systems", "Mobile Payments", "E-commerce Solutions"],
      specialties: "Seamless, secure payment solutions with dual pricing and zero hidden fees",
      icon: CreditCard,
      gradient: "from-blue-600 to-blue-800",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      name: "Ignite Your Media",
      description: "Digital marketing powerhouse specializing in website design, SEO optimization, and social media management to ignite your brand's online presence.",
      website: "https://igniteyourmedia.com/",
      logo: "IYM",
      services: ["Website Design", "SEO Optimization", "Social Media Management", "Digital Marketing"],
      specialties: "Data-driven marketing strategies that transform online presence and boost growth",
      icon: Globe,
      gradient: "from-orange-600 to-orange-800",
      bgGradient: "from-orange-50 to-orange-100"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-royal-50 to-crown-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-crown-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-royal-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          ref={partnersRef}
          initial={{ opacity: 0, y: 30 }}
          animate={partnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            initial={{ scale: 0 }}
            animate={partnersInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HeartHandshake className="w-5 h-5 text-crown-600" />
            <span className="font-royal font-medium text-royal-800">Strategic Partners</span>
          </motion.div>

          <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
            Building the Future of <span className="shimmer-text">Canadian Business</span>
          </h2>
          
          <p className="font-elegant text-xl text-royal-600 max-w-4xl mx-auto leading-relaxed">
            True North AI collaborates with industry-leading partners to deliver comprehensive solutions. 
            Together, we're building Canada's technology infrastructure for 2025 and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={partnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <motion.div
                className="royal-card h-full hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${partner.gradient} rounded-full flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <span className="font-royal font-bold text-white text-lg">{partner.logo}</span>
                      </motion.div>
                      
                      <div>
                        <h3 className="font-royal font-bold text-xl text-royal-800 group-hover:text-royal-600 transition-colors">
                          {partner.name}
                        </h3>
                        <motion.div
                          className="w-8 h-8 bg-royal-100 rounded-full flex items-center justify-center mt-2"
                          whileHover={{ rotate: 15 }}
                        >
                          <partner.icon className="w-4 h-4 text-royal-600" />
                        </motion.div>
                      </div>
                    </div>

                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-royal-400 hover:text-crown-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="font-modern text-royal-700 leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="font-royal font-semibold text-lg text-royal-800 mb-3">Specializes In:</h4>
                    <p className="font-modern text-royal-600 text-sm italic">
                      {partner.specialties}
                    </p>
                  </div>

                  {/* Services */}
                  <div className="mb-8">
                    <h4 className="font-royal font-semibold text-lg text-royal-800 mb-4">Core Services:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {partner.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-crown-400 rounded-full flex-shrink-0"></div>
                          <span className="font-modern text-royal-600 text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      className={`w-full bg-gradient-to-r ${partner.gradient} text-white font-royal font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Learn More</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={partnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-royal-200"
        >
          <motion.div
            className="w-20 h-20 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            <Crown className="w-10 h-10 text-white" />
          </motion.div>

          <h3 className="font-royal font-bold text-2xl text-royal-800 mb-4">
            Comprehensive Business Solutions
          </h3>

          <p className="font-elegant text-lg text-royal-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Through our strategic partnerships, True North AI clients gain access to a complete ecosystem of business solutions—from AI implementation and funding to payment processing and digital marketing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={partnersInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="text-2xl font-bold text-crown-600 mb-2">$10M+</div>
              <div className="text-royal-600 font-modern">Funding Available</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={partnersInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="text-2xl font-bold text-crown-600 mb-2">24 Hours</div>
              <div className="text-royal-600 font-modern">Payment Setup</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={partnersInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="text-2xl font-bold text-crown-600 mb-2">360°</div>
              <div className="text-royal-600 font-modern">Business Support</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersSection
