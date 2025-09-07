import { useState, useRef, useEffect } from 'react'
import {
  Send,
  Bot,
  User,
  BarChart3,
  Users,
  DollarSign,
  TrendingUp,
  FileText,
  Settings,
  Zap,
  RefreshCw,
  Copy,
  Download,
  Eye,
  MessageSquare,
  Key,
  CheckCircle,
  AlertCircle,
  X
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import aiAgentService from '../services/aiAgentService'
import settingsService from '../services/settingsService'

const TrueNorthManager = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "👋 **Hello! I'm your True North AI Manager**\n\nI'm here to help you run and manage your entire agency operations. I can:\n\n• 📊 Generate reports and analytics\n• 👥 Manage clients and leads\n• 💰 Track revenue and performance\n• ⚙️ Control system operations\n• 📈 Provide business insights\n\nWhat would you like me to help you with today?",
      timestamp: new Date(),
      actions: []
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showQuickActions, setShowQuickActions] = useState(true)
  const [showSettings, setShowSettings] = useState(false)
  const [apiKeys, setApiKeys] = useState({
    openai: '',
    googleAnalytics: '',
    googleSearchConsole: '',
    semrush: '',
    ahrefs: ''
  })
  const [apiStatus, setApiStatus] = useState({})
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Load API keys on component mount
  useEffect(() => {
    const loadApiKeys = () => {
      const keys = {
        openai: settingsService.getApiKey('openai'),
        googleAnalytics: settingsService.getApiKey('googleAnalytics'),
        googleSearchConsole: settingsService.getApiKey('googleSearchConsole'),
        semrush: settingsService.getApiKey('semrush'),
        ahrefs: settingsService.getApiKey('ahrefs')
      }
      setApiKeys(keys)

      // Check API status
      const status = {}
      Object.entries(keys).forEach(([key, value]) => {
        status[key] = value && value.trim() !== '' ? 'configured' : 'missing'
      })
      setApiStatus(status)
    }

    loadApiKeys()
  }, [])

  const quickActions = [
    {
      icon: BarChart3,
      label: 'Generate Report',
      prompt: 'Generate a comprehensive business report for the last 30 days including revenue, leads, and performance metrics.'
    },
    {
      icon: Users,
      label: 'Client Overview',
      prompt: 'Show me an overview of all clients, their current status, and recent activities.'
    },
    {
      icon: DollarSign,
      label: 'Revenue Analysis',
      prompt: 'Analyze revenue trends and provide insights on business performance.'
    },
    {
      icon: TrendingUp,
      label: 'Lead Pipeline',
      prompt: 'Show the current lead pipeline status and conversion rates.'
    },
    {
      icon: Settings,
      label: 'System Status',
      prompt: 'Check system status, API connections, and overall health.'
    }
  ]

  const handleSendMessage = async (message = inputMessage) => {
    if (!message.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: message,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)
    setShowQuickActions(false)

    try {
      // Call AI agent service
      const response = await aiAgentService.processQuery(message)

      // Add AI response
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: response.content,
        timestamp: new Date(),
        actions: response.actions || []
      }

      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('AI Agent error:', error)
      const errorMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: '❌ **Error:** I encountered an issue processing your request. Please try again or contact support.',
        timestamp: new Date(),
        actions: []
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleQuickAction = (action) => {
    setInputMessage(action.prompt)
    handleSendMessage(action.prompt)
  }

  const handleApiKeySave = async (provider, key) => {
    const success = settingsService.setApiKey(provider, key)
    if (success) {
      setApiKeys(prev => ({ ...prev, [provider]: key }))
      setApiStatus(prev => ({ ...prev, [provider]: key && key.trim() !== '' ? 'configured' : 'missing' }))

      // Test the API key if it's OpenAI
      if (provider === 'openai' && key) {
        try {
          const isValid = await settingsService.testApiKey(provider, key)
          setApiStatus(prev => ({
            ...prev,
            [provider]: isValid ? 'connected' : 'error'
          }))
        } catch (error) {
          setApiStatus(prev => ({ ...prev, [provider]: 'error' }))
        }
      }
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'connected':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'configured':
        return <CheckCircle className="w-4 h-4 text-blue-500" />
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'connected':
        return 'Connected'
      case 'configured':
        return 'Configured'
      case 'error':
        return 'Error'
      default:
        return 'Not Set'
    }
  }

  const renderMessage = (message) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
      >
        <div className={`max-w-4xl ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
          <div className={`flex items-start space-x-3 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
            {/* Avatar */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              message.type === 'ai'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                : 'bg-gradient-to-r from-green-500 to-emerald-600'
            }`}>
              {message.type === 'ai' ? (
                <Bot className="w-4 h-4 text-white" />
              ) : (
                <User className="w-4 h-4 text-white" />
              )}
            </div>

            {/* Message Content */}
            <div className={`rounded-2xl px-4 py-3 ${
              message.type === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-900 border border-gray-200'
            }`}>
              <div className="prose prose-sm max-w-none">
                {message.content.split('\n').map((line, index) => {
                  if (line.startsWith('•') || line.startsWith('-')) {
                    return (
                      <div key={index} className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{line.substring(1).trim()}</span>
                      </div>
                    )
                  }
                  return <p key={index} className="mb-2 last:mb-0">{line}</p>
                })}
              </div>

              {/* Message Actions */}
              {message.actions && message.actions.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {message.actions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(action.prompt)}
                      className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-xs font-medium transition-colors"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Timestamp */}
          <div className={`text-xs text-gray-500 mt-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
            {message.timestamp.toLocaleTimeString()}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">True North AI Manager</h1>
                <p className="text-sm text-gray-600">Your AI-powered agency operations assistant</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                <RefreshCw className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
              >
                <Key className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="max-w-6xl mx-auto">
            {messages.map(renderMessage)}

            {/* Typing Indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex justify-start mb-4"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Quick Actions */}
        <AnimatePresence>
          {showQuickActions && messages.length === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="px-6 pb-4"
            >
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickAction(action)}
                      className="flex flex-col items-center space-y-2 p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <action.icon className="w-6 h-6 text-blue-600" />
                      <span className="text-sm font-medium text-gray-900 text-center">{action.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end space-x-4">
              <div className="flex-1">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                  placeholder="Ask me anything about your agency operations..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={1}
                  style={{ minHeight: '44px', maxHeight: '120px' }}
                />
              </div>
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isTyping}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">AI Manager Settings</h2>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="space-y-6">
                  {/* OpenAI API Key */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">OpenAI API Key</h3>
                          <p className="text-sm text-gray-600">Required for AI chat functionality</p>
                        </div>
                      </div>
                      {getStatusIcon(apiStatus.openai)}
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="password"
                        value={apiKeys.openai}
                        onChange={(e) => setApiKeys(prev => ({ ...prev, openai: e.target.value }))}
                        placeholder="sk-..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        onClick={() => handleApiKeySave('openai', apiKeys.openai)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Save
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">
                      Status: {getStatusText(apiStatus.openai)}
                    </p>
                  </div>

                  {/* Google Analytics */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <BarChart3 className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Google Analytics</h3>
                          <p className="text-sm text-gray-600">For traffic and conversion data</p>
                        </div>
                      </div>
                      {getStatusIcon(apiStatus.googleAnalytics)}
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={apiKeys.googleAnalytics}
                        onChange={(e) => setApiKeys(prev => ({ ...prev, googleAnalytics: e.target.value }))}
                        placeholder="GA4-XXXXXXXXXX"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        onClick={() => handleApiKeySave('googleAnalytics', apiKeys.googleAnalytics)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Save
                      </button>
                    </div>
                  </div>

                  {/* Google Search Console */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Search className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Google Search Console</h3>
                          <p className="text-sm text-gray-600">For keyword ranking and search data</p>
                        </div>
                      </div>
                      {getStatusIcon(apiStatus.googleSearchConsole)}
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={apiKeys.googleSearchConsole}
                        onChange={(e) => setApiKeys(prev => ({ ...prev, googleSearchConsole: e.target.value }))}
                        placeholder="https://example.com"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        onClick={() => handleApiKeySave('googleSearchConsole', apiKeys.googleSearchConsole)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Save
                      </button>
                    </div>
                  </div>

                  {/* SEMrush */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">SEMrush API</h3>
                          <p className="text-sm text-gray-600">For advanced keyword and competitor analysis</p>
                        </div>
                      </div>
                      {getStatusIcon(apiStatus.semrush)}
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="password"
                        value={apiKeys.semrush}
                        onChange={(e) => setApiKeys(prev => ({ ...prev, semrush: e.target.value }))}
                        placeholder="Enter SEMrush API key"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        onClick={() => handleApiKeySave('semrush', apiKeys.semrush)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        Save
                      </button>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">Getting API Keys:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• <strong>OpenAI:</strong> Visit platform.openai.com/api-keys</li>
                      <li>• <strong>Google Analytics:</strong> Google Cloud Console → APIs</li>
                      <li>• <strong>Search Console:</strong> Google Search Console → Settings</li>
                      <li>• <strong>SEMrush:</strong> Account → API Units</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200">
                <button
                  onClick={() => setShowSettings(false)}
                  className="w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  Close Settings
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TrueNorthManager
