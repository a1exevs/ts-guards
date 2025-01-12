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

### `yarn build`
First removes the `dist` directory using `rimraf` to ensure a clean build environment and then compiles the TypeScript files using `tsc`.

### `yarn publish`
Builds the project, logs into npm account, and publishes the package with public access.

### `yarn format`
Formats all TypeScript files in the `src` folder using Prettier.

### `yarn prepare`
Automatically runs `husky` hooks for Git management.

## Deploy on NPM JS

## Repository
Link to repository https://github.com/a1exevs/ts-guards.
