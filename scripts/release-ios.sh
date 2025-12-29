#!/usr/bin/env bash
set -e

echo "🚀 iOS release started"

# 0. Загружаем переменные из .env
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

# Проверка токена
if [ -z "$EXPO_TOKEN" ]; then
  echo "❌ EXPO_TOKEN not set. Please add it to .env"
  exit 1
fi

# 1. Проверяем, что git чистый
if ! git diff --quiet; then
  echo "❌ Working tree is dirty. Commit or stash changes first."
  exit 1
fi

# 2. Увеличиваем версию в package.json (patch)
echo "📦 Bumping version..."
yarn version --patch --no-git-tag-version

# Получаем новую версию
VERSION=$(node -p "require('./package.json').version")

# 3. Git add
echo "📂 Git add..."
# git add package.json yarn.lock

# 4. Commit
echo "📝 Git commit..."
# git commit -m "chore: bump version to v$VERSION"

# 5. Push
echo "⬆️ Git push..."
# git push

# 6. EAS build (iOS)
echo "🏗 EAS build..."
eas build -p ios --profile production --non-interactive

# 7. EAS submit (latest)
echo "📤 EAS submit to TestFlight..."
eas submit -p ios --profile production --latest --non-interactive

echo "✅ Release completed successfully (v$VERSION)"
