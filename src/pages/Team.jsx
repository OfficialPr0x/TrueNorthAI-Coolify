import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Users, Crown, Shield, Target, Award, Globe, Code, Brain, Heart, Zap, Star, ArrowRight } from 'lucide-react'
import SEO from '../components/common/SEO'

const Team = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [teamRef, teamInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [valuesRef, valuesInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const teamMembers = [
    {
      name: "Jaryd Paquette",
      slug: "jaryd-paquette",
      title: "Founder & Chief AI Architect",
      image: "https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757286285/480915276_1207102460982174_7213407615650576209_n_rohbcy.jpg",
      description: "Machine learning engineer, cybersecurity strategist, and AI systems architect with a decade of hands-on enterprise experience.",
      background: "He's reverse-engineered cyberattacks used by nation-state actors, built AI systems that predict threats before they hit, and now focuses on building tools that save lives—not just make headlines.",
      expertise: ["Machine Learning Engineering", "Cybersecurity Strategy", "AI Systems Architecture", "Enterprise Solutions"],
      icon: Crown,
      achievements: ["Founded True North AI", "Reverse-engineered nation-state malware", "Built enterprise-grade AI systems", "Mental wellness tech pioneer"],
      quote: "I don't believe in fake gurus, sugarcoated recovery, or surface-level tech. I believe in systems that work because I needed them to work for me first."
    },
    {
      name: "Gavin Williams",
      slug: "gavin-williams",
      title: "Co-Founder & Growth Architect",
      image: "https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757285699/541734346_1120496356190113_9018162841045591862_n_lgaarg.jpg",
      description: "Growth architect and Meta advertising specialist who builds diagonal scaling systems that sustain ROAS even at high budgets where most campaigns collapse.",
      background: "Gavin isn't a conventional media buyer. He's built a reputation for diagonal scaling on Meta sustaining ROAS even at high budgets where most campaigns collapse. His work is defined by precision, not theory: testing angles, engineering systems, and pushing paid media further than the platforms were designed to go. Over the past decade, he's scaled 100+ e-commerce brands, combining sharp creative direction with the technical discipline to keep growth profitable. Beyond ads, Gavin is known for his expertise in conversational marketing - building frameworks that transform customer interactions into assets that compound over time. At True North AI, he architects growth systems designed to withstand pressure: campaigns that don't just spend, but scale; and conversations that don't just convert, but endure.",
      expertise: ["Growth Architecture", "Meta Advertising", "Diagonal Scaling", "Conversational Marketing", "Paid Media Systems", "E-commerce Scaling"],
      icon: Target,
      achievements: ["Scaled 100+ e-commerce brands", "Built diagonal scaling systems", "Sustained high-budget ROAS", "Developed conversational marketing frameworks", "Managed millions in ad spend", "Pushed Meta platforms beyond limits"],
      quote: "I don't believe in surface-level hacks or temporary wins. I believe in systems that hold under fire, are tested in the real world, proven at scale, and built to last."
    },
    {
      name: "Curtis Shaw",
      slug: "curtis-shaw",
      title: "Head of Product & Design",
      initials: "CS",
      description: "Product strategist and UX designer with expertise in human-centered AI product development.",
      background: "Curtis combines deep product strategy experience with a passion for user experience design, ensuring our AI solutions are both powerful and intuitive to use.",
      expertise: ["Product Strategy", "UX Design", "User Research", "AI Product Development"],
      icon: Target,
      achievements: ["Launched 8+ AI products", "Led user experience transformations", "Human-centered design advocate", "Product growth specialist"],
      quote: "Great products are invisible. They solve problems so elegantly that users don't even notice the complexity behind them."
    },
    {
      name: "Chris Bain",
      slug: "chris-bain",
      title: "VP of Operations",
      image: "https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757312793/484170455_10232098940608817_3950433760998616105_n_ds39ad.jpg",
      description: "Operations strategist and business development expert with a focus on scaling AI-driven organizations.",
      background: "Chris brings operational excellence and business development expertise to ensure our AI solutions reach the right markets and deliver measurable business impact.",
      expertise: ["Business Operations", "Strategic Planning", "Business Development", "Operations Excellence"],
      icon: Shield,
      achievements: ["Scaled AI operations", "Built strategic partnerships", "Operational efficiency expert", "Business growth specialist"],
      quote: "Operations isn't just about efficiency—it's about creating systems that allow innovation to flourish and scale."
    },
    {
      name: "Guilliaume Couture",
      slug: "guilliaume-couture",
      title: "Lead UI/UX & Fullstack Game Developer",
      image: "https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757313734/508474909_3242274312586976_4090981101001277288_n_l6qtm1.jpg",
      description: "Lead UI/UX Designer and Fullstack Game Developer specializing in creating immersive gaming experiences and intuitive user interfaces.",
      background: "Guilliaume is a passionate UI/UX designer and fullstack game developer who brings creativity and technical expertise together to create exceptional user experiences. His unique blend of artistic vision and technical proficiency allows him to design interfaces that are both beautiful and functional.",
      expertise: ["UI/UX Design", "Fullstack Game Development", "Interactive Design", "User Experience Research"],
      icon: Brain,
      achievements: ["Launched award-winning games", "Built immersive user experiences", "Led creative development teams", "User experience excellence"],
      quote: "Great design is invisible. It creates experiences that feel natural, engaging, and unforgettable without ever drawing attention to itself."
    },
    {
      name: "Sabik Tawsif",
      slug: "sabik-tawsif",
      title: "AI Research Scientist",
      initials: "ST",
      description: "Research scientist specializing in advanced AI algorithms and their practical applications.",
      background: "Sabik focuses on cutting-edge AI research while ensuring findings translate into actionable, real-world solutions for our clients and products.",
      expertise: ["AI Research", "Algorithm Development", "Data Science", "Research Innovation"],
      icon: Zap,
      achievements: ["Published AI research papers", "Developed novel algorithms", "Research-to-product specialist", "Innovation catalyst"],
      quote: "Research without application is just theory. We ensure our discoveries create real value in the world."
    },
    {
      name: "Harry Daniel Price",
      slug: "harry-daniel-price",
      title: "Strategic Relationships Manager",
      image: "https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757292755/464087716_8653744111351797_7862541738659338804_n_k8yz8y.jpg",
      description: "Strategic partnerships expert with extensive experience in business growth, operations, and relationship building.",
      background: "Harry brings years of experience in business growth to the team, engaging as Strategic Relationships Manager, fostering powerful connections with prospects and partnerships. With a passion for operations (from business planning to acquisitions/exiting), and known for being highly articulate when it comes to assessing growth opportunities personally and professionally, Harry is committed to seeing TrueNorth AI blast off to greatly support Canada's technology infrastructure resurgence in 2025 and beyond.",
      expertise: ["Strategic Partnerships", "Business Development", "Operations Management", "Relationship Building", "Business Planning", "Growth Strategy"],
      icon: Users,
      achievements: ["Built strategic partnership networks", "Led business development initiatives", "Expert in operations and acquisitions", "Growth opportunity assessment specialist", "Technology infrastructure advocate"],
      quote: "Strategic relationships are the foundation of sustainable growth. Every connection we build strengthens Canada's technology ecosystem."
    }
  ]

  const teamValues = [
    {
      icon: Users,
      title: "Collaboration First",
      description: "We believe in the power of diverse perspectives and collaborative problem-solving."
    },
    {
      icon: Zap,
      title: "Innovation with Purpose",
      description: "Every technological advancement should serve a meaningful human purpose."
    },
    {
      icon: Star,
      title: "Excellence in Everything",
      description: "We pursue excellence not for glory, but because our users deserve the best."
    },
    {
      icon: Globe,
      title: "Global Impact, Local Focus",
      description: "While we think globally, we act with deep respect for local communities and cultures."
    }
  ]

  return (
    <>
      <SEO
        title="True North AI Team - Meet Our Expert AI Specialists & Leadership"
        description="Meet the True North AI team: Jaryd Paquette, Gavin Williams, Curtis Shaw, Chris Bain, Guilliaume Couture, and Sabik Tawsif. Canada's premier AI agency leadership with expertise in machine learning, cybersecurity, and enterprise solutions."
        keywords="True North AI team, Jaryd Paquette, AI specialists Canada, machine learning experts, cybersecurity team, AI leadership, Canadian AI consultants, enterprise AI team, AI engineers, AI researchers"
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
              <Users className="w-5 h-5 text-crown-400" />
              <span className="font-royal font-medium">Our Team</span>
            </motion.div>

            <h1 className="font-royal font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
              Meet the <span className="shimmer-text">True North</span> Team
            </h1>

            <p className="font-elegant text-xl md:text-2xl text-royal-200 leading-relaxed mb-4">
              <span className="text-crown-400 font-bold">Visionaries, builders, and dreamers</span> | United by purpose, driven by impact
            </p>

            <p className="font-elegant text-lg text-royal-300 max-w-4xl mx-auto">
              Our team combines decades of technical expertise, clinical experience, and entrepreneurial spirit to build AI solutions that truly matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Values */}
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
              Our <span className="shimmer-text">Values</span>
            </h2>
            <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  className="w-20 h-20 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="font-royal font-bold text-xl text-royal-800 mb-4">
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

      {/* Team Members */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-30"></div>

        <div className="container-max relative z-10">
          <motion.div
            ref={teamRef}
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
              Our <span className="shimmer-text">Leadership</span>
            </h2>
            <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
              Meet the talented individuals who make True North AI possible
            </p>
          </motion.div>

          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="royal-card group hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  <motion.div
                    className="w-32 h-32 rounded-full flex items-center justify-center flex-shrink-0 mx-auto lg:mx-0 shadow-lg overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={`${member.name} profile`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-royal-gradient flex items-center justify-center">
                        <span className="font-royal font-bold text-white text-4xl">{member.initials}</span>
                      </div>
                    )}
                  </motion.div>

                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <Link to={`/team/${member.slug}`}>
                          <h3 className="font-royal font-bold text-3xl text-royal-800 mb-2 group-hover:text-crown-600 transition-colors hover:underline">
                            {member.name}
                          </h3>
                        </Link>
                        <p className="font-elegant text-xl text-crown-600 mb-4">
                          {member.title}
                        </p>
                      </div>

                      <motion.div
                        className="w-16 h-16 bg-crown-100 rounded-full flex items-center justify-center mx-auto lg:mx-0"
                        whileHover={{ rotate: 15 }}
                      >
                        <member.icon className="w-8 h-8 text-crown-600" />
                      </motion.div>
                    </div>

                    <p className="font-modern text-royal-600 mb-4 leading-relaxed text-lg">
                      {member.description}
                    </p>
                    <p className="font-modern text-royal-600 mb-6 leading-relaxed">
                      {member.background}
                    </p>

                    {member.quote && (
                      <blockquote className="font-elegant text-lg text-crown-700 leading-relaxed italic border-l-4 border-crown-400 pl-6 mb-6">
                        "{member.quote}"
                      </blockquote>
                    )}

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-royal-100 text-royal-700 font-modern text-sm px-4 py-2 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    {member.achievements && (
                      <div className="border-t border-royal-100 pt-6">
                        <h4 className="font-royal font-bold text-xl text-royal-800 mb-4 text-center lg:text-left">
                          Key Achievements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {member.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex items-center space-x-2 text-royal-600"
                            >
                              <div className="w-2 h-2 bg-crown-400 rounded-full flex-shrink-0"></div>
                              <span className="font-modern text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* View Profile Button */}
                    <div className="mt-6 flex justify-center lg:justify-start">
                      <Link to={`/team/${member.slug}`}>
                        <motion.button
                          className="inline-flex items-center space-x-2 bg-royal-gradient text-white px-6 py-3 rounded-xl font-royal font-medium hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>View Full Profile</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="section-padding bg-gradient-to-br from-royal-900 to-crown-900 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-royal font-bold text-4xl md:text-5xl mb-6">
              Join Our <span className="text-crown-400">Mission</span>
            </h2>

            <p className="font-elegant text-xl text-royal-200 leading-relaxed mb-8">
              We're always looking for talented individuals who share our vision of building AI that serves humanity.
              If you're passionate about technology, innovation, and making a real impact, we'd love to hear from you.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="royal-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Open Positions
              </motion.button>

              <motion.button
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-royal font-medium transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </motion.div>
    </>
  )
}

export default Team
