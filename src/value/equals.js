/**
 * @description
 * Returns the strict equality of the two operands.
 *
 * @this {any} The left operand to compare.
 * @param right The right operand to compare to.
 * @example
 * //Basic Usage
 *
 * "foo"::equals("bar") // false
 * "bar"::equals("bar") // true
*/
export function equals (
    right : any,
) : boolean {
    return this === right;
};
