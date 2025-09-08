import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import path from 'path'
import * as schema from '../models/schema'
import bcrypt from 'bcryptjs'

// Create SQLite database
const dbPath = path.join(process.cwd(), 'database.sqlite')
const sqlite = new Database(dbPath)

// Create drizzle instance
const db = drizzle(sqlite, { schema })

async function seedDatabase() {
  try {
    console.log('🌱 Seeding database with initial data...')

    // Create default admin user
    const hashedPassword = await bcrypt.hash('admin123', 12)

    await db.insert(schema.users).values({
      email: 'team@truenorthai.group',
      password: hashedPassword,
      firstName: 'Jaryd',
      lastName: 'Paquette',
      role: 'admin'
    })

    console.log('✅ Created admin user: team@truenorthai.group')

    // Create sample contacts
    const sampleContacts = [
      {
        firstName: 'Sarah',
        lastName: 'Chen',
        email: 'sarah@techcorp.ca',
        phone: '+1 (416) 555-0123',
        company: 'TechCorp Solutions',
        location: 'Toronto, ON',
        status: 'active',
        tier: 'enterprise',
        tags: ['SaaS', 'AI Implementation', 'Enterprise'],
        totalValue: '45000',
        rating: 5,
        source: 'Website'
      },
      {
        firstName: 'Mike',
        lastName: 'Thompson',
        email: 'mike@innovate.ca',
        phone: '+1 (604) 555-0456',
        company: 'Innovate Digital',
        location: 'Vancouver, BC',
        status: 'prospect',
        tier: 'professional',
        tags: ['Consulting', 'AI Strategy', 'SME'],
        totalValue: '8000',
        rating: 4,
        source: 'Referral'
      },
      {
        firstName: 'Emma',
        lastName: 'Wilson',
        email: 'emma@northstar.ca',
        phone: '+1 (403) 555-0789',
        company: 'North Star Consulting',
        location: 'Calgary, AB',
        status: 'lead',
        tier: 'professional',
        tags: ['Healthcare', 'Digital Transformation'],
        totalValue: '0',
        rating: 0,
        source: 'LinkedIn'
      }
    ]

    for (const contact of sampleContacts) {
      await db.insert(schema.contacts).values(contact)
    }

    console.log('✅ Created sample contacts')

    // Create sample leads
    const sampleLeads = [
      {
        name: 'Sarah Johnson',
        email: 'sarah@techcorp.ca',
        company: 'TechCorp Solutions',
        phone: '+1 (416) 555-0123',
        value: 15000,
        stage: 'qualified',
        source: 'Website',
        notes: 'Interested in AI automation for customer service'
      },
      {
        name: 'Mike Chen',
        email: 'mike@innovate.ca',
        company: 'Innovate Digital',
        phone: '+1 (604) 555-0456',
        value: 25000,
        stage: 'proposal',
        source: 'Referral',
        notes: 'Ready to move forward with DFY package'
      }
    ]

    for (const lead of sampleLeads) {
      await db.insert(schema.leads).values(lead)
    }

    console.log('✅ Created sample leads')

    console.log('🎉 Database seeding completed successfully!')
    console.log('📧 Admin login: team@truenorthai.group / admin123')

  } catch (error) {
    console.error('❌ Seeding failed:', error)
    process.exit(1)
  } finally {
    sqlite.close()
  }
}

seedDatabase()
