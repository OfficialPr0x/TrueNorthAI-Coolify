import { Request, Response, NextFunction } from 'express'
import { authService } from '../services/authService'
import { AuthUser } from '../types'

// Extend Express Request interface
declare global {
  namespace Express {
    interface Request {
      user?: AuthUser
    }
  }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Access token required'
      })
    }

    const token = authHeader.substring(7) // Remove 'Bearer ' prefix
    const user = authService.verifyToken(token)

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired token'
      })
    }

    // Attach user to request
    req.user = user
    next()
  } catch (error) {
    console.error('Authentication error:', error)
    return res.status(500).json({
      success: false,
      message: 'Authentication failed'
    })
  }
}

export const requireRole = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      })
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Insufficient permissions'
      })
    }

    next()
  }
}

export const requireTeamAccess = (req: Request, res: Response, next: NextFunction) => {
  // This middleware ensures users can only access resources from their team
  // Implementation depends on your team structure
  // For now, just pass through
  next()
}
