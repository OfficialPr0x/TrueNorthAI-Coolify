// AI Agent Service for True North Manager
// Integrates with OpenAI API and backend systems

import settingsService from './settingsService'

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'

class AIAgentService {
  constructor() {
    this.conversationHistory = []
    this.systemPrompt = this.buildSystemPrompt()
  }

  buildSystemPrompt() {
    return `You are True North AI Manager, an advanced AI assistant that helps manage TrueNorthAI's entire agency operations.

Your capabilities include:

1. **Business Operations Management**
   - Generate comprehensive business reports
   - Track revenue and financial performance
   - Manage client relationships and leads
   - Monitor project pipelines and progress

2. **Data Analysis & Reporting**
   - Analyze SEO performance and rankings
   - Track website traffic and user behavior
   - Generate conversion rate reports
   - Provide business intelligence insights

3. **Client & Lead Management**
   - View and manage client database
   - Track lead conversion funnels
   - Generate client performance reports
   - Provide lead nurturing recommendations

4. **System Administration**
   - Monitor system health and performance
   - Manage API connections and integrations
   - Generate system status reports
   - Provide technical recommendations

5. **SEO & Marketing Analytics**
   - Monitor keyword rankings and trends
   - Track backlink profiles
   - Analyze competitor performance
   - Provide SEO recommendations

When responding, you should:
- Use markdown formatting for better readability
- Include relevant data in tables or structured formats
- Provide actionable insights and recommendations
- Use emojis to make responses more engaging
- Ask clarifying questions when needed
- Offer to perform additional analysis or actions

Always format your responses professionally but conversationally, like a knowledgeable business partner.`
  }

  async processQuery(userMessage) {
    try {
      // Add user message to conversation history
      this.conversationHistory.push({
        role: 'user',
        content: userMessage
      })

      // Analyze the query to determine what data/actions are needed
      const analysis = await this.analyzeQuery(userMessage)

      // Fetch relevant data based on analysis
      const relevantData = await this.fetchRelevantData(analysis)

      // Generate AI response with data
      const aiResponse = await this.generateAIResponse(userMessage, relevantData, analysis)

      // Add AI response to conversation history
      this.conversationHistory.push({
        role: 'assistant',
        content: aiResponse.content
      })

      // Keep conversation history manageable
      if (this.conversationHistory.length > 20) {
        this.conversationHistory = this.conversationHistory.slice(-20)
      }

      return aiResponse

    } catch (error) {
      console.error('AI Agent processing error:', error)
      return {
        content: '❌ **Error:** I encountered an issue processing your request. Please try again.',
        actions: []
      }
    }
  }

  async analyzeQuery(message) {
    const lowerMessage = message.toLowerCase()

    const analysis = {
      intent: 'general',
      topics: [],
      requiresData: [],
      actions: []
    }

    // Determine intent and topics
    if (lowerMessage.includes('report') || lowerMessage.includes('analytics')) {
      analysis.intent = 'reporting'
      analysis.topics.push('analytics')
    }

    if (lowerMessage.includes('revenue') || lowerMessage.includes('sales') || lowerMessage.includes('money')) {
      analysis.intent = 'financial'
      analysis.topics.push('finance')
      analysis.requiresData.push('revenue', 'transactions', 'conversion_rates')
    }

    if (lowerMessage.includes('client') || lowerMessage.includes('customer')) {
      analysis.intent = 'client_management'
      analysis.topics.push('clients')
      analysis.requiresData.push('client_list', 'client_status', 'client_activity')
    }

    if (lowerMessage.includes('lead') || lowerMessage.includes('pipeline')) {
      analysis.intent = 'lead_management'
      analysis.topics.push('leads')
      analysis.requiresData.push('lead_pipeline', 'conversion_rates', 'lead_sources')
    }

    if (lowerMessage.includes('seo') || lowerMessage.includes('ranking') || lowerMessage.includes('keyword')) {
      analysis.intent = 'seo_analysis'
      analysis.topics.push('seo')
      analysis.requiresData.push('seo_metrics', 'keyword_rankings', 'backlinks')
    }

    if (lowerMessage.includes('system') || lowerMessage.includes('status') || lowerMessage.includes('health')) {
      analysis.intent = 'system_monitoring'
      analysis.topics.push('system')
      analysis.requiresData.push('system_health', 'api_status', 'performance_metrics')
    }

    return analysis
  }

  async fetchRelevantData(analysis) {
    const data = {}

    // Mock data fetching - replace with actual API calls
    for (const dataType of analysis.requiresData) {
      switch (dataType) {
        case 'revenue':
          data.revenue = {
            total: 125000,
            monthly: 12500,
            growth: 15.3,
            topSources: [
              { source: 'SEO', amount: 45000 },
              { source: 'Direct', amount: 32000 },
              { source: 'Social', amount: 28000 },
              { source: 'Referrals', amount: 20000 }
            ]
          }
          break

        case 'client_list':
          data.clients = {
            total: 45,
            active: 38,
            newThisMonth: 5,
            topClients: [
              { name: 'TechCorp Inc', revenue: 25000, status: 'active' },
              { name: 'Digital Solutions', revenue: 18000, status: 'active' },
              { name: 'Growth Agency', revenue: 15000, status: 'active' }
            ]
          }
          break

        case 'seo_metrics':
          data.seo = {
            overallScore: 78,
            keywordRankings: 24,
            backlinks: 156,
            organicTraffic: 8500,
            topKeywords: [
              { keyword: 'AI consulting', position: 8, volume: 2400 },
              { keyword: 'artificial intelligence', position: 12, volume: 1800 }
            ]
          }
          break

        case 'lead_pipeline':
          data.leads = {
            total: 89,
            qualified: 34,
            converted: 12,
            pipelineValue: 450000,
            stages: {
              'New': 45,
              'Contacted': 23,
              'Qualified': 12,
              'Proposal': 6,
              'Negotiation': 3
            }
          }
          break

        case 'system_health':
          data.system = {
            status: 'healthy',
            uptime: '99.9%',
            apiConnections: 8,
            activeIntegrations: 5,
            recentIssues: 0
          }
          break
      }
    }

    return data
  }

