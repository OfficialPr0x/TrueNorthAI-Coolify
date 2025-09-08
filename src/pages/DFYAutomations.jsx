import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import {
  Zap,
  Crown,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Target,
  TrendingUp,
  Users,
  Settings,
  Workflow,
  Bot,
  Database,
  Mail,
  Phone,
  Calendar,
  BarChart3,
  RefreshCw,
  Globe,
  Clock
} from 'lucide-react'
import SEO from '../components/common/SEO'

const DFYAutomations = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [packagesRef, packagesInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [solutionsRef, solutionsInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [processRef, processInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const packages = [
    {
      name: "Automation Foundation",
      subtitle: "Perfect for Small Businesses",
      description: "Complete automation setup with GHL and N8N integration. Streamline your lead generation, customer communication, and operational workflows.",
      price: "$4,250",
      duration: "21 Days",
      features: [
        "Go High Level CRM Setup",
        "N8N Workflow Automation",
        "Lead Capture & Qualification",
        "Email Marketing Automation",
        "SMS & Call Automation",
        "Basic Reporting Dashboard",
        "Training & Documentation",
        "21 Days Support"
      ],
      deliverables: [
        "Configured GHL Account",
        "Custom N8N Workflows",
        "Lead Generation Funnels",
        "Automated Communication Sequences",
        "Performance Analytics"
      ],
      ideal: "Small businesses, startups, solo entrepreneurs",
      gradient: "from-blue-600 to-blue-800",
      bgGradient: "from-blue-50 to-blue-100",
      popular: false
    },
    {
      name: "Business Automation Suite",
      subtitle: "Advanced Multi-Platform Integration",
      description: "Comprehensive automation ecosystem connecting all your business tools. Advanced workflows, AI-powered responses, and enterprise-level reporting.",
      price: "$9,250",
      duration: "45 Days",
      features: [
        "Full GHL Ecosystem Setup",
        "Advanced N8N Orchestration",
        "Multi-Platform Integrations",
        "AI-Powered Chatbots",
        "Advanced Analytics & Reporting",
        "Custom Workflow Development",
        "API Integrations",
        "Team Training Program",
        "45 Days VIP Support"
      ],
      deliverables: [
        "Complete Automation Infrastructure",
        "Custom N8N Workflows & Templates",
        "AI Chatbot Implementation",
        "Integration with 10+ Business Tools",
        "Executive Dashboard",
        "Process Documentation",
        "Team Training Materials"
      ],
      ideal: "Growing businesses, agencies, established companies",
      gradient: "from-purple-600 to-purple-800",
      bgGradient: "from-purple-50 to-purple-100",
      popular: true
    },
    {
      name: "Enterprise Automation Hub",
      subtitle: "Scalable Infrastructure for Large Teams",
      description: "Enterprise-grade automation platform with advanced monitoring, custom development, and white-glove support. Built to scale with your business.",
      price: "$22,500",
      duration: "90 Days",
      features: [
        "Enterprise GHL Configuration",
        "Custom N8N Development",
        "Advanced Monitoring & Alerting",
        "White-Label Solutions",
        "Custom API Development",
        "Multi-Team Management",
        "Advanced Security Features",
        "24/7 Priority Support",
        "Unlimited Training & Consulting"
      ],
      deliverables: [
        "Enterprise Automation Platform",
        "Custom N8N Solutions",
        "White-Label Automation Tools",
        "Advanced Security Implementation",
        "Multi-Team Management System",
        "Comprehensive Documentation",
        "Ongoing Strategy Sessions"
      ],
      ideal: "Large businesses, enterprises, agencies managing multiple clients",
      gradient: "from-crown-600 to-crown-800",
      bgGradient: "from-crown-50 to-crown-100",
      popular: false
    }
  ]

  const solutions = [
    {
      icon: Workflow,
      title: "Lead Generation Automation",
      description: "Automated lead capture, qualification, and nurturing systems that work 24/7 to fill your pipeline",
      results: "300% increase in qualified leads"
    },
    {
      icon: Bot,
      title: "AI-Powered Customer Service",
      description: "Intelligent chatbots and automated responses that handle customer inquiries with human-like accuracy",
      results: "80% reduction in response time"
    },
    {
      icon: Mail,
      title: "Marketing Automation",
      description: "Sophisticated email, SMS, and social media campaigns that nurture leads through the entire funnel",
      results: "250% improvement in conversion rates"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Real-time dashboards and analytics that give you complete visibility into your business performance",
      results: "50% faster decision making"
    },
    {
      icon: RefreshCw,
      title: "Operational Automation",
      description: "Streamline internal processes with intelligent workflows that eliminate manual tasks",
      results: "60% reduction in operational costs"
    },
    {
      icon: Globe,
      title: "Multi-Platform Integration",
      description: "Connect all your business tools into a unified ecosystem that works seamlessly together",
      results: "40% increase in team productivity"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your current systems, identify automation opportunities, and create a comprehensive strategy tailored to your business goals.",
      duration: "1-2 Days",
      deliverables: ["Current State Analysis", "Automation Opportunity Report", "Implementation Roadmap"]
    },
    {
      step: "02",
      title: "Infrastructure Setup",
      description: "Complete setup and configuration of GHL and N8N platforms with all necessary integrations and security measures.",
      duration: "3-5 Days",
      deliverables: ["GHL Account Setup", "N8N Environment Configuration", "Security Implementation", "Initial Testing"]
    },
    {
      step: "03",
      title: "Workflow Development",
      description: "Custom workflow creation and automation development based on your specific business processes and requirements.",
      duration: "7-14 Days",
      deliverables: ["Custom Workflows", "Automation Scripts", "Integration Testing", "Performance Optimization"]
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Comprehensive testing of all automations, performance optimization, and fine-tuning for maximum efficiency.",
      duration: "3-5 Days",
      deliverables: ["Quality Assurance", "Performance Testing", "Optimization Report", "User Acceptance Testing"]
    },
    {
      step: "05",
      title: "Training & Launch",
      description: "Team training, documentation delivery, and full system launch with ongoing support and monitoring.",
      duration: "2-3 Days",
      deliverables: ["Team Training", "Documentation", "Launch Support", "Monitoring Setup"]
    },
    {
      step: "06",
      title: "Ongoing Management",
      description: "Continuous monitoring, updates, and optimization to ensure your automation systems perform at peak efficiency.",
      duration: "Ongoing",
      deliverables: ["Performance Monitoring", "Regular Updates", "Optimization Services", "Priority Support"]
    }
  ]

  return (
    <>
      <SEO
        title="DFY Automations - GHL & N8N Systems Setup | True North AI"
        description="Done-For-You automation services with Go High Level (GHL) and N8N workflow infrastructure. Streamline your business with automated lead generation, customer service, and operational workflows."
        keywords="GHL automation, N8N workflows, business automation, lead generation automation, CRM automation, workflow automation, Go High Level setup, N8N setup, business process automation"
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
                <Zap className="w-5 h-5 text-crown-400" />
                <span className="font-royal font-medium">DFY Automations</span>
              </motion.div>

              <h1 className="font-royal font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
                Automate Your <span className="shimmer-text">Business</span>
              </h1>

              <p className="font-elegant text-xl md:text-2xl text-royal-200 leading-relaxed mb-8 max-w-4xl mx-auto">
                Complete GHL & N8N automation infrastructure setup and management. Transform your business operations with intelligent workflows that work 24/7.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Workflow className="w-8 h-8 text-crown-400 mx-auto mb-3" />
                  <h3 className="font-royal font-bold text-lg mb-2">GHL Integration</h3>
                  <p className="font-modern text-royal-200 text-sm">Complete CRM and marketing automation setup</p>
                </motion.div>

                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Bot className="w-8 h-8 text-crown-400 mx-auto mb-3" />
                  <h3 className="font-royal font-bold text-lg mb-2">N8N Workflows</h3>
                  <p className="font-modern text-royal-200 text-sm">Powerful automation orchestration platform</p>
                </motion.div>

                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Settings className="w-8 h-8 text-crown-400 mx-auto mb-3" />
                  <h3 className="font-royal font-bold text-lg mb-2">24/7 Management</h3>
                  <p className="font-modern text-royal-200 text-sm">Ongoing optimization and support</p>
                </motion.div>
              </div>

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
                    Get Started Today
                  </motion.button>
                </Link>

                <motion.button
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-royal font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Process
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
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
                Automation <span className="shimmer-text">Solutions</span>
              </h2>
              <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
                Transform every aspect of your business with intelligent automation that drives real results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
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
                      <TrendingUp className="w-4 h-4" />
                      <span>{solution.results}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <motion.div
              ref={packagesRef}
              initial={{ opacity: 0, y: 30 }}
              animate={packagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
                Choose Your <span className="shimmer-text">Automation Package</span>
              </h2>
              <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
                From small business automation to enterprise-scale solutions, we have the perfect package for your needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={packagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`royal-card group hover:shadow-2xl transition-all duration-500 ${pkg.popular ? 'ring-2 ring-crown-400 relative' : ''}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-crown-gradient text-white px-6 py-2 rounded-full font-royal font-bold text-sm">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="font-royal font-bold text-2xl text-royal-800 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="font-modern text-royal-600 text-sm mb-4">
                      {pkg.subtitle}
                    </p>
                    <div className={`inline-block px-6 py-3 rounded-xl font-royal font-bold text-2xl text-white bg-gradient-to-r ${pkg.gradient}`}>
                      {pkg.price}
                    </div>
                    <p className="font-modern text-royal-500 text-sm mt-2">
                      {pkg.duration} Delivery
                    </p>
                  </div>

                  <p className="font-modern text-royal-600 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-royal font-bold text-lg text-royal-800 mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-crown-500 flex-shrink-0 mt-0.5" />
                          <span className="font-modern text-royal-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-royal font-bold text-lg text-royal-800 mb-3">
                      Deliverables:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {pkg.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-crown-400 rounded-full"></div>
                          <span className="font-modern text-royal-600 text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-royal-50 rounded-lg">
                    <h4 className="font-royal font-bold text-royal-800 mb-2">Ideal For:</h4>
                    <p className="font-modern text-royal-600 text-sm">{pkg.ideal}</p>
                  </div>

                  <Link to="/contact">
                    <motion.button
                      className={`w-full py-4 rounded-xl font-royal font-bold text-lg transition-all duration-300 ${pkg.popular ? 'bg-crown-gradient text-white hover:shadow-lg' : 'bg-royal-gradient text-white hover:shadow-lg'}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 inline ml-2" />
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gradient-to-br from-royal-50 to-crown-50">
          <div className="container-max">
            <motion.div
              ref={processRef}
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
                Our <span className="shimmer-text">Process</span>
              </h2>
              <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
                A proven 6-step methodology that ensures your automation systems are built right the first time
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={processInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 mb-16 last:mb-0`}
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-crown-gradient rounded-full flex items-center justify-center">
                        <span className="font-royal font-bold text-white text-xl">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="font-royal font-bold text-2xl text-royal-800">{step.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock className="w-4 h-4 text-royal-500" />
                          <span className="font-modern text-royal-500 text-sm">{step.duration}</span>
                        </div>
                      </div>
                    </div>

                    <p className="font-modern text-royal-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-royal font-bold text-royal-800 mb-3">Deliverables:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-crown-500" />
                            <span className="font-modern text-royal-600 text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-32 h-32 bg-royal-gradient rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      {index === 0 && <Target className="w-16 h-16 text-white" />}
                      {index === 1 && <Settings className="w-16 h-16 text-white" />}
                      {index === 2 && <Workflow className="w-16 h-16 text-white" />}
                      {index === 3 && <Shield className="w-16 h-16 text-white" />}
                      {index === 4 && <Users className="w-16 h-16 text-white" />}
                      {index === 5 && <BarChart3 className="w-16 h-16 text-white" />}
                    </motion.div>
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
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl mb-6">
                Ready to <span className="text-crown-400">Automate</span> Your Success?
              </h2>

              <p className="font-elegant text-xl text-royal-200 leading-relaxed mb-8">
                Stop wasting time on manual processes. Let our automation experts build systems that work for you 24/7.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-crown-400" />
                  </div>
                  <h3 className="font-royal font-bold text-lg mb-2">Fast Implementation</h3>
                  <p className="font-modern text-royal-200 text-sm">Get automated in weeks, not months</p>
                </motion.div>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-crown-400" />
                  </div>
                  <h3 className="font-royal font-bold text-lg mb-2">Proven Results</h3>
                  <p className="font-modern text-royal-200 text-sm">Battle-tested automation systems</p>
                </motion.div>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-crown-400" />
                  </div>
                  <h3 className="font-royal font-bold text-lg mb-2">Expert Support</h3>
                  <p className="font-modern text-royal-200 text-sm">Dedicated automation specialists</p>
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
                    Start Automating Today
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
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default DFYAutomations
