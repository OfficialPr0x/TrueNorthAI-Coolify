import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, Crown, TrendingUp } from 'lucide-react'

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CTO, MapleTech Solutions",
      company: "Toronto-based SaaS Startup",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Jaryd didn't just build us an AI system—he built us a competitive advantage. His cybersecurity background meant our solution was bulletproof from day one. We went from struggling startup to industry leader in 8 months.",
      results: "+400% Growth",
      investment: "$12K Investment",
      return: "$1.2M Revenue"
    },
    {
      name: "Michael Thompson",
      title: "Executive Director",
      company: "Vancouver Mental Health Non-Profit",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Jaryd understands what it's like to fight real battles. His Northbound platform isn't just technology—it's hope engineered into code. We've helped 300+ people reclaim their lives. That's not just ROI, that's impact.",
      results: "300+ Lives Changed",
      investment: "$8K Investment",
      return: "Immeasurable Impact"
    },
    {
      name: "David Kim",
      title: "Founder & CEO",
      company: "Halifax Logistics Firm",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Most consultants talk theory. Jaryd talks reality. He reverse-engineered our biggest operational nightmare and turned it into our biggest competitive advantage. A MARE AD MARE—this is what Canadian ingenuity looks like.",
      results: "+250% Efficiency",
      investment: "$15K Investment",
      return: "$800K Saved"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-royal-900 via-royal-800 to-crown-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-crown-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-royal-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Floating Crowns */}
      <motion.div
        className="absolute top-32 right-20 hidden lg:block"
        animate={{ 
          rotate: [0, 10, -10, 0],
          y: [0, -15, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Crown className="w-16 h-16 text-crown-400/30" />
      </motion.div>

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-5 h-5 text-crown-400" />
            <span className="font-royal font-medium text-white">Real Client Impact</span>
          </motion.div>

          <h2 className="font-royal font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            What Real Clients
            <span className="block text-crown-400">Say About Jaryd</span>
          </h2>
          
          <p className="font-elegant text-xl text-royal-200 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from Canadian businesses who've experienced 
            battle-tested AI systems that actually work.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-crown-400/50 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-crown-500/20"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="w-12 h-12 bg-crown-gradient rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Quote className="w-6 h-6 text-white" />
                </motion.div>

                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-crown-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="font-modern text-white/90 leading-relaxed mb-8 text-lg">
                  "{testimonial.text}"
                </p>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-center">
                    <TrendingUp className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                    <p className="font-royal font-bold text-emerald-400 text-sm">
                      {testimonial.results}
                    </p>
                  </div>
                  <div className="text-center">
                    <Crown className="w-5 h-5 text-crown-400 mx-auto mb-1" />
                    <p className="font-royal font-bold text-crown-400 text-sm">
                      {testimonial.return}
                    </p>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
                  <motion.div
                    className="w-12 h-12 bg-royal-gradient rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="font-royal font-bold text-white text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="font-royal font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="font-modern text-royal-300 text-sm">
                      {testimonial.title}
                    </p>
                    <p className="font-modern text-royal-400 text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Investment Badge */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-emerald-gradient text-white font-royal font-bold text-xs px-3 py-1 rounded-full shadow-lg"
                  initial={{ scale: 0, rotate: 15 }}
                  animate={inView ? { scale: 1, rotate: 15 } : { scale: 0, rotate: 15 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                >
                  {testimonial.investment}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>
          
          <p className="font-elegant text-xl text-royal-200 mb-8 max-w-3xl mx-auto">
            Join Canadian businesses transforming with battle-tested AI. Your success story could be next.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="crown-button text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Transformation
            </motion.button>
            
            <motion.button
              className="bg-white/10 backdrop-blur-sm text-white font-royal font-semibold text-lg px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Read More Client Stories
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
