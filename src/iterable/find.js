/**
 * @description
 * Yields the first item that qualifies the condition.
 *
 * @this {Iterable<T>}
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * [{id:2,x:1}, {id:3,x:2}, {id:4,x:4}, {id:3,x:5}]::find(function () {
 *   return this.id === 3;
 * }) // yields { id: 3, x: 2 }
*/
export function * find <T> (
    condition : (_this : T) => boolean,
) : Iterable<T> {
    for ( const item of this ) {
        if ( item::condition() ) {
            yield item;
            return;
        }
    }
};
