import R_takeWhile = require('../ramda/dist/src/takeWhile');

declare const string_to_boolean: (x: string) => boolean;
declare const string_array: string[];

// @dts-jest:pass:snap
R_takeWhile(string_to_boolean);
// @dts-jest:pass:snap
R_takeWhile(string_to_boolean, string_array);
