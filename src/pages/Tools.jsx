import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import {
  Wrench,
  Crown,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Zap,
  Target,
  TrendingUp,
  Users,
  Brain,
  Code,
  BarChart3,
  Mail,
  Phone,
  Calendar,
  FileText,
  Database,
  Bot,
  Sparkles,
  Rocket,
  Lightbulb,
  Settings,
  Globe,
  Clock,
  Search,
  MessageSquare,
  Calculator,
  PieChart,
  Workflow,
  Camera,
  Mic,
  Video,
  Monitor,
  Smartphone,
  Cloud,
  Lock,
  Heart,
  DollarSign
} from 'lucide-react'
import SEO from '../components/common/SEO'

const Tools = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [categoriesRef, categoriesInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [showcaseRef, showcaseInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const toolCategories = [
    {
      icon: Brain,
      title: "AI Productivity Suite",
      description: "Intelligent automation tools that streamline your workflow and boost efficiency by up to 300%",
      tools: ["AI Task Manager", "Smart Scheduler", "Content Generator", "Decision Assistant"],
      gradient: "from-blue-600 to-blue-800",
      bgGradient: "from-blue-50 to-blue-100",
      popular: true
    },
    {
      icon: Bot,
      title: "Customer Experience AI",
      description: "Revolutionary chatbots and support systems that provide 24/7 intelligent customer service",
      tools: ["Support Bot", "Lead Qualifier", "Follow-up Automator", "Feedback Analyzer"],
      gradient: "from-purple-600 to-purple-800",
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Advanced analytics and reporting tools that turn data into actionable business insights",
      tools: ["Revenue Predictor", "Performance Dashboard", "Competitor Analyzer", "Trend Forecaster"],
      gradient: "from-green-600 to-green-800",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      icon: Mail,
      title: "Communication Automation",
      description: "Smart email and messaging tools that handle outreach, follow-ups, and relationship building",
      tools: ["Email Personalizer", "Sequence Optimizer", "Response Tracker", "Relationship Builder"],
      gradient: "from-red-600 to-red-800",
      bgGradient: "from-red-50 to-red-100"
    },
    {
      icon: Settings,
      title: "Process Optimization",
      description: "Workflow automation tools that eliminate manual tasks and optimize business operations",
      tools: ["Process Mapper", "Automation Builder", "Quality Controller", "Performance Monitor"],
      gradient: "from-orange-600 to-orange-800",
      bgGradient: "from-orange-50 to-orange-100"
    },
    {
      icon: Globe,
      title: "Multi-Platform Integration",
      description: "Seamless connectivity tools that unify all your business applications into one ecosystem",
      tools: ["API Connector", "Data Sync", "Platform Bridge", "Workflow Orchestrator"],
      gradient: "from-teal-600 to-teal-800",
      bgGradient: "from-teal-50 to-teal-100"
    }
  ]

  const featuredTools = [
    {
      icon: Rocket,
      name: "TrueNorth AI Assistant",
      description: "Your personal AI productivity companion that learns your preferences and automates routine tasks",
      features: ["Smart Task Prioritization", "Meeting Preparation", "Email Drafting", "Progress Tracking"],
      category: "AI Productivity",
      users: "10,000+",
      rating: 4.9,
      popular: true
    },
    {
      icon: Workflow,
      name: "Automation Studio",
      description: "Visual workflow builder that turns complex processes into simple, automated sequences",
      features: ["Drag & Drop Builder", "Template Library", "Real-time Testing", "Performance Analytics"],
      category: "Process Optimization",
      users: "5,000+",
      rating: 4.8
    },
    {
      icon: MessageSquare,
      name: "Smart Communicator",
      description: "AI-powered communication tool that personalizes every interaction and maximizes response rates",
      features: ["Tone Analysis", "Timing Optimization", "A/B Testing", "Performance Tracking"],
      category: "Communication",
      users: "8,000+",
      rating: 4.9
    },
    {
      icon: PieChart,
      name: "Insight Engine",
      description: "Advanced analytics platform that transforms raw data into strategic business intelligence",
      features: ["Predictive Modeling", "Real-time Dashboards", "Automated Reports", "Trend Analysis"],
      category: "Business Intelligence",
      users: "3,000+",
      rating: 4.7
    },
    {
      icon: Bot,
      name: "Support Champion",
      description: "Intelligent customer support system that handles inquiries with human-like understanding",
      features: ["Natural Language Processing", "Multi-language Support", "Sentiment Analysis", "Escalation Management"],
      category: "Customer Experience",
      users: "12,000+",
      rating: 4.9
    },
    {
      icon: Globe,
      name: "Ecosystem Connector",
      description: "Universal integration platform that connects all your tools into a seamless workflow",
      features: ["500+ Integrations", "Real-time Sync", "Custom APIs", "Data Mapping"],
      category: "Integration",
      users: "7,000+",
      rating: 4.8
    }
  ]

  const stats = [
    { number: "25+", label: "AI-Powered Tools", icon: Wrench },
    { number: "500K+", label: "Tasks Automated", icon: Zap },
    { number: "40+", label: "Hours Saved Weekly", icon: Clock },
    { number: "95%", label: "User Satisfaction", icon: Heart }
  ]

  return (
    <>
      <SEO
        title="TrueNorth AI Tools - AI-Powered Productivity Goldmine | True North AI"
        description="Discover TrueNorth's comprehensive suite of AI-powered productivity tools. From automation to analytics, our in-house built tools are your productivity goldmine."
        keywords="AI tools, productivity tools, business automation, AI productivity suite, workflow automation, business intelligence tools, customer service AI"
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
                <Wrench className="w-5 h-5 text-crown-400" />
                <span className="font-royal font-medium">TrueNorth Tools</span>
              </motion.div>

              <h1 className="font-royal font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
                Your <span className="shimmer-text">Productivity</span> Goldmine
              </h1>

              <p className="font-elegant text-xl md:text-2xl text-royal-200 leading-relaxed mb-8 max-w-4xl mx-auto">
                <span className="text-crown-400 font-bold">25+ AI-powered tools</span> built in-house by TrueNorth AI.
                Transform your workflow, automate repetitive tasks, and unlock unprecedented productivity.
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
                  "These aren't just tools – they're your secret weapons in the battle for productivity.
                  Built by the same minds that revolutionized AI accessibility, now democratizing productivity for everyone."
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
                    Access All Tools
                  </motion.button>
                </Link>

                <motion.button
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-royal font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Watch Demo
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Tool Categories Section */}
        <section className="section-padding bg-gradient-to-br from-royal-50 to-crown-50">
          <div className="container-max">
            <motion.div
              ref={categoriesRef}
              initial={{ opacity: 0, y: 30 }}
              animate={categoriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
                Tool <span className="shimmer-text">Categories</span>
              </h2>
              <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
                From AI assistants to business intelligence, our comprehensive toolkit covers every aspect of modern productivity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {toolCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={categoriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`royal-card group hover:shadow-2xl transition-all duration-500 ${category.popular ? 'ring-2 ring-crown-400 relative' : ''}`}
                >
                  {category.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-crown-gradient text-white px-6 py-2 rounded-full font-royal font-bold text-sm">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <motion.div
                    className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 10 }}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="font-royal font-bold text-2xl text-royal-800 mb-4 text-center">
                    {category.title}
                  </h3>

                  <p className="font-modern text-royal-600 mb-6 leading-relaxed text-center">
                    {category.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-royal font-bold text-royal-800 mb-3 text-center">Featured Tools:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {category.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-crown-400 rounded-full"></div>
                          <span className="font-modern text-royal-600 text-sm">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    className={`w-full py-3 rounded-xl font-royal font-medium transition-all duration-300 ${category.popular ? 'bg-crown-gradient text-white hover:shadow-lg' : 'bg-royal-gradient text-white hover:shadow-lg'}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Tools
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tools Showcase */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <motion.div
              ref={showcaseRef}
              initial={{ opacity: 0, y: 30 }}
              animate={showcaseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
                Featured <span className="shimmer-text">Tools</span>
              </h2>
              <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
                Discover our most powerful tools that are transforming how businesses operate
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={showcaseInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`bg-gradient-to-br ${tool.popular ? 'from-crown-50 to-crown-100 ring-2 ring-crown-400' : 'from-royal-50 to-royal-100'} rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative`}
                >
                  {tool.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-crown-gradient text-white px-4 py-2 rounded-full font-royal font-bold text-xs">
                        ⭐ Most Used
                      </div>
                    </div>
                  )}

                  <div className="flex items-start space-x-4 mb-6">
                    <motion.div
                      className="w-14 h-14 bg-royal-gradient rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <tool.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-royal font-bold text-xl text-royal-800 mb-2">
                        {tool.name}
                      </h3>
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="text-sm font-modern text-royal-600">{tool.category}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-modern text-royal-600">{tool.rating}</span>
                        </div>
                        <span className="text-sm font-modern text-royal-600">{tool.users} users</span>
                      </div>
                    </div>
                  </div>

                  <p className="font-modern text-royal-600 mb-6 leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-royal font-bold text-royal-800 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {tool.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-crown-500" />
                          <span className="font-modern text-royal-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    className="w-full bg-royal-gradient text-white py-3 rounded-lg font-royal font-medium hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Try {tool.name}
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Tools Section */}
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
                Why <span className="shimmer-text">TrueNorth</span> Tools?
              </h2>
              <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
                Built by AI experts, for real businesses – not theoretical exercises
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Sparkles className="w-12 h-12 text-crown-600 mx-auto mb-4" />
                <h3 className="font-royal font-bold text-xl text-royal-800 mb-4">Built by AI Pioneers</h3>
                <p className="font-modern text-royal-600 leading-relaxed">
                  Created by the same team that pioneered AI accessibility, ensuring every tool is both powerful and user-friendly.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Target className="w-12 h-12 text-crown-600 mx-auto mb-4" />
                <h3 className="font-royal font-bold text-xl text-royal-800 mb-4">Battle-Tested Solutions</h3>
                <p className="font-modern text-royal-600 leading-relaxed">
                  Every tool is rigorously tested in real-world scenarios, ensuring reliability when it matters most.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-8 shadow-lg text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <TrendingUp className="w-12 h-12 text-crown-600 mx-auto mb-4" />
                <h3 className="font-royal font-bold text-xl text-royal-800 mb-4">Proven Results</h3>
                <p className="font-modern text-royal-600 leading-relaxed">
                  Join thousands of businesses achieving 300%+ productivity gains with our AI-powered toolkit.
                </p>
              </motion.div>
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
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl mb-6">
                Unlock Your <span className="text-crown-400">Productivity</span> Potential
              </h2>

              <p className="font-elegant text-xl text-royal-200 leading-relaxed mb-8">
                Stop wasting time on manual tasks. Start leveraging AI that actually works for your business, not against it.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-crown-400" />
                  </div>
                  <h3 className="font-royal font-bold text-lg mb-2">Instant Access</h3>
                  <p className="font-modern text-royal-200 text-sm">Get started in minutes, not months</p>
                </motion.div>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-crown-400" />
                  </div>
                  <h3 className="font-royal font-bold text-lg mb-2">Enterprise Security</h3>
                  <p className="font-modern text-royal-200 text-sm">Bank-level security for your data</p>
                </motion.div>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-crown-400" />
                  </div>
                  <h3 className="font-royal font-bold text-lg mb-2">Expert Support</h3>
                  <p className="font-modern text-royal-200 text-sm">24/7 support from AI specialists</p>
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
                    Get Tool Access
                  </motion.button>
                </Link>

                <Link to="/services">
                  <motion.button
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-royal font-medium transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Services
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
                  "Our tools don't just automate tasks – they transform how you think about productivity.
                  Welcome to the future of work, powered by TrueNorth AI."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default Tools

