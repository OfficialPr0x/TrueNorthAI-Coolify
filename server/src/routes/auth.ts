import { Router, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'
import { authService } from '../services/authService'
import { authenticate } from '../middleware/auth'
import { ApiResponse } from '../types'

const router = Router()

// Validation rules
const loginValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 })
]

const registerValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  body('firstName').isLength({ min: 1, max: 100 }),
  body('lastName').isLength({ min: 1, max: 100 })
]

// Login route
router.post('/login', loginValidation, async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      } as ApiResponse)
    }

    const { email, password } = req.body
    const result = await authService.login({ email, password })

    if (!result) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      } as ApiResponse)
    }

    res.json({
      success: true,
      message: 'Login successful',
      data: result
    } as ApiResponse)
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    } as ApiResponse)
  }
})

// Register route
router.post('/register', registerValidation, async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      } as ApiResponse)
    }

    const { email, password, firstName, lastName } = req.body
    const result = await authService.register({ email, password, firstName, lastName })

    if (!result) {
      return res.status(400).json({
        success: false,
        message: 'Registration failed'
      } as ApiResponse)
    }

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      data: result
    } as ApiResponse)
  } catch (error) {
    console.error('Registration error:', error)

    // Check if it's a duplicate email error
    if (error instanceof Error && error.message.includes('duplicate key')) {
      return res.status(409).json({
        success: false,
        message: 'Email already exists'
      } as ApiResponse)
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error'
    } as ApiResponse)
  }
})

// Get current user profile
router.get('/me', authenticate, async (req: Request, res: Response) => {
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
      message: 'Internal server error'
    } as ApiResponse)
  }
})

// Refresh token
router.post('/refresh', authenticate, async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      } as ApiResponse)
    }

    const token = authService.generateToken(req.user)

    res.json({
      success: true,
      message: 'Token refreshed',
      data: { token }
    } as ApiResponse)
  } catch (error) {
    console.error('Token refresh error:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    } as ApiResponse)
  }
})

// Change password
router.post('/change-password', authenticate, [
  body('currentPassword').isLength({ min: 1 }),
  body('newPassword').isLength({ min: 8 })
], async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      } as ApiResponse)
    }

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      } as ApiResponse)
    }

    const { currentPassword, newPassword } = req.body

    // Verify current password
    const loginResult = await authService.login({
      email: req.user.email,
      password: currentPassword
    })

    if (!loginResult) {
      return res.status(400).json({
        success: false,
        message: 'Current password is incorrect'
      } as ApiResponse)
    }

    // Update password
    const success = await authService.updatePassword(req.user.id, newPassword)

    if (!success) {
      return res.status(500).json({
        success: false,
        message: 'Failed to update password'
      } as ApiResponse)
    }

    res.json({
      success: true,
      message: 'Password updated successfully'
    } as ApiResponse)
  } catch (error) {
    console.error('Change password error:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    } as ApiResponse)
  }
})

export default router
