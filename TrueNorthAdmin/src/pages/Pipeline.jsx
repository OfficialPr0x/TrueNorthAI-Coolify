import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  MoreVertical, 
  User, 
  Phone, 
  Mail, 
  Calendar,
  DollarSign,
  Tag,
  Filter,
  Search,
  Edit,
  Trash2,
  Eye
} from 'lucide-react'

const Pipeline = () => {
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@techcorp.ca',
      phone: '+1 (416) 555-0123',
      company: 'TechCorp Solutions',
      value: 15000,
      stage: 'new',
      source: 'Website',
      lastContact: '2024-01-15',
      notes: 'Interested in AI automation for customer service'
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike@innovate.ca',
      phone: '+1 (604) 555-0456',
      company: 'Innovate Digital',
      value: 25000,
      stage: 'qualified',
      source: 'Referral',
      lastContact: '2024-01-14',
      notes: 'Ready to move forward with DFY package'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      email: 'emma@northstar.ca',
      phone: '+1 (403) 555-0789',
      company: 'North Star Consulting',
      value: 8000,
      stage: 'proposal',
      source: 'LinkedIn',
      lastContact: '2024-01-13',
      notes: 'Reviewing proposal, decision expected this week'
    },
    {
      id: 4,
      name: 'David Rodriguez',
      email: 'david@maple.ca',
      phone: '+1 (514) 555-0321',
      company: 'Maple Industries',
      value: 35000,
      stage: 'negotiation',
      source: 'Cold Outreach',
      lastContact: '2024-01-12',
      notes: 'Negotiating contract terms and timeline'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      email: 'lisa@atlantic.ca',
      phone: '+1 (902) 555-0654',
      company: 'Atlantic Ventures',
      value: 18000,
      stage: 'closed-won',
      source: 'Webinar',
      lastContact: '2024-01-10',
      notes: 'Contract signed, project starting next month'
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStage, setSelectedStage] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)

  const stages = [
    { id: 'new', name: 'New Leads', color: 'bg-blue-500', count: 0 },
    { id: 'qualified', name: 'Qualified', color: 'bg-yellow-500', count: 0 },
    { id: 'proposal', name: 'Proposal Sent', color: 'bg-purple-500', count: 0 },
    { id: 'negotiation', name: 'Negotiation', color: 'bg-orange-500', count: 0 },
    { id: 'closed-won', name: 'Closed Won', color: 'bg-green-500', count: 0 },
    { id: 'closed-lost', name: 'Closed Lost', color: 'bg-red-500', count: 0 }
  ]

  // Update stage counts
  useEffect(() => {
    stages.forEach(stage => {
      stage.count = leads.filter(lead => lead.stage === stage.id).length
    })
  }, [leads])

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStage = selectedStage === 'all' || lead.stage === selectedStage
    return matchesSearch && matchesStage
  })

  const totalValue = filteredLeads.reduce((sum, lead) => sum + lead.value, 0)

  const moveLeadToStage = (leadId, newStage) => {
    setLeads(leads.map(lead => 
      lead.id === leadId ? { ...lead, stage: newStage } : lead
    ))
  }

  const deleteLead = (leadId) => {
    setLeads(leads.filter(lead => lead.id !== leadId))
  }

  const getStageColor = (stageId) => {
    const stage = stages.find(s => s.id === stageId)
    return stage ? stage.color : 'bg-gray-500'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-royal font-bold text-gray-900">Lead Pipeline</h1>
          <p className="text-gray-600">Manage and track your leads through the sales process</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-royal-600 text-white px-4 py-2 rounded-lg hover:bg-royal-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Lead</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="admin-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Leads</p>
              <p className="text-2xl font-bold text-gray-900">{leads.length}</p>
            </div>
            <User className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="admin-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pipeline Value</p>
              <p className="text-2xl font-bold text-gray-900">${totalValue.toLocaleString()}</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="admin-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">24%</p>
            </div>
            <Tag className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        <div className="admin-card p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Deal Size</p>
              <p className="text-2xl font-bold text-gray-900">${Math.round(totalValue / leads.length).toLocaleString()}</p>
            </div>
            <Calendar className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="admin-card p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedStage}
            onChange={(e) => setSelectedStage(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-500 focus:border-transparent"
          >
            <option value="all">All Stages</option>
            {stages.map(stage => (
              <option key={stage.id} value={stage.id}>
                {stage.name} ({stage.count})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Pipeline Board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stages.map(stage => (
          <div key={stage.id} className="admin-card p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                <h3 className="font-semibold text-gray-900 text-sm">{stage.name}</h3>
              </div>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {stage.count}
              </span>
            </div>
            
            <div className="space-y-3">
              {leads
                .filter(lead => lead.stage === stage.id)
                .map(lead => (
                  <motion.div
                    key={lead.id}
                    layout
                    className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900 text-sm">{lead.name}</h4>
                      <div className="relative">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">{lead.company}</p>
                    <p className="text-xs text-green-600 font-medium">${lead.value.toLocaleString()}</p>
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                      <span>{lead.source}</span>
                      <span>{new Date(lead.lastContact).toLocaleDateString()}</span>
                    </div>
                  </motion.div>
                ))
              }
            </div>
          </div>
        ))}
      </div>

      {/* Leads Table (Alternative View) */}
      <div className="admin-card">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Lead Details</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stage</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Source</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Contact</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredLeads.map(lead => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                      <div className="text-sm text-gray-500">{lead.email}</div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{lead.company}</td>
                  <td className="px-4 py-3 text-sm font-medium text-green-600">${lead.value.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${getStageColor(lead.stage)}`}>
                      {stages.find(s => s.id === lead.stage)?.name}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">{lead.source}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{new Date(lead.lastContact).toLocaleDateString()}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => deleteLead(lead.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Pipeline

