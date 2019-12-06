// Day 2: 1202 Program Alarm
// https://adventofcode.com/2019/day/2

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const comp = (state, i = 0) => {
  switch (state[i]) {
    case 1:
      state[state[i + 3]] = state[state[i + 1]] + state[state[i + 2]];
      break;
    case 2:
      state[state[i + 3]] = state[state[i + 1]] * state[state[i + 2]];
      break;
    case 99:
      return state;
  }
  return comp(state, i + 4);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';

deepStrictEqual(comp([1, 0, 0, 0, 99]), [2, 0, 0, 0, 99]);
deepStrictEqual(comp([2, 3, 0, 3, 99]), [2, 3, 0, 6, 99]);
deepStrictEqual(comp([2, 4, 4, 5, 99, 0]), [2, 4, 4, 5, 99, 9801]);
deepStrictEqual(comp([1, 1, 1, 4, 99, 5, 6, 0, 99]), [
  30,
  1,
  1,
  4,
  2,
  5,
  6,
  0,
  99,
]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import fs from 'fs';

const ops = fs
  .readFileSync('2019-day-2-input.txt')
  .toString()
  .split('\n');

console.log(comp(ops));
