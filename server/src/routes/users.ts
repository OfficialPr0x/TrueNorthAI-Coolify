import { Router, Request, Response } from 'express'
import { authenticate } from '../middleware/auth'
import { ApiResponse } from '../types'

const router = Router()

// Apply authentication to all routes
router.use(authenticate)

// GET /api/users/profile - Get current user profile
router.get('/profile', async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      } as ApiResponse)
    }

    res.json({
      success: true,
      data: req.user
    } as ApiResponse)
  } catch (error) {
    console.error('Get profile error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to get profile'
    } as ApiResponse)
  }
})

// PUT /api/users/profile - Update current user profile
router.put('/profile', async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      } as ApiResponse)
    }

    // Update user profile logic here
    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: req.user
    } as ApiResponse)
  } catch (error) {
    console.error('Update profile error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to update profile'
    } as ApiResponse)
  }
})

export default router
