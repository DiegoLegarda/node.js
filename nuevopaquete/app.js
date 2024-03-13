const _ = require('lodash');

console.log(_.chunk ([1, 2, 3, 4, 5], 2));

console.log(_.sortBy([{ 'x': 3 }, { 'x': 1 }], 'x'));

console.log(_.last([1, 2, 3]));

console.log(_.random(1, 10));