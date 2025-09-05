import { useEffect, useState } from 'react'

const Admin = () => {
  const [isRedirecting, setIsRedirecting] = useState(true)

  useEffect(() => {
    // Determine the admin dashboard URL based on environment
    const adminUrl = process.env.NODE_ENV === 'production' 
      ? '/admin-dashboard'  // This would need to be configured in production
      : 'http://localhost:3001'

    // Add a small delay for better UX
    const timer = setTimeout(() => {
      window.location.href = adminUrl
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-50 via-white to-crown-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <img 
            src="/logo.png" 
            alt="True North AI" 
            className="w-24 h-24 mx-auto mb-4 opacity-90"
          />
        </div>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-royal-600 mx-auto"></div>
        <p className="mt-6 text-lg text-royal-700 font-medium">Redirecting to Admin Dashboard...</p>
        <p className="mt-2 text-sm text-royal-500">Please wait a moment</p>
      </div>
    </div>
  )
}

export default Admin
