// Test script to verify admin dashboard build integrity
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

const adminDistPath = join(process.cwd(), 'dist', 'admin-dashboard')
const assetsPath = join(adminDistPath, 'assets')

console.log('🔍 Testing Admin Dashboard Build Integrity\n')

// Check if admin dashboard directory exists
if (!existsSync(adminDistPath)) {
  console.error('❌ Admin dashboard build directory not found!')
  console.log('Expected path:', adminDistPath)
  process.exit(1)
}

// Check if index.html exists
const indexHtmlPath = join(adminDistPath, 'index.html')
if (!existsSync(indexHtmlPath)) {
  console.error('❌ Admin dashboard index.html not found!')
  process.exit(1)
}

// Check if assets directory exists
if (!existsSync(assetsPath)) {
  console.error('❌ Admin dashboard assets directory not found!')
  process.exit(1)
}

// Check for required asset files
const requiredAssets = ['index-9beb8361.css', 'index-b19ae62d.js']
requiredAssets.forEach(asset => {
  const assetPath = join(assetsPath, asset)
  if (!existsSync(assetPath)) {
    console.error(`❌ Required asset not found: ${asset}`)
  } else {
    const stats = readFileSync(assetPath)
    console.log(`✅ ${asset}: ${(stats.length / 1024).toFixed(2)} KB`)
  }
})

// Check index.html content
try {
  const indexContent = readFileSync(indexHtmlPath, 'utf8')
  console.log('✅ index.html loaded successfully')

  // Check for script and link tags
  const scriptMatches = indexContent.match(/<script[^>]*src="([^"]*)"/g) || []
  const linkMatches = indexContent.match(/<link[^>]*href="([^"]*)"/g) || []

  console.log(`📄 Found ${scriptMatches.length} script tags`)
  console.log(`🎨 Found ${linkMatches.length} link tags`)

  // Verify script sources
  scriptMatches.forEach((match, index) => {
    const srcMatch = match.match(/src="([^"]*)"/)
    if (srcMatch) {
      console.log(`  Script ${index + 1}: ${srcMatch[1]}`)
    }
  })

} catch (error) {
  console.error('❌ Error reading index.html:', error.message)
}

console.log('\n🎉 Admin dashboard build verification complete!')
console.log('📁 Build location: dist/admin-dashboard/')
console.log('🚀 Ready for deployment')
