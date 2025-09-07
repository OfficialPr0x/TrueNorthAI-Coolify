import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AdminLayout from './components/layout/AdminLayout'
import Dashboard from './pages/Dashboard'
import Pipeline from './pages/Pipeline'
import BlogManager from './pages/BlogManager'
import PostEditor from './pages/PostEditor'
import Analytics from './pages/Analytics'
import SEOPanel from './pages/SEOPanel'
import TrueNorthManager from './pages/TrueNorthManager'
import AITools from './pages/AITools'
import Settings from './pages/Settings'
import ClientManager from './pages/ClientManager'
import ContactManager from './pages/ContactManager'
import CalendarManager from './pages/CalendarManager'
import MarketingAutomation from './pages/MarketingAutomation'
import ProjectManager from './pages/ProjectManager'
import Tools from './pages/Tools'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-royal-50 via-white to-crown-50">
        <AdminLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pipeline" element={<Pipeline />} />
            <Route path="/blog" element={<BlogManager />} />
            <Route path="/blog/new" element={<PostEditor />} />
            <Route path="/blog/edit/:id" element={<PostEditor />} />
            <Route path="/clients" element={<ClientManager />} />
            <Route path="/contacts" element={<ContactManager />} />
            <Route path="/calendar" element={<CalendarManager />} />
            <Route path="/marketing" element={<MarketingAutomation />} />
            <Route path="/projects" element={<ProjectManager />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/seo" element={<SEOPanel />} />
            <Route path="/ai-tools" element={<AITools />} />
            <Route path="/ai-manager" element={<TrueNorthManager />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </AdminLayout>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#4c596d',
              color: '#fff',
              borderRadius: '12px',
              padding: '16px',
            },
          }}
        />
      </div>
    </Router>
  )
}

export default App
