const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '../src/components/icons');
const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.jsx') || f.endsWith('.tsx'));

const exports = files
  .map(f => {
    const name = path.basename(f, path.extname(f));
    return `export { default as ${name} } from './${name}';`;
  })
  .join('\n');

fs.writeFileSync(path.join(iconsDir, 'index.js'), exports);
console.log(`Generated index with ${files.length} icons`);