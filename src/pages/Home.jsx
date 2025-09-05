import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroSection from '../components/home/HeroSection'
import FeaturesSection from '../components/home/FeaturesSection'
import ServicesPreview from '../components/home/ServicesPreview'
import TestimonialsSection from '../components/home/TestimonialsSection'
import CTASection from '../components/home/CTASection'
import StatsSection from '../components/home/StatsSection'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  )
}

export default Home
