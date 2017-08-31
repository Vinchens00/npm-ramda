import R_takeLastWhile = require('../ramda/dist/src/takeLastWhile');

declare const string_to_boolean: (x: string) => boolean;
declare const string_array: string[];

// @dts-jest:pass:snap -> (list: string[] | ArrayLike<string>) => string[]
R_takeLastWhile(string_to_boolean);
// @dts-jest:pass:snap -> string[]
R_takeLastWhile(string_to_boolean, string_array);
