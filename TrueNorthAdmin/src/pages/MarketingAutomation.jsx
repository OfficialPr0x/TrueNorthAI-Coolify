import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  MessageSquare,
  Zap,
  Plus,
  Play,
  Pause,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  Users,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Target,
  Send,
  Settings,
  Workflow,
  ArrowRight,
  Filter
} from 'lucide-react'
import calApi from '../services/calApi'

const MarketingAutomation = () => {
  const [activeTab, setActiveTab] = useState('campaigns')
  const [campaigns, setCampaigns] = useState([])
  const [workflows, setWorkflows] = useState([])
  const [loading, setLoading] = useState(true)
  const [showCreateModal, setShowCreateModal] = useState(false)

  // Mock data for campaigns
  const mockCampaigns = [
    {
      id: 1,
      name: 'Welcome Series',
      type: 'email',
      status: 'active',
      sent: 1247,
      opened: 892,
      clicked: 234,
      converted: 45,
      createdAt: '2024-01-15',
      lastSent: '2024-01-20',
      schedule: 'Immediate + 3 days, 7 days'
    },
    {
      id: 2,
      name: 'Project Follow-up',
      type: 'email',
      status: 'active',
      sent: 456,
      opened: 312,
      clicked: 98,
      converted: 23,
      createdAt: '2024-01-18',
      lastSent: '2024-01-19',
      schedule: '7 days after booking'
    },
    {
      id: 3,
      name: 'Appointment Reminders',
      type: 'sms',
      status: 'active',
      sent: 892,
      opened: 892,
      clicked: 156,
      converted: 67,
      createdAt: '2024-01-10',
      lastSent: '2024-01-22',
      schedule: '1 day before, 1 hour before'
    },
    {
      id: 4,
      name: 'Lead Nurture',
      type: 'email',
      status: 'paused',
      sent: 2341,
      opened: 1456,
      clicked: 456,
      converted: 89,
      createdAt: '2024-01-05',
      lastSent: '2024-01-18',
      schedule: 'Weekly for 4 weeks'
    }
  ]

  // Mock data for workflows
  const mockWorkflows = [
    {
      id: 1,
      name: 'New Lead Journey',
      description: 'Automated sequence for new website leads',
      status: 'active',
      triggers: ['Website Form Submission'],
      steps: 5,
      contacts: 234,
      conversionRate: 12.5,
      createdAt: '2024-01-10'
    },
    {
      id: 2,
      name: 'Booking Confirmation',
      description: 'Post-booking email and SMS sequence',
      status: 'active',
      triggers: ['Booking Confirmed'],
      steps: 3,
      contacts: 456,
      conversionRate: 8.2,
      createdAt: '2024-01-12'
    },
    {
      id: 3,
      name: 'Re-engagement Campaign',
      description: 'Win back inactive contacts',
      status: 'paused',
      triggers: ['No Activity > 30 days'],
      steps: 4,
      contacts: 123,
      conversionRate: 3.1,
      createdAt: '2024-01-08'
    }
  ]

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    try {
      // In production:
      // const campaignsResponse = await calApi.getEmailCampaigns()
      // const smsResponse = await calApi.getSMSCampaigns()
      // const workflowsResponse = await calApi.getWorkflows()

      setTimeout(() => {
        setCampaigns(mockCampaigns)
        setWorkflows(mockWorkflows)
        setLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Failed to load marketing data:', error)
      setLoading(false)
    }
  }

  const getTypeColor = (type) => {
    return type === 'email' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
  }

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      paused: 'bg-yellow-100 text-yellow-800',
      draft: 'bg-gray-100 text-gray-800',
      completed: 'bg-purple-100 text-purple-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const getStatusIcon = (status) => {
    const icons = {
      active: Play,
      paused: Pause,
      draft: Edit,
      completed: CheckCircle
    }
    return icons[status] || AlertCircle
  }

  const stats = [
    {
      title: 'Total Campaigns',
      value: campaigns.length,
      icon: Mail,
      color: 'text-blue-600'
    },
    {
      title: 'Active Workflows',
      value: workflows.filter(w => w.status === 'active').length,
      icon: Zap,
      color: 'text-yellow-600'
    },
    {
      title: 'Messages Sent',
      value: campaigns.reduce((sum, c) => sum + c.sent, 0).toLocaleString(),
      icon: Send,
      color: 'text-green-600'
    },
    {
      title: 'Conversion Rate',
      value: '8.4%',
      icon: Target,
      color: 'text-purple-600'
    }
  ]

  const tabs = [
    { id: 'campaigns', name: 'Campaigns', icon: Mail },
    { id: 'workflows', name: 'Workflows', icon: Workflow },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-royal font-bold text-gray-900">
            Marketing Automation 🤖
          </h1>
          <p className="text-gray-600 mt-1">
            AI-powered campaigns and automated workflows with Cal.com
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="admin-button-secondary flex items-center space-x-2"
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="admin-button flex items-center space-x-2"
            onClick={() => setShowCreateModal(true)}
          >
            <Plus className="w-5 h-5" />
            <span>Create Campaign</span>
          </motion.button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-royal font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="admin-card p-1"
      >
        <div className="flex space-x-1">
          {tabs.map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-royal-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            )
          })}
        </div>
      </motion.div>

      {/* Tab Content */}
      {activeTab === 'campaigns' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Campaign Filters */}
          <div className="admin-card p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <select className="admin-select w-40">
                  <option>All Types</option>
                  <option>Email</option>
                  <option>SMS</option>
                </select>
                <select className="admin-select w-40">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Paused</option>
                  <option>Draft</option>
                </select>
              </div>
              <div className="flex items-center space-x-4">
                <button className="admin-button-secondary flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>Advanced Filters</span>
                </button>
              </div>
            </div>
          </div>

          {/* Campaigns List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {campaigns.map((campaign, index) => {
              const StatusIcon = getStatusIcon(campaign.status)
              return (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="admin-card p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-royal font-bold text-lg text-gray-900">
                          {campaign.name}
                        </h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(campaign.type)}`}>
                          {campaign.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{campaign.schedule}</p>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {campaign.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Campaign Stats */}
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-900">{campaign.sent.toLocaleString()}</p>
                      <p className="text-xs text-gray-600">Sent</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-blue-600">{Math.round((campaign.opened / campaign.sent) * 100)}%</p>
                      <p className="text-xs text-gray-600">Open Rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-green-600">{Math.round((campaign.clicked / campaign.sent) * 100)}%</p>
                      <p className="text-xs text-gray-600">Click Rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-purple-600">{campaign.converted}</p>
                      <p className="text-xs text-gray-600">Converted</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button className="flex-1 admin-button-secondary flex items-center justify-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>View Report</span>
                    </button>
                    {campaign.status === 'active' ? (
                      <button className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                        <Pause className="w-4 h-4" />
                        <span>Pause</span>
                      </button>
                    ) : (
                      <button className="flex-1 admin-button flex items-center justify-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>Start</span>
                      </button>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      )}

      {activeTab === 'workflows' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Workflow List */}
          <div className="space-y-4">
            {workflows.map((workflow, index) => {
              const StatusIcon = getStatusIcon(workflow.status)
              return (
                <motion.div
                  key={workflow.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="admin-card p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-royal font-bold text-lg text-gray-900">
                          {workflow.name}
                        </h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(workflow.status)}`}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {workflow.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{workflow.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <p className="text-lg font-bold text-gray-900">{workflow.contacts}</p>
                          <p className="text-xs text-gray-600">Contacts</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <p className="text-lg font-bold text-gray-900">{workflow.steps}</p>
                          <p className="text-xs text-gray-600">Steps</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <p className="text-lg font-bold text-green-600">{workflow.conversionRate}%</p>
                          <p className="text-xs text-gray-600">Conversion</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <p className="text-lg font-bold text-gray-900">{workflow.triggers.length}</p>
                          <p className="text-xs text-gray-600">Triggers</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2 ml-4">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-red-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Triggers */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Triggers:</h4>
                    <div className="flex flex-wrap gap-2">
                      {workflow.triggers.map((trigger, triggerIndex) => (
                        <span
                          key={triggerIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700"
                        >
                          {trigger}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button className="flex-1 admin-button-secondary flex items-center justify-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>View Flow</span>
                    </button>
                    {workflow.status === 'active' ? (
                      <button className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                        <Pause className="w-4 h-4" />
                        <span>Pause</span>
                      </button>
                    ) : (
                      <button className="flex-1 admin-button flex items-center justify-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>Activate</span>
                      </button>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      )}

      {activeTab === 'analytics' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="admin-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-royal font-bold text-lg text-gray-900">Email Performance</h3>
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Open Rate</span>
                  <span className="text-sm font-medium">24.8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Click Rate</span>
                  <span className="text-sm font-medium">8.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Conversion Rate</span>
                  <span className="text-sm font-medium">2.1%</span>
                </div>
              </div>
            </div>

            <div className="admin-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-royal font-bold text-lg text-gray-900">SMS Performance</h3>
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Delivery Rate</span>
                  <span className="text-sm font-medium">98.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Response Rate</span>
                  <span className="text-sm font-medium">12.3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Opt-out Rate</span>
                  <span className="text-sm font-medium">0.8%</span>
                </div>
              </div>
            </div>

            <div className="admin-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-royal font-bold text-lg text-gray-900">Workflow Performance</h3>
                <Workflow className="w-6 h-6 text-purple-600" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Active Flows</span>
                  <span className="text-sm font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Completion Rate</span>
                  <span className="text-sm font-medium">68.4%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Avg. Time</span>
                  <span className="text-sm font-medium">7.2 days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Placeholder */}
          <div className="admin-card p-6">
            <h3 className="font-royal font-bold text-lg text-gray-900 mb-4">Campaign Performance Over Time</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">Charts will be integrated with Cal.com Analytics API</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="admin-card p-6"
      >
        <h3 className="font-royal font-semibold text-gray-900 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors text-left">
            <Mail className="w-8 h-8 text-blue-600 mb-2" />
            <h4 className="font-medium text-gray-900">New Email Campaign</h4>
            <p className="text-sm text-gray-600">Create automated email sequence</p>
          </button>
          <button className="p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors text-left">
            <MessageSquare className="w-8 h-8 text-green-600 mb-2" />
            <h4 className="font-medium text-gray-900">New SMS Campaign</h4>
            <p className="text-sm text-gray-600">Send SMS notifications</p>
          </button>
          <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors text-left">
            <Workflow className="w-8 h-8 text-purple-600 mb-2" />
            <h4 className="font-medium text-gray-900">New Workflow</h4>
            <p className="text-sm text-gray-600">Build automated sequences</p>
          </button>
          <button className="p-4 bg-yellow-50 hover:bg-yellow-100 rounded-xl transition-colors text-left">
            <Target className="w-8 h-8 text-yellow-600 mb-2" />
            <h4 className="font-medium text-gray-900">A/B Test</h4>
            <p className="text-sm text-gray-600">Test campaign variations</p>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default MarketingAutomation
