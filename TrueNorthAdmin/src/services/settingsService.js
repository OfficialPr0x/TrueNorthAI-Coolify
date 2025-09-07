// Settings Service for managing application configuration
class SettingsService {
  constructor() {
    this.storageKey = 'tnm_settings'
    this.defaultSettings = {
      apiKeys: {
        openai: '',
        googleAnalytics: '',
        googleSearchConsole: '',
        semrush: '',
        ahrefs: ''
      },
      preferences: {
        theme: 'light',
        notifications: true,
        autoRefresh: true,
        refreshInterval: 300000 // 5 minutes
      },
      integrations: {
        enabled: [],
        configurations: {}
      }
    }
  }

  // Load settings from localStorage
  loadSettings() {
    try {
      const stored = localStorage.getItem(this.storageKey)
      if (stored) {
        const parsedSettings = JSON.parse(stored)
        return { ...this.defaultSettings, ...parsedSettings }
      }
    } catch (error) {
      console.error('Error loading settings:', error)
    }
    return { ...this.defaultSettings }
  }

  // Save settings to localStorage
  saveSettings(settings) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(settings))
      return true
    } catch (error) {
      console.error('Error saving settings:', error)
      return false
    }
  }

  // Update specific setting
  updateSetting(category, key, value) {
    const settings = this.loadSettings()
    if (!settings[category]) {
      settings[category] = {}
    }
    settings[category][key] = value
    return this.saveSettings(settings)
  }

  // Get specific setting
  getSetting(category, key, defaultValue = null) {
    const settings = this.loadSettings()
    return settings[category]?.[key] || defaultValue
  }

  // Get API key
  getApiKey(provider) {
    return this.getSetting('apiKeys', provider, '')
  }

  // Set API key
  setApiKey(provider, key) {
    return this.updateSetting('apiKeys', provider, key)
  }

  // Validate API key format
  validateApiKey(provider, key) {
    if (!key || key.trim() === '') return false

    switch (provider) {
      case 'openai':
        return key.startsWith('sk-') && key.length > 20
      case 'googleAnalytics':
        return key.startsWith('GA') || key.startsWith('G-')
      case 'googleSearchConsole':
        return key.includes('googleusercontent') || key.includes('googleapis')
      default:
        return key.length > 10
    }
  }

  // Test API key connectivity
  async testApiKey(provider, key) {
    try {
      switch (provider) {
        case 'openai':
          const response = await fetch('https://api.openai.com/v1/models', {
            headers: { 'Authorization': `Bearer ${key}` }
          })
          return response.ok

        case 'googleAnalytics':
          // Mock test for Google Analytics
          return key.length > 10

        case 'googleSearchConsole':
          // Mock test for Search Console
          return key.length > 10

        default:
          return true
      }
    } catch (error) {
      console.error(`API key test failed for ${provider}:`, error)
      return false
    }
  }

  // Export settings
  exportSettings() {
    const settings = this.loadSettings()
    return {
      exportDate: new Date().toISOString(),
      version: '1.0',
      settings: settings
    }
  }

  // Import settings
  importSettings(importData) {
    try {
      if (importData.settings) {
        return this.saveSettings(importData.settings)
      }
      return false
    } catch (error) {
      console.error('Error importing settings:', error)
      return false
    }
  }

  // Reset settings to defaults
  resetSettings() {
    return this.saveSettings({ ...this.defaultSettings })
  }

  // Get settings summary for display
  getSettingsSummary() {
    const settings = this.loadSettings()
    const apiKeysCount = Object.values(settings.apiKeys).filter(key => key && key.trim() !== '').length
    const integrationsCount = settings.integrations.enabled.length

    return {
      apiKeysConfigured: apiKeysCount,
      integrationsEnabled: integrationsCount,
      totalSettings: Object.keys(settings).length,
      lastUpdated: new Date().toISOString()
    }
  }
}

// Export singleton instance
export const settingsService = new SettingsService()
export default settingsService
