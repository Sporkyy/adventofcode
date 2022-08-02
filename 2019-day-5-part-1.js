// Day 5: Sunny with a Chance of Asteroids - Part 1
// https://adventofcode.com/2019/day/5

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const intcodeComp = (state, i = 0) => {
  if (state[i] < 100) {
    switch (state[i]) {
      case 1:
        state[state[i + 3]] = state[state[i + 1]] + state[state[i + 2]];
        break;
      case 2:
        state[state[i + 3]] = state[state[i + 1]] * state[state[i + 2]];
        break;
      case 3:
        break;
      case 4:
        break;
      case 99:
        return state;
    }
    return intcodeComp(state, i + 4);
  } else {
    const s = [...`${state[i]}`.padStart(5, 'n')];
    console.log(s);
    const ins = Number(`${s[3]}${s[4]}`);
    const params = s
      .slice(0, 3)
      .filter(p => p !== 'n')
      .reverse();
    console.log(params);
    // return intcodeComp(Number(`${s[3]}${s[4]}`, i + 1));
  }
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { deepStrictEqual } from 'assert';
import { isNull } from 'util';

deepStrictEqual(intcodeComp([1101, 100, -1, 4, 0]), [1101, 100, -1, 99, 0]);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// import fs from 'fs';

// const ops = fs
//   .readFileSync('2019-day-5-input.txt')
//   .toString()
//   .split(',')
//   .map(Number);
