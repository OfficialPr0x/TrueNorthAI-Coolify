import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { db } from '../config/database'
import { users } from '../models/schema'
import { eq } from 'drizzle-orm'
import { AuthUser, LoginRequest, RegisterRequest } from '../types'

export class AuthService {
  private jwtSecret = process.env.JWT_SECRET || 'fallback-secret-change-in-production'
  private jwtExpiresIn = process.env.JWT_EXPIRES_IN || '7d'

  // Hash password
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 12
    return bcrypt.hash(password, saltRounds)
  }

  // Verify password
  async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword)
  }

  // Generate JWT token
  generateToken(user: AuthUser): string {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        teamId: user.teamId
      },
      this.jwtSecret,
      { expiresIn: this.jwtExpiresIn }
    )
  }

  // Verify JWT token
  verifyToken(token: string): AuthUser | null {
    try {
      const decoded = jwt.verify(token, this.jwtSecret) as any
      return {
        id: decoded.id,
        email: decoded.email,
        firstName: decoded.firstName,
        lastName: decoded.lastName,
        role: decoded.role,
        teamId: decoded.teamId
      }
    } catch (error) {
      return null
    }
  }

  // Login user
  async login(credentials: LoginRequest): Promise<{ user: AuthUser; token: string } | null> {
    try {
      const [user] = await db
        .select({
          id: users.id,
          email: users.email,
          password: users.password,
          firstName: users.firstName,
          lastName: users.lastName,
          role: users.role,
          teamId: users.teamId,
          isActive: users.isActive
        })
        .from(users)
        .where(eq(users.email, credentials.email))
        .limit(1)

      if (!user || !user.isActive) {
        return null
      }

      const isValidPassword = await this.verifyPassword(credentials.password, user.password)
      if (!isValidPassword) {
        return null
      }

      // Update last login
      await db
        .update(users)
        .set({ lastLogin: new Date() })
        .where(eq(users.id, user.id))

      const authUser: AuthUser = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        teamId: user.teamId
      }

      const token = this.generateToken(authUser)

      return { user: authUser, token }
    } catch (error) {
      console.error('Login error:', error)
      return null
    }
  }

  // Register new user
  async register(userData: RegisterRequest): Promise<{ user: AuthUser; token: string } | null> {
    try {
      const hashedPassword = await this.hashPassword(userData.password)

      const [newUser] = await db
        .insert(users)
        .values({
          email: userData.email,
          password: hashedPassword,
          firstName: userData.firstName,
          lastName: userData.lastName,
          role: 'admin' // First user is admin
        })
        .returning({
          id: users.id,
          email: users.email,
          firstName: users.firstName,
          lastName: users.lastName,
          role: users.role
        })

      if (!newUser) {
        return null
      }

      const authUser: AuthUser = {
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        role: newUser.role
      }

      const token = this.generateToken(authUser)

      return { user: authUser, token }
    } catch (error) {
      console.error('Registration error:', error)
      return null
    }
  }

  // Get user by ID
  async getUserById(id: string): Promise<AuthUser | null> {
    try {
      const [user] = await db
        .select({
          id: users.id,
          email: users.email,
          firstName: users.firstName,
          lastName: users.lastName,
          role: users.role,
          teamId: users.teamId,
          isActive: users.isActive
        })
        .from(users)
        .where(eq(users.id, id))
        .limit(1)

      if (!user || !user.isActive) {
        return null
      }

      return {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        teamId: user.teamId
      }
    } catch (error) {
      console.error('Get user by ID error:', error)
      return null
    }
  }

  // Update user password
  async updatePassword(userId: string, newPassword: string): Promise<boolean> {
    try {
      const hashedPassword = await this.hashPassword(newPassword)

      await db
        .update(users)
        .set({ password: hashedPassword, updatedAt: new Date() })
        .where(eq(users.id, userId))

      return true
    } catch (error) {
      console.error('Update password error:', error)
      return false
    }
  }
}

export const authService = new AuthService()
