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
  Headphones
} from 'lucide-react'

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState('development')

  const toolCategories = [
    { id: 'development', name: 'Development', icon: Code },
    { id: 'marketing', name: 'Marketing', icon: BarChart3 },
    { id: 'communication', name: 'Communication', icon: MessageSquare },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'infrastructure', name: 'Infrastructure', icon: Cloud },
    { id: 'content', name: 'Content', icon: FileText }
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-royal font-bold text-gray-900">Team Tools</h1>
        <p className="text-gray-600">Access and manage all team tools and resources</p>
      </div>

      {/* Category Navigation */}
      <div className="admin-card p-4">
        <div className="flex flex-wrap gap-2">
          {toolCategories.map(category => {
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
              className="admin-card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${tool.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(tool.status)}`}>
                  {getStatusText(tool.status)}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
              
              <div className="flex items-center space-x-2">
                {tool.url !== '#' ? (
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-royal-600 text-white px-4 py-2 rounded-lg hover:bg-royal-700 transition-colors text-sm"
                  >
                    <span>Open Tool</span>
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
          <button className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Request New Tool</p>
              <p className="text-sm text-gray-600">Submit a tool request</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
            <div className="p-2 bg-green-600 rounded-lg">
              <Settings className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Tool Settings</p>
              <p className="text-sm text-gray-600">Manage tool access</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
            <div className="p-2 bg-purple-600 rounded-lg">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Usage Analytics</p>
              <p className="text-sm text-gray-600">View tool usage stats</p>
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
    </div>
  )
}

export default Tools

