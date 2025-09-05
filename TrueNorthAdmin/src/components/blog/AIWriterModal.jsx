import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  Bot, 
  Wand2, 
  Sparkles, 
  Copy, 
  RotateCcw, 
  Send,
  Lightbulb,
  Zap,
  Target
} from 'lucide-react'
import toast from 'react-hot-toast'

const AIWriterModal = ({ onClose, onInsert, currentTitle, currentTags }) => {
  const [mode, setMode] = useState('draft') // draft, polish, hooks, thread
  const [topic, setTopic] = useState(currentTitle || '')
  const [keywords, setKeywords] = useState(currentTags?.join(', ') || '')
  const [persona, setPersona] = useState('canadian-founder')
  const [tone, setTone] = useState('battle-tested')
  const [length, setLength] = useState('1000')
  const [generatedContent, setGeneratedContent] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const modes = [
    {
      id: 'draft',
      name: 'Draft Mode',
      icon: Bot,
      description: 'Generate a complete first draft',
      color: 'bg-blue-500'
    },
    {
      id: 'polish',
      name: 'Polish It',
      icon: Sparkles,
      description: 'Improve existing content',
      color: 'bg-purple-500'
    },
    {
      id: 'hooks',
      name: 'Hook Generator',
      icon: Lightbulb,
      description: 'Create compelling openings',
      color: 'bg-yellow-500'
    },
    {
      id: 'thread',
      name: 'Tweet Thread',
      icon: Zap,
      description: 'Convert to social media',
      color: 'bg-green-500'
    }
  ]

  const personas = [
    { id: 'canadian-founder', name: 'Canadian Tech Founder', description: 'Battle-tested, authentic leadership' },
    { id: 'ai-expert', name: 'AI Systems Expert', description: 'Technical authority, practical focus' },
    { id: 'recovery-advocate', name: 'Recovery Advocate', description: 'Personal journey, hope-driven' },
    { id: 'cybersecurity-pro', name: 'Cybersecurity Professional', description: 'Security-first, threat-aware' }
  ]

  const tones = [
    { id: 'battle-tested', name: 'Battle-Tested', description: 'Real experience, no fluff' },
    { id: 'inspirational', name: 'Inspirational', description: 'Motivating and uplifting' },
    { id: 'technical', name: 'Technical', description: 'Deep, analytical approach' },
    { id: 'conversational', name: 'Conversational', description: 'Friendly and approachable' }
  ]

  const generateContent = async () => {
    if (!topic.trim()) {
      toast.error('Please enter a topic')
      return
    }

    setIsGenerating(true)
    
    try {
      // Mock AI generation - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      const mockContent = `# ${topic}

From my decade in the cybersecurity trenches to building AI systems from zero funding, I've learned that most implementations fail because they're built in boardrooms, not battlefields.

## The Reality Check

Canadian businesses don't need another AI buzzword presentation. They need systems that work on Monday morning.

### What Actually Works:

1. **Start with pain, not possibilities** - Identify real problems before building solutions
2. **Build security first, features second** - Cybersecurity lessons apply to AI development
3. **Test with real data, not demos** - Battle-test everything before deployment

> "I don't believe in fake gurus or surface-level tech. I believe in systems that work because I needed them to work for me first." - Jaryd Paquette

## The True North Approach

A MARE AD MARE - from sea to sea, we're building AI that serves Canadian businesses, not Silicon Valley metrics.

### Our Battle-Tested Process:

- **Discovery**: What's actually broken?
- **Design**: Security-first architecture  
- **Deploy**: Real-world testing
- **Deliver**: Systems that scale

## Key Insights

The difference between AI that works and AI that fails isn't the technology - it's the understanding of real-world application.

From reverse-engineering nation-state malware to building enterprise-grade AI systems, the lesson is always the same: **authenticity beats automation**.

## What's Next?

Ready to transform your business with AI that actually works? Let's build something real together.

*This post was generated with AI assistance and refined with battle-tested experience.*`

      setGeneratedContent(mockContent)
      toast.success('Content generated successfully!')
    } catch (error) {
      toast.error('Failed to generate content')
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent)
    toast.success('Content copied to clipboard!')
  }

  const insertContent = () => {
    onInsert(generatedContent)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-royal font-bold">
                    GHOSTWRITER OPS
                  </h2>
                  <p className="text-blue-100">
                    AI-Powered Content Generation
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 h-[calc(90vh-120px)]">
            {/* Settings Panel */}
            <div className="p-6 border-r border-gray-200 overflow-y-auto">
              <div className="space-y-6">
                {/* Mode Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Generation Mode
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {modes.map((modeOption) => {
                      const Icon = modeOption.icon
                      return (
                        <button
                          key={modeOption.id}
                          onClick={() => setMode(modeOption.id)}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            mode === modeOption.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className={`w-8 h-8 ${modeOption.color} rounded-lg flex items-center justify-center mb-2`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-medium text-sm">{modeOption.name}</h3>
                          <p className="text-xs text-gray-600 mt-1">{modeOption.description}</p>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Topic Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Topic / Title
                  </label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter your blog post topic..."
                    className="admin-input"
                  />
                </div>

                {/* Keywords */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Keywords (SEO)
                  </label>
                  <input
                    type="text"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    placeholder="AI, Canada, transformation, SMB..."
                    className="admin-input"
                  />
                </div>

                {/* Persona Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Voice & Persona
                  </label>
                  <select
                    value={persona}
                    onChange={(e) => setPersona(e.target.value)}
                    className="admin-select"
                  >
                    {personas.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} - {p.description}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tone Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tone & Style
                  </label>
                  <select
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="admin-select"
                  >
                    {tones.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name} - {t.description}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Length */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Length
                  </label>
                  <select
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="admin-select"
                  >
                    <option value="500">Short (~500 words)</option>
                    <option value="1000">Medium (~1000 words)</option>
                    <option value="1500">Long (~1500 words)</option>
                    <option value="2000">Deep Dive (~2000+ words)</option>
                  </select>
                </div>

                {/* Generate Button */}
                <button
                  onClick={generateContent}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-royal font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5" />
                      <span>Generate Content</span>
                      <Sparkles className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Output Panel */}
            <div className="p-6 bg-gray-50 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-royal font-semibold text-gray-900">
                  Generated Content
                </h3>
                {generatedContent && (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={copyToClipboard}
                      className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-colors"
                      title="Copy to clipboard"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={generateContent}
                      className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-colors"
                      title="Regenerate"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {generatedContent ? (
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap font-modern text-sm text-gray-800 leading-relaxed">
                      {generatedContent}
                    </pre>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      {generatedContent.split(' ').length} words • {generatedContent.split('\n').length} lines
                    </div>
                    <button
                      onClick={insertContent}
                      className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-xl transition-colors flex items-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Insert Content</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-center">
                  <div>
                    <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      Ready to Generate
                    </h4>
                    <p className="text-gray-600 max-w-sm">
                      Configure your settings and click "Generate Content" to create AI-powered blog content in your authentic voice.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AIWriterModal
