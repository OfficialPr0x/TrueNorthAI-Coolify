# SEO Panel Data Integration Guide

## 🔄 Current Implementation

The SEO Panel currently uses **mock data** that simulates real SEO metrics. Here's how it works:

```javascript
// In SEOPanel.jsx - Current Implementation
useEffect(() => {
  const fetchSEOData = async () => {
    setIsLoading(true)
    try {
      // Try real API first
      const data = await seoService.getAllSEOData()
      setSeoData(data)
    } catch (error) {
      // Fallback to mock data if API fails
      setSeoData(mockData)
    } finally {
      setIsLoading(false)
    }
  }
  fetchSEOData()
}, [])
```

## 🚀 Real Data Integration Options

### Option 1: Google Analytics 4 + Search Console (Recommended)

#### 1. **Google Analytics 4 Setup**
```javascript
// Update seoService.js
async getTrafficData() {
  const response = await fetch('https://analytics.googleapis.com/v4/properties/YOUR_PROPERTY_ID:runReport', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GA4_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'sessionDefaultChannelGrouping' }],
      metrics: [{ name: 'sessions' }, { name: 'totalUsers' }]
    })
  })
  return response.json()
}
```

#### 2. **Google Search Console Setup**
```javascript
async getKeywordRankings() {
  const response = await fetch('https://www.googleapis.com/webmasters/v3/sites/https%3A%2F%2Ftruenorthai.group%2F/searchAnalytics/query', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GSC_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      dimensions: ['query'],
      rowLimit: 100
    })
  })
  return response.json()
}
```

### Option 2: Third-Party SEO Tools

#### SEMrush API Integration
```javascript
async getKeywordRankings() {
  const response = await fetch('https://api.semrush.com/?type=phrase_this&key=YOUR_API_KEY&phrase=AI+consulting&database=us')
  return response.json()
}
```

#### Ahrefs API Integration
```javascript
async getBacklinkData() {
  const response = await fetch('https://api.ahrefs.com/v2/site-explorer/backlinks?target=truenorthai.group&token=YOUR_API_KEY')
  return response.json()
}
```

### Option 3: Custom Backend API

#### Backend Integration
```javascript
// Create /api/seo endpoint in your backend
async getAllSEOData() {
  const response = await fetch('/api/seo/dashboard-data')
  if (!response.ok) {
    throw new Error('Failed to fetch SEO data')
  }
  return response.json()
}
```

## 🔧 Environment Variables Setup

Create `.env.local` in the admin directory:

```env
# Google Analytics
VITE_GA4_PROPERTY_ID=your_property_id
VITE_GA4_CLIENT_ID=your_client_id
VITE_GA4_CLIENT_SECRET=your_client_secret

# Google Search Console
VITE_GSC_SITE_URL=https://truenorthai.group
VITE_GSC_CLIENT_ID=your_client_id
VITE_GSC_CLIENT_SECRET=your_client_secret

# SEMrush (Alternative)
VITE_SEMRUSH_API_KEY=your_api_key

# Ahrefs (Alternative)
VITE_AHREFS_API_KEY=your_api_key
```

## 📊 Data Mapping

### Current Mock Data Structure
```javascript
{
  overview: {
    overallScore: 78,
    trafficChange: 12.5,
    keywordRankings: 24,
    backlinks: 156,
    pageSpeed: 85,
    mobileScore: 92
  },
  pages: [...],
  keywords: [...],
  recommendations: [...]
}
```

### Real API Data Mapping
```javascript
// Google Analytics Response → Overview
GA4_response.rows.forEach(row => {
  if (row.dimensionValues[0].value === 'Organic Search') {
    overview.organicTraffic = parseInt(row.metricValues[0].value)
  }
})

// Google Search Console Response → Keywords
GSC_response.rows.forEach(row => {
  keywords.push({
    keyword: row.keys[0],
    position: row.position,
    clicks: row.clicks,
    impressions: row.impressions
  })
})
```

## 🔄 Auto-Refresh & Caching

### Implement Data Caching
```javascript
// Add to seoService.js
const CACHE_DURATION = 1000 * 60 * 30 // 30 minutes

class SEOService {
  constructor() {
    this.cache = new Map()
  }

  async getCachedData(key, fetchFunction) {
    const cached = this.cache.get(key)
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return cached.data
    }

    const data = await fetchFunction()
    this.cache.set(key, { data, timestamp: Date.now() })
    return data
  }

  async getTrafficData() {
    return this.getCachedData('traffic', async () => {
      // Your API call here
    })
  }
}
```

## 🎯 Quick Start Integration

### Step 1: Choose Your Data Source
1. **Google Analytics 4** (Free, recommended)
2. **SEMrush** (Paid, comprehensive)
3. **Ahrefs** (Paid, backlink focused)

### Step 2: Get API Credentials
1. Create project in Google Cloud Console
2. Enable Analytics API and Search Console API
3. Generate OAuth 2.0 credentials
4. Add credentials to environment variables

### Step 3: Update Service
1. Replace mock API calls in `seoService.js`
2. Map API responses to expected data structure
3. Add error handling and fallbacks
4. Test with real data

### Step 4: Deploy & Monitor
1. Deploy updated admin panel
2. Monitor API rate limits
3. Set up alerts for API failures
4. Schedule regular data refreshes

## 🚨 Important Notes

### Rate Limits
- **Google Analytics**: 10,000 requests/day free
- **Google Search Console**: 5,000 requests/day
- **SEMrush**: Varies by plan
- **Ahrefs**: Varies by plan

### Data Freshness
- **Real-time data**: Not available from most APIs
- **Daily updates**: Google Search Console
- **Hourly updates**: Google Analytics
- **Weekly updates**: Most third-party tools

### Error Handling
```javascript
try {
  const data = await apiCall()
  return data
} catch (error) {
  console.error('API Error:', error)
  // Return cached data or mock data
  return getFallbackData()
}
```

## 📈 Next Steps

1. **Choose your preferred data source**
2. **Set up API credentials**
3. **Update the seoService.js file**
4. **Test with real data**
5. **Deploy and monitor**

The SEO Panel is now ready to display real data once you integrate your preferred APIs! 🎯
