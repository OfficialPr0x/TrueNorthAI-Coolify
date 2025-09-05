import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Crown, Shield, Target, Award, Users, Globe } from 'lucide-react'

const About = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [storyRef, storyInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [valuesRef, valuesInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [teamRef, teamInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const values = [
    {
      icon: Crown,
      title: "Built from Real Pain",
      description: "This isn't academic. It's lived. Our systems work because they're forged in truth, not theory."
    },
    {
      icon: Shield,
      title: "Fueled by Real Intelligence",
      description: "Our AI doesn't just process data—it solves real problems because it's built by someone who needed it to work first."
    },
    {
      icon: Target,
      title: "Committed to National Identity", 
      description: "We're not exporting sovereignty—we're rebuilding it. Canada-first, always."
    },
    {
      icon: Award,
      title: "Driven by Impossible Vision",
      description: "Because if no one else is doing it, we will. That's what True North means."
    }
  ]

  const jarydProfile = {
    name: "Jaryd Paquette",
    title: "Founder & Chief AI Architect",
    description: "Jaryd isn't a typical founder. He's a machine learning engineer, a design strategist, a former addict, a growth hacker, and a self-made builder who turned hard reality into high-tech purpose.",
    background: "He's reverse-engineered cyberattacks used by nation-state actors, built AI systems that predict threats before they hit, created lead-gen and marketing infrastructures that revive dead businesses, and now focuses on building tools that save lives—not just make headlines.",
    quote: "I don't believe in fake gurus, sugarcoated recovery, or surface-level tech. I believe in systems that work because I needed them to work for me first.",
    expertise: ["Machine Learning Engineering", "Cybersecurity Strategy", "AI Systems Architecture", "Enterprise Solutions"]
  }

  const flagshipLaunches = [
    {
      name: "Northbound",
      description: "An AI-powered platform that replaces addiction with stimulation, structure, and entrepreneurial evolution."
    },
    {
      name: "Ghost Reps", 
      description: "A machine learning ecosystem and counterintelligence-level AI security stack."
    },
    {
      name: "The Agency Arm",
      description: "Canada's first full-service AI design, strategy, and automation hub for SMBs and nonprofits."
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
              <span className="font-royal font-medium">About Our Kingdom</span>
            </motion.div>

            <h1 className="font-royal font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
              About <span className="shimmer-text">True North AI</span>
            </h1>
            
            <p className="font-elegant text-xl md:text-2xl text-royal-200 leading-relaxed mb-4">
              <span className="text-crown-400 font-bold">Founded by Jaryd Paquette</span> | Built from Battle, Not Boardrooms
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30"></div>
        
        <div className="container-max relative z-10">
          <motion.div
            ref={storyRef}
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-8">
              The True North <span className="shimmer-text">Origin</span>
            </h2>
            
            <div className="space-y-8 text-left">
              <motion.p
                className="font-elegant text-xl text-royal-700 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                True North AI didn't start in a venture capital boardroom.<br/>
                <strong>It was born in the trenches</strong>—between addiction and breakthrough, burnout and clarity, rock bottom and legacy.
              </motion.p>
              
              <motion.p
                className="font-elegant text-xl text-royal-700 leading-relaxed"
                initial={{ opacity: 0, x: 30 }}
                animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Founded by <strong className="text-crown-600">Jaryd Paquette</strong>, a self-taught engineer, cybersecurity strategist, and AI systems architect with a decade of hands-on enterprise experience, True North AI was forged with a simple truth:
              </motion.p>
              
              <motion.blockquote
                className="font-elegant text-2xl text-crown-700 leading-relaxed italic border-l-4 border-crown-400 pl-6 my-8"
                initial={{ opacity: 0, x: -30 }}
                animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                "If AI is going to shape our world, it better serve the people who live in it."
              </motion.blockquote>

              <motion.p
                className="font-elegant text-xl text-royal-700 leading-relaxed"
                initial={{ opacity: 0, x: 30 }}
                animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                From decoding nation-state malware to building enterprise-grade AI systems with zero funding, Jaryd has walked a road most people wouldn't survive. But out of that fire came this mission: To create a <strong className="text-crown-600">Canadian-led, sovereignty-first AI institution</strong>—one that doesn't just talk innovation, but builds it, deploys it, and <em>teaches others to own it too.</em>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gradient-to-br from-royal-50 to-crown-50 relative overflow-hidden">
        <div className="container-max">
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
              What We <span className="shimmer-text">Stand For</span>
            </h2>
            <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
              True North AI is a sovereign technology initiative focused on nationwide AI innovation, mental wellness tech, and real-world impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="royal-card group hover:shadow-2xl transition-all duration-500"
              >
                <motion.div
                  className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="font-royal font-bold text-2xl text-royal-800 mb-4 group-hover:text-crown-600 transition-colors">
                  {value.title}
                </h3>
                
                <p className="font-modern text-royal-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Jaryd */}
      <section id="jaryd" className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
        
        <div className="container-max relative z-10">
          <motion.div
            ref={teamRef}
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
              About <span className="shimmer-text">Jaryd Paquette</span>
            </h2>
            <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
              The mind and mission behind True North AI
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8 }}
              className="royal-card group hover:shadow-2xl transition-all duration-500 mb-12"
            >
              <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                <motion.div
                  className="w-32 h-32 bg-royal-gradient rounded-full flex items-center justify-center flex-shrink-0 mx-auto lg:mx-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="font-royal font-bold text-white text-4xl">JP</span>
                </motion.div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="font-royal font-bold text-3xl text-royal-800 mb-2 group-hover:text-crown-600 transition-colors">
                    {jarydProfile.name}
                  </h3>
                  <p className="font-elegant text-xl text-crown-600 mb-4">
                    {jarydProfile.title}
                  </p>
                  <p className="font-modern text-royal-600 mb-4 leading-relaxed text-lg">
                    {jarydProfile.description}
                  </p>
                  <p className="font-modern text-royal-600 mb-6 leading-relaxed">
                    {jarydProfile.background}
                  </p>
                  
                  <blockquote className="font-elegant text-xl text-crown-700 leading-relaxed italic border-l-4 border-crown-400 pl-6 mb-6">
                    "{jarydProfile.quote}"
                  </blockquote>
                  
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {jarydProfile.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-royal-100 text-royal-700 font-modern text-sm px-4 py-2 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Flagship Launches */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="font-royal font-bold text-3xl text-royal-800 mb-8 text-center">
                Flagship <span className="shimmer-text">Launches</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {flagshipLaunches.map((launch, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="bg-crown-50 border border-crown-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <h4 className="font-royal font-bold text-xl text-crown-800 mb-3">
                      🧭 {launch.name}
                    </h4>
                    <p className="font-modern text-royal-600 leading-relaxed">
                      {launch.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A Mare Ad Mare Section */}
      <section className="section-padding bg-gradient-to-br from-royal-900 to-crown-900 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-royal font-bold text-4xl md:text-5xl mb-6">
              Our Motto: <span className="text-crown-400">A MARE AD MARE</span>
            </h2>
            <p className="font-elegant text-xl text-royal-200 max-w-4xl mx-auto leading-relaxed mb-12">
              "From sea to sea" isn't just a slogan—it's a promise.<br/>
              True North AI exists to serve <em>all</em> of Canada. From creators and educators to business owners and mental health advocates—we build AI that empowers people, not replaces them. We're here to bridge the gap between complex innovation and everyday impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="section-padding bg-gradient-to-br from-crown-900 to-royal-900 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-royal font-bold text-4xl md:text-5xl mb-8">
              What's <span className="text-crown-400">Next?</span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-left">
              <motion.p
                className="font-elegant text-2xl text-white leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Canada doesn't need another startup.
              </motion.p>
              
              <motion.p
                className="font-elegant text-2xl text-crown-300 leading-relaxed font-bold"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                It needs a movement that builds systems, leaders, and culture.
              </motion.p>
              
              <motion.p
                className="font-elegant text-2xl text-white leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                True North AI is that movement.
              </motion.p>
              
              <motion.p
                className="font-elegant text-3xl text-crown-400 leading-relaxed font-bold text-center pt-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                And this?<br/>
                This is just the beginning.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
