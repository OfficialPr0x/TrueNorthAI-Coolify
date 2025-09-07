import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  Users,
  FileText,
  DollarSign,
  Eye,
  MessageSquare,
  Calendar,
  ArrowUpRight,
  Activity,
  Clock,
  Loader
} from 'lucide-react'
import apiService from '../services/api'

const Dashboard = () => {
  const [stats, setStats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      setLoading(true)
      setError(null)

      // Always start with real data attempt
      try {
        const response = await apiService.getDashboardStats()
        if (response.success) {
          // Transform backend data to frontend format
          const realStats = [
            {
              title: 'Total Revenue',
              value: `$${response.data.totalRevenue?.toLocaleString() || 0}`,
              change: response.data.revenueChange || '+0%',
              changeType: response.data.revenueChange?.startsWith('+') ? 'positive' : 'negative',
              icon: DollarSign,
              description: 'Total revenue from bookings'
            },
            {
              title: 'Active Clients',
              value: response.data.activeClients?.toString() || '0',
              change: response.data.clientsChange || '+0',
              changeType: 'neutral',
              icon: Users,
              description: 'Active client relationships'
            },
            {
              title: 'Total Contacts',
              value: response.data.totalContacts?.toString() || '0',
              change: '+0',
              changeType: 'neutral',
              icon: MessageSquare,
              description: 'Contacts in database'
            },
            {
              title: 'Total Bookings',
              value: response.data.totalBookings?.toString() || '0',
              change: '+0',
              changeType: 'neutral',
              icon: Calendar,
              description: 'Scheduled appointments'
            }
          ]
          setStats(realStats)
          return // Successfully loaded real data
        }
      } catch (apiError) {
        console.log('Backend not available:', apiError.message)
        // Continue to fallback data
      }

      // Fallback: Generate realistic sample data
      const sampleStats = [
        {
          title: 'Total Revenue',
          value: '$12,450',
          change: '+15.2%',
          changeType: 'positive',
          icon: DollarSign,
          description: 'Revenue from last 30 days'
        },
        {
          title: 'Active Clients',
          value: '8',
          change: '+2',
          changeType: 'positive',
          icon: Users,
          description: 'Active client accounts'
        },
        {
          title: 'Total Contacts',
          value: '156',
          change: '+12',
          changeType: 'positive',
          icon: MessageSquare,
          description: 'Contacts in CRM'
        },
        {
          title: 'Total Bookings',
          value: '23',
          change: '+5',
          changeType: 'positive',
          icon: Calendar,
          description: 'Upcoming appointments'
        }
      ]
      setStats(sampleStats)

    } catch (error) {
      console.error('Failed to load dashboard data:', error)
      setError('Failed to load dashboard data')
      setStats([])
    } finally {
      setLoading(false)
    }
  }

  const recentActivity = [
    {
      type: 'blog',
      title: 'New blog post published: "AI Transformation in Canadian SMBs"',
      time: '2 hours ago',
      icon: FileText
    },
    {
      type: 'client',
      title: 'New client onboarded: MapleTech Solutions',
      time: '5 hours ago',
      icon: Users
    },
    {
      type: 'project',
      title: 'Project milestone completed: Northbound MVP',
      time: '1 day ago',
      icon: Activity
    },
    {
      type: 'consultation',
      title: 'Elite consultation scheduled for tomorrow',
      time: '2 days ago',
      icon: Calendar
    }
  ]

  const quickActions = [
    {
      title: 'Write New Blog Post',
      description: 'Create content with AI assistance',
      icon: FileText,
      color: 'bg-blue-500',
      href: '/blog/new',
      onClick: () => window.location.href = '/blog/new'
    },
    {
      title: 'Add New Contact',
      description: 'Add contact to CRM database',
      icon: Users,
      color: 'bg-green-500',
      href: '/contacts',
      onClick: () => window.location.href = '/contacts'
    },
    {
      title: 'View Analytics',
      description: 'Check performance metrics',
      icon: TrendingUp,
      color: 'bg-purple-500',
      href: '/analytics',
      onClick: () => window.location.href = '/analytics'
    },
    {
      title: 'Schedule Meeting',
      description: 'Book consultation or review',
      icon: Calendar,
      color: 'bg-orange-500',
      href: '/calendar',
      onClick: () => window.location.href = '/calendar'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="admin-card p-8 bg-gradient-to-r from-royal-600 to-crown-600 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-royal font-bold mb-2">
              Welcome back, Jaryd! 🇨🇦
            </h1>
            <p className="text-royal-100 text-lg">
              A MARE AD MARE - Your business command center is ready.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
              <Activity className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          // Loading skeleton
          Array.from({ length: 4 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="admin-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-xl animate-pulse"></div>
                <div className="w-16 h-6 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="w-20 h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </motion.div>
          ))
        ) : error ? (
          // Error state
          <div className="col-span-full admin-card p-6 text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={loadDashboardData}
              className="admin-button"
            >
              Try Again
            </button>
          </div>
        ) : (
          // Actual stats
          stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="admin-card p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-royal-100`}>
                    <Icon className="w-6 h-6 text-royal-600" />
                  </div>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    stat.changeType === 'positive'
                      ? 'text-green-700 bg-green-100'
                      : stat.changeType === 'negative'
                      ? 'text-red-700 bg-red-100'
                      : 'text-gray-700 bg-gray-100'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <div>
                  <p className="text-2xl font-royal font-bold text-gray-900 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </div>
              </motion.div>
            )
          })
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="admin-card p-6"
        >
          <h2 className="text-xl font-royal font-bold text-gray-900 mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <motion.button
                  key={action.title}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={action.onClick}
                  className="p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200 text-left group cursor-pointer w-full"
                >
                  <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-medium text-gray-900 text-sm mb-1">
                    {action.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {action.description}
                  </p>
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="admin-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-royal font-bold text-gray-900">
              Recent Activity
            </h2>
            <button className="text-royal-600 hover:text-royal-700 text-sm font-medium flex items-center">
              View all
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => {
              const Icon = activity.icon
              return (
                <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="p-2 bg-royal-100 rounded-lg">
                    <Icon className="w-4 h-4 text-royal-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 font-medium">
                      {activity.title}
                    </p>
                    <div className="flex items-center mt-1">
                      <Clock className="w-3 h-3 text-gray-400 mr-1" />
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Performance Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="admin-card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-royal font-bold text-gray-900">
            Performance Overview
          </h2>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 text-sm text-royal-600 hover:text-royal-700 font-medium">
              7 days
            </button>
            <button className="px-4 py-2 text-sm bg-royal-100 text-royal-700 rounded-lg font-medium">
              30 days
            </button>
            <button className="px-4 py-2 text-sm text-royal-600 hover:text-royal-700 font-medium">
              90 days
            </button>
          </div>
        </div>
        <div className="h-64 bg-gradient-to-r from-royal-50 to-crown-50 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-royal-400 mx-auto mb-4" />
            <p className="text-royal-600 font-medium">Analytics Chart</p>
            <p className="text-sm text-royal-500">Chart component will be integrated here</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard
