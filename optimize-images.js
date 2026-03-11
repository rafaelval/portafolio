const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, 'public', 'background.jpg');
const outputPath = path.join(__dirname, 'public', 'background.webp');

console.log('Optimizando imagen a WebP...');
console.log(`Input: ${inputPath}`);
console.log(`Output: ${outputPath}`);

sharp(inputPath)
  .webp({ quality: 80 })
  .toFile(outputPath)
  .then(info => {
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = info.size;
    const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(2);
    
    console.log(`✅ Conversión completada!`);
    console.log(`Tamaño original: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`Tamaño optimizado: ${(optimizedSize / 1024).toFixed(2)} KB`);
    console.log(`Reducción: ${reduction}%`);
  })
  .catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  });
