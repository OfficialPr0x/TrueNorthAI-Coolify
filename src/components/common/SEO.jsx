import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEO = ({
  title,
  description,
  keywords,
  image = "https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757285058/Screenshot_2025-09-07_182252_g5knbj.png",
  url,
  type = "website",
  article
}) => {
  const location = useLocation()
  const siteUrl = "https://truenorthai.com"
  const currentUrl = url || `${siteUrl}${location.pathname}`

  useEffect(() => {
    // Update document title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)

      if (element) {
        element.setAttribute('content', content)
      } else {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        element.setAttribute('content', content)
        document.head.appendChild(element)
      }
    }

    // Update or create link tags
    const updateLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`)

      if (element) {
        element.setAttribute('href', href)
      } else {
        element = document.createElement('link')
        element.setAttribute('rel', rel)
        element.setAttribute('href', href)
        document.head.appendChild(element)
      }
    }

    // Primary meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateLinkTag('canonical', currentUrl)

    // Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:url', currentUrl, true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:image:width', '1200', true)
    updateMetaTag('og:image:height', '630', true)
    updateMetaTag('og:image:alt', `${title} - True North AI`, true)

    // Twitter tags
    updateMetaTag('twitter:title', title, true)
    updateMetaTag('twitter:description', description, true)
    updateMetaTag('twitter:image', image, true)
    updateMetaTag('twitter:url', currentUrl, true)

    // Article specific tags (for blog posts)
    if (type === 'article' && article) {
      updateMetaTag('article:published_time', article.publishedTime, true)
      updateMetaTag('article:modified_time', article.modifiedTime, true)
      updateMetaTag('article:author', article.author, true)
      updateMetaTag('article:section', article.section, true)
      if (article.tags) {
        article.tags.forEach(tag => {
          updateMetaTag('article:tag', tag, true)
        })
      }
    }

    // Update structured data for specific pages
    let structuredData = null

    if (location.pathname === '/') {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "True North AI",
        "url": siteUrl,
        "logo": "https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757106723/logo_2_mtcs2m.png",
        "description": description,
        "foundingDate": "2024",
        "founders": [
          {
            "@type": "Person",
            "name": "Jaryd Paquette",
            "jobTitle": "Founder & Chief AI Architect"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "CA"
        },
        "knowsAbout": [
          "Artificial Intelligence",
          "Machine Learning",
          "AI Consulting",
          "Cybersecurity",
          "Enterprise Solutions"
        ]
      }
    } else if (location.pathname === '/team') {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "True North AI Team",
        "url": `${siteUrl}/team`,
        "description": description,
        "member": [
          {
            "@type": "Person",
            "name": "Jaryd Paquette",
            "jobTitle": "Founder & Chief AI Architect",
            "image": "https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757286285/480915276_1207102460982174_7213407615650576209_n_rohbcy.jpg"
          },
          {
            "@type": "Person",
            "name": "Gavin Williams",
            "jobTitle": "Co-Founder & Growth Architect",
            "image": "https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757285699/541734346_1120496356190113_9018162841045591862_n_lgaarg.jpg"
          },
          {
            "@type": "Person",
            "name": "Curtis Shaw",
            "jobTitle": "Head of Product & Design"
          },
          {
            "@type": "Person",
            "name": "Chris Bain",
            "jobTitle": "VP of Operations"
          },
          {
            "@type": "Person",
            "name": "Guilliaume Couture",
            "jobTitle": "Lead AI Engineer"
          },
          {
            "@type": "Person",
            "name": "Sabik Tawsif",
            "jobTitle": "AI Research Scientist"
          },
          {
            "@type": "Person",
            "name": "Harry Daniel Price",
            "jobTitle": "Strategic Relationships Manager",
            "image": "https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757292755/464087716_8653744111351797_7862541738659338804_n_k8yz8y.jpg"
          }
        ]
      }
    } else if (location.pathname.startsWith('/services')) {
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title,
        "description": description,
        "provider": {
          "@type": "Organization",
          "name": "True North AI"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Canada"
        }
      }
    }

    // Update or create structured data script
    if (structuredData) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]')

      if (!scriptElement) {
        scriptElement = document.createElement('script')
        scriptElement.type = 'application/ld+json'
        document.head.appendChild(scriptElement)
      }

      scriptElement.textContent = JSON.stringify(structuredData)
    }

  }, [title, description, keywords, image, currentUrl, type, article, location.pathname])

  return null // This component doesn't render anything
}

export default SEO
