import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code,
  Database,
  Globe,
  MessageSquare,
  BarChart3,
  Shield,
  Zap,
  ExternalLink,
  Play,
  Settings,
  Monitor,
  Cloud,
  Cpu,
  Lock,
  Mail,
  Calendar,
  FileText,
  Image,
  Video,
  Headphones,
  Plus,
  CheckCircle,
  AlertTriangle,
  XCircle,
  RefreshCw,
  Users,
  DollarSign,
  TrendingUp,
  Target,
  ChevronDown,
  ChevronRight,
  Bot,
  Sparkles,
  Brain,
  Lightbulb,
  Type,
  Search as SearchIcon,
  FileSearch,
  Wand2
} from 'lucide-react'

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState('development')
  const [showRequestModal, setShowRequestModal] = useState(false)
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false)
  const [selectedTool, setSelectedTool] = useState(null)
  const [requestForm, setRequestForm] = useState({
    toolName: '',
    category: '',
    description: '',
    urgency: 'medium'
  })
  const [aiToolsExpanded, setAiToolsExpanded] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState(null)

  const toolCategories = [
    { id: 'development', name: 'Development', icon: Code },
    { id: 'marketing', name: 'Marketing', icon: BarChart3 },
    { id: 'communication', name: 'Communication', icon: MessageSquare },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'infrastructure', name: 'Infrastructure', icon: Cloud },
    { id: 'content', name: 'Content', icon: FileText },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'ai', name: 'AI Tools', icon: Bot, hasSubmenu: true }
  ]

  const tools = {
    development: [
      {
        name: 'GitHub',
        description: 'Code repository and version control',
        url: 'https://github.com/OfficialPr0x',
        icon: Code,
        color: 'bg-gray-900',
        status: 'active'
      },
      {
        name: 'VS Code',
        description: 'Primary development environment',
        url: 'https://code.visualstudio.com',
        icon: Monitor,
        color: 'bg-blue-600',
        status: 'active'
      },
      {
        name: 'Cursor AI',
        description: 'AI-powered code editor',
        url: 'https://cursor.sh',
        icon: Cpu,
        color: 'bg-purple-600',
        status: 'active'
      },
      {
        name: 'Docker',
        description: 'Containerization platform',
        url: 'https://docker.com',
        icon: Database,
        color: 'bg-blue-500',
        status: 'active'
      }
    ],
    marketing: [
      {
        name: 'Google Analytics',
        description: 'Website traffic and user behavior analysis',
        url: 'https://analytics.google.com',
        icon: BarChart3,
        color: 'bg-orange-500',
        status: 'active'
      },
      {
        name: 'Mailchimp',
        description: 'Email marketing and automation',
        url: 'https://mailchimp.com',
        icon: Mail,
        color: 'bg-yellow-500',
        status: 'active'
      },
      {
        name: 'LinkedIn Sales Navigator',
        description: 'Lead generation and prospecting',
        url: 'https://linkedin.com/sales',
        icon: Globe,
        color: 'bg-blue-700',
        status: 'active'
      },
      {
        name: 'Calendly',
        description: 'Meeting scheduling and booking',
        url: 'https://calendly.com',
        icon: Calendar,
        color: 'bg-blue-400',
        status: 'active'
      }
    ],
    communication: [
      {
        name: 'Slack',
        description: 'Team communication and collaboration',
        url: 'https://truenorthai.slack.com',
        icon: MessageSquare,
        color: 'bg-purple-500',
        status: 'active'
      },
      {
        name: 'Zoom',
        description: 'Video conferencing and meetings',
        url: 'https://zoom.us',
        icon: Video,
        color: 'bg-blue-500',
        status: 'active'
      },
      {
        name: 'Discord',
        description: 'Community and voice chat',
        url: 'https://discord.gg/truenorthai',
        icon: Headphones,
        color: 'bg-indigo-600',
        status: 'active'
      },
      {
        name: 'Loom',
        description: 'Screen recording and video messages',
        url: 'https://loom.com',
        icon: Play,
        color: 'bg-red-500',
        status: 'active'
      }
    ],
    security: [
      {
        name: 'LastPass',
        description: 'Password management and security',
        url: 'https://lastpass.com',
        icon: Lock,
        color: 'bg-red-600',
        status: 'active'
      },
      {
        name: 'Cloudflare',
        description: 'Web security and performance',
        url: 'https://cloudflare.com',
        icon: Shield,
        color: 'bg-orange-600',
        status: 'active'
      },
      {
        name: 'VPN Service',
        description: 'Secure remote access',
        url: '#',
        icon: Globe,
        color: 'bg-green-600',
        status: 'active'
      },
      {
        name: 'Security Scanner',
        description: 'Vulnerability assessment tool',
        url: '#',
        icon: Zap,
        color: 'bg-yellow-600',
        status: 'maintenance'
      }
    ],
    infrastructure: [
      {
        name: 'AWS Console',
        description: 'Cloud infrastructure management',
        url: 'https://aws.amazon.com',
        icon: Cloud,
        color: 'bg-orange-400',
        status: 'active'
      },
      {
        name: 'Coolify',
        description: 'Self-hosted deployment platform',
        url: 'https://coolify.io',
        icon: Settings,
        color: 'bg-blue-600',
        status: 'active'
      },
      {
        name: 'DigitalOcean',
        description: 'Cloud hosting and servers',
        url: 'https://digitalocean.com',
        icon: Database,
        color: 'bg-blue-500',
        status: 'active'
      },
      {
        name: 'Monitoring Dashboard',
        description: 'System monitoring and alerts',
        url: '#',
        icon: Monitor,
        color: 'bg-green-500',
        status: 'active'
      }
    ],
    content: [
      {
        name: 'Notion',
        description: 'Documentation and knowledge base',
        url: 'https://notion.so',
        icon: FileText,
        color: 'bg-gray-800',
        status: 'active'
      },
      {
        name: 'Figma',
        description: 'Design and prototyping',
        url: 'https://figma.com',
        icon: Image,
        color: 'bg-purple-500',
        status: 'active'
      },
      {
        name: 'Canva Pro',
        description: 'Graphic design and templates',
        url: 'https://canva.com',
        icon: Image,
        color: 'bg-blue-400',
        status: 'active'
      },
      {
        name: 'Content Planner',
        description: 'Editorial calendar and planning',
        url: '#',
        icon: Calendar,
        color: 'bg-green-500',
        status: 'active'
      }
    ],
    analytics: [
      {
        name: 'Google Analytics 4',
        description: 'Advanced web analytics and user insights',
        url: 'https://analytics.google.com',
        icon: BarChart3,
        color: 'bg-orange-500',
        status: 'active'
      },
      {
        name: 'Google Search Console',
        description: 'Search performance and indexing status',
        url: 'https://search.google.com/search-console',
        icon: Target,
        color: 'bg-blue-600',
        status: 'active'
      },
      {
        name: 'SEMrush',
        description: 'Competitive analysis and keyword research',
        url: 'https://semrush.com',
        icon: TrendingUp,
        color: 'bg-pink-600',
        status: 'active'
      },
      {
        name: 'Ahrefs',
        description: 'Backlink analysis and SEO tools',
        url: 'https://ahrefs.com',
        icon: Globe,
        color: 'bg-blue-700',
        status: 'active'
      },
      {
        name: 'Hotjar',
        description: 'User behavior and heatmaps',
        url: 'https://hotjar.com',
        icon: Users,
        color: 'bg-orange-600',
        status: 'active'
      },
      {
        name: 'Google Data Studio',
        description: 'Custom dashboards and reporting',
        url: 'https://datastudio.google.com',
        icon: BarChart3,
        color: 'bg-green-600',
        status: 'active'
      }
    ],
    finance: [
      {
        name: 'QuickBooks Online',
        description: 'Accounting and financial management',
        url: 'https://quickbooks.intuit.com',
        icon: DollarSign,
        color: 'bg-green-700',
        status: 'active'
      },
      {
        name: 'Stripe Dashboard',
        description: 'Payment processing and subscriptions',
        url: 'https://dashboard.stripe.com',
        icon: DollarSign,
        color: 'bg-purple-600',
        status: 'active'
      },
      {
        name: 'PayPal Business',
        description: 'Business payments and invoicing',
        url: 'https://www.paypal.com/business',
        icon: DollarSign,
        color: 'bg-blue-600',
        status: 'active'
      },
      {
        name: 'Bench Accounting',
        description: 'Automated bookkeeping',
        url: 'https://bench.co',
        icon: FileText,
        color: 'bg-blue-500',
        status: 'active'
      },
      {
        name: 'Expense Tracker',
        description: 'Business expense management',
        url: '#',
        icon: DollarSign,
        color: 'bg-red-500',
        status: 'maintenance'
      },
      {
        name: 'Tax Preparation',
        description: 'Tax planning and filing tools',
        url: '#',
        icon: FileText,
        color: 'bg-green-600',
        status: 'active'
      }
    ],
    ai: [
      {
        name: 'AI Content Generator',
        description: 'Generate high-quality blog posts and articles using advanced AI',
        url: '/ai-manager',
        icon: Type,
        color: 'bg-purple-600',
        status: 'active',
        type: 'internal'
      },
      {
        name: 'SEO Analysis Tool',
        description: 'AI-powered SEO analysis and optimization recommendations',
        url: '/seo',
        icon: SearchIcon,
        color: 'bg-blue-600',
        status: 'active',
        type: 'internal'
      },
      {
        name: 'Smart Keyword Research',
        description: 'AI-driven keyword research with competitive analysis',
        url: '#',
        icon: Target,
        color: 'bg-green-600',
        status: 'active',
        type: 'internal'
      },
      {
        name: 'Content Optimization',
        description: 'AI-powered content optimization for better rankings',
        url: '#',
        icon: Wand2,
        color: 'bg-orange-600',
        status: 'active',
        type: 'internal'
      },
      {
        name: 'AI Code Assistant',
        description: 'Intelligent code generation and debugging assistant',
        url: '#',
        icon: Cpu,
        color: 'bg-indigo-600',
        status: 'maintenance',
        type: 'internal'
      },
      {
        name: 'Data Analysis AI',
        description: 'Automated data analysis and business insights',
        url: '#',
        icon: Brain,
        color: 'bg-pink-600',
        status: 'active',
        type: 'internal'
      }
    ]
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'maintenance': return 'bg-yellow-100 text-yellow-800'
      case 'inactive': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Active'
      case 'maintenance': return 'Maintenance'
      case 'inactive': return 'Inactive'
      default: return 'Unknown'
    }
  }

  const handleToolRequest = () => {
    // Handle tool request submission
    console.log('Tool request submitted:', requestForm)
    setShowRequestModal(false)
    setRequestForm({
      toolName: '',
      category: '',
      description: '',
      urgency: 'medium'
    })
  }

  const handleQuickAction = (action) => {
    switch (action) {
      case 'request':
        setShowRequestModal(true)
        break
      case 'analytics':
        setShowAnalyticsModal(true)
        break
      case 'settings':
        // Navigate to settings or open settings modal
        break
      default:
        break
    }
  }

  const resourceAnalytics = {
    totalResources: Object.values(tools).flat().length,
    activeResources: Object.values(tools).flat().filter(tool => tool.status === 'active').length,
    maintenanceResources: Object.values(tools).flat().filter(tool => tool.status === 'maintenance').length,
    topCategories: [
      { name: 'Development', count: tools.development.length, percentage: Math.round((tools.development.length / Object.values(tools).flat().length) * 100) },
      { name: 'Marketing', count: tools.marketing.length, percentage: Math.round((tools.marketing.length / Object.values(tools).flat().length) * 100) },
      { name: 'Communication', count: tools.communication.length, percentage: Math.round((tools.communication.length / Object.values(tools).flat().length) * 100) }
    ]
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-royal font-bold text-gray-900">Team Resources</h1>
        <p className="text-gray-600">Access and manage all team tools and resources</p>
      </div>

      {/* Category Navigation */}
      <div className="admin-card p-4">
        <div className="space-y-2">
          {/* Main Categories */}
          <div className="flex flex-wrap gap-2">
            {toolCategories.filter(cat => !cat.hasSubmenu).map(category => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    activeCategory === category.id
                      ? 'bg-royal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                </button>
              )
            })}
          </div>

          {/* AI Tools Submenu */}
          <div className="border-t border-gray-200 pt-3 mt-3">
            <button
              onClick={() => setAiToolsExpanded(!aiToolsExpanded)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors w-full text-left ${
                activeCategory === 'ai' || aiToolsExpanded
                  ? 'bg-purple-100 text-purple-800'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Bot className="w-4 h-4" />
              <span className="font-medium">AI Tools</span>
              <div className="ml-auto">
                {aiToolsExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
            </button>

            {/* AI Tools Submenu Items */}
            <motion.div
              initial={false}
              animate={{ height: aiToolsExpanded ? 'auto' : 0, opacity: aiToolsExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="ml-6 mt-2 space-y-1">
                {tools.ai?.slice(0, 3).map((tool, index) => {
                  const Icon = tool.icon
                  return (
                    <motion.button
                      key={tool.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        if (tool.url !== '#') {
                          window.open(tool.url, '_blank')
                        }
                      }}
                      className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors w-full text-left bg-purple-50 hover:bg-purple-100 text-purple-700"
                    >
                      <Icon className="w-3 h-3" />
                      <span>{tool.name}</span>
                      {tool.status === 'active' && (
                        <div className="w-2 h-2 bg-green-500 rounded-full ml-auto"></div>
                      )}
                    </motion.button>
                  )
                })}

                {/* View All AI Tools */}
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setActiveCategory('ai')}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors w-full text-left bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>View All AI Tools ({tools.ai?.length || 0})</span>
                  <ChevronRight className="w-3 h-3 ml-auto" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {tools[activeCategory]?.map((tool, index) => {
          const Icon = tool.icon
          return (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`admin-card p-6 hover:shadow-lg transition-shadow ${
                tool.type === 'internal' ? 'ring-2 ring-purple-200' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${tool.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  {tool.type === 'internal' && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Internal
                    </span>
                  )}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tool.status)}`}>
                    {getStatusText(tool.status)}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {tool.name}
                {tool.type === 'internal' && <Sparkles className="w-4 h-4 inline ml-2 text-purple-600" />}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{tool.description}</p>

              <div className="flex items-center space-x-2">
                {tool.url !== '#' ? (
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors text-sm ${
                      tool.type === 'internal'
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'bg-royal-600 text-white hover:bg-royal-700'
                    }`}
                  >
                    <span>Open {tool.type === 'internal' ? 'AI Tool' : 'Tool'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex items-center space-x-2 bg-gray-300 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed text-sm"
                  >
                    <span>Coming Soon</span>
                  </button>
                )}
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Quick Actions */}
      <div className="admin-card p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => handleQuickAction('request')}
            className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            <div className="p-2 bg-blue-600 rounded-lg">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Request New Resource</p>
              <p className="text-sm text-gray-600">Submit a resource request</p>
            </div>
          </button>

          <button
            onClick={() => handleQuickAction('settings')}
            className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
          >
            <div className="p-2 bg-green-600 rounded-lg">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Resource Settings</p>
              <p className="text-sm text-gray-600">Manage resource access</p>
            </div>
          </button>

          <button
            onClick={() => handleQuickAction('analytics')}
            className="flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
          >
            <div className="p-2 bg-purple-600 rounded-lg">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Usage Analytics</p>
              <p className="text-sm text-gray-600">View resource usage stats</p>
            </div>
          </button>
        </div>
      </div>

      {/* System Status */}
      <div className="admin-card p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">System Status</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-medium text-gray-900">All Systems Operational</span>
            </div>
            <span className="text-sm text-green-600">99.9% uptime</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="font-medium text-gray-900">API Services</span>
            </div>
            <span className="text-sm text-blue-600">Healthy</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="font-medium text-gray-900">Backup Systems</span>
            </div>
            <span className="text-sm text-yellow-600">Running</span>
          </div>
        </div>
      </div>

      {/* Tool Request Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Request New Resource</h3>
                <button
                  onClick={() => setShowRequestModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resource Name
                </label>
                <input
                  type="text"
                  value={requestForm.toolName}
                  onChange={(e) => setRequestForm({...requestForm, toolName: e.target.value})}
                  placeholder="e.g., Trello, Asana, Figma"
                  className="admin-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={requestForm.category}
                  onChange={(e) => setRequestForm({...requestForm, category: e.target.value})}
                  className="admin-input"
                >
                  <option value="">Select category</option>
                  {toolCategories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={requestForm.description}
                  onChange={(e) => setRequestForm({...requestForm, description: e.target.value})}
                  placeholder="Why do you need this tool?"
                  rows={3}
                  className="admin-textarea"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Urgency
                </label>
                <select
                  value={requestForm.urgency}
                  onChange={(e) => setRequestForm({...requestForm, urgency: e.target.value})}
                  className="admin-input"
                >
                  <option value="low">Low - Nice to have</option>
                  <option value="medium">Medium - Would be helpful</option>
                  <option value="high">High - Critical for work</option>
                </select>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setShowRequestModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleToolRequest}
                className="admin-button"
              >
                Submit Request
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Analytics Modal */}
      {showAnalyticsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Resource Usage Analytics</h3>
                <button
                  onClick={() => setShowAnalyticsModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="admin-card p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{resourceAnalytics.totalResources}</div>
                  <div className="text-sm text-gray-600">Total Resources</div>
                </div>
                <div className="admin-card p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{resourceAnalytics.activeResources}</div>
                  <div className="text-sm text-gray-600">Active Resources</div>
                </div>
                <div className="admin-card p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600">{resourceAnalytics.maintenanceResources}</div>
                  <div className="text-sm text-gray-600">Under Maintenance</div>
                </div>
              </div>

              <div className="admin-card p-6">
                <h4 className="text-md font-semibold text-gray-900 mb-4">Top Categories</h4>
                <div className="space-y-4">
                  {resourceAnalytics.topCategories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                        </div>
                        <span className="font-medium text-gray-900">{category.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">{category.count} resources</div>
                        <div className="text-sm text-gray-600">{category.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="admin-card p-6 mt-6">
                <h4 className="text-md font-semibold text-gray-900 mb-4">Recent Activity</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">GitHub accessed 2 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Slack accessed 4 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Google Analytics accessed 6 hours ago</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RefreshCw className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-600">System status checked 30 minutes ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <button
                onClick={() => setShowAnalyticsModal(false)}
                className="w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Close Analytics
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Tools

