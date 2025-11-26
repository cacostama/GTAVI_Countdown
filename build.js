const fs = require('fs-extra');
const path = require('path');

const sourceDir = path.join(__dirname, 'public');
const destDir = path.join(__dirname, 'dist');

async function build() {
    try {
        console.log('🚀 Starting build process...');

        // Clean dist directory
        if (fs.existsSync(destDir)) {
            console.log('🧹 Cleaning dist directory...');
            await fs.remove(destDir);
        }

        // Copy all files from public to dist
        console.log('📦 Copying files to dist...');
        await fs.copy(sourceDir, destDir);

        console.log('✅ Build completed successfully!');
        console.log(`📁 Output directory: ${destDir}`);
    } catch (error) {
        console.error('❌ Build failed:', error);
        process.exit(1);
    }
}

build();
