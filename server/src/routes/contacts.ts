import { Router, Request, Response } from 'express'
import { body, param, validationResult } from 'express-validator'
import { db } from '../config/database'
import { contacts } from '../models/schema'
import { eq, and, ilike, desc } from 'drizzle-orm'
import { authenticate, requireTeamAccess } from '../middleware/auth'
import { ApiResponse, PaginatedResponse } from '../types'

const router = Router()

// Apply authentication to all routes
router.use(authenticate)
router.use(requireTeamAccess)

// Validation rules
const contactValidation = [
  body('email').isEmail().normalizeEmail(),
  body('firstName').optional().isLength({ min: 1, max: 100 }),
  body('lastName').optional().isLength({ min: 1, max: 100 }),
  body('phone').optional().isLength({ min: 1, max: 50 }),
  body('company').optional().isLength({ min: 1, max: 255 })
]

// GET /api/contacts - Get all contacts with pagination and filtering
router.get('/', async (req: Request, res: Response) => {
  try {
    const {
      page = 1,
      limit = 20,
      search,
      status,
      tag,
      teamId
    } = req.query

    const offset = (Number(page) - 1) * Number(limit)
    const whereConditions = []

    // Add search condition
    if (search) {
      whereConditions.push(
        ilike(contacts.firstName, `%${search}%`)
      )
    }

    // Add status filter
    if (status && status !== 'all') {
      whereConditions.push(eq(contacts.status, status as string))
    }

    // Add team filter
    if (teamId) {
      whereConditions.push(eq(contacts.teamId, teamId as string))
    }

    // Build where clause
    const whereClause = whereConditions.length > 0
      ? and(...whereConditions)
      : undefined

    // Get contacts
    const contactsList = await db
      .select()
      .from(contacts)
      .where(whereClause)
      .orderBy(desc(contacts.createdAt))
      .limit(Number(limit))
      .offset(offset)

    // Get total count
    const [{ count }] = await db
      .select({ count: contacts.id })
      .from(contacts)
      .where(whereClause)

    const response: PaginatedResponse = {
      success: true,
      data: contactsList,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: Number(count),
        totalPages: Math.ceil(Number(count) / Number(limit))
      }
    }

    res.json(response)
  } catch (error) {
    console.error('Get contacts error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    } as ApiResponse)
  }
})

// POST /api/contacts - Create new contact
router.post('/', contactValidation, async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      } as ApiResponse)
    }

    const contactData = {
      ...req.body,
      teamId: req.user?.teamId,
      createdBy: req.user?.id
    }

    const [newContact] = await db
      .insert(contacts)
      .values(contactData)
      .returning()

    res.status(201).json({
      success: true,
      message: 'Contact created successfully',
      data: newContact
    } as ApiResponse)
  } catch (error) {
    console.error('Create contact error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to create contact'
    } as ApiResponse)
  }
})

// GET /api/contacts/:id - Get contact by ID
router.get('/:id', [
  param('id').isUUID()
], async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Invalid contact ID',
        errors: errors.array()
      } as ApiResponse)
    }

    const [contact] = await db
      .select()
      .from(contacts)
      .where(eq(contacts.id, req.params.id))
      .limit(1)

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      } as ApiResponse)
    }

    res.json({
      success: true,
      data: contact
    } as ApiResponse)
  } catch (error) {
    console.error('Get contact error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact'
    } as ApiResponse)
  }
})

// PUT /api/contacts/:id - Update contact
router.put('/:id', [
  param('id').isUUID(),
  ...contactValidation
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

    const updateData = {
      ...req.body,
      updatedAt: new Date()
    }

    const [updatedContact] = await db
      .update(contacts)
      .set(updateData)
      .where(eq(contacts.id, req.params.id))
      .returning()

    if (!updatedContact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      } as ApiResponse)
    }

    res.json({
      success: true,
      message: 'Contact updated successfully',
      data: updatedContact
    } as ApiResponse)
  } catch (error) {
    console.error('Update contact error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to update contact'
    } as ApiResponse)
  }
})

// DELETE /api/contacts/:id - Delete contact
router.delete('/:id', [
  param('id').isUUID()
], async (req: Request, res: Response) => {
  try {
    const [deletedContact] = await db
      .delete(contacts)
      .where(eq(contacts.id, req.params.id))
      .returning()

    if (!deletedContact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      } as ApiResponse)
    }

    res.json({
      success: true,
      message: 'Contact deleted successfully'
    } as ApiResponse)
  } catch (error) {
    console.error('Delete contact error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to delete contact'
    } as ApiResponse)
  }
})

export default router
