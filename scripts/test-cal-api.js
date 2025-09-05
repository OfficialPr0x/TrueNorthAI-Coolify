// Using built-in fetch (Node.js 18+)

const CAL_API_BASE = 'https://api.cal.com/v2'
const CAL_API_KEY = 'cal_live_cc827d6744464504735101c54e7327cc'

async function testCalApi() {
  console.log('🧪 Testing Cal.com API integration...\n')

  try {
    // Test 1: Get user profile
    console.log('1️⃣ Testing user profile endpoint...')
    const meResponse = await fetch(`${CAL_API_BASE}/me`, {
      headers: {
        'Authorization': `Bearer ${CAL_API_KEY}`,
        'Content-Type': 'application/json'
      }
    })

    if (meResponse.ok) {
      const meData = await meResponse.json()
      console.log('✅ User profile:', meData)
    } else {
      console.log('❌ User profile failed:', meResponse.status, meResponse.statusText)
    }

    // Test 2: Get event types
    console.log('\n2️⃣ Testing event types endpoint...')
    const eventTypesResponse = await fetch(`${CAL_API_BASE}/event-types`, {
      headers: {
        'Authorization': `Bearer ${CAL_API_KEY}`,
        'Content-Type': 'application/json'
      }
    })

    if (eventTypesResponse.ok) {
      const eventTypesData = await eventTypesResponse.json()
      console.log('✅ Event types:', eventTypesData.eventTypes?.length || 0, 'found')

      // Show first few event types
      if (eventTypesData.eventTypes?.length > 0) {
        console.log('📅 Available event types:')
        eventTypesData.eventTypes.slice(0, 3).forEach(et => {
          console.log(`   - ${et.title} (${et.slug})`)
        })
      }
    } else {
      console.log('❌ Event types failed:', eventTypesResponse.status, eventTypesResponse.statusText)
    }

    // Test 3: Get bookings (if any)
    console.log('\n3️⃣ Testing bookings endpoint...')
    const bookingsResponse = await fetch(`${CAL_API_BASE}/bookings`, {
      headers: {
        'Authorization': `Bearer ${CAL_API_KEY}`,
        'Content-Type': 'application/json'
      }
    })

    if (bookingsResponse.ok) {
      const bookingsData = await bookingsResponse.json()
      console.log('✅ Bookings:', bookingsData.bookings?.length || 0, 'found')
    } else {
      console.log('❌ Bookings failed:', bookingsResponse.status, bookingsResponse.statusText)
    }

    console.log('\n🎉 Cal.com API test completed!')

  } catch (error) {
    console.error('❌ API test failed:', error.message)
  }
}

// Run the test
testCalApi()
