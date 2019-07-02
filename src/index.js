import * as R from 'ramda';

const fOne = (num) => num + 1;
const fTwo = (num) => num + 2;

const result = R.pipe(fOne, fTwo)(3);
console.log(result);