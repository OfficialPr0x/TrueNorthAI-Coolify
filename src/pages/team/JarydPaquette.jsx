import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { ArrowLeft, Crown, Shield, Brain, Code, Globe, Award, Star, ChevronRight, Mail, Linkedin, Twitter } from 'lucide-react'
import SEO from '../../components/common/SEO'

const JarydPaquette = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [contentRef, contentInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const expertise = [
    "Machine Learning Engineering",
    "Cybersecurity Strategy", 
    "AI Systems Architecture",
    "Enterprise Solutions",
    "Threat Intelligence",
    "Mental Wellness Technology"
  ]

  const achievements = [
    {
      icon: Crown,
      title: "Founded True North AI",
      description: "Built Canada's premier AI consultancy focused on meaningful impact"
    },
    {
      icon: Shield,
      title: "Reverse-Engineered Nation-State Malware",
      description: "Analyzed and neutralized advanced persistent threats used by nation-state actors"
    },
    {
      icon: Brain,
      title: "Built Enterprise-Grade AI Systems",
      description: "Developed scalable AI solutions for Fortune 500 companies"
    },
    {
      icon: Award,
      title: "Mental Wellness Tech Pioneer",
      description: "Created AI-driven mental health tools that have helped thousands"
    }
  ]

  const timeline = [
    {
      year: "2014",
      title: "Started in Cybersecurity",
      description: "Began career analyzing advanced cyber threats and building defensive systems"
    },
    {
      year: "2018",
      title: "Transitioned to AI/ML",
      description: "Shifted focus to machine learning and artificial intelligence applications"
    },
    {
      year: "2022",
      title: "Mental Health Tech Innovation",
      description: "Developed AI systems for mental wellness after personal recovery journey"
    },
    {
      year: "2024",
      title: "Founded True North AI",
      description: "Launched consultancy to help businesses leverage AI for meaningful impact"
    }
  ]

  return (
    <>
      <SEO
        title="Jaryd Paquette - Founder & Chief AI Architect | True North AI"
        description="Meet Jaryd Paquette, Founder and Chief AI Architect at True North AI. Machine learning engineer, cybersecurity strategist, and AI systems architect with a decade of enterprise experience."
        keywords="Jaryd Paquette, True North AI founder, AI architect, machine learning engineer, cybersecurity expert, mental wellness technology, Canadian AI leader"
        image="https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757286285/480915276_1207102460982174_7213407615650576209_n_rohbcy.jpg"
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
                  <Crown className="w-5 h-5 text-crown-400" />
                  <span className="font-royal font-medium">Founder & Chief AI Architect</span>
                </motion.div>

                <h1 className="font-royal font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
                  Jaryd <span className="shimmer-text">Paquette</span>
                </h1>

                <p className="font-elegant text-xl md:text-2xl text-royal-200 leading-relaxed mb-6">
                  Machine learning engineer, cybersecurity strategist, and AI systems architect with a decade of hands-on enterprise experience.
                </p>

                <blockquote className="font-elegant text-lg text-crown-300 leading-relaxed italic border-l-4 border-crown-400 pl-6 mb-8">
                  "I don't believe in fake gurus, sugarcoated recovery, or surface-level tech. I believe in systems that work because I needed them to work for me first."
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
                    href="https://linkedin.com/in/jarydpaquette"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/jarydpaquette"
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
                    src="https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757286285/480915276_1207102460982174_7213407615650576209_n_rohbcy.jpg"
                    alt="Jaryd Paquette"
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
                Background & <span className="shimmer-text">Journey</span>
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="font-modern text-royal-600 leading-relaxed mb-6">
                  He's reverse-engineered cyberattacks used by nation-state actors, built AI systems that predict threats before they hit, and now focuses on building tools that save lives—not just make headlines.
                </p>

                <p className="font-modern text-royal-600 leading-relaxed mb-6">
                  Jaryd's journey into AI wasn't conventional. Starting in cybersecurity, he spent years analyzing the most sophisticated threats in cyberspace, understanding how attackers think and operate. This deep technical foundation became the bedrock for his transition into machine learning and AI.
                </p>

                <p className="font-modern text-royal-600 leading-relaxed mb-6">
                  After facing his own mental health challenges, Jaryd redirected his expertise toward building AI systems that could genuinely help people. This personal experience drives his commitment to creating technology with real human impact, not just impressive metrics.
                </p>

                <p className="font-modern text-royal-600 leading-relaxed">
                  Today, as the founder of True North AI, Jaryd combines his technical expertise with a deep understanding of human needs to build AI solutions that matter. His work spans from enterprise-grade security systems to mental wellness applications, always with a focus on practical, meaningful outcomes.
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

        {/* Timeline Section */}
        <section className="section-padding bg-gradient-to-br from-royal-50 to-crown-50">
          <div className="container-max">
            <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-12 text-center">
              Professional <span className="shimmer-text">Timeline</span>
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

                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
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
                Let's Build <span className="text-crown-400">Together</span>
              </h2>

              <p className="font-elegant text-xl text-royal-200 leading-relaxed mb-8">
                Ready to leverage AI for meaningful impact? Let's discuss how True North AI can help transform your vision into reality.
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
                    Get in Touch
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

export default JarydPaquette
