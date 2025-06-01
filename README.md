# Description
Typescript guards

- Install the [npm package @alexevs/ts-guards](https://www.npmjs.com/package/@alexevs/ts-guards)
  ```bash
  // with npm
  npm i @alexevs/ts-guards
  // with yarn
  yarn add @alexevs/ts-guards
  ```

- Use the package
  ```typescript
  import { 
    isNull,
    isUndefined,
    isNil, 
    isEmpty 
  } from '@alexevs/ts-guards';

  console.log(isNull(null)); // true
  
  console.log(isUndefined(undefined)); // true
  
  console.log(isNil(null)); // true
  console.log(isNil(undefined)); // true
  
  console.log(isEmpty(undefined)); // true
  console.log(isEmpty(null)); // true
  console.log(isEmpty(false)); // false
  console.log(isEmpty(true)); // false
  console.log(isEmpty(0)); // false
  console.log(isEmpty(1)); // false
  console.log(isEmpty('')); // true
  console.log(isEmpty('str')); // false
  console.log(isEmpty([])); // true
  console.log(isEmpty([1, 2, 3])); // false
  console.log(isEmpty({})); // true
  console.log(isEmpty({ name: 'Alex' })); // false
  ```

## Why?

Enhance your TypeScript projects with @alexevs/ts-guards!

This library provides a robust set of utility functions to simplify and streamline type-checking and guard validation in your code.

With ts-guards, you can ensure safer and readable type validation,
improving code reliability and reducing potential errors.
