import Database from 'better-sqlite3'
import path from 'path'
import bcrypt from 'bcryptjs'

const dbPath = path.join(process.cwd(), 'database.sqlite')
const db = new Database(dbPath)

console.log('🚀 Setting up database...')

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    avatar TEXT,
    role TEXT DEFAULT 'agent',
    team_id TEXT,
    is_active INTEGER DEFAULT 1,
    last_login DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS teams (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    logo TEXT,
    owner_id TEXT,
    settings TEXT DEFAULT '{}',
    is_active INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS contacts (
    id TEXT PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    location TEXT,
    source TEXT,
    tags TEXT DEFAULT '[]',
    custom_fields TEXT DEFAULT '{}',
    total_value TEXT DEFAULT '0',
    status TEXT DEFAULT 'lead',
    rating INTEGER DEFAULT 0,
    notes TEXT,
    team_id TEXT,
    assigned_to TEXT,
    last_contact DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS bookings (
    id TEXT PRIMARY KEY,
    cal_id TEXT,
    event_type_id TEXT,
    attendee_email TEXT NOT NULL,
    attendee_name TEXT NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    status TEXT DEFAULT 'confirmed',
    notes TEXT,
    value TEXT DEFAULT '0',
    contact_id TEXT,
    assigned_to TEXT,
    team_id TEXT,
    metadata TEXT DEFAULT '{}',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS leads (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    phone TEXT,
    value REAL DEFAULT 0,
    stage TEXT DEFAULT 'new',
    source TEXT,
    notes TEXT,
    tags TEXT DEFAULT '[]',
    contact_id TEXT,
    assigned_to TEXT,
    team_id TEXT,
    last_contact DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`)

console.log('✅ Database tables created')

// Seed initial data
const hashedPassword = bcrypt.hashSync('admin123', 12)

db.prepare(`
  INSERT OR IGNORE INTO users (id, email, password, first_name, last_name, role)
  VALUES (?, ?, ?, ?, ?, ?)
`).run(
  'user-admin',
  'team@truenorthai.group',
  hashedPassword,
  'Jaryd',
  'Paquette',
  'admin'
)

console.log('✅ Admin user created: team@truenorthai.group / admin123')

// Sample contacts
const contacts = [
  ['Sarah', 'Chen', 'sarah@techcorp.ca', '+1 (416) 555-0123', 'TechCorp Solutions', 'Toronto, ON', 'Website'],
  ['Mike', 'Thompson', 'mike@innovate.ca', '+1 (604) 555-0456', 'Innovate Digital', 'Vancouver, BC', 'Referral'],
  ['Emma', 'Wilson', 'emma@northstar.ca', '+1 (403) 555-0789', 'North Star Consulting', 'Calgary, AB', 'LinkedIn']
]

for (const [firstName, lastName, email, phone, company, location, source] of contacts) {
  db.prepare(`
    INSERT OR IGNORE INTO contacts (id, first_name, last_name, email, phone, company, location, source, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    `contact-${email.replace('@', '-').replace('.', '-')}`,
    firstName,
    lastName,
    email,
    phone,
    company,
    location,
    source,
    'active'
  )
}

console.log('✅ Sample contacts created')

// Sample leads
const leads = [
  ['Sarah Johnson', 'sarah@techcorp.ca', 'TechCorp Solutions', '+1 (416) 555-0123', 15000, 'qualified', 'Website'],
  ['Mike Chen', 'mike@innovate.ca', 'Innovate Digital', '+1 (604) 555-0456', 25000, 'proposal', 'Referral']
]

for (const [name, email, company, phone, value, stage, source] of leads) {
  db.prepare(`
    INSERT OR IGNORE INTO leads (id, name, email, company, phone, value, stage, source)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    `lead-${email.replace('@', '-').replace('.', '-')}`,
    name,
    email,
    company,
    phone,
    value,
    stage,
    source
  )
}

console.log('✅ Sample leads created')

db.close()
console.log('🎉 Database setup completed successfully!')
console.log(`📁 Database file: ${dbPath}`)
