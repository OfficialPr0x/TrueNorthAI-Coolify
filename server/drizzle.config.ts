import { defineConfig } from 'drizzle-kit'
import path from 'path'

export default defineConfig({
  schema: './src/models/schema.ts',
  out: './src/scripts/migrations',
  dialect: 'sqlite',
  dbCredentials: {
    url: path.join(process.cwd(), 'database.sqlite')
  },
  verbose: true,
  strict: true
})
