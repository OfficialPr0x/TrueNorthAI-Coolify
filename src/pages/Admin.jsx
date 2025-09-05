import { useState } from 'react'
import TeamLoginPortal from '../components/admin/TeamLoginPortal'

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLoginSuccess = () => {
    setIsAuthenticated(true)
    
    // Determine the admin dashboard URL based on environment
    const adminUrl = process.env.NODE_ENV === 'production' 
      ? '/admin-dashboard'  // Admin dashboard is served at /admin-dashboard in production
      : 'http://localhost:3001'

    // Redirect to admin dashboard after successful login
    setTimeout(() => {
      window.location.href = adminUrl
    }, 500)
  }

  if (!isAuthenticated) {
    return <TeamLoginPortal onLoginSuccess={handleLoginSuccess} />
  }

  // Loading state after authentication
  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-50 via-white to-crown-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <img 
            src="https://res.cloudinary.com/dyrwj6iwl/image/upload/v1757106723/logo_2_mtcs2m.png" 
            alt="True North AI" 
            className="w-24 h-24 mx-auto mb-4 opacity-90"
          />
        </div>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-royal-600 mx-auto"></div>
        <p className="mt-6 text-lg text-royal-700 font-medium">Redirecting to Admin Dashboard...</p>
        <p className="mt-2 text-sm text-royal-500">Authentication successful</p>
      </div>
    </div>
  )
}

export default Admin
