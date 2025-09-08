import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowLeft, Zap, Brain, Microscope, BookOpen, Award, ChevronRight, Mail, Linkedin, Github } from 'lucide-react'
import SEO from '../../components/common/SEO'

const SabikTawsif = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [contentRef, contentInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const expertise = [
    "AI Research",
    "Algorithm Development",
    "Data Science",
    "Research Innovation",
    "Deep Learning",
    "Statistical Analysis"
  ]

  const achievements = [
    {
      icon: BookOpen,
      title: "Published AI Research Papers",
      description: "Contributed to peer-reviewed publications in machine learning and AI"
    },
    {
      icon: Brain,
      title: "Developed Novel Algorithms",
      description: "Created innovative algorithms for complex problem-solving"
    },
    {
      icon: Microscope,
      title: "Research-to-Product Specialist",
      description: "Successfully translated research findings into practical applications"
    },
    {
      icon: Award,
      title: "Innovation Catalyst",
      description: "Drove innovation through cutting-edge research and development"
    }
  ]

  return (
    <>
      <SEO
        title="Sabik Tawsif - AI Research Scientist | True North AI"
        description="Meet Sabik Tawsif, AI Research Scientist at True North AI. Research scientist specializing in advanced AI algorithms and their practical applications."
        keywords="Sabik Tawsif, True North AI researcher, AI research scientist, algorithm development, data science, research innovation"
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
                <span className="font-royal font-bold text-white text-5xl">ST</span>
              </motion.div>

              <motion.div
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
                initial={{ scale: 0 }}
                animate={heroInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Zap className="w-5 h-5 text-crown-400" />
                <span className="font-royal font-medium">AI Research Scientist</span>
              </motion.div>

              <h1 className="font-royal font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
                Sabik <span className="shimmer-text">Tawsif</span>
              </h1>

              <p className="font-elegant text-xl md:text-2xl text-royal-200 leading-relaxed mb-6 max-w-3xl mx-auto">
                Research scientist specializing in advanced AI algorithms and their practical applications.
              </p>

              <blockquote className="font-elegant text-lg text-crown-300 leading-relaxed italic border-l-4 border-crown-400 pl-6 mb-8 max-w-2xl mx-auto text-left">
                "Research without application is just theory. We ensure our discoveries create real value in the world."
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
                  href="https://linkedin.com/in/sabiktawsif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/sabiktawsif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
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
                Research & <span className="shimmer-text">Innovation</span>
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="font-modern text-royal-600 leading-relaxed mb-6">
                  Sabik focuses on cutting-edge AI research while ensuring findings translate into actionable, real-world solutions for our clients and products. His work bridges the gap between theoretical advances and practical applications.
                </p>

                <p className="font-modern text-royal-600 leading-relaxed mb-6">
                  With a strong foundation in mathematics and computer science, Sabik explores the frontiers of AI, developing novel algorithms and approaches to solve complex problems. His research spans natural language processing, computer vision, and reinforcement learning.
                </p>

                <p className="font-modern text-royal-600 leading-relaxed">
                  At True North AI, Sabik leads our research initiatives, ensuring we stay at the forefront of AI innovation while maintaining a practical focus on delivering value. His work ensures that our solutions are not just current but future-ready.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="section-padding bg-gradient-to-br from-royal-50 to-crown-50">
          <div className="container-max">
            <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-12 text-center">
              Research <span className="shimmer-text">Areas</span>
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
                Explore AI <span className="text-crown-400">Innovation</span>
              </h2>

              <p className="font-elegant text-xl text-royal-200 leading-relaxed mb-8">
                Ready to leverage cutting-edge AI research for your business? Let's innovate together.
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
                    Start Innovating
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

export default SabikTawsif
