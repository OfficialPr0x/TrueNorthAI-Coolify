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

## 📞 Support

For any questions or customization needs, contact the True North AI development team.

---

## 🔒 SSL/HTTPS Configuration

Your application is now configured to support HTTPS. Here's what you need to do for production:

### Option 1: Using Let's Encrypt (Recommended)

If you're using Coolify or another platform that supports automatic SSL:

1. **Enable SSL in your deployment platform**
   - Coolify: Go to your service settings and enable "SSL" or "HTTPS"
   - This will automatically obtain and renew Let's Encrypt certificates

### Option 2: Manual SSL Certificate Setup

If you need to provide your own certificates:

1. **Obtain SSL certificates** from a trusted CA (Certificate Authority)
2. **Mount certificates in Docker**:
   ```bash
   docker run -v /path/to/fullchain.pem:/etc/ssl/certs/cert.pem \
              -v /path/to/privkey.pem:/etc/ssl/private/key.pem \
              your-app
   ```

3. **Update nginx.conf** to point to your certificate paths:
   ```nginx
   ssl_certificate /etc/ssl/certs/cert.pem;
   ssl_certificate_key /etc/ssl/private/key.pem;
   ```

### Current Configuration

- ✅ HTTP to HTTPS redirect configured
- ✅ SSL/TLS protocols: TLSv1.2, TLSv1.3
- ✅ Security headers added (HSTS, X-Frame-Options, etc.)
- ✅ HTTP/2 support enabled
- ⚠️  Using self-signed certificates (replace with real certificates for production)

### Testing SSL

After deployment, test your SSL setup:
```bash
curl -I https://truenorthai.group
openssl s_client -connect truenorthai.group:443 -servername truenorthai.group
```

The browser warning should disappear once you have valid SSL certificates installed.

**Built with Royal Excellence** 👑
