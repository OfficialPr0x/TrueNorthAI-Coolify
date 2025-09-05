import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Clock,
  Globe,
  MousePointer,
  Smartphone,
  Monitor,
  ArrowUp,
  ArrowDown,
  Calendar
} from 'lucide-react'

const Analytics = () => {
  const stats = [
    {
      title: 'Total Visitors',
      value: '12,847',
      change: '+18.2%',
      changeType: 'positive',
      icon: Users,
      period: 'vs last month'
    },
    {
      title: 'Page Views',
      value: '47,291',
      change: '+12.5%',
      changeType: 'positive',
      icon: Eye,
      period: 'vs last month'
    },
    {
      title: 'Avg. Session',
      value: '3m 42s',
      change: '+8.1%',
      changeType: 'positive',
      icon: Clock,
      period: 'vs last month'
    },
    {
      title: 'Bounce Rate',
      value: '32.4%',
      change: '-5.2%',
      changeType: 'positive',
      icon: MousePointer,
      period: 'vs last month'
    }
  ]

  const topPages = [
    { path: '/', title: 'Homepage', views: 8247, percentage: 17.4 },
    { path: '/services/dfy', title: 'DFY Services', views: 6891, percentage: 14.6 },
    { path: '/about', title: 'About Jaryd', views: 5234, percentage: 11.1 },
    { path: '/services/consulting', title: 'Consulting', views: 4567, percentage: 9.7 },
    { path: '/blog/ai-transformation-canadian-smbs', title: 'AI Transformation Blog', views: 3892, percentage: 8.2 }
  ]

  const trafficSources = [
    { source: 'Organic Search', visitors: 5847, percentage: 45.5, color: 'bg-green-500' },
    { source: 'Direct', visitors: 3201, percentage: 24.9, color: 'bg-blue-500' },
    { source: 'Social Media', visitors: 2134, percentage: 16.6, color: 'bg-purple-500' },
    { source: 'Referral', visitors: 1665, percentage: 13.0, color: 'bg-orange-500' }
  ]

  const devices = [
    { type: 'Desktop', percentage: 52.3, icon: Monitor },
    { type: 'Mobile', percentage: 38.7, icon: Smartphone },
    { type: 'Tablet', percentage: 9.0, icon: Smartphone }
  ]

  const blogPerformance = [
    {
      title: 'AI Transformation in Canadian SMBs',
      views: 3892,
      engagement: '4m 32s',
      shares: 47,
      leads: 12
    },
    {
      title: 'From Addiction to AI: Building Systems That Save Lives',
      views: 2156,
      engagement: '6m 18s',
      shares: 89,
      leads: 8
    },
    {
      title: 'Cybersecurity Lessons for AI Implementation',
      views: 1743,
      engagement: '3m 45s',
      shares: 23,
      leads: 5
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-royal font-bold text-gray-900">
            Analytics Dashboard 📊
          </h1>
          <p className="text-gray-600 mt-1">
            Performance insights for True North AI
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="admin-button-secondary flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Last 30 Days</span>
          </button>
        </div>
      </div>

      {/* Main Stats */}
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
                <div className="p-3 bg-royal-100 rounded-xl">
                  <Icon className="w-6 h-6 text-royal-600" />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.changeType === 'positive' ? (
                    <ArrowUp className="w-4 h-4" />
                  ) : (
                    <ArrowDown className="w-4 h-4" />
                  )}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div>
                <p className="text-2xl font-royal font-bold text-gray-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.period}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="admin-card p-6"
        >
          <h2 className="text-xl font-royal font-bold text-gray-900 mb-6">
            Top Pages
          </h2>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{page.title}</h3>
                  <p className="text-sm text-gray-600">{page.path}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{page.views.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">{page.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Traffic Sources */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="admin-card p-6"
        >
          <h2 className="text-xl font-royal font-bold text-gray-900 mb-6">
            Traffic Sources
          </h2>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{source.source}</span>
                  <span className="text-sm text-gray-600">{source.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${source.color}`}
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{source.visitors.toLocaleString()} visitors</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Device Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="admin-card p-6"
        >
          <h2 className="text-xl font-royal font-bold text-gray-900 mb-6">
            Device Types
          </h2>
          <div className="space-y-4">
            {devices.map((device, index) => {
              const Icon = device.icon
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-royal-100 rounded-lg">
                      <Icon className="w-5 h-5 text-royal-600" />
                    </div>
                    <span className="font-medium text-gray-900">{device.type}</span>
                  </div>
                  <span className="font-bold text-gray-900">{device.percentage}%</span>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Blog Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="admin-card p-6 lg:col-span-2"
        >
          <h2 className="text-xl font-royal font-bold text-gray-900 mb-6">
            Blog Performance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-left border-b border-gray-200">
                <tr>
                  <th className="pb-3 font-medium text-gray-600">Article</th>
                  <th className="pb-3 font-medium text-gray-600">Views</th>
                  <th className="pb-3 font-medium text-gray-600">Engagement</th>
                  <th className="pb-3 font-medium text-gray-600">Shares</th>
                  <th className="pb-3 font-medium text-gray-600">Leads</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {blogPerformance.map((post, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 font-medium text-gray-900">{post.title}</td>
                    <td className="py-3 text-gray-600">{post.views.toLocaleString()}</td>
                    <td className="py-3 text-gray-600">{post.engagement}</td>
                    <td className="py-3 text-gray-600">{post.shares}</td>
                    <td className="py-3">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {post.leads} leads
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Performance Chart Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="admin-card p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-royal font-bold text-gray-900">
            Traffic Overview
          </h2>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm text-royal-600 hover:text-royal-700 font-medium">7d</button>
            <button className="px-3 py-1 text-sm bg-royal-100 text-royal-700 rounded-lg font-medium">30d</button>
            <button className="px-3 py-1 text-sm text-royal-600 hover:text-royal-700 font-medium">90d</button>
          </div>
        </div>
        <div className="h-64 bg-gradient-to-r from-royal-50 to-crown-50 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-royal-400 mx-auto mb-4" />
            <p className="text-royal-600 font-medium">Traffic Chart</p>
            <p className="text-sm text-royal-500">Chart component integration pending</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Analytics
