import _ from 'lodash';
import { cube } from './math.js';
console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
);
console.log(`2的三次方是${cube(2)}`)