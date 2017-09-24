/**
 * @description
 * Returns the larger of two numbers.
 *
 * @this {number}
 * @example
 * //Basic Usage
 *
 * 8::max(-1) // returns 8
 * 4::max(7) // returns 7
*/
export function max (
    b : number,
) : number {
    return Math.max(this, b);
};
