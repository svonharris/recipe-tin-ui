#!/bin/sh
cp scripts/hooks/pre-commit .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
cp scripts/hooks/post-commit .git/hooks/post-commit
chmod +x .git/hooks/post-commit
echo "Git hooks installed."
