const test = require('tape');
const intervalDigitSum = require('../interval-digit-sum');

test('intervalDigitSum', function (t) {
  'use strict';

  t.plan(13);

  t.deepEqual(intervalDigitSum(), 0);
  t.deepEqual(intervalDigitSum({}), 0);
  t.deepEqual(intervalDigitSum([]), 0);
  t.deepEqual(intervalDigitSum(''), 0);
  t.deepEqual(intervalDigitSum('abc'), 0);
  t.deepEqual(intervalDigitSum(454), 0);
  t.deepEqual(intervalDigitSum(['a']), 0);
  t.deepEqual(intervalDigitSum([2]), 2);

  var result_A = intervalDigitSum([0, 10000], 20, {
    unique: true
  });
  t.deepEqual(result_A, require('./results-0-10000-20.json'));

  var result_B = intervalDigitSum([100, 120], 11);
  t.deepEqual(result_B, ['119']);

  var result_C = intervalDigitSum([235, 350], 14, {
    unique: true
  });
  t.deepEqual(result_C, ['239', '248', '257', '275', '284', '293', '329', '347']);

  var result_D = intervalDigitSum([0, 100], 8);
  t.deepEqual(result_D, ['08', '17', '26', '35', '44', '53', '62', '71', '80']);

  var result_E = intervalDigitSum([0, 100], 8, {
    unique: true
  });
  t.deepEqual(result_E, ['08', '17', '26', '35', '53', '62', '71', '80']);
});
