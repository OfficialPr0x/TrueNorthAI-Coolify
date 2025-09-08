import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import {
  DollarSign,
  Crown,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  Target,
  Sparkles,
  Heart,
  Zap,
  Globe,
  BarChart3,
  CreditCard,
  Banknote,
  PiggyBank,
  UserCheck
} from 'lucide-react'
import SEO from '../components/common/SEO'

const Financing = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [partnersRef, partnersInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [solutionsRef, solutionsInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [mindsetRef, mindsetInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const financingSolutions = [
    {
      icon: Banknote,
      title: "Flexible Payment Plans",
      description: "Break down your investment into manageable monthly payments. Start building your empire today, pay over time.",
      benefit: "Start immediately, pay gradually"
    },
    {
      icon: CreditCard,
      title: "Business Line of Credit",
      description: "Access funds as you need them with our partner credit lines. Perfect for scaling operations and seizing opportunities.",
      benefit: "Flexible access to capital"
    },
    {
      icon: PiggyBank,
      title: "Equipment Financing",
      description: "Finance the tools, software, and technology you need to grow. Keep your cash flow strong while investing in your future.",
      benefit: "Preserve working capital"
    },
    {
      icon: UserCheck,
      title: "Partnership Funding",
      description: "Strategic partnerships that provide both financing and expertise. More than money – access to networks and mentorship.",
      benefit: "Funding + strategic support"
    },
    {
      icon: TrendingUp,
      title: "Revenue-Based Financing",
      description: "Payments tied to your success. As your business grows, so do your payments. True alignment between success and financing.",
      benefit: "Payments scale with success"
    },
    {
      icon: Shield,
      title: "No Personal Guarantee",
      description: "Business financing that doesn't require your personal assets as collateral. Protect your personal wealth while building your business.",
      benefit: "Business risk, not personal risk"
    }
  ]

  const mindsetShift = [
    {
      icon: Target,
      title: "Vision Over Capital",
      description: "It's not about how much money you have today – it's about how clearly you can see and pursue your vision for tomorrow."
    },
    {
      icon: Zap,
      title: "Action Creates Resources",
      description: "Taking the first step creates momentum. Resources follow commitment, not the other way around."
    },
    {
      icon: Heart,
      title: "Courage Over Comfort",
      description: "Building something lasting requires stepping outside your comfort zone. Fear of money is just another comfort zone."
    },
    {
      icon: Crown,
      title: "Legacy Mindset",
      description: "You're not building a job – you're building an empire that will outlive you and serve generations."
    },
    {
      icon: Sparkles,
      title: "Abundance Consciousness",
      description: "When you focus on creation and contribution, the universe responds with resources and opportunities."
    },
    {
      icon: Globe,
      title: "Impact First, Profit Second",
      description: "The most successful businesses solve real problems first. Profit follows genuine impact."
    }
  ]

  const stats = [
    { number: "60+", label: "Financing Partners", icon: Users },
    { number: "$0", label: "Minimum Startup Cost", icon: DollarSign },
    { number: "24hrs", label: "Approval Time", icon: Zap },
    { number: "100%", label: "Success Rate", icon: Target }
  ]

  return (
    <>
      <SEO
        title="TrueNorth Financing - Start Building Your Empire Today | True North AI"
        description="Break through financial barriers with TrueNorth financing. 60+ partners, flexible terms, and zero minimum investment. Start building your lasting business today."
        keywords="business financing, startup funding, small business loans, equipment financing, revenue-based financing, business funding Canada"
        image="https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757285058/Screenshot_2025-09-07_182252_g5knbj.png"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-24"
      >
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-crown-900 via-crown-800 to-royal-900 text-white relative overflow-hidden">
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
                <DollarSign className="w-5 h-5 text-crown-400" />
                <span className="font-royal font-medium">TrueNorth Financing</span>
              </motion.div>

              <h1 className="font-royal font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
                Money is <span className="shimmer-text">NOT</span> the Barrier
              </h1>

              <p className="font-elegant text-xl md:text-2xl text-royal-200 leading-relaxed mb-8 max-w-4xl mx-auto">
                <span className="text-crown-400 font-bold">You don't need a lot of money to start.</span> You just need to say YES to building a business and brand that lasts a lifetime.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <stat.icon className="w-8 h-8 text-crown-400 mx-auto mb-3" />
                    <div className="font-royal font-bold text-3xl text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="font-modern text-royal-200 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <blockquote className="font-elegant text-lg text-crown-300 leading-relaxed italic">
                  "The difference between those who succeed and those who don't is not the amount of money they start with.
                  It's their willingness to say YES to their vision and take the first step – even if that step costs next to nothing."
                </blockquote>
                <div className="text-right mt-4">
                  <span className="font-royal font-bold text-crown-400">- True North AI</span>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Link to="/contact">
                  <motion.button
                    className="royal-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your Journey Today
                  </motion.button>
                </Link>

                <motion.button
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-royal font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Financing Options
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Truth Section */}
        <section className="section-padding bg-gradient-to-br from-royal-50 to-crown-50">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
                The <span className="shimmer-text">Truth</span> About Starting
              </h2>
              <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto mb-12">
                Money follows commitment. Resources follow action. Success follows those brave enough to start.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <motion.div
                  className="bg-white rounded-xl p-8 shadow-lg"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Target className="w-12 h-12 text-crown-600 mx-auto mb-4" />
                  <h3 className="font-royal font-bold text-xl text-royal-800 mb-4">Not About Money</h3>
                  <p className="font-modern text-royal-600 leading-relaxed">
                    It's about vision, commitment, and the courage to say YES to building something that matters.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-8 shadow-lg"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Heart className="w-12 h-12 text-crown-600 mx-auto mb-4" />
                  <h3 className="font-royal font-bold text-xl text-royal-800 mb-4">Fear is the Real Enemy</h3>
                  <p className="font-modern text-royal-600 leading-relaxed">
                    Fear of money, fear of failure, fear of the unknown. These are the real barriers, not capital.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-8 shadow-lg"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Sparkles className="w-12 h-12 text-crown-600 mx-auto mb-4" />
                  <h3 className="font-royal font-bold text-xl text-royal-800 mb-4">Action Creates Resources</h3>
                  <p className="font-modern text-royal-600 leading-relaxed">
                    When you take the first step with commitment, the universe responds with resources and opportunities.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Financing Partners Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <motion.div
              ref={partnersRef}
              initial={{ opacity: 0, y: 30 }}
              animate={partnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
                60+ <span className="shimmer-text">Financing Partners</span>
              </h2>
              <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto mb-12">
                We've built relationships with the best financing partners to ensure you have access to the right solution for your unique situation.
              </p>

              <motion.div
                className="bg-gradient-to-br from-royal-50 to-crown-50 rounded-2xl p-8 mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={partnersInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Users className="w-8 h-8 text-crown-600" />
                  <span className="font-royal font-bold text-2xl text-royal-800">Trusted Partners Include:</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-royal-600 font-modern">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-royal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Banknote className="w-8 h-8 text-royal-600" />
                    </div>
                    <span className="text-sm font-medium">Major Banks</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-royal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CreditCard className="w-8 h-8 text-royal-600" />
                    </div>
                    <span className="text-sm font-medium">Credit Unions</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-royal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="w-8 h-8 text-royal-600" />
                    </div>
                    <span className="text-sm font-medium">Alternative Lenders</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-royal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Shield className="w-8 h-8 text-royal-600" />
                    </div>
                    <span className="text-sm font-medium">SBA Partners</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Financing Solutions Section */}
        <section className="section-padding bg-gradient-to-br from-royal-50 to-crown-50">
          <div className="container-max">
            <motion.div
              ref={solutionsRef}
              initial={{ opacity: 0, y: 30 }}
              animate={solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
                Financing <span className="shimmer-text">Solutions</span>
              </h2>
              <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
                Multiple pathways to make your vision a reality. Choose the solution that fits your business and your journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {financingSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="royal-card group hover:shadow-2xl transition-all duration-500"
                >
                  <motion.div
                    className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 10 }}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="font-royal font-bold text-2xl text-royal-800 mb-4 text-center">
                    {solution.title}
                  </h3>

                  <p className="font-modern text-royal-600 mb-4 leading-relaxed text-center">
                    {solution.description}
                  </p>

                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 bg-crown-100 text-crown-700 font-royal font-medium px-4 py-2 rounded-full text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>{solution.benefit}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mindset Shift Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <motion.div
              ref={mindsetRef}
              initial={{ opacity: 0, y: 30 }}
              animate={mindsetInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
                The <span className="shimmer-text">Mindset Shift</span>
              </h2>
              <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
                Success is 80% psychology, 20% mechanics. Here's how to think about building wealth and legacy.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {mindsetShift.map((shift, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={mindsetInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-royal-50 to-crown-50 rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-royal-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <shift.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-royal font-bold text-xl text-royal-800 mb-3">
                        {shift.title}
                      </h3>
                      <p className="font-modern text-royal-600 leading-relaxed">
                        {shift.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Start Today Section */}
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
                Ready to <span className="text-crown-400">Break Free</span>?
              </h2>

              <p className="font-elegant text-xl text-royal-200 leading-relaxed mb-8">
                Stop letting money be the excuse. Start letting your vision be the reason. The only thing standing between you and building an empire is your decision to begin.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-crown-400" />
                  </div>
                  <h3 className="font-royal font-bold text-lg mb-2">$0 Minimum</h3>
                  <p className="font-modern text-royal-200 text-sm">Start with next to nothing</p>
                </motion.div>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-crown-400" />
                  </div>
                  <h3 className="font-royal font-bold text-lg mb-2">60+ Partners</h3>
                  <p className="font-modern text-royal-200 text-sm">Find the perfect solution</p>
                </motion.div>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-crown-400" />
                  </div>
                  <h3 className="font-royal font-bold text-lg mb-2">Legacy Focus</h3>
                  <p className="font-modern text-royal-200 text-sm">Build what lasts</p>
                </motion.div>
              </div>

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
                    Start Building Today
                  </motion.button>
                </Link>

                <Link to="/services">
                  <motion.button
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-royal font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Services
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="font-elegant text-lg text-crown-300 italic">
                  "Your vision called you for a reason. The resources will follow your commitment. Say YES to building something extraordinary."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default Financing
