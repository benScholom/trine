/**
 * @description
 * Returns the value of the property by given key.
 *
 * @this {any}
 * @example
 * //Basic Usage
 *
 * [1,2,3]::prop("length") // 3
*/
export function prop (
    key : string,
) : any {
    return this[key];
};
