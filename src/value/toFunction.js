/**
 * @description
 * Returns a function that always returns the given value.
 *
 * @this {T} The value the function should return.
 * @example 
 * //Basic Usage
 *
 * let fn = 1::toFunction();
 * fn() // returns 1
 * fn() // returns 1
*/
export function toFunction <T> (

) : (() => T) {
    return () => this;
};
