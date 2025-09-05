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
}

// Export singleton instance
export const calApi = new CalApiService()
export default calApi
