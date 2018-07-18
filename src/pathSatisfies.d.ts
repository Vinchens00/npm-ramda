import { Path, Predicate } from "./$types";
import { Placeholder as PH } from "./$placeholder";
declare const pathSatisfies: pathSatisfies_000;
type pathSatisfies_000 = {
    /**
     * Returns `true` if the specified object property at given path satisfies the
     * given predicate; `false` otherwise.
     *
     * @func
     * @memberOf R
     * @since v0.19.0
     * @category Logic
     * @typedefn Idx = String | Int
     * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
     * @param {Function} pred
     * @param {Array} propPath
     * @param {*} obj
     * @return {Boolean}
     * @see R.propSatisfies, R.path
     * @example
     *
     *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
     */
    (fn: Predicate<any>): pathSatisfies_100;
    (_fn: PH, path: Path): pathSatisfies_010;
    (fn: Predicate<any>, path: Path): pathSatisfies_110;
    (_fn: PH, _path: PH, object: {
    }): pathSatisfies_001;
    (_fn: PH, path: Path, object: {
    }): pathSatisfies_011;
    (fn: Predicate<any>, _path: PH, object: {
    }): pathSatisfies_101;
    (fn: Predicate<any>, path: Path, object: {
    }): pathSatisfies_111;
};
type pathSatisfies_100 = {
    (path: Path): pathSatisfies_110;
    (_path: PH, object: {
    }): pathSatisfies_101;
    (path: Path, object: {
    }): pathSatisfies_111;
};
type pathSatisfies_010 = {
    (fn: Predicate<any>): pathSatisfies_110;
    (_fn: PH, object: {
    }): pathSatisfies_011;
    (fn: Predicate<any>, object: {
    }): pathSatisfies_111;
};
type pathSatisfies_110 = {
    (object: {
    }): pathSatisfies_111;
};
type pathSatisfies_001 = {
    (fn: Predicate<any>): pathSatisfies_101;
    (_fn: PH, path: Path): pathSatisfies_011;
    (fn: Predicate<any>, path: Path): pathSatisfies_111;
};
type pathSatisfies_101 = {
    (path: Path): pathSatisfies_111;
};
type pathSatisfies_011 = {
    (fn: Predicate<any>): pathSatisfies_111;
};
type pathSatisfies_111 = boolean;
export = pathSatisfies;
