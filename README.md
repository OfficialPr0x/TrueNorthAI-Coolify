# True North AI - Royal Website

A premium, royal-themed website for True North AI, featuring elegant design, smooth animations, and conversion-focused layouts.

## 🏰 Features

- **Royal Design System**: Elegant color palette with gold, royal blue, and emerald accents
- **Smooth Animations**: Framer Motion powered animations throughout
- **Responsive Design**: Fully responsive across all devices
- **Conversion Optimized**: FOMO elements, testimonials, and strategic CTA placements
- **Premium Typography**: Cinzel, Playfair Display, and Inter font combinations
- **Multi-Page Architecture**: Complete website with all service pages

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Shared components
│   ├── home/            # Homepage sections
│   └── layout/          # Header, Footer
├── pages/               # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── DFYServices.jsx
│   ├── Consulting.jsx
│   ├── Speaking.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Design System

### Colors
- **Royal**: Primary brand colors (#b8935a to #322518)
- **Crown**: Accent colors (#f27527 to #41150b)
- **Emerald**: Success/highlight colors (#10b981 to #022c22)

### Typography
- **Royal**: Cinzel (headings)
- **Elegant**: Playfair Display (subheadings)
- **Modern**: Inter (body text)

### Components
- Royal buttons with gradient backgrounds
- Floating animations and hover effects
- Glass morphism cards
- Shimmer text effects

## 📱 Pages

1. **Homepage**: Hero, stats, features, services preview, testimonials, CTA
2. **About**: Company story, values, team, achievements
3. **Services**: Overview of all services with packages
4. **DFY Services**: Complete Done-For-You AI solutions
5. **Consulting**: Strategic AI consulting services
6. **Speaking**: Keynotes, workshops, and events
7. **Contact**: Contact form and information

## 🎯 Conversion Features

- Urgency indicators and limited availability messaging
- Social proof through testimonials and stats
- Clear value propositions and ROI guarantees
- Multiple CTA placements throughout pages
- Trust signals and security badges
- Pricing transparency with package options

## 🔧 Technologies

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icons

## 🎭 Animations

- Fade in/out transitions
- Slide up/down effects
- Scale and rotate hover states
- Floating elements
- Shimmer text effects
- Parallax backgrounds

## 📈 Performance

- Optimized images and assets
- Lazy loading for components
- Minimal bundle size
- Fast loading animations
- Smooth 60fps animations

## 🛡️ Security & Privacy

- Contact form with privacy consent
- Secure data handling practices
- GDPR compliant design
- Professional confidentiality messaging

## 📅 Booking System

### Cal.com Integration
Your website includes a fully integrated booking system powered by Cal.com:

- **Elite Strategy Sessions**: Direct booking for premium consultations
- **API Integration**: Full Cal.com API v2 integration with live API key
- **Smart Routing**: Automatically finds and redirects to the correct event type
- **Fallback System**: Email contact fallback if API fails
- **Error Handling**: Comprehensive error handling and user feedback

### Booking Features
- ✅ Real-time availability checking
- ✅ Automatic event type detection
- ✅ Secure booking redirects
- ✅ Loading states and error handling
- ✅ Email fallback for reliability

### Cal.com Setup
The system is configured with your production API key (`cal_live_cc827d6744464504735101c54e7327cc`) and will:
- ✅ Fetch available event types automatically
- ✅ Redirect users to the appropriate booking page
- ✅ Handle API failures gracefully with email fallback
- ✅ Maintain user experience even during outages
- ✅ API connectivity tested and verified

**Current Status:**
- 🔗 Connected to: team@truenorthai.group
- 📅 Event Types: Ready for configuration
- 📧 Contact: team@truenorthai.group

## 📞 Support

For any questions or customization needs, contact the True North AI development team.

---

## 🔒 SSL/HTTPS Configuration

Your application is configured to work with Coolify's automatic SSL termination. Coolify handles SSL at the reverse proxy level, so your application container serves HTTP while Coolify manages HTTPS.

### Coolify SSL Setup (Current Configuration)

1. **SSL is handled by Coolify's reverse proxy**
   - Coolify automatically obtains Let's Encrypt certificates
   - SSL termination happens at the Coolify proxy level
   - Your application container serves HTTP on port 80

2. **Enable SSL in Coolify:**
   - Go to your service in Coolify dashboard
   - Enable SSL/HTTPS in the service settings
   - Coolify will automatically handle certificate renewal

### Current Configuration

- ✅ Optimized for Coolify SSL termination
- ✅ Security headers added (HSTS, X-Frame-Options, etc.)
- ✅ HTTP/2 support through Coolify proxy
- ✅ Automatic Let's Encrypt certificate management via Coolify

### Testing SSL

After deployment with Coolify SSL enabled, test your setup:
```bash
curl -I https://truenorthai.group
openssl s_client -connect truenorthai.group:443 -servername truenorthai.group
```

The SSL certificate warning should be resolved once Coolify provisions the Let's Encrypt certificate.

**Built with Royal Excellence** 👑
