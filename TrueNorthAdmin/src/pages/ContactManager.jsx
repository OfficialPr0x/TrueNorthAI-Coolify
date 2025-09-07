import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  MessageSquare,
  Calendar,
  Tag,
  Download,
  Upload,
  UserPlus,
  Zap
} from 'lucide-react'
import calApi from '../services/calApi'

const ContactManager = () => {
  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [tagFilter, setTagFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [selectedContacts, setSelectedContacts] = useState([])
  const [showBulkActions, setShowBulkActions] = useState(false)

  // Mock data - replace with Cal.com API
  const mockContacts = [
    {
      id: 1,
      name: 'Sarah Chen',
      email: 'sarah@techcorp.ca',
      phone: '+1 (416) 555-0123',
      location: 'Toronto, ON',
      status: 'active',
      tier: 'enterprise',
      tags: ['SaaS', 'AI Implementation', 'Enterprise'],
      lastContact: '2024-01-20',
      totalValue: 45000,
      bookingsCount: 3,
      rating: 5,
      source: 'Website',
      notes: 'Key decision maker, interested in AI automation'
    },
    {
      id: 2,
      name: 'Mike Thompson',
      email: 'mike@innovate.ca',
      phone: '+1 (604) 555-0456',
      location: 'Vancouver, BC',
      status: 'prospect',
      tier: 'professional',
      tags: ['Consulting', 'AI Strategy', 'SME'],
      lastContact: '2024-01-18',
      totalValue: 8000,
      bookingsCount: 1,
      rating: 4,
      source: 'Referral',
      notes: 'Needs detailed proposal for AI implementation'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      email: 'emma@northstar.ca',
      phone: '+1 (403) 555-0789',
      location: 'Calgary, AB',
      status: 'lead',
      tier: 'professional',
      tags: ['Healthcare', 'Digital Transformation'],
      lastContact: '2024-01-15',
      totalValue: 0,
      bookingsCount: 0,
      rating: 0,
      source: 'LinkedIn',
      notes: 'Initial outreach, interested in healthcare AI solutions'
    },
    {
      id: 4,
      name: 'David Rodriguez',
      email: 'david@maple.ca',
      phone: '+1 (514) 555-0321',
      location: 'Montreal, QC',
      status: 'active',
      tier: 'enterprise',
      tags: ['Manufacturing', 'IoT', 'Industry 4.0'],
      lastContact: '2024-01-22',
      totalValue: 125000,
      bookingsCount: 8,
      rating: 5,
      source: 'Trade Show',
      notes: 'Long-term client, multiple successful projects'
    }
  ]

  useEffect(() => {
    loadContacts()
  }, [])

  const loadContacts = async () => {
    setLoading(true)
    try {
      // In production: const response = await calApi.getContacts()
      setTimeout(() => {
        setContacts(mockContacts)
        setLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Failed to load contacts:', error)
      setLoading(false)
    }
  }

  const getTierColor = (tier) => {
    const colors = {
      enterprise: 'bg-purple-100 text-purple-800',
      professional: 'bg-blue-100 text-blue-800',
      basic: 'bg-green-100 text-green-800'
    }
    return colors[tier] || 'bg-gray-100 text-gray-800'
  }

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      prospect: 'bg-yellow-100 text-yellow-800',
      lead: 'bg-blue-100 text-blue-800',
      inactive: 'bg-red-100 text-red-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || contact.status === statusFilter
    const matchesTag = tagFilter === 'all' || contact.tags.includes(tagFilter)
    return matchesSearch && matchesStatus && matchesTag
  })

  const handleSelectContact = (contactId) => {
    setSelectedContacts(prev =>
      prev.includes(contactId)
        ? prev.filter(id => id !== contactId)
        : [...prev, contactId]
    )
  }

  const handleSelectAll = () => {
    setSelectedContacts(
      selectedContacts.length === filteredContacts.length
        ? []
        : filteredContacts.map(contact => contact.id)
    )
  }

  const stats = [
    {
      title: 'Total Contacts',
      value: contacts.length,
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Active Clients',
      value: contacts.filter(c => c.status === 'active').length,
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Total Revenue',
      value: `$${contacts.reduce((sum, client) => sum + client.totalValue, 0).toLocaleString()}`,
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'New This Month',
      value: contacts.filter(c => {
        const contactDate = new Date(c.lastContact)
        const monthAgo = new Date()
        monthAgo.setMonth(monthAgo.getMonth() - 1)
        return contactDate > monthAgo
      }).length,
      icon: UserPlus,
      color: 'text-yellow-600'
    }
  ]

  const allTags = [...new Set(contacts.flatMap(contact => contact.tags))]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-royal font-bold text-gray-900">
            Contact Manager 👥
          </h1>
          <p className="text-gray-600 mt-1">
            Centralized contact management with Cal.com integration
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="admin-button-secondary flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Import</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="admin-button flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Add Contact</span>
          </motion.button>
        </div>
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

      {/* Filters & Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="admin-card p-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search contacts..."
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
              <option value="active">Active</option>
              <option value="prospect">Prospect</option>
              <option value="lead">Lead</option>
              <option value="inactive">Inactive</option>
            </select>
            <select
              value={tagFilter}
              onChange={(e) => setTagFilter(e.target.value)}
              className="admin-select w-40"
            >
              <option value="all">All Tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>

          {selectedContacts.length > 0 && (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">
                {selectedContacts.length} selected
              </span>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="admin-button-secondary flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="admin-button-secondary flex items-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>SMS</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="admin-button-secondary flex items-center space-x-2"
              >
                <Tag className="w-4 h-4" />
                <span>Tag</span>
              </motion.button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContacts.map((contact, index) => (
          <motion.div
            key={contact.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`admin-card p-6 hover:shadow-xl transition-all duration-300 ${
              selectedContacts.includes(contact.id) ? 'ring-2 ring-royal-200' : ''
            }`}
          >
            {/* Selection Checkbox */}
            <div className="flex items-start justify-between mb-4">
              <input
                type="checkbox"
                checked={selectedContacts.includes(contact.id)}
                onChange={() => handleSelectContact(contact.id)}
                className="mt-1"
              />
              <div className="flex space-x-2">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                  {contact.status}
                </span>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTierColor(contact.tier)}`}>
                  {contact.tier}
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-royal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-royal-600" />
              </div>
              <h3 className="font-royal font-bold text-lg text-gray-900 mb-1">
                {contact.name}
              </h3>
              <p className="text-gray-600 text-sm">{contact.source}</p>
            </div>

            {/* Contact Details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="truncate">{contact.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{contact.location}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">${contact.totalValue.toLocaleString()}</p>
                <p className="text-xs text-gray-600">Revenue</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">{contact.bookingsCount}</p>
                <p className="text-xs text-gray-600">Bookings</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < contact.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-600">Rating</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {contact.tags.slice(0, 3).map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-royal-100 text-royal-700"
                >
                  {tag}
                </span>
              ))}
              {contact.tags.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                  +{contact.tags.length - 3}
                </span>
              )}
            </div>

            {/* Last Contact */}
            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Last: {new Date(contact.lastContact).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button className="flex-1 bg-royal-600 hover:bg-royal-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>Book</span>
              </button>
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center space-x-1">
                <Edit className="w-3 h-3" />
                <span>Edit</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bulk Actions Bar */}
      {selectedContacts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl rounded-lg p-4 border border-gray-200 z-50"
        >
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              {selectedContacts.length} contacts selected
            </span>
            <button className="admin-button-secondary flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Bulk Email</span>
            </button>
            <button className="admin-button-secondary flex items-center space-x-2">
              <MessageSquare className="w-4 h-4" />
              <span>Bulk SMS</span>
            </button>
            <button className="admin-button-secondary flex items-center space-x-2">
              <Tag className="w-4 h-4" />
              <span>Add Tags</span>
            </button>
            <button
              onClick={() => setSelectedContacts([])}
              className="text-gray-500 hover:text-gray-700"
            >
              Clear
            </button>
          </div>
        </motion.div>
      )}

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="admin-card p-6"
      >
        <h3 className="font-royal font-semibold text-gray-900 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors text-left">
            <Calendar className="w-8 h-8 text-blue-600 mb-2" />
            <h4 className="font-medium text-gray-900">Schedule Calls</h4>
            <p className="text-sm text-gray-600">Bulk booking for selected contacts</p>
          </button>
          <button className="p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors text-left">
            <Mail className="w-8 h-8 text-green-600 mb-2" />
            <h4 className="font-medium text-gray-900">Email Campaign</h4>
            <p className="text-sm text-gray-600">Send targeted email campaigns</p>
          </button>
          <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors text-left">
            <MessageSquare className="w-8 h-8 text-purple-600 mb-2" />
            <h4 className="font-medium text-gray-900">SMS Campaign</h4>
            <p className="text-sm text-gray-600">Send SMS notifications</p>
          </button>
          <button className="p-4 bg-yellow-50 hover:bg-yellow-100 rounded-xl transition-colors text-left">
            <Zap className="w-8 h-8 text-yellow-600 mb-2" />
            <h4 className="font-medium text-gray-900">Automations</h4>
            <p className="text-sm text-gray-600">Set up workflow triggers</p>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactManager
