import R_product = require('../ramda/dist/src/product');

declare const number_array: number[];

// @dts-jest:pass:snap -> number
R_product(number_array);
