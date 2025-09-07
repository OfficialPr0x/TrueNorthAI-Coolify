import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Bot,
  Sparkles,
  Zap,
  Brain,
  Target,
  TrendingUp,
  Users,
  DollarSign,
  Search,
  FileText,
  Mail,
  Calendar,
  Play,
  ExternalLink,
  Star,
  ArrowRight,
  Lightbulb,
  Rocket,
  Shield,
  Globe,
  Cpu,
  Wand2,
  BarChart3
} from 'lucide-react'

const AITools = () => {
  const [activeCategory, setActiveCategory] = useState('content')

  const aiToolCategories = [
    { id: 'content', name: 'Content Creation', icon: FileText, color: 'bg-purple-600' },
    { id: 'marketing', name: 'Marketing', icon: Target, color: 'bg-blue-600' },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, color: 'bg-green-600' },
    { id: 'automation', name: 'Automation', icon: Zap, color: 'bg-orange-600' },
    { id: 'insights', name: 'Business Intelligence', icon: Brain, color: 'bg-indigo-600' }
  ]

  const aiTools = {
    content: [
      {
        name: 'AI Content Generator Pro',
        description: 'Generate high-quality blog posts, articles, and marketing copy using advanced AI with custom branding',
        features: ['Custom tone matching', 'SEO optimization', 'Multi-language support', 'Brand voice training'],
        icon: FileText,
        status: 'active',
        impact: '85% faster content creation',
        route: '/ai-manager',
        color: 'bg-purple-600'
      },
      {
        name: 'Smart Content Optimizer',
        description: 'AI-powered content optimization for better engagement and SEO performance',
        features: ['Readability analysis', 'Keyword optimization', 'Engagement prediction', 'A/B testing suggestions'],
        icon: Wand2,
        status: 'active',
        impact: '40% better engagement',
        route: '#',
        color: 'bg-blue-600'
      },
      {
        name: 'Video Script Generator',
        description: 'Create compelling video scripts and social media content with AI assistance',
        features: ['Platform optimization', 'Engagement hooks', 'Call-to-action suggestions', 'Length optimization'],
        icon: Play,
        status: 'coming-soon',
        impact: '60% faster video production',
        route: '#',
        color: 'bg-red-600'
      }
    ],
    marketing: [
      {
        name: 'Predictive Lead Scoring',
        description: 'AI-powered lead scoring and qualification system using behavioral data',
        features: ['Real-time scoring', 'Custom algorithms', 'CRM integration', 'Conversion prediction'],
        icon: Target,
        status: 'active',
        impact: '3x lead qualification speed',
        route: '#',
        color: 'bg-green-600'
      },
      {
        name: 'Automated Email Campaigns',
        description: 'AI-driven email marketing with personalization and A/B testing',
        features: ['Dynamic content', 'Send time optimization', 'Audience segmentation', 'Performance analytics'],
        icon: Mail,
        status: 'active',
        impact: '250% higher open rates',
        route: '#',
        color: 'bg-orange-600'
      },
      {
        name: 'Social Media Optimizer',
        description: 'AI-powered social media content creation and scheduling',
        features: ['Trend analysis', 'Optimal posting times', 'Content calendar', 'Engagement prediction'],
        icon: Users,
        status: 'coming-soon',
        impact: '5x social engagement',
        route: '#',
        color: 'bg-pink-600'
      }
    ],
    analytics: [
      {
        name: 'Business Intelligence Dashboard',
        description: 'Comprehensive AI-powered business analytics and reporting',
        features: ['Real-time insights', 'Predictive analytics', 'Custom reports', 'Alert system'],
        icon: BarChart3,
        status: 'active',
        impact: 'Real-time business insights',
        route: '#',
        color: 'bg-indigo-600'
      },
      {
        name: 'SEO Performance Predictor',
        description: 'AI-driven SEO forecasting and optimization recommendations',
        features: ['Ranking predictions', 'Keyword opportunities', 'Competitor analysis', 'Content suggestions'],
        icon: TrendingUp,
        status: 'active',
        impact: '30% faster ranking improvements',
        route: '/seo',
        color: 'bg-teal-600'
      },
      {
        name: 'Customer Behavior Analysis',
        description: 'AI-powered customer journey and behavior analysis',
        features: ['Journey mapping', 'Churn prediction', 'Personalization insights', 'Retention strategies'],
        icon: Brain,
        status: 'coming-soon',
        impact: '40% better retention',
        route: '#',
        color: 'bg-cyan-600'
      }
    ],
    automation: [
      {
        name: 'Workflow Automation Engine',
        description: 'AI-powered workflow automation for repetitive business tasks',
        features: ['Process optimization', 'Smart triggers', 'Integration hub', 'Performance monitoring'],
        icon: Zap,
        status: 'active',
        impact: '70% reduction in manual tasks',
        route: '#',
        color: 'bg-yellow-600'
      },
      {
        name: 'Smart Scheduling Assistant',
        description: 'AI-powered meeting scheduling and calendar management',
        features: ['Availability optimization', 'Meeting intelligence', 'Follow-up automation', 'Time zone handling'],
        icon: Calendar,
        status: 'active',
        impact: '50% faster scheduling',
        route: '#',
        color: 'bg-emerald-600'
      },
      {
        name: 'Document Processing AI',
        description: 'Automated document processing and data extraction',
        features: ['OCR processing', 'Data extraction', 'Document classification', 'Workflow integration'],
        icon: FileText,
        status: 'coming-soon',
        impact: '80% faster document processing',
        route: '#',
        color: 'bg-violet-600'
      }
    ],
    insights: [
      {
        name: 'Market Intelligence Engine',
        description: 'AI-powered market research and competitive intelligence',
        features: ['Trend analysis', 'Competitor monitoring', 'Market forecasting', 'Opportunity identification'],
        icon: Globe,
        status: 'active',
        impact: 'Strategic market insights',
        route: '#',
        color: 'bg-rose-600'
      },
      {
        name: 'Financial Forecasting AI',
        description: 'AI-driven financial planning and forecasting',
        features: ['Revenue prediction', 'Cash flow analysis', 'Budget optimization', 'Risk assessment'],
        icon: DollarSign,
        status: 'coming-soon',
        impact: '25% better financial accuracy',
        route: '#',
        color: 'bg-amber-600'
      },
      {
        name: 'Strategic Advisor AI',
        description: 'AI-powered business strategy and decision support',
        features: ['Scenario planning', 'Risk analysis', 'Opportunity evaluation', 'Strategic recommendations'],
        icon: Lightbulb,
        status: 'active',
        impact: 'Data-driven strategic decisions',
        route: '#',
        color: 'bg-lime-600'
      }
    ]
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'coming-soon': return 'bg-blue-100 text-blue-800'
      case 'maintenance': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Active'
      case 'coming-soon': return 'Coming Soon'
      case 'maintenance': return 'Maintenance'
      default: return 'Unknown'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4"
        >
          <Bot className="w-8 h-8 text-white" />
        </motion.div>
        <h1 className="text-4xl font-royal font-bold text-gray-900 mb-2">
          AI Tools Arsenal
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your agency's secret weapon - custom AI tools designed to scale your business and dominate your market
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-3">
        {aiToolCategories.map(category => {
          const Icon = category.icon
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-white text-gray-700 border border-gray-200 hover:shadow-md hover:transform hover:scale-102'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{category.name}</span>
            </button>
          )
        })}
      </div>

      {/* Tools Grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {aiTools[activeCategory]?.map((tool, index) => {
          const Icon = tool.icon
          return (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Header */}
              <div className={`${tool.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 bg-white/20 rounded-xl backdrop-blur-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(tool.status)}`}>
                      {getStatusText(tool.status)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{tool.description}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Impact Badge */}
                <div className="flex items-center space-x-2 mb-4">
                  <Rocket className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-600">{tool.impact}</span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  {tool.route !== '#' ? (
                    <a
                      href={tool.route}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                        tool.status === 'active'
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <span>Launch Tool</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed text-sm"
                    >
                      <span>Coming Soon</span>
                    </button>
                  )}

                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
      >
        <Sparkles className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Agency?</h2>
        <p className="text-xl mb-6 opacity-90">
          These AI tools are designed to make your agency bulletproof and dominate your market
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Request New AI Tool
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            View Implementation Guide
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default AITools
