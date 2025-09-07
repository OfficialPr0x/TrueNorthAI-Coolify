import { drizzle } from 'drizzle-orm/better-sqlite3'
import { migrate } from 'drizzle-orm/better-sqlite3/migrator'
import Database from 'better-sqlite3'
import path from 'path'
import * as schema from '../models/schema'

// Create SQLite database
const dbPath = path.join(process.cwd(), 'database.sqlite')
const sqlite = new Database(dbPath)

// Create drizzle instance
const db = drizzle(sqlite, { schema })

async function runMigrations() {
  try {
    console.log('🚀 Running database migrations...')

    // Run migrations
    await migrate(db, { migrationsFolder: './src/scripts/migrations' })

    console.log('✅ Database migrations completed successfully!')

    // Test connection
    const result = sqlite.prepare('SELECT 1').get()
    console.log('✅ Database connection test passed:', result)

  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  } finally {
    sqlite.close()
  }
}

runMigrations()
