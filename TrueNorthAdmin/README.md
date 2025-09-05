# True North Admin Dashboard

🔥 **GHOSTWRITER OPS - AI-Powered Business Management Dashboard** 🔥

A comprehensive admin dashboard for managing True North AI's business operations, including AI-powered blog management, client tracking, project oversight, and analytics.

## 🚀 Features

### 📝 **GHOSTWRITER OPS (Blog Management)**
- **AI-Powered Content Generation** - Create blog posts with authentic voice
- **Rich Editor** - Markdown support with live preview
- **SEO Optimization** - Auto-generated meta tags and descriptions
- **Scheduling** - Publish posts at optimal times
- **Analytics** - Track views, engagement, and conversions

### 👥 **Client Management**
- **Client Profiles** - Complete contact and project history
- **Revenue Tracking** - Monitor earnings and project values
- **Relationship Management** - Track interactions and follow-ups
- **Tier Classification** - Enterprise, Professional, Non-profit segments

### 📊 **Project Management**
- **Project Tracking** - Monitor progress and milestones
- **Budget Management** - Track spending vs. allocated budgets
- **Team Assignment** - Manage project team members
- **Timeline Oversight** - Deadlines and delivery tracking

### 📈 **Analytics Dashboard**
- **Traffic Analytics** - Website visitors and page views
- **Blog Performance** - Content engagement metrics
- **Revenue Insights** - Business performance indicators
- **Client Metrics** - Satisfaction and retention tracking

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS with custom True North AI theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Editor**: Tiptap (Rich text editing)
- **Notifications**: React Hot Toast
- **Charts**: Recharts (for analytics)
- **Date Handling**: date-fns

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ and npm
- The main True North AI site running on port 3000

### Installation

1. **Navigate to the admin directory:**
   ```bash
   cd TrueNorthAdmin
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the dashboard:**
   Open [http://localhost:3001](http://localhost:3001) in your browser

### Default Login
- **User**: Jaryd Paquette (JP)
- **Role**: Founder & CEO
- **Access**: Full admin privileges

## 📁 Project Structure

```
TrueNorthAdmin/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── AdminLayout.jsx     # Main dashboard layout
│   │   └── blog/
│   │       └── AIWriterModal.jsx   # AI content generation
│   ├── pages/
│   │   ├── Dashboard.jsx           # Main dashboard overview
│   │   ├── BlogManager.jsx         # Blog post management
│   │   ├── PostEditor.jsx          # Blog post editor with AI
│   │   ├── ClientManager.jsx       # Client relationship management
│   │   ├── ProjectManager.jsx      # Project tracking
│   │   ├── Analytics.jsx           # Performance analytics
│   │   └── Settings.jsx            # Admin configuration
│   ├── hooks/
│   └── utils/
├── public/
└── package.json
```

## 🎨 Design System

The dashboard uses True North AI's brand colors and design language:

- **Primary**: Royal blues (#4c596d to #7d92b3)
- **Secondary**: Crown golds (#b8935a to #eab848)
- **Typography**: Playfair Display (Royal) + Inter (Modern)
- **Components**: Custom Tailwind utilities with royal-card, admin-button styles

## 🔗 Integration with Main Site

The admin dashboard connects to the main True North AI website:

- **Blog Content**: Posts created in admin appear on `/blog` routes
- **Analytics**: Tracks main site performance and engagement
- **Client Data**: Syncs with contact forms and inquiries
- **API Proxy**: Vite proxy forwards `/api` calls to main site (port 3000)

## 🤖 AI Features (GHOSTWRITER OPS)

### AI Content Generation
- **Voice Matching**: Generates content in Jaryd's authentic, battle-tested voice
- **SEO Optimization**: Includes keyword targeting and meta generation
- **Multiple Modes**: Draft, polish, hooks, and social media formats
- **Persona Options**: Canadian founder, AI expert, recovery advocate, cybersecurity pro

### Content Templates
- **Blog Posts**: Long-form articles with proper structure
- **Case Studies**: Client success story templates
- **Social Content**: Twitter threads and LinkedIn posts
- **Technical Content**: AI and cybersecurity focused pieces

## 📊 Analytics & Tracking

The dashboard provides comprehensive insights:

- **Traffic Sources**: Organic, direct, social, referral breakdown
- **Content Performance**: Blog post views, engagement, conversions
- **Client Metrics**: Revenue, project success, satisfaction scores
- **Business KPIs**: Growth trends, pipeline health, team productivity

## 🔒 Security Features

Built with security-first principles:

- **Authentication**: Secure login with session management
- **Role-Based Access**: Different permission levels for team members
- **Data Protection**: Encrypted sensitive information
- **Audit Trails**: Track all administrative actions
- **API Security**: Secure communication with main site

## 🚀 Deployment

### Development
```bash
npm run dev    # Start development server on port 3001
```

### Production Build
```bash
npm run build  # Create optimized production build
npm run preview # Preview production build locally
```

### Environment Variables
Create a `.env` file for production:
```env
VITE_API_BASE_URL=https://your-main-site.com
VITE_OPENROUTER_API_KEY=your-openrouter-key
VITE_UPLOAD_SECRET=your-upload-secret
```

## 🛡️ Battle-Tested Philosophy

This dashboard embodies True North AI's core philosophy:

- **Built from Real Need**: Every feature addresses actual business pain points
- **Security First**: Cybersecurity principles applied to admin interface
- **Canadian Focus**: Designed for Canadian business culture and regulations
- **Authentic Voice**: AI generation maintains Jaryd's genuine, experienced tone
- **A MARE AD MARE**: Serves the full scope of True North AI's operations

## 📞 Support

For technical support or feature requests:
- **Email**: admin@truenorthai.com
- **Internal**: Slack #admin-dashboard channel
- **Documentation**: Internal wiki for detailed procedures

---

**A MARE AD MARE** - From sea to sea, this dashboard empowers True North AI to scale with battle-tested efficiency. 🇨🇦💪
