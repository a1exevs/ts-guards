# Merge branches
git checkout develop
git pull origin develop
git checkout common/version-increase
git pull origin common/version-increase
git merge develop

# Previous version in package.json
prevVersion=$( sed -n -e 's/.*"version": "\(.*\)",/\1/p' package.json | head -1 )
echo "Previous version: $prevVersion"

# run version-increase script
yarn version:patch

# increased version in package.json
newVersion=$( sed -n -e 's/.*"version": "\(.*\)",/\1/p' package.json | head -1 )
echo "New version: $newVersion"

git add package.json

git commit -m "[Common] Version increase v$newVersion"

git push origin common/version-increase
