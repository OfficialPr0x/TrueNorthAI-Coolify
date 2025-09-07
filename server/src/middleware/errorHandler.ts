import { Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'
import { ApiResponse } from '../types'

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log the error
  logger.error('Error occurred:', {
    message: error.message,
    stack: error.stack,
    url: req.url,
    method: req.method,
    ip: req.ip,
    userAgent: req.get('User-Agent')
  })

  // Don't leak error details in production
  const isDevelopment = process.env.NODE_ENV === 'development'

  const response: ApiResponse = {
    success: false,
    message: isDevelopment ? error.message : 'Internal server error',
    error: isDevelopment ? error.stack : undefined
  }

  // Determine appropriate status code
  let statusCode = 500

  if (error.name === 'ValidationError') {
    statusCode = 400
  } else if (error.name === 'UnauthorizedError') {
    statusCode = 401
  } else if (error.name === 'ForbiddenError') {
    statusCode = 403
  } else if (error.name === 'NotFoundError') {
    statusCode = 404
  }

  res.status(statusCode).json(response)
}

// Async error wrapper
export const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}

// Custom error classes
export class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ValidationError'
  }
}

export class UnauthorizedError extends Error {
  constructor(message: string = 'Unauthorized') {
    super(message)
    this.name = 'UnauthorizedError'
  }
}

export class ForbiddenError extends Error {
  constructor(message: string = 'Forbidden') {
    super(message)
    this.name = 'ForbiddenError'
  }
}

export class NotFoundError extends Error {
  constructor(message: string = 'Not found') {
    super(message)
    this.name = 'NotFoundError'
  }
}
