/**
 * @description
 * Yields the items that don't qualify the condition.
 *
 * @this {Iterable<T>}
 * @ntime O(n)
 * @dspace O(1)
 * @example 
 * //Basic Usage
 *
 * [1,2,3,4]::drop(function () {
 *   return this % 2 === 0;
 * }) // yields 1, 3
*/
export function * drop <T> (
    condition : (_this : T) => boolean,
) : Iterator<T> {
    for ( const item of this ) {
        if ( !item::condition() ) { yield item; }
    }
};
