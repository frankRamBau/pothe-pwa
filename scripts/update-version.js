import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Obtener directorio actual (para ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  // Leer package.json
  const packageJsonPath = join(__dirname, '..', 'package.json');
  
  if (!existsSync(packageJsonPath)) {
    console.error('❌ No se encontró package.json');
    process.exit(1);
  }
  
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  const version = packageJson.version;
  
  console.log(`📦 Versión actual: ${version}`);
  
  // Buscar si existe sw.js en public
  const swPath = join(__dirname, '..', 'public', 'sw.js');
  
  if (existsSync(swPath)) {
    // Actualizar service worker manual
    let swContent = readFileSync(swPath, 'utf8');
    
    const versionRegex = /const CACHE_VERSION = '[^']+'/;
    const newVersionLine = `const CACHE_VERSION = 'v${version}'`;
    
    if (versionRegex.test(swContent)) {
      swContent = swContent.replace(versionRegex, newVersionLine);
      writeFileSync(swPath, swContent);
      console.log(`✅ Service Worker actualizado a v${version}`);
    } else {
      console.log('ℹ️  No se encontró CACHE_VERSION en sw.js (usando vite-plugin-pwa)');
    }
  }
  
  // Actualizar manifest.webmanifest si existe
  const manifestPath = join(__dirname, '..', 'public', 'manifest.webmanifest');
  
  if (existsSync(manifestPath)) {
    try {
      const manifestContent = readFileSync(manifestPath, 'utf8');
      const manifest = JSON.parse(manifestContent);
      
      // Actualizar versión en manifest
      manifest.version = version;
      
      writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
      console.log(`✅ Manifest actualizado a v${version}`);
    } catch (error) {
      console.log('⚠️  No se pudo actualizar manifest:', error.message);
    }
  }
  
  // Mostrar información útil
  console.log('\n🎉 Versionado completado:');
  console.log(`   📱 PWA versión: ${version}`);
  console.log('   🚀 Listo para deploy');
  console.log('\n💡 Comandos útiles:');
  console.log('   npm run deploy:full     - Deploy manual');
  console.log('   git add . && git commit -m "v' + version + '" && git push');
  
} catch (error) {
  console.error('❌ Error actualizando versión:', error.message);
  process.exit(1);
}