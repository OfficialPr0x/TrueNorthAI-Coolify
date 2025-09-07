import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import * as schema from '../models/schema'
import path from 'path'

// Create SQLite database file
const dbPath = path.join(process.cwd(), 'database.sqlite')
const sqlite = new Database(dbPath)

// Create drizzle instance
export const db = drizzle(sqlite, { schema })

// Database connection test
export const testConnection = async (): Promise<boolean> => {
  try {
    await db.execute('SELECT 1')
    console.log('✅ SQLite database connection successful')
    console.log(`📁 Database file: ${dbPath}`)
    return true
  } catch (error) {
    console.error('❌ Database connection failed:', error)
    return false
  }
}

// Graceful shutdown
export const closeConnection = async (): Promise<void> => {
  try {
    sqlite.close()
    console.log('✅ SQLite database connection closed')
  } catch (error) {
    console.error('❌ Error closing database connection:', error)
  }
}
