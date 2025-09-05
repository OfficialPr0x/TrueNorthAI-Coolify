import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { cpSync, existsSync, mkdirSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')

console.log('🔗 Combining build outputs...')

try {
  // Ensure dist directory exists
  const distDir = join(rootDir, 'dist')
  if (!existsSync(distDir)) {
    console.error('❌ Main build not found. Run "npm run build:main" first.')
    process.exit(1)
  }

  // Check if admin build exists
  const adminDistDir = join(rootDir, 'TrueNorthAdmin', 'dist')
  if (!existsSync(adminDistDir)) {
    console.error('❌ Admin build not found. Run "npm run build:admin" first.')
    process.exit(1)
  }

  // Create admin-dashboard directory in main dist
  const adminTargetDir = join(distDir, 'admin-dashboard')
  if (!existsSync(adminTargetDir)) {
    mkdirSync(adminTargetDir, { recursive: true })
  }

  // Copy admin build to main dist
  cpSync(adminDistDir, adminTargetDir, { recursive: true })

  console.log('✅ Build combination completed!')
  console.log('📁 Main site: dist/')
  console.log('📁 Admin dashboard: dist/admin-dashboard/')
} catch (error) {
  console.error('❌ Error combining builds:', error.message)
  process.exit(1)
}
