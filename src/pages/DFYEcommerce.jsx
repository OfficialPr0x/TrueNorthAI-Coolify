import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import {
  ShoppingBag,
  Crown,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Zap,
  Target,
  TrendingUp,
  Users,
  DollarSign,
  Globe,
  BarChart3,
  Smartphone,
  Truck,
  CreditCard,
  Headphones
} from 'lucide-react'
import SEO from '../components/common/SEO'

const DFYEcommerce = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [packagesRef, packagesInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [processRef, processInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const packages = [
    {
      name: "Starter Empire",
      subtitle: "Perfect for First-Time Entrepreneurs",
      description: "Complete turnkey ecommerce business with proven products, optimized store, and marketing systems. Everything you need to start making money online.",
      price: "$12,500",
      duration: "30 Days",
      features: [
        "Complete Shopify Store Setup",
        "Product Research & Sourcing",
        "Professional Branding & Logo",
        "Email Marketing Automation",
        "Basic Facebook/Instagram Ads Setup",
        "Sales Funnel Creation",
        "30 Days of Support & Optimization",
        "Revenue Tracking Dashboard"
      ],
      deliverables: [
        "Live Shopify Store",
        "Product Listings (10-15 products)",
        "Email Sequences",
        "Social Media Assets",
        "Marketing Campaign Setup"
      ],
      ideal: "New entrepreneurs, side hustlers, small business owners",
      gradient: "from-blue-600 to-blue-800",
      bgGradient: "from-blue-50 to-blue-100",
      popular: false
    },
    {
      name: "Growth Accelerator",
      subtitle: "Scale Your Existing Business",
      description: "Transform your current ecommerce operation with advanced automation, AI-powered marketing, and proven scaling strategies.",
      price: "$25,000",
      duration: "60 Days",
      features: [
        "Advanced Store Optimization",
        "AI-Powered Marketing Campaigns",
        "Customer Acquisition Automation",
        "Advanced Analytics & Reporting",
        "Multi-Channel Selling Setup",
        "Customer Retention Systems",
        "60 Days of Support & Optimization",
        "Profit Maximization Strategies"
      ],
      deliverables: [
        "Optimized Product Listings",
        "Automated Marketing Funnels",
        "Customer Data Platform",
        "Performance Dashboards",
        "Scaling Playbook"
      ],
      ideal: "Existing business owners, established brands, entrepreneurs with 6+ months experience",
      gradient: "from-purple-600 to-purple-800",
      bgGradient: "from-purple-50 to-purple-100",
      popular: true
    },
    {
      name: "Empire Builder",
      subtitle: "Build a Million-Dollar Brand",
      description: "Complete brand development with multiple product lines, advanced marketing automation, and enterprise-level systems. Everything needed to build a 7-figure ecommerce empire.",
      price: "$75,000",
      duration: "120 Days",
      features: [
        "Complete Brand Architecture",
        "Multi-Product Line Development",
        "Enterprise Marketing Automation",
        "Advanced AI Advertising Systems",
        "Team Building & Management",
        "International Expansion Setup",
        "120 Days of VIP Support",
        "Custom Software Development"
      ],
      deliverables: [
        "Complete Brand Identity",
        "Multiple Product Collections",
        "Advanced Marketing Infrastructure",
        "Team Management Systems",
        "Global Expansion Roadmap"
      ],
      ideal: "Serious entrepreneurs, established businesses, investors",
      gradient: "from-royal-600 to-royal-800",
      bgGradient: "from-royal-50 to-royal-100",
      popular: false
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Deep dive into your goals, target market, and competitive landscape. We research trending products and profitable niches.",
      icon: Target,
      duration: "1-2 Weeks"
    },
    {
      step: "02",
      title: "Brand & Product Development",
      description: "Create compelling branding and source high-margin products. We handle supplier negotiations and quality control.",
      icon: ShoppingBag,
      duration: "2-3 Weeks"
    },
    {
      step: "03",
      title: "Store Creation & Optimization",
      description: "Build and optimize your Shopify store with conversion-focused design, fast loading speeds, and mobile optimization.",
      icon: Smartphone,
      duration: "2-3 Weeks"
    },
    {
      step: "04",
      title: "Marketing & Launch",
      description: "Set up advanced marketing campaigns and launch your store. We handle ad creation, audience targeting, and optimization.",
      icon: TrendingUp,
      duration: "2-4 Weeks"
    },
    {
      step: "05",
      title: "Optimization & Scaling",
      description: "Monitor performance, optimize campaigns, and scale successful strategies. We provide ongoing support and growth strategies.",
      icon: BarChart3,
      duration: "Ongoing"
    }
  ]

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "From concept to live store in 30-120 days, depending on package"
    },
    {
      icon: DollarSign,
      title: "Profit-First Approach",
      description: "Every decision optimized for maximum profitability and ROI"
    },
    {
      icon: Shield,
      title: "Done-With-You Model",
      description: "We don't just build it - we teach you how to run and scale it"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Multi-currency, international shipping, and global marketing"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Access to our full team of ecommerce specialists and marketers"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of building 7-figure ecommerce businesses"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "EcoBeauty Co.",
      result: "$2.3M Revenue",
      quote: "True North AI transformed my skincare brand from $50K/month to $200K/month in just 4 months. Their DFY approach is incredible.",
      image: "SJ"
    },
    {
      name: "Mike Chen",
      business: "TechGear Pro",
      result: "$890K Revenue",
      quote: "The team built my entire electronics store from scratch. Everything from product sourcing to marketing automation was handled perfectly.",
      image: "MC"
    },
    {
      name: "Jennifer Davis",
      business: "Wellness Labs",
      result: "$1.7M Revenue",
      quote: "Their attention to detail and profit-first mentality helped me build a sustainable wellness brand. Highly recommend!",
      image: "JD"
    }
  ]

  return (
    <>
      <SEO
        title="DFY Ecommerce Business - Complete Online Store Setup & Brand Building"
        description="Build a profitable ecommerce business from scratch with True North AI's DFY services starting at just $12.5K. Complete store setup, product sourcing, marketing automation, and proven scaling strategies. Start making money online today."
        keywords="DFY ecommerce, done for you online store, ecommerce business setup, online business builder, Shopify store setup, ecommerce marketing, product sourcing, brand building, online business automation"
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
              className="text-center max-w-6xl mx-auto"
            >
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
                initial={{ scale: 0 }}
                animate={heroInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ShoppingBag className="w-5 h-5 text-crown-400" />
                <span className="font-royal font-medium">DFY Ecommerce</span>
              </motion.div>

              <h1 className="font-royal font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
                Build Your <span className="shimmer-text">Ecommerce Empire</span>
              </h1>

              <p className="font-elegant text-xl md:text-2xl text-royal-200 leading-relaxed mb-8">
                Complete turnkey ecommerce businesses delivered DFY.
                From product research to live store with marketing automation - we handle everything.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="text-3xl font-bold text-crown-400 mb-2">$12.5K - $75K</div>
                  <div className="text-royal-200">Investment Range</div>
                </motion.div>

                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="text-3xl font-bold text-crown-400 mb-2">30-120 Days</div>
                  <div className="text-royal-200">To Launch</div>
                </motion.div>

                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="text-3xl font-bold text-crown-400 mb-2">7-Figure</div>
                  <div className="text-royal-200">Businesses Built</div>
                </motion.div>
              </div>

              <motion.button
                className="crown-button text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Empire Today
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-30"></div>

          <div className="container-max relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
                Why Choose Our <span className="shimmer-text">DFY Approach</span>
              </h2>
              <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
                We don't just build stores - we build profitable businesses that scale
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    className="w-20 h-20 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="font-royal font-bold text-2xl text-royal-800 mb-4">
                    {feature.title}
                  </h3>

                  <p className="font-modern text-royal-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="section-padding bg-gradient-to-br from-royal-50 to-crown-50 relative overflow-hidden">
          <div className="container-max">
            <motion.div
              ref={packagesRef}
              initial={{ opacity: 0, y: 30 }}
              animate={packagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
                Choose Your <span className="shimmer-text">Empire Package</span>
              </h2>
              <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
                Three proven paths to ecommerce success, each designed for different entrepreneurs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={packagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative"
                >
                  <motion.div
                    className="royal-card h-full hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${pkg.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    {/* Popular Badge */}
                    {pkg.popular && (
                      <motion.div
                        className="absolute -top-3 -right-3 bg-crown-gradient text-white font-royal font-bold text-xs px-3 py-1 rounded-full shadow-lg"
                        initial={{ scale: 0, rotate: -15 }}
                        animate={packagesInView ? { scale: 1, rotate: -15 } : { scale: 0, rotate: -15 }}
                        transition={{ duration: 0.6, delay: 1 }}
                      >
                        MOST POPULAR
                      </motion.div>
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="mb-8">
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-br ${pkg.gradient} rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          <ShoppingBag className="w-8 h-8 text-white" />
                        </motion.div>

                        <h3 className="font-royal font-bold text-2xl text-royal-800 group-hover:text-royal-600 transition-colors mb-2">
                          {pkg.name}
                        </h3>

                        <p className="font-elegant text-lg text-royal-600 mb-4">
                          {pkg.subtitle}
                        </p>

                        <p className="font-modern text-royal-700 leading-relaxed mb-6">
                          {pkg.description}
                        </p>
                      </div>

                      {/* Pricing */}
                      <div className="mb-8 p-6 bg-royal-50/50 rounded-xl border border-royal-200">
                        <div className="grid grid-cols-2 gap-4 text-center mb-4">
                          <div>
                            <p className="font-modern text-royal-600 text-xs mb-1">Investment</p>
                            <p className="font-royal font-bold text-2xl text-royal-800">{pkg.price}</p>
                          </div>
                          <div>
                            <p className="font-modern text-royal-600 text-xs mb-1">Timeline</p>
                            <p className="font-royal font-bold text-xl text-royal-800">{pkg.duration}</p>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2 text-emerald-600">
                            <Star className="w-4 h-4" />
                            <span className="font-modern font-semibold text-sm">Proven Success Rate</span>
                          </div>
                        </div>
                      </div>

                      {/* Ideal For */}
                      <div className="mb-6">
                        <h4 className="font-royal font-semibold text-lg text-royal-800 mb-2">Perfect For:</h4>
                        <p className="font-modern text-royal-600 text-sm italic">{pkg.ideal}</p>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="font-royal font-semibold text-lg text-royal-800 mb-4">What's Included:</h4>
                        <ul className="space-y-3">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span className="font-modern text-royal-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div className="mb-8">
                        <h4 className="font-royal font-semibold text-lg text-royal-800 mb-4">You'll Get:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {pkg.deliverables.map((deliverable, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-crown-400 rounded-full"></div>
                              <span className="font-modern text-royal-600 text-sm">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link to="/contact">
                        <motion.button
                          className={`w-full bg-gradient-to-r ${pkg.gradient} text-white font-royal font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group`}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>Get Started</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="container-max">
            <motion.div
              ref={processRef}
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl text-royal-800 mb-6">
                Our <span className="shimmer-text">Proven Process</span>
              </h2>
              <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
                From idea to profitable business in 5 systematic steps
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center relative"
                >
                  {/* Step Number */}
                  <motion.div
                    className="w-20 h-20 bg-royal-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="font-royal font-bold text-2xl text-white">{step.step}</span>
                  </motion.div>

                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-royal-300 to-crown-300 z-0" />
                  )}

                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 bg-crown-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 15 }}
                  >
                    <step.icon className="w-6 h-6 text-crown-600" />
                  </motion.div>

                  <h3 className="font-royal font-bold text-xl text-royal-800 mb-4">
                    {step.title}
                  </h3>

                  <p className="font-modern text-royal-600 mb-4">
                    {step.description}
                  </p>

                  <div className="text-sm font-semibold text-crown-600">
                    {step.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
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
                Success <span className="shimmer-text">Stories</span>
              </h2>
              <p className="font-elegant text-xl text-royal-600 max-w-3xl mx-auto">
                Real entrepreneurs, real results. See what our DFY clients have achieved.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="royal-card group hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="w-20 h-20 bg-royal-gradient rounded-full flex items-center justify-center mb-6 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="font-royal font-bold text-white text-2xl">{testimonial.image}</span>
                    </motion.div>

                    <blockquote className="font-elegant text-lg text-royal-700 leading-relaxed italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="border-t border-royal-100 pt-4 w-full">
                      <div className="font-royal font-bold text-lg text-royal-800 mb-1">
                        {testimonial.name}
                      </div>
                      <div className="font-modern text-royal-600 mb-2">
                        {testimonial.business}
                      </div>
                      <div className="text-crown-600 font-semibold">
                        {testimonial.result}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-gradient-to-br from-royal-900 to-crown-900 text-white">
          <div className="container-max text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-royal font-bold text-4xl md:text-5xl mb-6">
                Ready to Build Your
                <span className="block text-crown-400">Ecommerce Empire?</span>
              </h2>

              <p className="font-elegant text-xl text-royal-200 max-w-3xl mx-auto mb-8">
                Stop dreaming about passive income. Start building a real business that generates it.
                Our DFY approach removes all the guesswork and complexity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  className="crown-button text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Strategy Call
                </motion.button>

                <Link to="/contact">
                  <motion.button
                    className="bg-white/10 backdrop-blur-sm text-white font-royal font-semibold text-lg px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started Today
                  </motion.button>
                </Link>
              </div>

              <motion.div
                className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-crown-400 mb-1">500+</div>
                  <div className="text-royal-200 text-sm">Stores Built</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-crown-400 mb-1">$50M+</div>
                  <div className="text-royal-200 text-sm">Revenue Generated</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-crown-400 mb-1">95%</div>
                  <div className="text-royal-200 text-sm">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold text-crown-400 mb-1">30 Days</div>
                  <div className="text-royal-200 text-sm">Average Launch Time</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default DFYEcommerce
