import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Plus, 
  Search, 
  Filter,
  Eye,
  Edit3,
  Trash2,
  Calendar,
  Tag,
  BarChart3,
  Bot,
  Clock,
  Globe,
  FileText
} from 'lucide-react'
import toast from 'react-hot-toast'

const BlogManager = () => {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  // Mock data - replace with API calls
  const mockPosts = [
    {
      id: 1,
      title: 'AI Transformation in Canadian SMBs: A Battle-Tested Approach',
      slug: 'ai-transformation-canadian-smbs',
      excerpt: 'Real stories from the trenches of implementing AI systems that actually work for Canadian businesses.',
      status: 'published',
      author: 'Jaryd Paquette',
      publishDate: '2024-01-15',
      tags: ['AI', 'SMB', 'Canada', 'Transformation'],
      views: 1247,
      featured: true,
      aiGenerated: false
    },
    {
      id: 2,
      title: 'From Addiction to AI: Building Systems That Save Lives',
      slug: 'addiction-to-ai-building-systems',
      excerpt: 'The personal journey behind Northbound and why authentic leadership matters in tech.',
      status: 'draft',
      author: 'Jaryd Paquette',
      publishDate: null,
      tags: ['Personal', 'Leadership', 'Northbound'],
      views: 0,
      featured: false,
      aiGenerated: true
    },
    {
      id: 3,
      title: 'Cybersecurity Lessons for AI Implementation',
      slug: 'cybersecurity-lessons-ai-implementation',
      excerpt: 'What reverse-engineering nation-state malware taught me about building secure AI systems.',
      status: 'scheduled',
      author: 'Jaryd Paquette',
      publishDate: '2024-01-25',
      tags: ['Cybersecurity', 'AI', 'Security'],
      views: 0,
      featured: false,
      aiGenerated: false
    }
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPosts(mockPosts)
      setFilteredPosts(mockPosts)
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    let filtered = posts

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(post => post.status === statusFilter)
    }

    setFilteredPosts(filtered)
  }, [searchTerm, statusFilter, posts])

  const getStatusBadge = (status) => {
    const badges = {
      draft: 'status-draft',
      scheduled: 'status-scheduled',
      published: 'status-published'
    }
    return badges[status] || 'status-draft'
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id))
      toast.success('Post deleted successfully')
    }
  }

  const stats = [
    {
      title: 'Total Posts',
      value: posts.length,
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'Published',
      value: posts.filter(p => p.status === 'published').length,
      icon: Globe,
      color: 'text-green-600'
    },
    {
      title: 'Drafts',
      value: posts.filter(p => p.status === 'draft').length,
      icon: Edit3,
      color: 'text-yellow-600'
    },
    {
      title: 'Total Views',
      value: posts.reduce((sum, post) => sum + post.views, 0).toLocaleString(),
      icon: Eye,
      color: 'text-purple-600'
    }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-royal-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-royal font-bold text-gray-900">
            GHOSTWRITER OPS 🤖
          </h1>
          <p className="text-gray-600 mt-1">
            AI-powered content management for True North AI
          </p>
        </div>
        <Link to="/blog/new">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="admin-button flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>New Post</span>
          </motion.button>
        </Link>
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

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="admin-card p-6"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="admin-input pl-10 w-64"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="admin-select w-40"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button className="admin-button-secondary flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>
            <button className="admin-button-secondary flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Analytics</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Posts Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="admin-card overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-royal font-semibold text-gray-900">
                  Title
                </th>
                <th className="text-left py-4 px-6 font-royal font-semibold text-gray-900">
                  Status
                </th>
                <th className="text-left py-4 px-6 font-royal font-semibold text-gray-900">
                  Date
                </th>
                <th className="text-left py-4 px-6 font-royal font-semibold text-gray-900">
                  Views
                </th>
                <th className="text-left py-4 px-6 font-royal font-semibold text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPosts.map((post, index) => (
                <motion.tr
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-gray-900 hover:text-royal-600">
                            {post.title}
                          </h3>
                          {post.aiGenerated && (
                            <Bot className="w-4 h-4 text-blue-500" title="AI Generated" />
                          )}
                          {post.featured && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          {post.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-royal-100 text-royal-700"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`${getStatusBadge(post.status)} capitalize`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {post.publishDate 
                          ? new Date(post.publishDate).toLocaleDateString()
                          : 'Not scheduled'
                        }
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      {post.status === 'published' && (
                        <button
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Post"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      )}
                      <Link
                        to={`/blog/edit/${post.id}`}
                        className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Edit Post"
                      >
                        <Edit3 className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Post"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || statusFilter !== 'all' 
                ? 'Try adjusting your search or filters'
                : 'Get started by creating your first blog post'
              }
            </p>
            {!searchTerm && statusFilter === 'all' && (
              <Link to="/blog/new">
                <button className="admin-button">Create First Post</button>
              </Link>
            )}
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default BlogManager
