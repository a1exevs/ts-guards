# TS Guards

# Description
Typescript guards

## Yarn version
v1.22.19

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

### `yarn prepare`
Automatically runs `husky` hooks for Git management.

### `yarn docs`
Generates comprehensive documentation using TypeDoc.

## Deploy on NPM JS

## Repository
Link to repository https://github.com/a1exevs/ts-guards.
