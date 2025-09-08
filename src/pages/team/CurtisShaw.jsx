import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowLeft, Target, Palette, Users, Lightbulb, Award, ChevronRight, Mail, Linkedin } from 'lucide-react'
import SEO from '../../components/common/SEO'

const CurtisShaw = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [contentRef, contentInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const expertise = [
    "Product Strategy",
    "UX Design",
    "User Research",
    "AI Product Development",
    "Human-Centered Design",
    "Product Growth"
  ]

  const achievements = [
    {
      icon: Lightbulb,
      title: "Launched 8+ AI Products",
      description: "Successfully brought multiple AI products from concept to market"
    },
    {
      icon: Users,
      title: "Led User Experience Transformations",
      description: "Transformed user experiences for enterprise and consumer products"
    },
    {
      icon: Palette,
      title: "Human-Centered Design Advocate",
      description: "Champion of design that puts human needs at the center"
    },
    {
      icon: Award,
      title: "Product Growth Specialist",
      description: "Drove significant growth through strategic product improvements"
    }
  ]

  return (
    <>
      <SEO
        title="Curtis Shaw - Head of Product & Design | True North AI"
        description="Meet Curtis Shaw, Head of Product & Design at True North AI. Product strategist and UX designer with expertise in human-centered AI product development."
        keywords="Curtis Shaw, True North AI product design, UX designer, product strategy, AI product development, human-centered design"
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
            <Link to="/team" className="inline-flex items-center space-x-2 text-crown-400 hover:text-crown-300 transition-colors mb-8">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-modern">Back to Team</span>
            </Link>

            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                className="w-32 h-32 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
                initial={{ scale: 0 }}
                animate={heroInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="font-royal font-bold text-white text-5xl">CS</span>
              </motion.div>

              <motion.div
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
                initial={{ scale: 0 }}
                animate={heroInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Target className="w-5 h-5 text-crown-400" />
                <span className="font-royal font-medium">Head of Product & Design</span>
              </motion.div>

              <h1 className="font-royal font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
                Curtis <span className="shimmer-text">Shaw</span>
              </h1>

              <p className="font-elegant text-xl md:text-2xl text-royal-200 leading-relaxed mb-6 max-w-3xl mx-auto">
                Product strategist and UX designer with expertise in human-centered AI product development.
              </p>

              <blockquote className="font-elegant text-lg text-crown-300 leading-relaxed italic border-l-4 border-crown-400 pl-6 mb-8 max-w-2xl mx-auto text-left">
                "Great products are invisible. They solve problems so elegantly that users don't even notice the complexity behind them."
              </blockquote>

              <div className="flex space-x-4 justify-center">
                <motion.a
                  href="mailto:team@truenorthai.group"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/curtisshaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
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
                Background & <span className="shimmer-text">Approach</span>
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="font-modern text-royal-600 leading-relaxed mb-6">
                  Curtis combines deep product strategy experience with a passion for user experience design, ensuring our AI solutions are both powerful and intuitive to use. His approach centers on understanding user needs at the deepest level and translating them into elegant product experiences.
                </p>

                <p className="font-modern text-royal-600 leading-relaxed mb-6">
                  With over 8 successful AI product launches under his belt, Curtis has mastered the art of bridging the gap between complex AI capabilities and simple, delightful user experiences. He believes that the best products don't just solve problems—they anticipate needs and remove friction before users even notice it.
                </p>

                <p className="font-modern text-royal-600 leading-relaxed">
                  At True North AI, Curtis leads our product and design efforts with a focus on creating AI solutions that feel natural and empowering. His human-centered approach ensures that every product we build not only leverages cutting-edge technology but also respects and enhances the human experience.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="section-padding bg-gradient-to-br from-royal-50 to-crown-50">
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
                Let's Design the <span className="text-crown-400">Future</span>
              </h2>

              <p className="font-elegant text-xl text-royal-200 leading-relaxed mb-8">
                Ready to create AI products that users love? Let's build something extraordinary together.
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
                    Start a Project
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

export default CurtisShaw
