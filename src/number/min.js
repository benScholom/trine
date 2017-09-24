/**
 * @description
 * Returns the smaller of two numbers.
 *
 * @this {number}
 * @example
 * //Basic Usage
 *
 * 8::min(-1) // returns -1
 * 4::min(7) // returns 4
*/
export function min (
    b : number,
) : number {
    return Math.min(this, b);
};
