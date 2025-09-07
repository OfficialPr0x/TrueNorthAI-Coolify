import { InferSelectModel, InferInsertModel } from 'drizzle-orm'
import * as schema from '../models/schema'

// User Types
export type User = InferSelectModel<typeof schema.users>
export type NewUser = InferInsertModel<typeof schema.users>
export type UserProfile = Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'role' | 'avatar'>

// Team Types
export type Team = InferSelectModel<typeof schema.teams>
export type NewTeam = InferInsertModel<typeof schema.teams>

// Contact Types
export type Contact = InferSelectModel<typeof schema.contacts>
export type NewContact = InferInsertModel<typeof schema.contacts>

// Booking Types
export type Booking = InferSelectModel<typeof schema.bookings>
export type NewBooking = InferInsertModel<typeof schema.bookings>

// Campaign Types
export type Campaign = InferSelectModel<typeof schema.campaigns>
export type NewCampaign = InferInsertModel<typeof schema.campaigns>

// Workflow Types
export type Workflow = InferSelectModel<typeof schema.workflows>
export type NewWorkflow = InferInsertModel<typeof schema.workflows>

// Pipeline Types
export type Lead = InferSelectModel<typeof schema.leads>
export type NewLead = InferInsertModel<typeof schema.leads>

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Authentication Types
export interface AuthUser {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'admin' | 'manager' | 'agent'
  teamId?: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  firstName: string
  lastName: string
  teamName?: string
}

// Cal.com Integration Types
export interface CalEventType {
  id: string
  title: string
  description?: string
  duration: number
  price?: number
  currency?: string
}

export interface CalBooking {
  id: string
  eventTypeId: string
  attendeeEmail: string
  attendeeName: string
  startTime: string
  endTime: string
  status: 'confirmed' | 'pending' | 'cancelled'
  notes?: string
}

// Email Campaign Types
export interface EmailCampaign {
  id: string
  name: string
  subject: string
  content: string
  status: 'draft' | 'scheduled' | 'sending' | 'sent'
  scheduledAt?: string
  sentAt?: string
  recipientCount: number
  openRate: number
  clickRate: number
}

// Workflow Types
export interface WorkflowTrigger {
  type: 'contact_created' | 'booking_confirmed' | 'email_opened' | 'form_submitted'
  conditions?: Record<string, any>
}

export interface WorkflowAction {
  type: 'send_email' | 'send_sms' | 'update_contact' | 'create_task'
  config: Record<string, any>
  delay?: number // minutes
}

export interface WorkflowDefinition {
  id: string
  name: string
  description?: string
  triggers: WorkflowTrigger[]
  actions: WorkflowAction[]
  isActive: boolean
}

// Team Management Types
export interface TeamMember {
  id: string
  userId: string
  teamId: string
  role: 'owner' | 'admin' | 'member'
  permissions: string[]
  joinedAt: string
}

export interface TeamSettings {
  id: string
  teamId: string
  name: string
  description?: string
  logo?: string
  settings: Record<string, any>
}

// Dashboard Analytics Types
export interface DashboardStats {
  totalContacts: number
  totalBookings: number
  totalRevenue: number
  activeCampaigns: number
  conversionRate: number
  teamMembers: number
}

export interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    backgroundColor?: string
    borderColor?: string
  }[]
}
