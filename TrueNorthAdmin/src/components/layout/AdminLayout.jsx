import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  FileText,
  Users,
  FolderOpen,
  BarChart3,
  Settings,
  Menu,
  X,
  LogOut,
  Crown,
  Bell,
  GitBranch,
  Wrench,
  Search,
  Bot,
  Calendar,
  Mail
} from 'lucide-react'

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const location = useLocation()

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Pipeline', href: '/pipeline', icon: GitBranch },
    { name: 'Blog Manager', href: '/blog', icon: FileText },
    { name: 'Clients', href: '/clients', icon: Users },
    { name: 'Contacts', href: '/contacts', icon: Users },
    { name: 'Calendar', href: '/calendar', icon: Calendar },
    { name: 'Marketing', href: '/marketing', icon: Mail },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    {
      name: 'Resources',
      href: '/tools',
      icon: Wrench,
      submenu: [
        { name: 'All Tools', href: '/tools', icon: Wrench },
        { name: 'AI Tools', href: '/ai-tools', icon: Bot },
        { name: 'Analytics', href: '/analytics', icon: BarChart3 },
        { name: 'SEO Panel', href: '/seo', icon: Search }
      ]
    },
    { name: 'AI Manager', href: '/ai-manager', icon: Bot },
    { name: 'Settings', href: '/settings', icon: Settings },
  ]

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform flex flex-col ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
        initial={false}
      >
        {/* Header - Fixed */}
        <div className="flex items-center justify-between h-16 px-6 bg-royal-gradient flex-shrink-0">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Crown className="w-5 h-5 text-royal-600" />
            </div>
            <div>
              <span className="font-royal font-bold text-white text-lg">TRUE NORTH</span>
              <p className="text-royal-200 text-xs font-medium">ADMIN DASHBOARD</p>
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white hover:text-royal-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation - Scrollable */}
        <nav className="flex-1 px-4 py-4 overflow-y-auto relative">
          <div className="space-y-2">
            {navigation.map((item, index) => {
              const Icon = item.icon
              const active = isActive(item.href)
              const hasSubmenu = item.submenu

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(hasSubmenu ? index : null)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                      active
                        ? 'bg-royal-100 text-royal-800 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon
                      className={`mr-3 h-5 w-5 ${
                        active ? 'text-royal-600' : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                    />
                    <span className="flex-1">{item.name}</span>
                  </Link>

                  {/* Submenu */}
                  {hasSubmenu && hoveredItem === index && (
                    <div className="absolute left-0 top-full mt-1 w-full bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50">
                      {item.submenu.map((subItem) => {
                        const SubIcon = subItem.icon
                        const subActive = isActive(subItem.href)

                        return (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`flex items-center px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                              subActive ? 'text-royal-600 bg-royal-50' : 'text-gray-700'
                            }`}
                            onClick={() => setSidebarOpen(false)}
                          >
                            <SubIcon className="mr-3 h-4 w-4" />
                            {subItem.name}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </nav>

        {/* User section - Fixed at bottom */}
        <div className="flex-shrink-0 w-full p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-royal-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-royal font-bold">JP</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Jaryd Paquette</p>
              <p className="text-xs text-gray-500">Founder & CEO</p>
            </div>
          </div>
          <button className="flex items-center w-full px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <LogOut className="w-4 h-4 mr-2" />
            Sign out
          </button>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Top header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-royal font-bold text-gray-900 text-shadow-admin">
                  True North Admin
                </h1>
                <p className="text-sm text-gray-500">
                  A MARE AD MARE - Business Command Center
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-8 h-8 bg-royal-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-royal font-bold text-sm">JP</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
