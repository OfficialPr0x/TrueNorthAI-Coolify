import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowLeft, Users, UserCheck, TrendingUp, Globe, Award, ChevronRight, Mail, Linkedin } from 'lucide-react'
import SEO from '../../components/common/SEO'

const HarryDanielPrice = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [contentRef, contentInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const expertise = [
    "Strategic Partnerships",
    "Business Development",
    "Operations Management",
    "Relationship Building",
    "Business Planning",
    "Growth Strategy"
  ]

  const achievements = [
    {
      icon: UserCheck,
      title: "Built Strategic Partnership Networks",
      description: "Developed extensive networks of strategic partnerships across industries"
    },
    {
      icon: TrendingUp,
      title: "Led Business Development Initiatives",
      description: "Spearheaded initiatives that drove significant business growth"
    },
    {
      icon: Users,
      title: "Expert in Operations and Acquisitions",
      description: "Successfully managed complex operations and acquisition processes"
    },
    {
      icon: Globe,
      title: "Technology Infrastructure Advocate",
      description: "Champion for Canada's technology infrastructure resurgence"
    }
  ]

  return (
    <>
      <SEO
        title="Harry Daniel Price - Strategic Relationships Manager | True North AI"
        description="Meet Harry Daniel Price, Strategic Relationships Manager at True North AI. Strategic partnerships expert with extensive experience in business growth, operations, and relationship building."
        keywords="Harry Daniel Price, True North AI partnerships, strategic relationships, business development, operations management, growth strategy"
        image="https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757292755/464087716_8653744111351797_7862541738659338804_n_k8yz8y.jpg"
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
            <Link to="/team" className="inline-flex items-center space-x-2 text-crown-400 hover:text-crown-300 transition-colors mb-8">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-modern">Back to Team</span>
            </Link>

            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <motion.div
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
                  initial={{ scale: 0 }}
                  animate={heroInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Users className="w-5 h-5 text-crown-400" />
                  <span className="font-royal font-medium">Strategic Relationships Manager</span>
                </motion.div>

                <h1 className="font-royal font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
                  Harry Daniel <span className="shimmer-text">Price</span>
                </h1>

                <p className="font-elegant text-xl md:text-2xl text-royal-200 leading-relaxed mb-6">
                  Strategic partnerships expert with extensive experience in business growth, operations, and relationship building.
                </p>

                <blockquote className="font-elegant text-lg text-crown-300 leading-relaxed italic border-l-4 border-crown-400 pl-6 mb-8">
                  "Strategic relationships are the foundation of sustainable growth. Every connection we build strengthens Canada's technology ecosystem."
                </blockquote>

                <div className="flex space-x-4">
                  <motion.a
                    href="mailto:team@truenorthai.group"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/harrydanielprice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative z-10">
                  <img
                    src="https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757292755/464087716_8653744111351797_7862541738659338804_n_k8yz8y.jpg"
                    alt="Harry Daniel Price"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-crown-500/20 to-royal-500/20 rounded-2xl blur-3xl"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Background Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-8 text-center">
                Vision & <span className="shimmer-text">Mission</span>
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="font-modern text-royal-600 leading-relaxed mb-6">
                  Harry brings years of experience in business growth to the team, engaging as Strategic Relationships Manager, fostering powerful connections with prospects and partnerships. His expertise spans the entire business lifecycle, from initial planning to successful exits.
                </p>

                <p className="font-modern text-royal-600 leading-relaxed mb-6">
                  With a passion for operations—from business planning to acquisitions and exiting—Harry is known for being highly articulate when it comes to assessing growth opportunities both personally and professionally. His strategic mindset enables him to identify and capitalize on opportunities that others might miss.
                </p>

                <p className="font-modern text-royal-600 leading-relaxed mb-6">
                  Harry is committed to seeing True North AI blast off to greatly support Canada's technology infrastructure resurgence in 2025 and beyond. His vision extends beyond individual partnerships to building an ecosystem that strengthens Canada's position in the global AI landscape.
                </p>

                <p className="font-modern text-royal-600 leading-relaxed">
                  At True North AI, Harry orchestrates strategic relationships that create mutual value, ensuring that every partnership contributes to our mission of building AI that matters while strengthening the broader technology community.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="section-padding bg-gradient-to-br from-royal-50 to-crown-50">
          <div className="container-max">
            <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-12 text-center">
              Strategic <span className="shimmer-text">Expertise</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {expertise.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-crown-500 rounded-full"></div>
                    <span className="font-modern text-royal-700">{skill}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-12 text-center">
              Key <span className="shimmer-text">Achievements</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="royal-card group hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-royal-gradient rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <achievement.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-royal font-bold text-xl text-royal-800 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="font-modern text-royal-600">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Canada Tech Vision Section */}
        <section className="section-padding bg-gradient-to-br from-royal-50 to-crown-50">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-8">
                Supporting Canada's <span className="shimmer-text">Tech Renaissance</span>
              </h2>

              <p className="font-modern text-lg text-royal-600 leading-relaxed mb-6">
                Harry's vision extends beyond individual success stories. He's committed to building an ecosystem that positions Canada as a global leader in AI innovation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <motion.div
                  className="bg-white rounded-xl p-6 shadow-lg"
                  whileHover={{ y: -5 }}
                >
                  <Globe className="w-12 h-12 text-crown-600 mx-auto mb-4" />
                  <h3 className="font-royal font-bold text-xl text-royal-800 mb-2">Global Reach</h3>
                  <p className="font-modern text-royal-600 text-sm">Building connections that put Canadian AI on the world stage</p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-6 shadow-lg"
                  whileHover={{ y: -5 }}
                >
                  <Users className="w-12 h-12 text-crown-600 mx-auto mb-4" />
                  <h3 className="font-royal font-bold text-xl text-royal-800 mb-2">Local Impact</h3>
                  <p className="font-modern text-royal-600 text-sm">Strengthening Canada's technology infrastructure</p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-6 shadow-lg"
                  whileHover={{ y: -5 }}
                >
                  <Award className="w-12 h-12 text-crown-600 mx-auto mb-4" />
                  <h3 className="font-royal font-bold text-xl text-royal-800 mb-2">Future Ready</h3>
                  <p className="font-modern text-royal-600 text-sm">Preparing for 2025 and beyond</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-royal-900 to-crown-900 text-white">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl mb-6">
                Let's Build <span className="text-crown-400">Partnerships</span>
              </h2>

              <p className="font-elegant text-xl text-royal-200 leading-relaxed mb-8">
                Ready to be part of Canada's AI revolution? Let's explore how we can grow together.
              </p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link to="/contact">
                  <motion.button
                    className="royal-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Partner With Us
                  </motion.button>
                </Link>

                <Link to="/team">
                  <motion.button
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-royal font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Meet the Team
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default HarryDanielPrice
