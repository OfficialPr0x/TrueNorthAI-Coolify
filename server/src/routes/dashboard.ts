import { Router, Request, Response } from 'express'
import { db } from '../config/database'
import { contacts, bookings, teams, users } from '../models/schema'
import { eq, count, sum, sql } from 'drizzle-orm'
import { authenticate, requireTeamAccess } from '../middleware/auth'
import { ApiResponse } from '../types'

const router = Router()

// Apply authentication to all routes
router.use(authenticate)
router.use(requireTeamAccess)

// GET /api/dashboard/stats - Get dashboard statistics
router.get('/stats', async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      } as ApiResponse)
    }

    const teamId = req.user.teamId

    // Get total contacts
    const [contactsResult] = await db
      .select({ count: count() })
      .from(contacts)
      .where(teamId ? eq(contacts.teamId, teamId) : undefined)

    // Get active clients (status = 'active')
    const [activeClientsResult] = await db
      .select({ count: count() })
      .from(contacts)
      .where(sql`${contacts.status} = 'active' ${teamId ? sql`AND ${contacts.teamId} = ${teamId}` : ''}`)

    // Get total bookings
    const [bookingsResult] = await db
      .select({ count: count() })
      .from(bookings)
      .where(teamId ? eq(bookings.teamId, teamId) : undefined)

    // Get total revenue
    const [revenueResult] = await db
      .select({ total: sum(bookings.value) })
      .from(bookings)
      .where(teamId ? eq(bookings.teamId, teamId) : undefined)

    // Get team members count
    const [teamMembersResult] = await db
      .select({ count: count() })
      .from(users)
      .where(teamId ? eq(users.teamId, teamId) : undefined)

    const stats = {
      totalContacts: contactsResult?.count || 0,
      activeClients: activeClientsResult?.count || 0,
      totalBookings: bookingsResult?.count || 0,
      totalRevenue: revenueResult?.total || 0,
      teamMembers: teamMembersResult?.count || 0,
      // Placeholder values for now
      revenueChange: '+0%',
      clientsChange: '+0',
      conversionRate: 0
    }

    res.json({
      success: true,
      data: stats
    } as ApiResponse)
  } catch (error) {
    console.error('Get dashboard stats error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch dashboard statistics'
    } as ApiResponse)
  }
})

// GET /api/dashboard/recent-activity - Get recent activity
router.get('/recent-activity', async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      } as ApiResponse)
    }

    const teamId = req.user.teamId

    // Get recent contacts
    const recentContacts = await db
      .select({
        id: contacts.id,
        name: sql<string>`CONCAT(${contacts.firstName}, ' ', ${contacts.lastName})`,
        email: contacts.email,
        createdAt: contacts.createdAt
      })
      .from(contacts)
      .where(teamId ? eq(contacts.teamId, teamId) : undefined)
      .orderBy(sql`${contacts.createdAt} DESC`)
      .limit(5)

    // Get recent bookings
    const recentBookings = await db
      .select({
        id: bookings.id,
        attendeeName: bookings.attendeeName,
        startTime: bookings.startTime,
        status: bookings.status
      })
      .from(bookings)
      .where(teamId ? eq(bookings.teamId, teamId) : undefined)
      .orderBy(sql`${bookings.createdAt} DESC`)
      .limit(5)

    const activity = [
      ...recentContacts.map(contact => ({
        type: 'contact',
        title: `New contact: ${contact.name}`,
        description: contact.email,
        timestamp: contact.createdAt
      })),
      ...recentBookings.map(booking => ({
        type: 'booking',
        title: `New booking: ${booking.attendeeName}`,
        description: `Status: ${booking.status}`,
        timestamp: booking.startTime
      }))
    ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
     .slice(0, 10)

    res.json({
      success: true,
      data: activity
    } as ApiResponse)
  } catch (error) {
    console.error('Get recent activity error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch recent activity'
    } as ApiResponse)
  }
})

export default router
