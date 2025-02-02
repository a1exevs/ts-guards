import { Nillable, Nullable, Optional } from './types';

/**
 * Function to enforce exhaustive checks in type-safe environments like TypeScript.
 * This function is typically used in a switch statement to ensure that all potential cases are handled.
 * If a new case is added and not handled, TypeScript will throw a compile-time error.
 *
 * @param param - The value being checked, should be of type 'never' if all cases have been handled
 * @returns The unhandled value (which should never occur if all cases are covered)
 *
 * Example usage:
 *
 * ```typescript
 * type Shape = 'circle' | 'square' | 'triangle';
 *
 * function getShapeName(shape: Shape): string {
 *   switch (shape) {
 *     case 'circle':
 *       return 'Circle';
 *     case 'square':
 *       return 'Square';
 *     case 'triangle':
 *       return 'Triangle';
 *     default:
 *       return exhaustiveCheck(shape); // Compile-time error if any case is missing
 *   }
 * }
 * ```
 */
export const exhaustiveCheck = (param: never) => param;

/**
 * Undefined type guard
 * @param param
 * @example console.log(isUndefined(undefined)); // true
 */
export function isUndefined<E>(param: Optional<E>): param is undefined {
  return typeof param === 'undefined';
}

/**
 * Undefined type guard (Mirror to isUndefined)
 * @see isUndefined
 * @param param
 */
export function isDefined<E>(param: Optional<E>): param is E {
  return !isUndefined(param);
}

/**
 * Null type guard
 * @param param
 * @example console.log(isNull(null)); // true
 */
export function isNull<E>(param: Nullable<E>): param is null {
  return param === null;
}

/**
 * Null type guard (Mirror to isNull)
 * @see isNull
 * @param param
 */
export function isNotNull<E>(param: Nullable<E>): param is E {
  return !isNull(param);
}

/**
 * Undefined or null type guard
 * @param param
 */
export function isNil<E>(param: Nillable<E>): param is null | undefined {
  return param == null;
}

/**
 * Undefined or null type guard (Mirror to isNil)
 * @see isNil
 * @param param
 */
export function isNotNil<E>(param: Nillable<E>): param is E {
  return !isNil(param);
}

/**
 * Checks if a values is empty.
 * Being empty is defined quite broadly e.g. empty arrays and objects are considered empty here
 * @param param
 */
export function isEmpty<T>(param: T): boolean {
  const type = typeof param;
  if (param === null) return true;
  if (type === 'boolean') return false;
  if (type === 'string') return !param;
  if (type === 'number') return false;
  if (Array.isArray(param)) return !param.length;
  if (param instanceof Map || param instanceof Set) return !param.size;
  if (type === 'object') return !Object.keys(param as object).length;
  return !param;
}
