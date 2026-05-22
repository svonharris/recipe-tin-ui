const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const version = process.argv[2];
if (!version) {
  console.error('Usage: node scripts/update-changelog.js <version>');
  process.exit(1);
}

const date = new Date().toISOString().split('T')[0];
const changelogPath = path.join(process.cwd(), 'CHANGELOG.md');

let commitLines;
try {
  const lastTag = execSync('git describe --tags --abbrev=0', {
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
  }).trim();
  commitLines = execSync(
    `git log --pretty=format:"- %s" ${lastTag}..HEAD --no-merges`,
    { encoding: 'utf8' }
  ).trim();
} catch {
  commitLines = '- See commit history';
}

const newEntry = `## [${version}] — ${date}\n\n${commitLines}\n\n---\n\n`;

let changelog = fs.readFileSync(changelogPath, 'utf8');

// Move [Unreleased] content into the new version entry
changelog = changelog.replace(
  /## \[Unreleased\][\s\S]*?(?=\n---)/,
  '## [Unreleased]\n'
);

// Insert before the first versioned section
const versionedMatch = changelog.match(/^## \[\d+\.\d+\.\d+\]/m);
if (versionedMatch) {
  const idx = changelog.indexOf(versionedMatch[0]);
  changelog = changelog.slice(0, idx) + newEntry + changelog.slice(idx);
} else {
  changelog += '\n' + newEntry;
}

fs.writeFileSync(changelogPath, changelog);
