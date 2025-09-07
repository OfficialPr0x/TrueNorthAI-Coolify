import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
import { createServer } from 'http'
import { Server } from 'socket.io'

// Import configurations and middleware
import { db, testConnection, closeConnection } from './config/database'
import { errorHandler } from './middleware/errorHandler'
import { logger } from './utils/logger'

// Import routes
import authRoutes from './routes/auth'
import userRoutes from './routes/users'
import contactRoutes from './routes/contacts'
import bookingRoutes from './routes/bookings'
import campaignRoutes from './routes/campaigns'
import workflowRoutes from './routes/workflows'
import teamRoutes from './routes/teams'
import dashboardRoutes from './routes/dashboard'

// Load environment variables
dotenv.config()

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
})

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
})

// Middleware
app.use(helmet())
app.use(compression())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))
app.use('/api', limiter)

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  })
})

// API Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/contacts', contactRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/campaigns', campaignRoutes)
app.use('/api/workflows', workflowRoutes)
app.use('/api/teams', teamRoutes)
app.use('/api/dashboard', dashboardRoutes)

// Webhook routes (no rate limiting)
app.use('/webhooks', require('./routes/webhooks').default)

// Error handling middleware
app.use(errorHandler)

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id)

  socket.on('join-team', (teamId: string) => {
    socket.join(`team-${teamId}`)
    console.log(`User joined team: ${teamId}`)
  })

  socket.on('join-user', (userId: string) => {
    socket.join(`user-${userId}`)
    console.log(`User joined personal room: ${userId}`)
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id)
  })
})

// Global socket instance
export { io }

// Start server
const PORT = process.env.PORT || 3001

const startServer = async () => {
  try {
    // Test database connection
    const dbConnected = await testConnection()
    if (!dbConnected) {
      throw new Error('Database connection failed')
    }

    server.listen(PORT, () => {
      logger.info(`🚀 TrueNorth Agency API Server running on port ${PORT}`)
      logger.info(`📊 Environment: ${process.env.NODE_ENV || 'development'}`)
      logger.info(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`)
    })
  } catch (error) {
    logger.error('Failed to start server:', error)
    process.exit(1)
  }
}

// Graceful shutdown
process.on('SIGTERM', async () => {
  logger.info('SIGTERM received, shutting down gracefully')
  await closeConnection()
  server.close(() => {
    logger.info('Server closed')
    process.exit(0)
  })
})

process.on('SIGINT', async () => {
  logger.info('SIGINT received, shutting down gracefully')
  await closeConnection()
  server.close(() => {
    logger.info('Server closed')
    process.exit(0)
  })
})

startServer()
