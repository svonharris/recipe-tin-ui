import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconsDir = path.join(__dirname, '../src/icons');
const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.jsx') || f.endsWith('.tsx'));

const exports = files
  .map(f => {
    const name = path.basename(f, path.extname(f));
    return `export { default as ${name} } from './${name}';`;
  })
  .join('\n');

fs.writeFileSync(path.join(iconsDir, 'index.js'), exports);
console.log(`Generated index with ${files.length} icons`);