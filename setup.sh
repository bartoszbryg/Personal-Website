#!/bin/sh
# Run once after cloning to install the pre-commit hook.
cp hooks/pre-commit .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
echo "Git hook installed. The footer date will auto-update on every commit."