import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import DFYServices from './pages/DFYServices'
import Consulting from './pages/Consulting'
import Speaking from './pages/Speaking'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Team from './pages/Team'
import DFYEcommerce from './pages/DFYEcommerce'
import DFYAutomations from './pages/DFYAutomations'
import Admin from './pages/Admin'
import ScrollToTop from './components/common/ScrollToTop'
import CookiesPopup from './components/common/CookiesPopup'
import EliteBookingPopup from './components/common/EliteBookingPopup'
import { ElitePopupProvider, useElitePopup } from './hooks/useElitePopup.jsx'

// Team Member Pages
import JarydPaquette from './pages/team/JarydPaquette'
import GavinWilliams from './pages/team/GavinWilliams'
import CurtisShaw from './pages/team/CurtisShaw'
import ChrisBain from './pages/team/ChrisBain'
import GuilliaumeCouture from './pages/team/GuilliaumeCouture'
import SabikTawsif from './pages/team/SabikTawsif'
import HarryDanielPrice from './pages/team/HarryDanielPrice'

const AppContent = () => {
  const { isElitePopupOpen, closeElitePopup } = useElitePopup()

  return (
    <div className="min-h-screen bg-pattern">
      <ScrollToTop />
      <Header />
      
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/jaryd-paquette" element={<JarydPaquette />} />
            <Route path="/team/gavin-williams" element={<GavinWilliams />} />
            <Route path="/team/curtis-shaw" element={<CurtisShaw />} />
            <Route path="/team/chris-bain" element={<ChrisBain />} />
            <Route path="/team/guilliaume-couture" element={<GuilliaumeCouture />} />
            <Route path="/team/sabik-tawsif" element={<SabikTawsif />} />
            <Route path="/team/harry-daniel-price" element={<HarryDanielPrice />} />
            <Route path="/services/dfy-ecommerce" element={<DFYEcommerce />} />
            <Route path="/services/dfy-automations" element={<DFYAutomations />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/dfy" element={<DFYServices />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/services/speaking" element={<Speaking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      
      <Footer />
      
      {/* Popups */}
      <CookiesPopup />
      <EliteBookingPopup isOpen={isElitePopupOpen} onClose={closeElitePopup} />
    </div>
  )
}

function App() {
  return (
    <ElitePopupProvider>
      <AppContent />
    </ElitePopupProvider>
  )
}

export default App
