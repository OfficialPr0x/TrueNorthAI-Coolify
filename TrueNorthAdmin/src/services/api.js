const API_BASE_URL = 'http://localhost:3001/api'

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL
    this.token = localStorage.getItem('authToken')
  }

  // Set auth token
  setToken(token) {
    this.token = token
    localStorage.setItem('authToken', token)
  }

  // Remove auth token
  removeToken() {
    this.token = null
    localStorage.removeItem('authToken')
  }

  // Get auth headers
  getHeaders() {
    const headers = {
      'Content-Type': 'application/json'
    }

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`
    }

    return headers
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const config = {
      headers: this.getHeaders(),
      ...options
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        // Handle unauthorized
        if (response.status === 401) {
          this.removeToken()
          window.location.href = '/login'
          throw new Error('Unauthorized')
        }

        const error = await response.json()
        throw new Error(error.message || 'API request failed')
      }

      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  // Authentication methods
  async login(credentials) {
    const response = await fetch(`${this.baseURL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    })

    if (!response.ok) {
      throw new Error('Login failed')
    }

    const data = await response.json()
    if (data.success && data.data.token) {
      this.setToken(data.data.token)
    }

    return data
  }

  async register(userData) {
    const response = await fetch(`${this.baseURL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })

    if (!response.ok) {
      throw new Error('Registration failed')
    }

    const data = await response.json()
    if (data.success && data.data.token) {
      this.setToken(data.data.token)
    }

    return data
  }

  async getCurrentUser() {
    return this.request('/auth/me')
  }

  // Dashboard methods
  async getDashboardStats() {
    return this.request('/dashboard/stats')
  }

  // Contact methods
  async getContacts(params = {}) {
    const queryString = new URLSearchParams(params).toString()
    return this.request(`/contacts?${queryString}`)
  }

  async createContact(contactData) {
    return this.request('/contacts', {
      method: 'POST',
      body: JSON.stringify(contactData)
    })
  }

  async updateContact(id, contactData) {
    return this.request(`/contacts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(contactData)
    })
  }

  async deleteContact(id) {
    return this.request(`/contacts/${id}`, {
      method: 'DELETE'
    })
  }

  // Booking methods
  async getBookings(params = {}) {
    const queryString = new URLSearchParams(params).toString()
    return this.request(`/bookings?${queryString}`)
  }

  async createBooking(bookingData) {
    return this.request('/bookings', {
      method: 'POST',
      body: JSON.stringify(bookingData)
    })
  }

  // Campaign methods
  async getCampaigns() {
    return this.request('/campaigns')
  }

  async createCampaign(campaignData) {
    return this.request('/campaigns', {
      method: 'POST',
      body: JSON.stringify(campaignData)
    })
  }

  // User methods
  async getProfile() {
    return this.request('/users/profile')
  }

  async updateProfile(userData) {
    return this.request('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(userData)
    })
  }
}

// Export singleton instance
export const apiService = new ApiService()
export default apiService
