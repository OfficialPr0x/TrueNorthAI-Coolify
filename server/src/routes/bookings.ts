import { Router, Request, Response } from 'express'
import { authenticate } from '../middleware/auth'
import { ApiResponse } from '../types'

const router = Router()

// Apply authentication to all routes
router.use(authenticate)

// GET /api/bookings - Get all bookings
router.get('/', async (req: Request, res: Response) => {
  try {
    // Get bookings logic here
    res.json({
      success: true,
      data: [],
      message: 'Bookings endpoint ready'
    } as ApiResponse)
  } catch (error) {
    console.error('Get bookings error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch bookings'
    } as ApiResponse)
  }
})

export default router
