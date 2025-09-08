import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowLeft, Target, TrendingUp, DollarSign, Users, Award, Star, ChevronRight, Mail, Linkedin, Twitter } from 'lucide-react'
import SEO from '../../components/common/SEO'

const GavinWilliams = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [contentRef, contentInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const expertise = [
    "Growth Architecture",
    "Meta Advertising",
    "Diagonal Scaling",
    "Conversational Marketing",
    "Paid Media Systems",
    "E-commerce Scaling"
  ]

  const achievements = [
    {
      icon: TrendingUp,
      title: "Scaled 100+ E-commerce Brands",
      description: "Built and executed growth strategies for over 100 successful e-commerce businesses"
    },
    {
      icon: Target,
      title: "Built Diagonal Scaling Systems",
      description: "Pioneered scaling methodologies that maintain ROAS at high budget levels"
    },
    {
      icon: DollarSign,
      title: "Managed Millions in Ad Spend",
      description: "Successfully managed and optimized multi-million dollar advertising budgets"
    },
    {
      icon: Users,
      title: "Conversational Marketing Pioneer",
      description: "Developed frameworks that transform customer interactions into lasting assets"
    }
  ]

  const timeline = [
    {
      year: "2014",
      title: "Started in Digital Marketing",
      description: "Began career mastering the fundamentals of digital advertising and growth"
    },
    {
      year: "2016",
      title: "Meta Advertising Specialist",
      description: "Specialized in Facebook and Instagram advertising, developing advanced strategies"
    },
    {
      year: "2019",
      title: "Diagonal Scaling Innovation",
      description: "Developed proprietary diagonal scaling methodology for sustainable high-budget campaigns"
    },
    {
      year: "2022",
      title: "Conversational Marketing Expert",
      description: "Expanded into conversational marketing, building frameworks that compound over time"
    },
    {
      year: "2024",
      title: "Co-Founded True North AI",
      description: "Joined forces to architect AI-powered growth systems built to last"
    }
  ]

  const stats = [
    { label: "Brands Scaled", value: "100+" },
    { label: "Ad Spend Managed", value: "$10M+" },
    { label: "Average ROAS", value: "4.2x" },
    { label: "Years Experience", value: "10+" }
  ]

  return (
    <>
      <SEO
        title="Gavin Williams - Co-Founder & Growth Architect | True North AI"
        description="Meet Gavin Williams, Co-Founder and Growth Architect at True North AI. Meta advertising specialist and growth architect who builds diagonal scaling systems that sustain ROAS at high budgets."
        keywords="Gavin Williams, True North AI co-founder, growth architect, Meta advertising expert, diagonal scaling, conversational marketing, e-commerce scaling"
        image="https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757285699/541734346_1120496356190113_9018162841045591862_n_lgaarg.jpg"
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
                  <Target className="w-5 h-5 text-crown-400" />
                  <span className="font-royal font-medium">Co-Founder & Growth Architect</span>
                </motion.div>

                <h1 className="font-royal font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
                  Gavin <span className="shimmer-text">Williams</span>
                </h1>

                <p className="font-elegant text-xl md:text-2xl text-royal-200 leading-relaxed mb-6">
                  Growth architect and Meta advertising specialist who builds diagonal scaling systems that sustain ROAS even at high budgets where most campaigns collapse.
                </p>

                <blockquote className="font-elegant text-lg text-crown-300 leading-relaxed italic border-l-4 border-crown-400 pl-6 mb-8">
                  "I don't believe in surface-level hacks or temporary wins. I believe in systems that hold under fire, are tested in the real world, proven at scale, and built to last."
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
                    href="https://linkedin.com/in/gavinwilliams"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/gavinwilliams"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Twitter className="w-5 h-5" />
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
                    src="https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757285699/541734346_1120496356190113_9018162841045591862_n_lgaarg.jpg"
                    alt="Gavin Williams"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-crown-500/20 to-royal-500/20 rounded-2xl blur-3xl"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="font-royal font-bold text-4xl md:text-5xl text-crown-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="font-modern text-royal-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Background Section */}
        <section className="section-padding bg-gradient-to-br from-royal-50 to-crown-50">
          <div className="container-max">
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-8 text-center">
                Background & <span className="shimmer-text">Philosophy</span>
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="font-modern text-royal-600 leading-relaxed mb-6">
                  Gavin isn't a conventional media buyer. He's built a reputation for diagonal scaling on Meta—sustaining ROAS even at high budgets where most campaigns collapse. His work is defined by precision, not theory: testing angles, engineering systems, and pushing paid media further than the platforms were designed to go.
                </p>

                <p className="font-modern text-royal-600 leading-relaxed mb-6">
                  Over the past decade, he's scaled 100+ e-commerce brands, combining sharp creative direction with the technical discipline to keep growth profitable. His approach isn't about following best practices—it's about finding what actually works when millions are on the line.
                </p>

                <p className="font-modern text-royal-600 leading-relaxed mb-6">
                  Beyond ads, Gavin is known for his expertise in conversational marketing—building frameworks that transform customer interactions into assets that compound over time. He understands that true growth isn't just about acquisition; it's about creating systems that turn customers into advocates.
                </p>

                <p className="font-modern text-royal-600 leading-relaxed">
                  At True North AI, he architects growth systems designed to withstand pressure: campaigns that don't just spend, but scale; and conversations that don't just convert, but endure. His philosophy is simple: build systems that work under fire, tested in the real world, and proven at scale.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-12 text-center">
              Areas of <span className="shimmer-text">Expertise</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {expertise.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-royal-50 to-crown-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
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
        <section className="section-padding bg-gradient-to-br from-royal-50 to-crown-50">
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

        {/* Timeline Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-12 text-center">
              Professional <span className="shimmer-text">Journey</span>
            </h2>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-12 pb-12 last:pb-0"
                >
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-royal-200"></div>
                  )}
                  
                  <div className="absolute left-0 w-10 h-10 bg-royal-gradient rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{item.year.slice(-2)}</span>
                  </div>

                  <div className="bg-gradient-to-br from-royal-50 to-crown-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="font-royal font-bold text-crown-600">{item.year}</span>
                      <ChevronRight className="w-4 h-4 text-royal-400" />
                      <h3 className="font-royal font-bold text-xl text-royal-800">{item.title}</h3>
                    </div>
                    <p className="font-modern text-royal-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                Ready to <span className="text-crown-400">Scale</span>?
              </h2>

              <p className="font-elegant text-xl text-royal-200 leading-relaxed mb-8">
                Let's build growth systems that don't just perform—they endure. Systems tested under fire and proven at scale.
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
                    Start Growing
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

export default GavinWilliams
