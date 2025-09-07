import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core'
import { relations } from 'drizzle-orm'

// Users Table
export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  avatar: text('avatar'),
  role: text('role').notNull().default('agent'), // admin, manager, agent
  teamId: text('team_id'),
  isActive: integer('is_active').notNull().default(1),
  lastLogin: integer('last_login', { mode: 'timestamp' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull()
})

// Teams Table
export const teams = sqliteTable('teams', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  logo: text('logo'),
  ownerId: text('owner_id'),
  settings: text('settings').default('{}'),
  isActive: integer('is_active').notNull().default(1),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull()
})

// Contacts Table
export const contacts = sqliteTable('contacts', {
  id: text('id').primaryKey(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  email: text('email').notNull(),
  phone: text('phone'),
  company: text('company'),
  location: text('location'),
  source: text('source'),
  tags: text('tags').default('[]'),
  customFields: text('custom_fields').default('{}'),
  totalValue: text('total_value').default('0'),
  status: text('status').default('lead'), // lead, prospect, active, inactive
  rating: integer('rating').default(0),
  notes: text('notes'),
  teamId: text('team_id'),
  assignedTo: text('assigned_to'),
  lastContact: integer('last_contact', { mode: 'timestamp' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull()
})

// Bookings Table
export const bookings = sqliteTable('bookings', {
  id: text('id').primaryKey(),
  calId: text('cal_id'), // Cal.com booking ID
  eventTypeId: text('event_type_id'),
  attendeeEmail: text('attendee_email').notNull(),
  attendeeName: text('attendee_name').notNull(),
  startTime: integer('start_time', { mode: 'timestamp' }).notNull(),
  endTime: integer('end_time', { mode: 'timestamp' }).notNull(),
  status: text('status').default('confirmed'), // confirmed, pending, cancelled
  notes: text('notes'),
  value: text('value').default('0'),
  contactId: text('contact_id'),
  assignedTo: text('assigned_to'),
  teamId: text('team_id'),
  metadata: text('metadata').default('{}'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull()
})

// Leads Table (Pipeline)
export const leads = sqliteTable('leads', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  company: text('company'),
  phone: text('phone'),
  value: real('value').default(0),
  stage: text('stage').default('new'),
  source: text('source'),
  notes: text('notes'),
  tags: text('tags').default('[]'),
  contactId: text('contact_id'),
  assignedTo: text('assigned_to'),
  teamId: text('team_id'),
  lastContact: integer('last_contact', { mode: 'timestamp' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull()
})

// Additional tables can be added here as needed

// Relations
export const usersRelations = relations(users, ({ one, many }) => ({
  team: one(teams, {
    fields: [users.teamId],
    references: [teams.id]
  }),
  ownedTeams: many(teams),
  contacts: many(contacts),
  bookings: many(bookings),
  leads: many(leads)
  // campaigns: many(campaigns), // TODO: Add when campaigns table is defined
  // workflows: many(workflows), // TODO: Add when workflows table is defined
  // tasks: many(tasks), // TODO: Add when tasks table is defined
  // assignedTasks: many(tasks)
}))

export const teamsRelations = relations(teams, ({ one, many }) => ({
  owner: one(users, {
    fields: [teams.ownerId],
    references: [users.id]
  }),
  members: many(users),
  contacts: many(contacts),
  bookings: many(bookings),
  leads: many(leads)
  // campaigns: many(campaigns), // TODO: Add when campaigns table is defined
  // workflows: many(workflows), // TODO: Add when workflows table is defined
  // tasks: many(tasks) // TODO: Add when tasks table is defined
}))

export const contactsRelations = relations(contacts, ({ one, many }) => ({
  team: one(teams, {
    fields: [contacts.teamId],
    references: [teams.id]
  }),
  assignedTo: one(users, {
    fields: [contacts.assignedTo],
    references: [users.id]
  }),
  bookings: many(bookings),
  lead: one(leads, {
    fields: [contacts.id],
    references: [leads.contactId]
  })
}))

export const bookingsRelations = relations(bookings, ({ one }) => ({
  contact: one(contacts, {
    fields: [bookings.contactId],
    references: [contacts.id]
  }),
  assignedTo: one(users, {
    fields: [bookings.assignedTo],
    references: [users.id]
  }),
  team: one(teams, {
    fields: [bookings.teamId],
    references: [teams.id]
  })
}))

export const leadsRelations = relations(leads, ({ one }) => ({
  contact: one(contacts, {
    fields: [leads.contactId],
    references: [contacts.id] // Fixed: was leads.id, should be contacts.id
  }),
  assignedTo: one(users, {
    fields: [leads.assignedTo],
    references: [users.id]
  }),
  team: one(teams, {
    fields: [leads.teamId],
    references: [teams.id] // Fixed: was leads.id, should be teams.id
  })
}))
