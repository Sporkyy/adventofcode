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

import fs from 'fs';

const ops = fs
  .readFileSync('2019-day-2-input.txt')
  .toString()
  .split('\n');

for (let noun = 0; noun <= 99; noun++) {
  for (let verb = 0; verb <= 99; verb++) {
    const input = [...ops];
    input[1] = noun; // Noun
    input[2] = verb; // Verb
    const output = comp(input);
    if (19690720 === output[0]) {
      console.log(`noun = ${noun}, verb = ${verb}]`);
      console.log(`100 * noun + verb = ${100 * noun + verb}`);
    }
  }
}
