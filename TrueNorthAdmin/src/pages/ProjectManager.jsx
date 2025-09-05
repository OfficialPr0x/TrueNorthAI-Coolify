import { motion } from 'framer-motion'
import { 
  Plus, 
  Calendar, 
  Users, 
  Clock,
  CheckCircle,
  AlertCircle,
  Play,
  Pause,
  FolderOpen,
  DollarSign,
  Target
} from 'lucide-react'

const ProjectManager = () => {
  const projects = [
    {
      id: 1,
      name: 'MapleTech AI Implementation',
      client: 'MapleTech Solutions',
      status: 'in-progress',
      priority: 'high',
      progress: 75,
      budget: 45000,
      spent: 33750,
      startDate: '2024-01-15',
      deadline: '2024-02-28',
      team: ['JP', 'SC', 'MT'],
      tasks: {
        completed: 12,
        total: 16
      },
      type: 'DFY'
    },
    {
      id: 2,
      name: 'Northbound Platform Development',
      client: 'Vancouver Mental Health Collective',
      status: 'in-progress',
      priority: 'high',
      progress: 60,
      budget: 8000,
      spent: 4800,
      startDate: '2023-11-20',
      deadline: '2024-01-31',
      team: ['JP', 'MT'],
      tasks: {
        completed: 8,
        total: 12
      },
      type: 'Consulting'
    },
    {
      id: 3,
      name: 'Halifax Logistics AI Strategy',
      client: 'Halifax Logistics Inc.',
      status: 'planning',
      priority: 'medium',
      progress: 15,
      budget: 15000,
      spent: 0,
      startDate: '2024-01-25',
      deadline: '2024-03-15',
      team: ['JP'],
      tasks: {
        completed: 2,
        total: 10
      },
      type: 'Consulting'
    }
  ]

  const getStatusColor = (status) => {
    const colors = {
      'planning': 'bg-yellow-100 text-yellow-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      'review': 'bg-purple-100 text-purple-800',
      'completed': 'bg-green-100 text-green-800',
      'on-hold': 'bg-gray-100 text-gray-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const getPriorityColor = (priority) => {
    const colors = {
      'high': 'bg-red-100 text-red-800',
      'medium': 'bg-yellow-100 text-yellow-800',
      'low': 'bg-green-100 text-green-800'
    }
    return colors[priority] || 'bg-gray-100 text-gray-800'
  }

  const stats = [
    {
      title: 'Active Projects',
      value: projects.filter(p => p.status === 'in-progress').length,
      icon: Play,
      color: 'text-blue-600'
    },
    {
      title: 'Total Revenue',
      value: `$${projects.reduce((sum, project) => sum + project.budget, 0).toLocaleString()}`,
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Avg. Progress',
      value: `${Math.round(projects.reduce((sum, project) => sum + project.progress, 0) / projects.length)}%`,
      icon: Target,
      color: 'text-purple-600'
    },
    {
      title: 'On Schedule',
      value: projects.filter(p => p.status !== 'on-hold').length,
      icon: CheckCircle,
      color: 'text-emerald-600'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-royal font-bold text-gray-900">
            Project Management 🚀
          </h1>
          <p className="text-gray-600 mt-1">
            Track and manage all True North AI projects
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="admin-button flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>New Project</span>
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

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="admin-card p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-royal font-bold text-xl text-gray-900">
                    {project.name}
                  </h3>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                    {project.priority} priority
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-royal-100 text-royal-800">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">Client: {project.client}</p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm text-gray-600">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-royal-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
              {/* Budget */}
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <DollarSign className="w-5 h-5 text-green-600 mx-auto mb-1" />
                <p className="text-sm text-gray-600">Budget</p>
                <p className="font-bold text-gray-900">${project.budget.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Spent: ${project.spent.toLocaleString()}</p>
              </div>

              {/* Timeline */}
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <p className="text-sm text-gray-600">Timeline</p>
                <p className="font-bold text-gray-900">{new Date(project.deadline).toLocaleDateString()}</p>
                <p className="text-xs text-gray-500">Started: {new Date(project.startDate).toLocaleDateString()}</p>
              </div>

              {/* Tasks */}
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                <p className="text-sm text-gray-600">Tasks</p>
                <p className="font-bold text-gray-900">{project.tasks.completed}/{project.tasks.total}</p>
                <p className="text-xs text-gray-500">
                  {Math.round((project.tasks.completed / project.tasks.total) * 100)}% complete
                </p>
              </div>

              {/* Team */}
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Users className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                <p className="text-sm text-gray-600">Team</p>
                <div className="flex justify-center space-x-1 mt-1">
                  {project.team.map((member, memberIndex) => (
                    <div
                      key={memberIndex}
                      className="w-6 h-6 bg-royal-600 rounded-full flex items-center justify-center text-xs text-white font-bold"
                    >
                      {member}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">{project.team.length} members</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                {project.status === 'in-progress' ? (
                  <button className="flex items-center space-x-1 px-3 py-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 text-sm font-medium rounded-lg transition-colors">
                    <Pause className="w-4 h-4" />
                    <span>Pause</span>
                  </button>
                ) : (
                  <button className="flex items-center space-x-1 px-3 py-2 bg-green-100 hover:bg-green-200 text-green-800 text-sm font-medium rounded-lg transition-colors">
                    <Play className="w-4 h-4" />
                    <span>Resume</span>
                  </button>
                )}
                <button className="flex items-center space-x-1 px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium rounded-lg transition-colors">
                  <FolderOpen className="w-4 h-4" />
                  <span>View Details</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>
                  {Math.ceil((new Date(project.deadline) - new Date()) / (1000 * 60 * 60 * 24))} days left
                </span>
              </div>
            </div>
          </motion.div>
        ))}
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
          <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors text-left">
            <Plus className="w-8 h-8 text-blue-600 mb-2" />
            <h4 className="font-medium text-gray-900">New Project</h4>
            <p className="text-sm text-gray-600">Start a new client project</p>
          </button>
          <button className="p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors text-left">
            <Target className="w-8 h-8 text-green-600 mb-2" />
            <h4 className="font-medium text-gray-900">Set Milestones</h4>
            <p className="text-sm text-gray-600">Define project checkpoints</p>
          </button>
          <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors text-left">
            <AlertCircle className="w-8 h-8 text-purple-600 mb-2" />
            <h4 className="font-medium text-gray-900">Review Overdue</h4>
            <p className="text-sm text-gray-600">Check delayed projects</p>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectManager
