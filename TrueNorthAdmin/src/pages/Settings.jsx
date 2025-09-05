import { motion } from 'framer-motion'
import { 
  User, 
  Bell, 
  Shield, 
  Database,
  Globe,
  Palette,
  Key,
  Mail,
  Calendar,
  Save
} from 'lucide-react'

const Settings = () => {
  const settingsSections = [
    {
      title: 'Profile Settings',
      icon: User,
      description: 'Manage your personal information and preferences',
      settings: [
        { name: 'Full Name', value: 'Jaryd Paquette', type: 'text' },
        { name: 'Email', value: 'jaryd@truenorthai.com', type: 'email' },
        { name: 'Title', value: 'Founder & CEO', type: 'text' },
        { name: 'Bio', value: 'Battle-tested AI systems architect with a decade of cybersecurity experience.', type: 'textarea' }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      description: 'Configure how and when you receive notifications',
      settings: [
        { name: 'Email Notifications', value: true, type: 'toggle' },
        { name: 'Blog Comments', value: true, type: 'toggle' },
        { name: 'New Client Inquiries', value: true, type: 'toggle' },
        { name: 'Project Updates', value: false, type: 'toggle' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      description: 'Protect your account and data',
      settings: [
        { name: 'Two-Factor Authentication', value: true, type: 'toggle' },
        { name: 'Login Alerts', value: true, type: 'toggle' },
        { name: 'Session Timeout', value: '30 minutes', type: 'select', options: ['15 minutes', '30 minutes', '1 hour', '4 hours'] },
        { name: 'Password', value: '••••••••••••', type: 'password' }
      ]
    },
    {
      title: 'Blog Settings',
      icon: Globe,
      description: 'Configure blog and content management settings',
      settings: [
        { name: 'Auto-publish', value: false, type: 'toggle' },
        { name: 'AI Content Assistance', value: true, type: 'toggle' },
        { name: 'SEO Auto-generation', value: true, type: 'toggle' },
        { name: 'Comment Moderation', value: true, type: 'toggle' }
      ]
    },
    {
      title: 'API & Integrations',
      icon: Database,
      description: 'Manage external services and API keys',
      settings: [
        { name: 'OpenRouter API Key', value: 'sk-•••••••••••••••••••••••••••••••••', type: 'password' },
        { name: 'UploadThing Secret', value: 'ut_•••••••••••••••••••••••••••••••', type: 'password' },
        { name: 'PostHog API Key', value: 'phc_•••••••••••••••••••••••••••••••', type: 'password' },
        { name: 'Cal.com Integration', value: true, type: 'toggle' }
      ]
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-royal font-bold text-gray-900">
            Settings ⚙️
          </h1>
          <p className="text-gray-600 mt-1">
            Configure your True North Admin dashboard
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="admin-button flex items-center space-x-2"
        >
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </motion.button>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingsSections.map((section, sectionIndex) => {
          const Icon = section.icon
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="admin-card p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-royal-100 rounded-xl">
                  <Icon className="w-6 h-6 text-royal-600" />
                </div>
                <div>
                  <h2 className="text-xl font-royal font-bold text-gray-900">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {section.settings.map((setting, settingIndex) => (
                  <div key={settingIndex} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-900 mb-1">
                        {setting.name}
                      </label>
                    </div>
                    <div className="flex-1 max-w-md">
                      {setting.type === 'text' && (
                        <input
                          type="text"
                          defaultValue={setting.value}
                          className="admin-input"
                        />
                      )}
                      {setting.type === 'email' && (
                        <input
                          type="email"
                          defaultValue={setting.value}
                          className="admin-input"
                        />
                      )}
                      {setting.type === 'password' && (
                        <input
                          type="password"
                          defaultValue={setting.value}
                          className="admin-input"
                        />
                      )}
                      {setting.type === 'textarea' && (
                        <textarea
                          defaultValue={setting.value}
                          className="admin-textarea"
                          rows={3}
                        />
                      )}
                      {setting.type === 'select' && (
                        <select defaultValue={setting.value} className="admin-select">
                          {setting.options?.map((option, optionIndex) => (
                            <option key={optionIndex} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      )}
                      {setting.type === 'toggle' && (
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked={setting.value}
                            className="sr-only"
                          />
                          <div className={`relative w-11 h-6 rounded-full transition-colors ${
                            setting.value ? 'bg-royal-600' : 'bg-gray-300'
                          }`}>
                            <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                              setting.value ? 'translate-x-5' : 'translate-x-0'
                            }`}></div>
                          </div>
                        </label>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors text-left">
            <Key className="w-8 h-8 text-blue-600 mb-2" />
            <h4 className="font-medium text-gray-900">Generate API Key</h4>
            <p className="text-sm text-gray-600">Create new API access key</p>
          </button>
          <button className="p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors text-left">
            <Database className="w-8 h-8 text-green-600 mb-2" />
            <h4 className="font-medium text-gray-900">Export Data</h4>
            <p className="text-sm text-gray-600">Download your data backup</p>
          </button>
          <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors text-left">
            <Calendar className="w-8 h-8 text-purple-600 mb-2" />
            <h4 className="font-medium text-gray-900">Schedule Maintenance</h4>
            <p className="text-sm text-gray-600">Plan system updates</p>
          </button>
        </div>
      </motion.div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="admin-card p-6 border-red-200 bg-red-50"
      >
        <h3 className="font-royal font-semibold text-red-900 mb-4">
          Danger Zone
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-red-900">Reset All Settings</h4>
              <p className="text-sm text-red-600">Restore all settings to default values</p>
            </div>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors">
              Reset
            </button>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-red-200">
            <div>
              <h4 className="font-medium text-red-900">Clear All Data</h4>
              <p className="text-sm text-red-600">Permanently delete all blog posts and client data</p>
            </div>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors">
              Clear Data
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Settings
