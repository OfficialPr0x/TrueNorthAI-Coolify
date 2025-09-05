import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { existsSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const port = process.env.PORT || 4173

// Serve static files from dist directory
app.use(express.static(join(__dirname, 'dist')))

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK')
})

// Handle admin dashboard routes
app.get('/admin-dashboard*', (req, res) => {
  const adminIndexPath = join(__dirname, 'dist', 'admin-dashboard', 'index.html')
  if (existsSync(adminIndexPath)) {
    res.sendFile(adminIndexPath)
  } else {
    res.status(404).send('Admin dashboard not found')
  }
})

// Handle all other routes (SPA fallback)
app.get('*', (req, res) => {
  const indexPath = join(__dirname, 'dist', 'index.html')
  if (existsSync(indexPath)) {
    res.sendFile(indexPath)
  } else {
    res.status(404).send('Application not built')
  }
})

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 True North AI server running on port ${port}`)
  console.log(`📱 Main site: http://localhost:${port}`)
  console.log(`🔐 Admin: http://localhost:${port}/admin`)
  console.log(`⚡ Admin dashboard: http://localhost:${port}/admin-dashboard`)
})
