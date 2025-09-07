import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
  Users,
  Plus,
  Filter,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import calApi from '../services/calApi'

const CalendarManager = () => {
  const [currentView, setCurrentView] = useState('month') // month, week, day
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  // Mock data for now - replace with real Cal.com API calls
  const mockBookings = [
    {
      id: 1,
      title: 'Elite Strategy Session',
      attendee: 'Sarah Chen',
      email: 'sarah@techcorp.ca',
      phone: '+1 (416) 555-0123',
      startTime: '2024-01-20T10:00:00Z',
      endTime: '2024-01-20T11:00:00Z',
      status: 'confirmed',
      eventType: 'consultation',
      notes: 'Interested in AI automation',
      value: 1500
    },
    {
      id: 2,
      title: 'Discovery Call',
      attendee: 'Mike Thompson',
      email: 'mike@innovate.ca',
      phone: '+1 (604) 555-0456',
      startTime: '2024-01-20T14:00:00Z',
      endTime: '2024-01-20T15:00:00Z',
      status: 'pending',
      eventType: 'discovery',
      notes: 'Follow-up from webinar',
      value: 0
    },
    {
      id: 3,
      title: 'Project Review',
      attendee: 'David Rodriguez',
      email: 'david@maple.ca',
      phone: '+1 (514) 555-0321',
      startTime: '2024-01-21T09:00:00Z',
      endTime: '2024-01-21T10:00:00Z',
      status: 'confirmed',
      eventType: 'review',
      notes: 'Monthly project check-in',
      value: 800
    }
  ]

  useEffect(() => {
    loadBookings()
  }, [currentDate, currentView])

  const loadBookings = async () => {
    setLoading(true)
    try {
      // In production, replace with real API call
      // const response = await calApi.getBookings()
      setTimeout(() => {
        setBookings(mockBookings)
        setLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Failed to load bookings:', error)
      setLoading(false)
    }
  }

  const getStatusColor = (status) => {
    const colors = {
      confirmed: 'bg-green-100 text-green-800 border-green-200',
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      cancelled: 'bg-red-100 text-red-800 border-red-200',
      completed: 'bg-blue-100 text-blue-800 border-blue-200'
    }
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  const getStatusIcon = (status) => {
    const icons = {
      confirmed: CheckCircle,
      pending: AlertCircle,
      cancelled: XCircle,
      completed: CheckCircle
    }
    return icons[status] || AlertCircle
  }

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })
  }

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.attendee.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const stats = [
    {
      title: 'Total Bookings',
      value: bookings.length,
      icon: Calendar,
      color: 'text-blue-600'
    },
    {
      title: 'Confirmed',
      value: bookings.filter(b => b.status === 'confirmed').length,
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Pending',
      value: bookings.filter(b => b.status === 'pending').length,
      icon: AlertCircle,
      color: 'text-yellow-600'
    },
    {
      title: 'Revenue',
      value: `$${bookings.reduce((sum, b) => sum + b.value, 0).toLocaleString()}`,
      icon: Users,
      color: 'text-purple-600'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-royal font-bold text-gray-900">
            Calendar Manager 📅
          </h1>
          <p className="text-gray-600 mt-1">
            Manage appointments, bookings, and schedule optimization
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="admin-button flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Schedule Meeting</span>
        </motion.button>
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
                placeholder="Search bookings..."
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
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentView('month')}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                currentView === 'month'
                  ? 'bg-royal-100 text-royal-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setCurrentView('week')}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                currentView === 'week'
                  ? 'bg-royal-100 text-royal-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setCurrentView('day')}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                currentView === 'day'
                  ? 'bg-royal-100 text-royal-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Day
            </button>
          </div>
        </div>
      </motion.div>

      {/* Calendar/Bookings View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Widget */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="admin-card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-royal font-bold text-gray-900">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h2>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Simple Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 35 }, (_, i) => {
                const day = i - 3 // Adjust for starting day of month
                const isCurrentMonth = day >= 1 && day <= 31
                const hasBookings = isCurrentMonth && Math.random() > 0.7 // Mock bookings

                return (
                  <div
                    key={i}
                    className={`min-h-[60px] p-2 border border-gray-200 rounded-lg ${
                      isCurrentMonth ? 'bg-white' : 'bg-gray-50'
                    } ${hasBookings ? 'ring-2 ring-royal-200' : ''}`}
                  >
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      {isCurrentMonth ? day : ''}
                    </div>
                    {hasBookings && (
                      <div className="w-2 h-2 bg-royal-500 rounded-full mx-auto"></div>
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Today's Bookings */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="admin-card p-6"
          >
            <h3 className="text-lg font-royal font-bold text-gray-900 mb-4">
              Today's Schedule
            </h3>

            <div className="space-y-3">
              {filteredBookings.slice(0, 5).map(booking => {
                const StatusIcon = getStatusIcon(booking.status)
                return (
                  <div key={booking.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">
                          {booking.title}
                        </h4>
                        <p className="text-xs text-gray-600">{booking.attendee}</p>
                      </div>
                      <StatusIcon className={`w-4 h-4 ${
                        booking.status === 'confirmed' ? 'text-green-500' :
                        booking.status === 'pending' ? 'text-yellow-500' :
                        'text-red-500'
                      }`} />
                    </div>

                    <div className="flex items-center space-x-2 text-xs text-gray-600 mb-2">
                      <Clock className="w-3 h-3" />
                      <span>{formatTime(booking.startTime)} - {formatTime(booking.endTime)}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                      {booking.value > 0 && (
                        <span className="text-xs font-medium text-green-600">
                          ${booking.value}
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}

              {filteredBookings.length === 0 && (
                <div className="text-center py-8">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500 text-sm">No bookings scheduled</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bookings Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="admin-card"
      >
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-royal font-semibold text-gray-900">
            All Bookings
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Booking</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Attendee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBookings.map(booking => {
                const StatusIcon = getStatusIcon(booking.status)
                return (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{booking.title}</div>
                        <div className="text-sm text-gray-500">{booking.eventType}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{booking.attendee}</div>
                        <div className="text-sm text-gray-500">{booking.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <div>{formatDate(booking.startTime)}</div>
                      <div className="text-gray-500">
                        {formatTime(booking.startTime)} - {formatTime(booking.endTime)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-green-600">
                      {booking.value > 0 ? `$${booking.value}` : '-'}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-800">
                          <Phone className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

export default CalendarManager
