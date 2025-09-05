import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Search, 
  Calendar, 
  Clock, 
  Tag, 
  ArrowRight,
  Eye,
  User,
  Filter
} from 'lucide-react'

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')
  const [selectedTag, setSelectedTag] = useState(searchParams.get('tag') || '')
  const [loading, setLoading] = useState(true)
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  // Mock blog posts - in production, this would fetch from the admin API
  const mockPosts = [
    {
      id: 1,
      title: 'AI Transformation in Canadian SMBs: A Battle-Tested Approach',
      slug: 'ai-transformation-canadian-smbs',
      excerpt: 'Real stories from the trenches of implementing AI systems that actually work for Canadian businesses. From zero funding to enterprise-grade solutions.',
      content: 'Full content would be here...',
      author: 'Jaryd Paquette',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      views: 1247,
      tags: ['AI', 'SMB', 'Canada', 'Transformation'],
      featured: true,
      featuredImage: '/api/placeholder/600/300'
    },
    {
      id: 2,
      title: 'From Addiction to AI: Building Systems That Save Lives',
      slug: 'addiction-to-ai-building-systems',
      excerpt: 'The personal journey behind Northbound and why authentic leadership matters in tech. How real pain creates real solutions.',
      content: 'Full content would be here...',
      author: 'Jaryd Paquette',
      publishDate: '2024-01-10',
      readTime: '12 min read',
      views: 2156,
      tags: ['Personal', 'Leadership', 'Northbound', 'Recovery'],
      featured: false,
      featuredImage: '/api/placeholder/600/300'
    },
    {
      id: 3,
      title: 'Cybersecurity Lessons for AI Implementation',
      slug: 'cybersecurity-lessons-ai-implementation',
      excerpt: 'What reverse-engineering nation-state malware taught me about building secure AI systems. Security-first architecture principles.',
      content: 'Full content would be here...',
      author: 'Jaryd Paquette',
      publishDate: '2024-01-05',
      readTime: '6 min read',
      views: 1743,
      tags: ['Cybersecurity', 'AI', 'Security', 'Architecture'],
      featured: false,
      featuredImage: '/api/placeholder/600/300'
    }
  ]

  const allTags = [...new Set(mockPosts.flatMap(post => post.tags))]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPosts(mockPosts)
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    let filtered = posts

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag))
    }

    setFilteredPosts(filtered)
  }, [posts, searchTerm, selectedTag])

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    setSearchParams(prev => {
      if (value) {
        prev.set('search', value)
      } else {
        prev.delete('search')
      }
      return prev
    })
  }

  const handleTagFilter = (tag) => {
    const newTag = selectedTag === tag ? '' : tag
    setSelectedTag(newTag)
    setSearchParams(prev => {
      if (newTag) {
        prev.set('tag', newTag)
      } else {
        prev.delete('tag')
      }
      return prev
    })
  }

  const featuredPost = posts.find(post => post.featured)
  const regularPosts = posts.filter(post => !post.featured)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-royal-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-50 via-white to-crown-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-900 via-royal-800 to-crown-900"></div>
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        <div className="container-max relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-royal font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-shadow-royal">
              Battle-Tested Insights
            </h1>
            <p className="font-elegant text-xl md:text-2xl text-royal-200 max-w-4xl mx-auto leading-relaxed">
              Real stories from the trenches of AI development, cybersecurity, and building systems that actually work.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-max py-16">
        {/* Search and Filters */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0 mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-royal-400 focus:ring-2 focus:ring-royal-400/20 transition-all duration-200 bg-white/80 backdrop-blur-sm"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Filter by topic:</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag, index) => (
              <button
                key={index}
                onClick={() => handleTagFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-royal-600 text-white shadow-lg'
                    : 'bg-white/80 text-gray-700 hover:bg-royal-100 hover:text-royal-700 border border-gray-200'
                }`}
              >
                <Tag className="w-3 h-3 mr-1 inline" />
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && !searchTerm && !selectedTag && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-crown-500 rounded-full animate-pulse"></div>
              <span className="font-royal font-semibold text-crown-600 uppercase tracking-wide text-sm">
                Featured Article
              </span>
            </div>
            
            <div className="royal-card overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2 text-royal-600">
                      <User className="w-4 h-4" />
                      <span className="text-sm font-medium">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-royal-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">
                        {new Date(featuredPost.publishDate).toLocaleDateString('en-CA', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                  
                  <h2 className="font-royal font-bold text-2xl lg:text-3xl text-royal-800 mb-4 group-hover:text-crown-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="font-modern text-royal-600 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-royal-100 text-royal-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="flex items-center space-x-2 font-royal font-semibold text-crown-600 hover:text-crown-700 transition-colors group"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured || searchTerm || selectedTag).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="royal-card overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-royal-700 px-2 py-1 rounded-full text-xs font-medium">
                    {post.readTime}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-1 text-royal-600 text-sm">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {new Date(post.publishDate).toLocaleDateString('en-CA', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-royal-600 text-sm">
                    <Eye className="w-3 h-3" />
                    <span>{post.views.toLocaleString()}</span>
                  </div>
                </div>
                
                <h3 className="font-royal font-bold text-xl text-royal-800 mb-3 group-hover:text-crown-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="font-modern text-royal-600 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-royal-100 text-royal-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>
                
                <Link
                  to={`/blog/${post.slug}`}
                  className="flex items-center justify-between font-royal font-semibold text-crown-600 hover:text-crown-700 transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 bg-royal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-royal-600" />
            </div>
            <h3 className="font-royal font-bold text-2xl text-royal-800 mb-4">
              No articles found
            </h3>
            <p className="text-royal-600 mb-8">
              Try adjusting your search terms or browse all topics.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedTag('')
                setSearchParams(new URLSearchParams())
              }}
              className="royal-button"
            >
              View All Articles
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Blog
