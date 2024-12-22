import { Nillable, Nullable, Optional } from 'src/types';

/**
 * Guard for new but not yet processed values in switch_cases
 * @param param
 */
export const exhaustiveCHeck = (param: never) => param;

/**
 * Undefined type guard
 * @param param
 */
export function isUndefined<E>(param: Optional<E>): param is undefined {
    return typeof param === 'undefined';
}

/**
 * Null type guard
 * @param param
 */
export function isNull<E>(param: Nullable<E>): param is null {
    return param === null;
}

/**
 * Undefined or null type guard
 * @param param
 */
export function isNil<E>(param: Nillable<E>): param is null | undefined {
    return param == null;
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
    if (type === 'object') return !Object.keys(param as object).length;
    return !param;
}
