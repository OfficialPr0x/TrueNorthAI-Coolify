import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Eye, 
  Share2, 
  Tag,
  User,
  ArrowRight,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react'

const BlogPost = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock blog post data - in production, this would fetch from the admin API
  const mockPost = {
    id: 1,
    title: 'AI Transformation in Canadian SMBs: A Battle-Tested Approach',
    slug: 'ai-transformation-canadian-smbs',
    excerpt: 'Real stories from the trenches of implementing AI systems that actually work for Canadian businesses.',
    content: `# AI Transformation in Canadian SMBs: A Battle-Tested Approach

From my decade in the cybersecurity trenches to building AI systems from zero funding, I've learned that most AI implementations fail because they're built in boardrooms, not battlefields.

## The Reality Check

Canadian SMBs don't need another AI buzzword presentation. They need systems that work on Monday morning.

When I started True North AI, I wasn't coming from a venture capital background or academic research. I was coming from the trenches—reverse-engineering nation-state malware, building enterprise security systems, and learning what it really takes to make technology work in the real world.

### What Actually Works:

1. **Start with pain, not possibilities**
   - Identify real problems before building solutions
   - Talk to actual users, not just decision makers
   - Measure impact in business terms, not technical metrics

2. **Build security first, features second**
   - Every AI system is a potential attack vector
   - Data privacy isn't optional—it's foundational
   - Cybersecurity lessons apply to AI development

3. **Test with real data, not demos**
   - Demo data lies—real data tells the truth
   - Edge cases reveal system weaknesses
   - Production environments expose hidden dependencies

> "I don't believe in fake gurus or surface-level tech. I believe in systems that work because I needed them to work for me first." - Jaryd Paquette

## The True North Approach

A MARE AD MARE - from sea to sea, we're building AI that serves Canadian businesses, not Silicon Valley metrics.

### Our Battle-Tested Process:

- **Discovery**: What's actually broken? We dig deep into real operational pain points
- **Design**: Security-first architecture that scales with your business
- **Deploy**: Real-world testing with actual data and users
- **Deliver**: Systems that work reliably in production environments

## Case Study: MapleTech Solutions

When Sarah Chen at MapleTech came to us, they were drowning in manual processes. Their customer service team was overwhelmed, response times were terrible, and customer satisfaction was dropping.

Instead of promising magic AI solutions, we started with their actual data:
- 2,847 support tickets from the last quarter
- Average response time of 18 hours
- Customer satisfaction score of 2.3/5

We built a battle-tested AI system that:
- Reduced response time to 45 minutes
- Increased customer satisfaction to 4.7/5
- Freed up 15 hours per week for the support team

The secret? We didn't try to replace humans. We built AI that empowers them.

## Key Insights from the Trenches

### 1. AI Doesn't Replace—It Amplifies

The most successful AI implementations don't eliminate jobs; they eliminate frustration. When you remove the repetitive, soul-crushing work, humans can focus on what they do best: solving complex problems and building relationships.

### 2. Canadian Businesses Need Canadian Solutions

What works for Silicon Valley startups doesn't always work for Canadian SMBs. We understand:
- Bilingual requirements
- Canadian privacy laws
- Regional business culture
- Budget constraints of growing companies

### 3. Security Can't Be an Afterthought

My cybersecurity background taught me that security vulnerabilities compound over time. In AI systems, this is even more critical because:
- AI models can be poisoned with malicious data
- Privacy breaches have massive regulatory implications
- Business continuity depends on system reliability

## The Northbound Connection

This approach to AI isn't just about business—it's personal. When I was building Northbound, our AI-powered platform for addiction recovery, I needed systems that could literally save lives. There was no room for academic theories or venture capital promises.

Every algorithm had to work. Every recommendation had to be accurate. Every interaction had to build trust, not break it.

That same standard—that same battle-tested approach—is what we bring to every client engagement.

## What's Next for Canadian AI?

Canada has a unique opportunity to lead in ethical, practical AI implementation. We have:
- Strong privacy laws that protect citizens
- A culture of collaboration over competition
- World-class technical talent
- Growing businesses that need real solutions

But we need to move beyond the hype and focus on what actually works.

## Ready to Transform Your Business?

If you're tired of AI presentations that promise everything and deliver nothing, let's talk. We build systems that work because we've been in the trenches, we understand real business problems, and we know what it takes to create lasting change.

**A MARE AD MARE** - from sea to sea, we're transforming Canadian businesses with AI that actually works.

*Ready to experience battle-tested AI for your business? [Get started today](/contact) or [learn more about our DFY services](/services/dfy).*`,
    author: 'Jaryd Paquette',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    views: 1247,
    tags: ['AI', 'SMB', 'Canada', 'Transformation'],
    featuredImage: '/api/placeholder/800/400',
    seoTitle: 'AI Transformation for Canadian SMBs | True North AI',
    seoDescription: 'Battle-tested AI implementation strategies for Canadian small and medium businesses. Real experience, real results.'
  }

  const mockRelatedPosts = [
    {
      id: 2,
      title: 'From Addiction to AI: Building Systems That Save Lives',
      slug: 'addiction-to-ai-building-systems',
      excerpt: 'The personal journey behind Northbound and why authentic leadership matters in tech.',
      readTime: '12 min read',
      featuredImage: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Cybersecurity Lessons for AI Implementation',
      slug: 'cybersecurity-lessons-ai-implementation',
      excerpt: 'What reverse-engineering nation-state malware taught me about building secure AI systems.',
      readTime: '6 min read',
      featuredImage: '/api/placeholder/300/200'
    }
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPost(mockPost)
      setRelatedPosts(mockRelatedPosts)
      setLoading(false)
    }, 1000)
  }, [slug])

  const shareUrl = `${window.location.origin}/blog/${slug}`
  const shareTitle = post?.title || ''

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-blue-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-blue-700'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-blue-600'
    }
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-royal-600"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-royal font-bold text-gray-900 mb-4">
            Article not found
          </h1>
          <Link to="/blog" className="royal-button">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-50 via-white to-crown-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container-max py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/blog"
              className="flex items-center space-x-2 text-royal-600 hover:text-royal-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Blog</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Eye className="w-4 h-4" />
                <span className="text-sm">{post.views.toLocaleString()} views</span>
              </div>
              <div className="flex items-center space-x-2">
                <Share2 className="w-4 h-4 text-gray-600" />
                {shareLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 text-gray-600 ${social.color} transition-colors rounded-lg hover:bg-gray-100`}
                      title={`Share on ${social.name}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <article className="container-max py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-royal-600">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.publishDate).toLocaleDateString('en-CA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-royal font-bold text-3xl md:text-4xl lg:text-5xl text-royal-800 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="font-elegant text-xl text-royal-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-royal-100 text-royal-700"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Featured Image */}
            <div className="relative overflow-hidden rounded-xl shadow-2xl mb-12">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div 
              className="font-modern text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/\n/g, '<br>')
                  .replace(/^/, '<p>')
                  .replace(/$/, '</p>')
                  .replace(/# (.*?)<\/p>/g, '<h1 class="font-royal font-bold text-3xl text-royal-800 mt-12 mb-6">$1</h1>')
                  .replace(/## (.*?)<\/p>/g, '<h2 class="font-royal font-bold text-2xl text-royal-800 mt-10 mb-4">$2</h2>')
                  .replace(/### (.*?)<\/p>/g, '<h3 class="font-royal font-bold text-xl text-royal-800 mt-8 mb-3">$3</h3>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-royal-900">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
                  .replace(/> "(.*?)" - (.*?)<\/p>/g, '<blockquote class="border-l-4 border-crown-400 pl-6 my-8 bg-crown-50 p-6 rounded-r-lg"><p class="italic text-lg text-royal-700 mb-2">"$1"</p><cite class="text-royal-600 font-medium">— $2</cite></blockquote>')
                  .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-crown-600 hover:text-crown-700 font-medium underline">$1</a>')
              }}
            />
          </motion.div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 p-8 bg-gradient-to-r from-royal-50 to-crown-50 rounded-xl border border-royal-200"
          >
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-royal-gradient rounded-full flex items-center justify-center text-white font-royal font-bold text-xl">
                JP
              </div>
              <div className="flex-1">
                <h3 className="font-royal font-bold text-xl text-royal-800 mb-2">
                  About {post.author}
                </h3>
                <p className="text-royal-600 leading-relaxed mb-4">
                  Founder & CEO of True North AI. Battle-tested AI systems architect with a decade of cybersecurity experience. 
                  From reverse-engineering nation-state malware to building enterprise-grade AI systems, Jaryd brings real-world 
                  experience to every project. A MARE AD MARE - building AI that serves Canadians.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-crown-600 hover:text-crown-700 font-medium transition-colors"
                >
                  <span>Learn more about Jaryd</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16"
            >
              <h2 className="font-royal font-bold text-2xl text-royal-800 mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="royal-card overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm text-royal-700 px-2 py-1 rounded-full text-xs font-medium">
                          {relatedPost.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-royal font-bold text-lg text-royal-800 mb-3 group-hover:text-crown-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-royal-600 line-clamp-3 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-crown-600 font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4 text-crown-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </article>
    </div>
  )
}

export default BlogPost