  async generateAIResponse(userMessage, data, analysis) {
    try {
      const messages = [
        {
          role: 'system',
          content: this.systemPrompt
        },
        ...this.conversationHistory.slice(-10), // Include recent conversation
        {
          role: 'user',
          content: `User Query: "${userMessage}"

Available Data: ${JSON.stringify(data, null, 2)}

Analysis: ${JSON.stringify(analysis, null, 2)}

Please provide a comprehensive response with relevant data, insights, and actionable recommendations.`
        }
      ]

      // Get API key from settings
      const openaiApiKey = settingsService.getApiKey('openai')
      if (!openaiApiKey) {
        throw new Error('OpenAI API key not configured')
      }

      const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages,
          max_tokens: 2000,
          temperature: 0.7
        })
      })

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`)
      }

      const result = await response.json()
      const aiContent = result.choices[0].message.content

      // Generate follow-up actions based on the response
      const actions = this.generateFollowUpActions(analysis.intent)

      return {
        content: aiContent,
        actions
      }

    } catch (error) {
      console.error('OpenAI API error:', error)

      // Fallback response with available data
      return this.generateFallbackResponse(userMessage, data, analysis)
    }
  }

  generateFollowUpActions(intent) {
    const actions = []

    switch (intent) {
      case 'reporting':
        actions.push(
          { label: '📊 Detailed Report', prompt: 'Generate a detailed report with charts and graphs' },
          { label: '📈 Trend Analysis', prompt: 'Analyze trends and provide forecasting' }
        )
        break

      case 'financial':
        actions.push(
          { label: '💰 Revenue Breakdown', prompt: 'Show revenue breakdown by source and time period' },
          { label: '📊 Profit Analysis', prompt: 'Analyze profit margins and cost optimization' }
        )
        break

      case 'client_management':
        actions.push(
          { label: '👥 Client Details', prompt: 'Show detailed client profiles and history' },
          { label: '📞 Contact Strategy', prompt: 'Suggest optimal contact strategies for clients' }
        )
        break

      case 'seo_analysis':
        actions.push(
          { label: '🎯 Keyword Research', prompt: 'Research new keyword opportunities' },
          { label: '🔗 Backlink Analysis', prompt: 'Analyze backlink profile and opportunities' }
        )
        break
    }

    return actions
  }

  generateFallbackResponse(userMessage, data, analysis) {
    let content = `🤖 **AI Analysis Complete**\n\n`

    // Generate response based on available data
    if (data.revenue) {
      content += `## 💰 Revenue Overview\n`
      content += `- **Total Revenue:** $${data.revenue.total.toLocaleString()}\n`
      content += `- **Monthly Average:** $${data.revenue.monthly.toLocaleString()}\n`
      content += `- **Growth Rate:** +${data.revenue.growth}%\n\n`
    }

    if (data.clients) {
      content += `## 👥 Client Status\n`
      content += `- **Total Clients:** ${data.clients.total}\n`
      content += `- **Active Clients:** ${data.clients.active}\n`
      content += `- **New This Month:** ${data.clients.newThisMonth}\n\n`
    }

    if (data.seo) {
      content += `## 🎯 SEO Performance\n`
      content += `- **Overall Score:** ${data.seo.overallScore}/100\n`
      content += `- **Keyword Rankings:** ${data.seo.keywordRankings}\n`
      content += `- **Backlinks:** ${data.seo.backlinks}\n\n`
    }

    if (data.leads) {
      content += `## 🚀 Lead Pipeline\n`
      content += `- **Total Leads:** ${data.leads.total}\n`
      content += `- **Qualified:** ${data.leads.qualified}\n`
      content += `- **Converted:** ${data.leads.converted}\n`
      content += `- **Pipeline Value:** $${data.leads.pipelineValue.toLocaleString()}\n\n`
    }

    content += `💡 **Need more detailed analysis?** Let me know what specific aspects you'd like me to focus on!`

    return {
      content,
      actions: this.generateFollowUpActions(analysis.intent)
    }
  }

  // Utility methods
  async getConversationHistory() {
    return this.conversationHistory
  }

  async clearConversationHistory() {
    this.conversationHistory = []
  }

  async exportConversation() {
    return {
      timestamp: new Date().toISOString(),
      messages: this.conversationHistory,
      summary: 'True North AI Manager Conversation Export'
    }
  }
}

// Export singleton instance
export const aiAgent = new AIAgentService()
export default aiAgent
