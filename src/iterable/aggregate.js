/**
 * @description
 * Yields all the accumulations of the iterator with a given accumulator method.
 *
 * @type rT The item type of the returned iterator.
 * @type iT The item type of the input iterator.
 * @this {Iterable<iT>}
 * @ntime O(n)
 * @dspace O(1)
 * @example
 * //Basic Usage
 *
 * [1,2,3]::aggregate(function (b) {
 *   return this + b;
 * }, 0) // yields 0, 1, 3, 6
*/
export function * aggregate <rT, iT> (
    accumulator : (_this : rT, item : iT) => rT,
    accumulation : rT,
) : Iterable<rT> {
    for ( const item of this ) {
        yield accumulation;
        accumulation = accumulation::accumulator(item);
    }

    yield accumulation;
};
