const CAL_API_BASE = 'https://api.cal.com/v2'
// TODO: Move to environment variables in production
const CAL_API_KEY = 'cal_live_cc827d6744464504735101c54e7327cc'

// Cal.com API Service
class CalApiService {
  constructor() {
    this.baseURL = CAL_API_BASE
    this.apiKey = CAL_API_KEY
  }

  // Helper method for making API requests
  async makeRequest(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    const config = {
      method: options.method || 'GET',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    }

    if (options.body) {
      config.body = JSON.stringify(options.body)
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        throw new Error(`Cal.com API error: ${response.status} ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Cal.com API request failed:', error)
      throw error
    }
  }

  // Get all event types
  async getEventTypes() {
    return this.makeRequest('/event-types')
  }

  // Get a specific event type
  async getEventType(eventTypeId) {
    return this.makeRequest(`/event-types/${eventTypeId}`)
  }

  // Get available time slots for an event type
  async getAvailableSlots(eventTypeId, dateFrom, dateTo) {
    const params = new URLSearchParams({
      eventTypeId,
      startTime: dateFrom,
      endTime: dateTo
    })
    return this.makeRequest(`/slots?${params}`)
  }

  // Create a booking
  async createBooking(bookingData) {
    return this.makeRequest('/bookings', {
      method: 'POST',
      body: bookingData
    })
  }

  // Get user profile
  async getMe() {
    return this.makeRequest('/me')
  }

  // Get all bookings
  async getBookings() {
    return this.makeRequest('/bookings')
  }

  // Reserve a time slot
  async reserveSlot(slotData) {
    return this.makeRequest('/slots/reserve', {
      method: 'POST',
      body: slotData
    })
  }

  // Get OAuth connect URL for calendar
  async getCalendarConnectUrl() {
    return this.makeRequest('/calendars/connect-url')
  }

  // Get busy times
  async getBusyTimes(startTime, endTime, calendars = []) {
    const params = new URLSearchParams({
      startTime,
      endTime,
      calendars: calendars.join(',')
    })
    return this.makeRequest(`/calendars/busy-times?${params}`)
  }

  // CRM Integration Methods
  async getContacts() {
    return this.makeRequest('/contacts')
  }

  async createContact(contactData) {
    return this.makeRequest('/contacts', {
      method: 'POST',
      body: contactData
    })
  }

  async updateContact(contactId, contactData) {
    return this.makeRequest(`/contacts/${contactId}`, {
      method: 'PATCH',
      body: contactData
    })
  }

  async deleteContact(contactId) {
    return this.makeRequest(`/contacts/${contactId}`, {
      method: 'DELETE'
    })
  }

  // Email Campaigns
  async getEmailCampaigns() {
    return this.makeRequest('/email-campaigns')
  }

  async createEmailCampaign(campaignData) {
    return this.makeRequest('/email-campaigns', {
      method: 'POST',
      body: campaignData
    })
  }

  async sendEmailCampaign(campaignId) {
    return this.makeRequest(`/email-campaigns/${campaignId}/send`, {
      method: 'POST'
    })
  }

  // SMS Campaigns
  async getSMSCampaigns() {
    return this.makeRequest('/sms-campaigns')
  }

  async createSMSCampaign(campaignData) {
    return this.makeRequest('/sms-campaigns', {
      method: 'POST',
      body: campaignData
    })
  }

  async sendSMSCampaign(campaignId) {
    return this.makeRequest(`/sms-campaigns/${campaignId}/send`, {
      method: 'POST'
    })
  }

  // Workflows/Automations
  async getWorkflows() {
    return this.makeRequest('/workflows')
  }

  async createWorkflow(workflowData) {
    return this.makeRequest('/workflows', {
      method: 'POST',
      body: workflowData
    })
  }

  async updateWorkflow(workflowId, workflowData) {
    return this.makeRequest(`/workflows/${workflowId}`, {
      method: 'PATCH',
      body: workflowData
    })
  }

  // Calendar Events
  async getCalendarEvents(calendarId, startDate, endDate) {
    const params = new URLSearchParams({
      startTime: startDate,
      endTime: endDate
    })
    return this.makeRequest(`/calendars/${calendarId}/events?${params}`)
  }

  async createCalendarEvent(calendarId, eventData) {
    return this.makeRequest(`/calendars/${calendarId}/events`, {
      method: 'POST',
      body: eventData
    })
  }

  async updateCalendarEvent(calendarId, eventId, eventData) {
    return this.makeRequest(`/calendars/${calendarId}/events/${eventId}`, {
      method: 'PATCH',
      body: eventData
    })
  }

  // Analytics
  async getAnalytics(startDate, endDate) {
    const params = new URLSearchParams({
      startTime: startDate,
      endTime: endDate
    })
    return this.makeRequest(`/analytics?${params}`)
  }

  async getBookingAnalytics(startDate, endDate) {
    const params = new URLSearchParams({
      startTime: startDate,
      endTime: endDate
    })
    return this.makeRequest(`/analytics/bookings?${params}`)
  }

  // Webhooks
  async getWebhooks() {
    return this.makeRequest('/webhooks')
  }

  async createWebhook(webhookData) {
    return this.makeRequest('/webhooks', {
      method: 'POST',
      body: webhookData
    })
  }

  async deleteWebhook(webhookId) {
    return this.makeRequest(`/webhooks/${webhookId}`, {
      method: 'DELETE'
    })
  }
}

// Export singleton instance
export const calApi = new CalApiService()
export default calApi
