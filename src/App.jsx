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
import Admin from './pages/Admin'
import ScrollToTop from './components/common/ScrollToTop'
import CookiesPopup from './components/common/CookiesPopup'
import EliteBookingPopup from './components/common/EliteBookingPopup'
import { ElitePopupProvider, useElitePopup } from './hooks/useElitePopup.jsx'

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
