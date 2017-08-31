import R_maxBy = require('../ramda/dist/src/maxBy');

declare const object_to_number: (x: object) => number;
declare const object: object;

// @dts-jest:pass:snap
R_maxBy(object_to_number, object);
// @dts-jest:pass:snap
R_maxBy(object_to_number)(object)(object);
// @dts-jest:pass:snap
R_maxBy(object_to_number, object, object);
