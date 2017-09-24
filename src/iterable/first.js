/**
 * @description
 * Yields the k-th item of the iterator.
 *
 * @this {Iterable<T>}
 * @ntime O(k)
 * @dspace O(1)
 * @example 
 * //Basic Usage
 *
 * [1,2,3]::first(0) // yields 1
 * [1,2,3]::first(1) // yields 2
 * [1,2,3]::first(2) // yields 3
 * [1,2,3]::first(3) // yields nothing
*/
export function * first <T> (
    k : number,
) : Iterable<T> {
    let index = 0;

    for ( const item of this ) {
        if ( index++ === k ) {
            yield item;
            return;
        }
    }
};
