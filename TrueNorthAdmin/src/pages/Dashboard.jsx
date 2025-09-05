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
  Clock
} from 'lucide-react'

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$127,500',
      change: '+12.5%',
      changeType: 'positive',
      icon: DollarSign,
      description: 'vs last month'
    },
    {
      title: 'Active Clients',
      value: '23',
      change: '+3',
      changeType: 'positive',
      icon: Users,
      description: 'new this month'
    },
    {
      title: 'Blog Posts',
      value: '47',
      change: '+8',
      changeType: 'positive',
      icon: FileText,
      description: 'published'
    },
    {
      title: 'Site Traffic',
      value: '12.4K',
      change: '+18.2%',
      changeType: 'positive',
      icon: Eye,
      description: 'monthly visitors'
    }
  ]

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
      href: '/blog/new'
    },
    {
      title: 'Add New Client',
      description: 'Onboard a new client project',
      icon: Users,
      color: 'bg-green-500',
      href: '/clients'
    },
    {
      title: 'View Analytics',
      description: 'Check performance metrics',
      icon: TrendingUp,
      color: 'bg-purple-500',
      href: '/analytics'
    },
    {
      title: 'Schedule Meeting',
      description: 'Book consultation or review',
      icon: Calendar,
      color: 'bg-orange-500',
      href: '/settings'
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
        {stats.map((stat, index) => {
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
                    : 'text-red-700 bg-red-100'
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
        })}
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
                  className="p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200 text-left group"
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
