# TS Guards

# Description
Typescript guards

## Yarn version
v4.9.0
```bash
npm install -g corepack@0.31.0
corepack enable
yarn install
```

## Node version
v20.9.0. Use NVM:
1. nvm current - check current version of Node
2. nvm list - show list of available Node versions
3. nvm install <version> - to install and use Node version.
4. nvm use <version> - set version of Node as current version

## Available Scripts
In the project directory, you can run:

### `yarn version:major`
Increments the major version in `package.json` and `src/app/manifest.json`.  
For example, changes `"version": "1.2.3"` to `"version": "2.0.0"`.

### `yarn version:minor`
Increments the minor version in `package.json` and `src/app/manifest.json`.  
For example, changes `"version": "1.2.3"` to `"version": "1.3.0"`.

### `yarn version:patch`
Increments the patch version in `package.json` and `src/app/manifest.json`.  
For example, changes `"version": "1.2.3"` to `"version": "1.2.4"`.

### `yarn update-version:major`
Automates the process of merging branches, increasing the major-version in the package.json file, and committing the changes to the designated branch. This ensures the version is updated consistently and the changes are easily trackable in the repository.

### `yarn update-version:minor`
Automates the process of merging branches, increasing the minor-version in the package.json file, and committing the changes to the designated branch. This ensures the version is updated consistently and the changes are easily trackable in the repository.

### `yarn update-version:patch`
Automates the process of merging branches, increasing the patch-version in the package.json file, and committing the changes to the designated branch. This ensures the version is updated consistently and the changes are easily trackable in the repository.

### `yarn build`
First removes the `dist` directory using `rimraf` to ensure a clean build environment and then compiles the TypeScript files using `tsc`.

### `yarn publish`
Builds the project, logs into npm account, and publishes the package with public access.

### `yarn format`
Formats all TypeScript files in the `src` folder using Prettier.

### `yarn lint`
Runs ESLint for static code analysis on TypeScript files.

### `yarn lint:fix`
Fixes errors found by ESLint in TypeScript files.

### `yarn test:unit`
Runs unit tests using the Jest configuration.

### `yarn test:unit-cov`
Runs unit tests with coverage calculation option.

### `yarn test:unit-watch`
Runs unit tests with watch mode.

### `yarn postinstall`
Automatically runs `husky` hooks for Git management.

### `yarn docs`
Generates comprehensive documentation using TypeDoc.

## Deploy on NPM JS

## Release steps
1) run yarn update-version:patch (or :minor, :major)
2) create PR with message "[Common] Version increase vX.X.X" from "common/version-increase" into "develop"
3) create PR with message "Release vX.X.X" from "develop" into "main"
4) go to [Github Repo Home page](https://github.com/a1exevs/ts-guards) -> Tags -> Releases -> Draft a new release.

   a) create a new tag via "Choose a tag" autocomplete

   b) select "develop" branch as a target

   c) click the "Generate release notes" button, remove unnecessary notes if necessary, check PR messages and correct the messages if necessary (via PR editing)

   d) select "main" branch as a target

   e) click the "Publish release"
5) checkout "main" and run 'yarn publish'
6) checkout "develop" and pull, then merge "main" into "develop" and push
7) update RELEASE-NOTES.md with using generated notes in step 4, create PR with from "common/release-notes-update-vX.X.X" to "develop" message "[Common] RELEASE-NOTES.md update vX.X.X"

## Repository
Link to repository https://github.com/a1exevs/ts-guards.
