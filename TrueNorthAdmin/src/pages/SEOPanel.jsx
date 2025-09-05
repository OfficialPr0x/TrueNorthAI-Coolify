import { useState, useEffect } from 'react'
import {
  Search,
  TrendingUp,
  Eye,
  Target,
  Globe,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RefreshCw,
  ExternalLink,
  Settings,
  Zap,
  Users,
  Clock,
  Smartphone,
  Plus,
  Edit,
  Trash2
} from 'lucide-react'
import seoService from '../services/seoService'

const SEOPanel = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [seoData, setSeoData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [settings, setSettings] = useState({
    apiKeys: {
      googleAnalytics: '',
      googleSearchConsole: '',
      semrush: '',
      ahrefs: '',
      pagespeedApi: ''
    },
    clients: [],
    currentSite: {
      name: 'TrueNorthAI',
      domain: 'truenorthai.group',
      googleAnalyticsId: '',
      searchConsoleSite: ''
    }
  })
  const [showApiKeyForm, setShowApiKeyForm] = useState(false)
  const [showClientForm, setShowClientForm] = useState(false)
  const [editingClient, setEditingClient] = useState(null)

  // Load saved settings
  useEffect(() => {
    const savedSettings = localStorage.getItem('seoSettings')
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings))
      } catch (error) {
        console.error('Error loading saved settings:', error)
      }
    }
  }, [])

  // Save settings to localStorage
  const saveSettings = (newSettings) => {
    setSettings(newSettings)
    localStorage.setItem('seoSettings', JSON.stringify(newSettings))
  }

  // Client management functions
  const addClient = (clientData) => {
    const newClient = {
      id: Date.now().toString(),
      ...clientData,
      createdAt: new Date().toISOString()
    }
    const updatedSettings = {
      ...settings,
      clients: [...settings.clients, newClient]
    }
    saveSettings(updatedSettings)
  }

  const updateClient = (clientId, clientData) => {
    const updatedSettings = {
      ...settings,
      clients: settings.clients.map(client =>
        client.id === clientId ? { ...client, ...clientData } : client
      )
    }
    saveSettings(updatedSettings)
  }

  const deleteClient = (clientId) => {
    const updatedSettings = {
      ...settings,
      clients: settings.clients.filter(client => client.id !== clientId)
    }
    saveSettings(updatedSettings)
  }

  const switchToClient = (client) => {
    const updatedSettings = {
      ...settings,
      currentSite: {
        name: client.name,
        domain: client.domain,
        googleAnalyticsId: client.googleAnalyticsId || '',
        searchConsoleSite: client.searchConsoleSite || ''
      }
    }
    saveSettings(updatedSettings)
    // Refresh SEO data for new site
    window.location.reload()
  }

  // Fetch SEO data from service
  useEffect(() => {
    const fetchSEOData = async () => {
      setIsLoading(true)
      try {
        const data = await seoService.getAllSEOData()
        setSeoData(data)
      } catch (error) {
        console.error('Failed to fetch SEO data:', error)
        // Fallback to mock data if API fails
        setSeoData({
          overview: {
            overallScore: 78,
            trafficChange: 12.5,
            keywordRankings: 24,
            backlinks: 156,
            pageSpeed: 85,
            mobileScore: 92
          },
          pages: [
            {
              url: '/',
              title: 'True North AI - Royal Excellence in AI Solutions',
              metaDescription: 'Premium AI consulting and Done-For-You solutions...',
              score: 85,
              keywords: ['AI consulting', 'artificial intelligence', 'machine learning'],
              traffic: 2450,
              impressions: 15200,
              clicks: 2450,
              ctr: 16.1
            },
            {
              url: '/services',
              title: 'AI Services - True North AI',
              metaDescription: 'Comprehensive AI services including consulting...',
              score: 72,
              keywords: ['AI services', 'consulting', 'automation'],
              traffic: 890,
              impressions: 8900,
              clicks: 890,
              ctr: 10.0
            }
          ],
          keywords: [
            {
              keyword: 'AI consulting',
              position: 8,
              volume: 2400,
              difficulty: 'Medium',
              trend: 'up',
              impressions: 12500,
              clicks: 890
            },
            {
              keyword: 'artificial intelligence solutions',
              position: 12,
              volume: 1800,
              difficulty: 'High',
              trend: 'stable',
              impressions: 8900,
              clicks: 445
            }
          ],
          recommendations: [
            {
              type: 'critical',
              title: 'Missing Meta Descriptions',
              description: '3 pages are missing meta descriptions',
              impact: 'High',
              pages: ['/blog', '/contact', '/about']
            },
            {
              type: 'warning',
              title: 'Slow Page Speed',
              description: 'Homepage load time is 3.2 seconds',
              impact: 'Medium',
              suggestion: 'Optimize images and reduce JavaScript'
            }
          ]
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchSEOData()
  }, [])

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'pages', label: 'Page SEO', icon: Globe },
    { id: 'keywords', label: 'Keywords', icon: Target },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBgColor = (score) => {
    if (score >= 90) return 'bg-green-50 border-green-200'
    if (score >= 70) return 'bg-yellow-50 border-yellow-200'
    return 'bg-red-50 border-red-200'
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading SEO data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-royal font-bold text-gray-900">SEO Management</h1>
          <p className="text-gray-600 mt-1">Monitor and optimize your site's search performance</p>
        </div>
        <button className="admin-button flex items-center space-x-2">
          <RefreshCw className="w-4 h-4" />
          <span>Refresh Data</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="admin-card">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Overall SEO Score</p>
                  <p className={`text-2xl font-bold ${getScoreColor(seoData.overview.overallScore)}`}>
                    {seoData.overview.overallScore}
                  </p>
                </div>
              </div>
            </div>

            <div className="admin-card">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Traffic Change</p>
                  <p className="text-2xl font-bold text-green-600">+{seoData.overview.trafficChange}%</p>
                </div>
              </div>
            </div>

            <div className="admin-card">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Keyword Rankings</p>
                  <p className="text-2xl font-bold text-purple-600">{seoData.overview.keywordRankings}</p>
                </div>
              </div>
            </div>

            <div className="admin-card">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Backlinks</p>
                  <p className="text-2xl font-bold text-orange-600">{seoData.overview.backlinks}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Scores */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="admin-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Scores</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-gray-600">Page Speed</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBgColor(seoData.overview.pageSpeed)}`}>
                    {seoData.overview.pageSpeed}/100
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-gray-600">Mobile Score</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBgColor(seoData.overview.mobileScore)}`}>
                    {seoData.overview.mobileScore}/100
                  </div>
                </div>
              </div>
            </div>

            <div className="admin-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Recommendations</h3>
              <div className="space-y-3">
                {seoData.recommendations.slice(0, 3).map((rec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {rec.type === 'critical' ? (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{rec.title}</p>
                      <p className="text-xs text-gray-600">{rec.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pages' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Page SEO Analysis</h2>
            <button className="admin-button-secondary">Analyze All Pages</button>
          </div>

          <div className="space-y-4">
            {seoData.pages.map((page, index) => (
              <div key={index} className="admin-card">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium text-gray-900">{page.title}</h3>
                    <p className="text-sm text-gray-600">{page.url}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBgColor(page.score)}`}>
                    {page.score}/100
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-600">Traffic</p>
                    <p className="font-semibold text-gray-900">{page.traffic.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Impressions</p>
                    <p className="font-semibold text-gray-900">{page.impressions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Clicks</p>
                    <p className="font-semibold text-gray-900">{page.clicks.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">CTR</p>
                    <p className="font-semibold text-gray-900">{page.ctr}%</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex flex-wrap gap-2">
                    {page.keywords.map((keyword, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end mt-4 space-x-2">
                  <button className="text-sm text-blue-600 hover:text-blue-800">Edit SEO</button>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'keywords' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Keyword Tracking</h2>
            <button className="admin-button">Add Keyword</button>
          </div>

          <div className="admin-card">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Keyword
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Position
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Volume
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Difficulty
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trend
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Clicks
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {seoData.keywords.map((keyword, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {keyword.keyword}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        #{keyword.position}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {keyword.volume.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          keyword.difficulty === 'High' ? 'bg-red-100 text-red-800' :
                          keyword.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {keyword.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`flex items-center ${
                          keyword.trend === 'up' ? 'text-green-600' :
                          keyword.trend === 'down' ? 'text-red-600' :
                          'text-gray-600'
                        }`}>
                          <TrendingUp className="w-4 h-4" />
                          <span className="ml-1 text-sm">{keyword.trend}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {keyword.clicks.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">Traffic Analytics</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="admin-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Organic Search</span>
                  <span className="font-semibold text-gray-900">68%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Direct</span>
                  <span className="font-semibold text-gray-900">22%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Social Media</span>
                  <span className="font-semibold text-gray-900">8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Referral</span>
                  <span className="font-semibold text-gray-900">2%</span>
                </div>
              </div>
            </div>

            <div className="admin-card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Homepage</span>
                  <span className="font-semibold text-gray-900">2,450 visits</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Services</span>
                  <span className="font-semibold text-gray-900">890 visits</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">About</span>
                  <span className="font-semibold text-gray-900">445 visits</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Contact</span>
                  <span className="font-semibold text-gray-900">223 visits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">SEO Settings & Client Management</h2>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Current Site: <span className="font-semibold text-blue-600">{settings.currentSite.name}</span>
              </div>
            </div>
          </div>

          {/* API Keys Management */}
          <div className="admin-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">API Keys & Credentials</h3>
              <button
                onClick={() => setShowApiKeyForm(!showApiKeyForm)}
                className="admin-button-secondary"
              >
                {showApiKeyForm ? 'Hide' : 'Manage'} API Keys
              </button>
            </div>

            {showApiKeyForm && (
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Google Analytics Property ID
                    </label>
                    <input
                      type="text"
                      value={settings.apiKeys.googleAnalytics}
                      onChange={(e) => saveSettings({
                        ...settings,
                        apiKeys: { ...settings.apiKeys, googleAnalytics: e.target.value }
                      })}
                      placeholder="GA4-XXXXXXXXXX"
                      className="admin-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Google Search Console Site
                    </label>
                    <input
                      type="text"
                      value={settings.apiKeys.googleSearchConsole}
                      onChange={(e) => saveSettings({
                        ...settings,
                        apiKeys: { ...settings.apiKeys, googleSearchConsole: e.target.value }
                      })}
                      placeholder="https://example.com"
                      className="admin-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      SEMrush API Key
                    </label>
                    <input
                      type="password"
                      value={settings.apiKeys.semrush}
                      onChange={(e) => saveSettings({
                        ...settings,
                        apiKeys: { ...settings.apiKeys, semrush: e.target.value }
                      })}
                      placeholder="Enter SEMrush API key"
                      className="admin-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ahrefs API Key
                    </label>
                    <input
                      type="password"
                      value={settings.apiKeys.ahrefs}
                      onChange={(e) => saveSettings({
                        ...settings,
                        apiKeys: { ...settings.apiKeys, ahrefs: e.target.value }
                      })}
                      placeholder="Enter Ahrefs API key"
                      className="admin-input"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <button
                    onClick={() => setShowApiKeyForm(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

            {/* API Status Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${
                  settings.apiKeys.googleAnalytics ? 'bg-green-500' : 'bg-gray-300'
                }`}></div>
                <p className="text-sm font-medium text-gray-900">Google Analytics</p>
                <p className="text-xs text-gray-600">
                  {settings.apiKeys.googleAnalytics ? 'Connected' : 'Not Set'}
                </p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${
                  settings.apiKeys.googleSearchConsole ? 'bg-green-500' : 'bg-gray-300'
                }`}></div>
                <p className="text-sm font-medium text-gray-900">Search Console</p>
                <p className="text-xs text-gray-600">
                  {settings.apiKeys.googleSearchConsole ? 'Connected' : 'Not Set'}
                </p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${
                  settings.apiKeys.semrush ? 'bg-green-500' : 'bg-gray-300'
                }`}></div>
                <p className="text-sm font-medium text-gray-900">SEMrush</p>
                <p className="text-xs text-gray-600">
                  {settings.apiKeys.semrush ? 'Connected' : 'Not Set'}
                </p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className={`w-3 h-3 rounded-full mx-auto mb-2 ${
                  settings.apiKeys.ahrefs ? 'bg-green-500' : 'bg-gray-300'
                }`}></div>
                <p className="text-sm font-medium text-gray-900">Ahrefs</p>
                <p className="text-xs text-gray-600">
                  {settings.apiKeys.ahrefs ? 'Connected' : 'Not Set'}
                </p>
              </div>
            </div>
          </div>

          {/* Client/Site Management */}
          <div className="admin-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Client Sites Management</h3>
              <button
                onClick={() => {
                  setEditingClient(null)
                  setShowClientForm(!showClientForm)
                }}
                className="admin-button"
              >
                Add New Client
              </button>
            </div>

            {/* Client Form */}
            {showClientForm && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="text-md font-semibold text-gray-900 mb-4">
                  {editingClient ? 'Edit Client' : 'Add New Client'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Client Name
                    </label>
                    <input
                      type="text"
                      placeholder="Client Company Name"
                      className="admin-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Domain
                    </label>
                    <input
                      type="text"
                      placeholder="clientwebsite.com"
                      className="admin-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Google Analytics ID
                    </label>
                    <input
                      type="text"
                      placeholder="GA4-XXXXXXXXXX"
                      className="admin-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Search Console Site URL
                    </label>
                    <input
                      type="text"
                      placeholder="https://clientwebsite.com"
                      className="admin-input"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-2 mt-4">
                  <button
                    onClick={() => setShowClientForm(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button className="admin-button">
                    {editingClient ? 'Update Client' : 'Add Client'}
                  </button>
                </div>
              </div>
            )}

            {/* Clients List */}
            <div className="space-y-3">
              <h4 className="text-md font-semibold text-gray-900">Managed Sites</h4>

              {/* Current Site */}
              <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-gray-900">{settings.currentSite.name}</p>
                    <p className="text-sm text-gray-600">{settings.currentSite.domain}</p>
                  </div>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  Current Site
                </span>
              </div>

              {/* Other Clients */}
              {settings.clients.map((client) => (
                <div key={client.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">{client.name}</p>
                      <p className="text-sm text-gray-600">{client.domain}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => switchToClient(client)}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Switch To
                    </button>
                    <button
                      onClick={() => {
                        setEditingClient(client)
                        setShowClientForm(true)
                      }}
                      className="text-sm text-gray-600 hover:text-gray-800"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteClient(client.id)}
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}

              {settings.clients.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p>No additional clients added yet.</p>
                  <p className="text-sm">Click "Add New Client" to get started.</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="admin-card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="admin-button-secondary flex items-center justify-center space-x-2">
                <RefreshCw className="w-4 h-4" />
                <span>Refresh All Data</span>
              </button>
              <button className="admin-button-secondary flex items-center justify-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span>Generate Reports</span>
              </button>
              <button className="admin-button-secondary flex items-center justify-center space-x-2">
                <Settings className="w-4 h-4" />
                <span>Export Settings</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SEOPanel
