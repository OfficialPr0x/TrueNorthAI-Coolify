import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroSection from '../components/home/HeroSection'
import FeaturesSection from '../components/home/FeaturesSection'
import ServicesPreview from '../components/home/ServicesPreview'
import TestimonialsSection from '../components/home/TestimonialsSection'
import PartnersSection from '../components/home/PartnersSection'
import CTASection from '../components/home/CTASection'
import StatsSection from '../components/home/StatsSection'
import SEO from '../components/common/SEO'

const Home = () => {
  return (
    <>
      <SEO
        title="True North AI - Canada's Premier AI Agency | Royal Excellence in AI Solutions"
        description="Transform your business with True North AI's premium DFY AI solutions, consulting, and cutting-edge technology. Canada's leading AI agency delivering royal excellence in AI innovation, cybersecurity, and enterprise solutions. Get started today."
        keywords="AI agency Canada, artificial intelligence solutions, DFY AI services, AI consulting Canada, machine learning engineering, cybersecurity AI, enterprise AI solutions, Canadian AI company, AI automation, AI strategy consulting"
        image="https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757285058/Screenshot_2025-09-07_182252_g5knbj.png"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <ServicesPreview />
        <PartnersSection />
        <TestimonialsSection />
        <CTASection />
      </motion.div>
    </>
  )
}

export default Home
