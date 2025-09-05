import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Save, 
  Eye, 
  Calendar, 
  Tag, 
  Image as ImageIcon, 
  Bot,
  Wand2,
  ArrowLeft,
  Globe,
  Clock,
  Sparkles
} from 'lucide-react'
import toast from 'react-hot-toast'
import AIWriterModal from '../components/blog/AIWriterModal'

const PostEditor = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = Boolean(id)

  const [post, setPost] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    tags: [],
    status: 'draft',
    publishDate: '',
    featuredImage: '',
    seoTitle: '',
    seoDescription: '',
    author: 'Jaryd Paquette'
  })

  const [newTag, setNewTag] = useState('')
  const [showAIModal, setShowAIModal] = useState(false)
  const [saving, setSaving] = useState(false)
  const [previewMode, setPreviewMode] = useState(false)

  useEffect(() => {
    if (isEditing) {
      // Mock data - replace with API call
      const mockPost = {
        id: id,
        title: 'AI Transformation in Canadian SMBs: A Battle-Tested Approach',
        slug: 'ai-transformation-canadian-smbs',
        excerpt: 'Real stories from the trenches of implementing AI systems that actually work for Canadian businesses.',
        content: `# AI Transformation in Canadian SMBs: A Battle-Tested Approach

From my decade in the cybersecurity trenches to building AI systems from zero funding, I've learned that most AI implementations fail because they're built in boardrooms, not battlefields.

## The Reality Check

Canadian SMBs don't need another AI buzzword presentation. They need systems that work on Monday morning.

### What Actually Works:

1. **Start with pain, not possibilities**
2. **Build security first, features second**
3. **Test with real data, not demos**

> "I don't believe in fake gurus or surface-level tech. I believe in systems that work because I needed them to work for me first." - Jaryd Paquette

## The True North Approach

A MARE AD MARE - from sea to sea, we're building AI that serves Canadian businesses, not Silicon Valley metrics.

### Our Battle-Tested Process:

- **Discovery**: What's actually broken?
- **Design**: Security-first architecture
- **Deploy**: Real-world testing
- **Deliver**: Systems that scale

Ready to transform your business with AI that actually works? Let's build something real together.`,
        tags: ['AI', 'SMB', 'Canada', 'Transformation'],
        status: 'draft',
        publishDate: '',
        featuredImage: '',
        seoTitle: 'AI Transformation for Canadian SMBs | True North AI',
        seoDescription: 'Battle-tested AI implementation strategies for Canadian small and medium businesses. Real experience, real results.',
        author: 'Jaryd Paquette'
      }
      setPost(mockPost)
    }
  }, [id, isEditing])

  // Auto-generate slug from title
  useEffect(() => {
    if (post.title && !isEditing) {
      const slug = post.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      setPost(prev => ({ ...prev, slug }))
    }
  }, [post.title, isEditing])

  const handleSave = async (status = 'draft') => {
    setSaving(true)
    try {
      // Mock API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const updatedPost = { ...post, status }
      setPost(updatedPost)
      
      toast.success(status === 'published' ? 'Post published!' : 'Post saved!')
      
      if (!isEditing) {
        navigate('/blog')
      }
    } catch (error) {
      toast.error('Failed to save post')
    } finally {
      setSaving(false)
    }
  }

  const handleAddTag = (e) => {
    e.preventDefault()
    if (newTag.trim() && !post.tags.includes(newTag.trim())) {
      setPost(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }))
      setNewTag('')
    }
  }

  const handleRemoveTag = (tagToRemove) => {
    setPost(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const handleAIContent = (aiContent) => {
    setPost(prev => ({
      ...prev,
      content: aiContent
    }))
    setShowAIModal(false)
    toast.success('AI content inserted!')
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/blog')}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-royal font-bold text-gray-900">
              {isEditing ? 'Edit Post' : 'New Post'}
            </h1>
            <p className="text-gray-600">
              {isEditing ? 'Update your blog post' : 'Create a new blog post with AI assistance'}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setPreviewMode(!previewMode)}
            className="admin-button-secondary flex items-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>Preview</span>
          </button>
          
          <button
            onClick={() => setShowAIModal(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-royal font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <Bot className="w-4 h-4" />
            <span>AI Writer</span>
            <Sparkles className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleSave('draft')}
            disabled={saving}
            className="admin-button-secondary flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? 'Saving...' : 'Save Draft'}</span>
          </button>

          <button
            onClick={() => handleSave('published')}
            disabled={saving}
            className="admin-button flex items-center space-x-2"
          >
            <Globe className="w-4 h-4" />
            <span>Publish</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title & Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="admin-card p-6"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={post.title}
                  onChange={(e) => setPost(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter your post title..."
                  className="admin-input text-xl font-royal font-bold"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Slug (URL)
                </label>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">truenorthai.com/blog/</span>
                  <input
                    type="text"
                    value={post.slug}
                    onChange={(e) => setPost(prev => ({ ...prev, slug: e.target.value }))}
                    placeholder="post-url-slug"
                    className="admin-input flex-1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt
                </label>
                <textarea
                  value={post.excerpt}
                  onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Brief description of your post..."
                  className="admin-textarea"
                  rows={3}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Content
                  </label>
                  <button
                    onClick={() => setShowAIModal(true)}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
                  >
                    <Wand2 className="w-4 h-4" />
                    <span>AI Assist</span>
                  </button>
                </div>
                
                {previewMode ? (
                  <div className="admin-card p-6 prose max-w-none">
                    <div dangerouslySetInnerHTML={{ 
                      __html: post.content.replace(/\n/g, '<br>') 
                    }} />
                  </div>
                ) : (
                  <textarea
                    value={post.content}
                    onChange={(e) => setPost(prev => ({ ...prev, content: e.target.value }))}
                    placeholder="Write your post content here... Use Markdown for formatting."
                    className="admin-textarea font-mono text-sm"
                    rows={20}
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status & Publishing */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="admin-card p-6"
          >
            <h3 className="font-royal font-semibold text-gray-900 mb-4">
              Publishing
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={post.status}
                  onChange={(e) => setPost(prev => ({ ...prev, status: e.target.value }))}
                  className="admin-select"
                >
                  <option value="draft">Draft</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="published">Published</option>
                </select>
              </div>

              {post.status === 'scheduled' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Publish Date
                  </label>
                  <input
                    type="datetime-local"
                    value={post.publishDate}
                    onChange={(e) => setPost(prev => ({ ...prev, publishDate: e.target.value }))}
                    className="admin-input"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author
                </label>
                <input
                  type="text"
                  value={post.author}
                  onChange={(e) => setPost(prev => ({ ...prev, author: e.target.value }))}
                  className="admin-input"
                />
              </div>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="admin-card p-6"
          >
            <h3 className="font-royal font-semibold text-gray-900 mb-4">
              Tags
            </h3>
            <div className="space-y-4">
              <form onSubmit={handleAddTag} className="flex space-x-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add tag..."
                  className="admin-input flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-royal-600 text-white rounded-lg hover:bg-royal-700 transition-colors"
                >
                  <Tag className="w-4 h-4" />
                </button>
              </form>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-royal-100 text-royal-700"
                  >
                    {tag}
                    <button
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-2 text-royal-500 hover:text-royal-700"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SEO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="admin-card p-6"
          >
            <h3 className="font-royal font-semibold text-gray-900 mb-4">
              SEO Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SEO Title
                </label>
                <input
                  type="text"
                  value={post.seoTitle}
                  onChange={(e) => setPost(prev => ({ ...prev, seoTitle: e.target.value }))}
                  placeholder="SEO optimized title..."
                  className="admin-input"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {post.seoTitle.length}/60 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description
                </label>
                <textarea
                  value={post.seoDescription}
                  onChange={(e) => setPost(prev => ({ ...prev, seoDescription: e.target.value }))}
                  placeholder="Brief description for search engines..."
                  className="admin-textarea"
                  rows={3}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {post.seoDescription.length}/160 characters
                </p>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="admin-card p-6"
          >
            <h3 className="font-royal font-semibold text-gray-900 mb-4">
              Featured Image
            </h3>
            <div className="space-y-4">
              {post.featuredImage ? (
                <div className="relative">
                  <img
                    src={post.featuredImage}
                    alt="Featured"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => setPost(prev => ({ ...prev, featuredImage: '' }))}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload featured image</p>
                  <button className="admin-button-secondary text-sm">
                    Choose Image
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* AI Writer Modal */}
      {showAIModal && (
        <AIWriterModal
          onClose={() => setShowAIModal(false)}
          onInsert={handleAIContent}
          currentTitle={post.title}
          currentTags={post.tags}
        />
      )}
    </div>
  )
}

export default PostEditor
