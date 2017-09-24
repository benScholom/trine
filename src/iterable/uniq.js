/**
 * @description
 * Yields the items that aren't equal to the previous item based on a comparator.
 *
 * @this {Iterable<T>}
 * @param comparator The function to assert equality of the items.
 * @ntime O(n)
 * @dspace O(1)
 * @example 
 * //Basic Usage
 *
 * [{
 *   id: 1,
 * }, {
 *   id: 1,
 * }, {
 *   id: 2,
 * }]::uniq(function (b) {
 *   return this.id === b.id;
 * }); // yields { id: 1 } and { id: 2 }
 *
 * [{
 *   id: 1,
 * }, {
 *   id: 2,
 * }, {
 *   id: 1,
 * }]::uniq(function (b) {
 *   return this.id === b.id;
 * }); // yields { id: 1 }, { id: 2 } and { id: 1 }
 *
 * @example Unique Characters in a String
 *
 * "bcabbbac"::sortAlphabetically()::uniq(equals) // yields "a", "b", "c"
*/
export function * uniq <T> (
    comparator : (_this : T, b : T) => boolean,
) : Iterable<T> {
    const iterator = this[Symbol.iterator]();
    const first = iterator.next();

    if ( first.done ) { return; }

    yield first.value;
    let previous = first.value;

    for ( const item of iterator ) {
        if ( !item::comparator(previous) ) { yield item; }
        previous = item;
    }
};
