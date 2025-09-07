import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Plus,
  Search,
  Filter,
  Users,
  Building2,
  DollarSign,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  Loader
} from 'lucide-react'
import apiService from '../services/api'

const ClientManager = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadClients()
  }, [])

  const loadClients = async () => {
    try {
      setLoading(true)
      setError(null)

      // Try to load from backend first
      try {
        const response = await apiService.getContacts()
        if (response.success) {
          setClients(response.data)
          return
        }
      } catch (apiError) {
        console.log('Backend not available, using sample data')
      }

      // Fallback to sample data
      const sampleClients = [
    {
      id: 1,
      name: 'MapleTech Solutions',
      contact: 'Sarah Chen',
      email: 'sarah@mapletech.ca',
      phone: '+1 (416) 555-0123',
      location: 'Toronto, ON',
      status: 'active',
      tier: 'enterprise',
      revenue: 45000,
      projects: 3,
      joinDate: '2024-01-15',
      lastContact: '2024-01-20',
      rating: 5,
      tags: ['SaaS', 'AI Implementation', 'DFY']
    },
    {
      id: 2,
      name: 'Vancouver Mental Health Collective',
      contact: 'Michael Thompson',
      email: 'mike@vmhc.org',
      phone: '+1 (604) 555-0456',
      location: 'Vancouver, BC',
      status: 'active',
      tier: 'nonprofit',
      revenue: 8000,
      projects: 1,
      joinDate: '2023-11-20',
      lastContact: '2024-01-18',
      rating: 5,
      tags: ['Northbound', 'Mental Health', 'Consulting']
    },
    {
      id: 3,
      name: 'Halifax Logistics Inc.',
      contact: 'David Kim',
      email: 'david@halifaxlogistics.ca',
      phone: '+1 (902) 555-0789',
      location: 'Halifax, NS',
      status: 'prospect',
      tier: 'professional',
      revenue: 0,
      projects: 0,
      joinDate: '2024-01-22',
      lastContact: '2024-01-22',
      rating: 0,
      tags: ['Logistics', 'AI Automation', 'Prospect']
    }
      ]

      setClients(sampleClients)

    } catch (error) {
      console.error('Failed to load clients:', error)
      setError('Failed to load clients')
      setClients([])
    } finally {
      setLoading(false)
    }
  }

  const getTierColor = (tier) => {
    const colors = {
      enterprise: 'bg-purple-100 text-purple-800',
      professional: 'bg-blue-100 text-blue-800',
      nonprofit: 'bg-green-100 text-green-800'
    }
    return colors[tier] || 'bg-gray-100 text-gray-800'
  }

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      prospect: 'bg-yellow-100 text-yellow-800',
      inactive: 'bg-red-100 text-red-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const stats = [
    {
      title: 'Total Clients',
      value: clients.filter(c => c.status === 'active').length,
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Total Revenue',
      value: `$${clients.reduce((sum, client) => sum + client.revenue, 0).toLocaleString()}`,
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Active Projects',
      value: clients.reduce((sum, client) => sum + client.projects, 0),
      icon: Building2,
      color: 'text-purple-600'
    },
    {
      title: 'Prospects',
      value: clients.filter(c => c.status === 'prospect').length,
      icon: TrendingUp,
      color: 'text-yellow-600'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-royal font-bold text-gray-900">
            Client Management 🇨🇦
          </h1>
          <p className="text-gray-600 mt-1">
            A MARE AD MARE - Managing Canadian business relationships
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.location.href = '/contacts'}
          className="admin-button flex items-center space-x-2 cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          <span>Add Client</span>
        </motion.button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {loading ? (
          // Loading skeleton
          Array.from({ length: 4 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="admin-card p-6"
            >
              <div className="flex items-center justify-between">
                <div className="w-20 h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </motion.div>
          ))
        ) : (
          stats.map((stat, index) => {
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
          })
        )}
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
                placeholder="Search clients..."
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
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <button className="admin-button-secondary flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>More Filters</span>
          </button>
        </div>
      </motion.div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          // Loading skeleton
          Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="admin-card p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="w-32 h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <div className="w-16 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="flex space-x-2">
                <div className="flex-1 w-full h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex-1 w-full h-8 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </motion.div>
          ))
        ) : error ? (
          <div className="col-span-full admin-card p-6 text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={loadClients}
              className="admin-button"
            >
              Try Again
            </button>
          </div>
        ) : (
          clients.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="admin-card p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-royal font-bold text-lg text-gray-900 mb-1">
                  {client.name}
                </h3>
                <p className="text-gray-600 text-sm">{client.contact}</p>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
                  {client.status}
                </span>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTierColor(client.tier)}`}>
                  {client.tier}
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{client.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{client.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{client.location}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">${client.revenue.toLocaleString()}</p>
                <p className="text-xs text-gray-600">Revenue</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">{client.projects}</p>
                <p className="text-xs text-gray-600">Projects</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < client.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-600">Rating</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {client.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-royal-100 text-royal-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Last Contact */}
            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Last contact: {new Date(client.lastContact).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button
                className="flex-1 bg-royal-600 hover:bg-royal-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors cursor-pointer"
                onClick={() => alert(`Viewing details for ${client.name}`)}
              >
                View Details
              </button>
              <button
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium py-2 px-3 rounded-lg transition-colors cursor-pointer"
                onClick={() => window.open(`mailto:${client.email}`, '_blank')}
              >
                Contact
              </button>
            </div>
          </motion.div>
          ))
        )}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="admin-card p-6"
      >
        <h3 className="font-royal font-semibold text-gray-900 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors text-left cursor-pointer"
            onClick={() => window.location.href = '/calendar'}
          >
            <Calendar className="w-8 h-8 text-blue-600 mb-2" />
            <h4 className="font-medium text-gray-900">Schedule Follow-up</h4>
            <p className="text-sm text-gray-600">Book meetings with prospects</p>
          </button>
          <button
            className="p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors text-left cursor-pointer"
            onClick={() => alert('Deal closing feature coming soon!')}
          >
            <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
            <h4 className="font-medium text-gray-900">Close Deals</h4>
            <p className="text-sm text-gray-600">Convert prospects to clients</p>
          </button>
          <button
            className="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors text-left cursor-pointer"
            onClick={() => window.location.href = '/analytics'}
          >
            <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
            <h4 className="font-medium text-gray-900">Growth Analysis</h4>
            <p className="text-sm text-gray-600">Review client performance</p>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default ClientManager
