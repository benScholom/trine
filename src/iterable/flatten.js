"use strict";

/**
 * @description
 * Yields the elements in the iterables of the iterable.
 *
 * @this {Iterable<Iterable<T>>}
 * @example 
 * //Basic Usage
 *
 * [[1],[2]]::flatten() // yields [1,2]
*/

export function * flatten <T> (

) : Iterable<T> {
    for ( const item of this ) {
        yield * item;
    }
}
