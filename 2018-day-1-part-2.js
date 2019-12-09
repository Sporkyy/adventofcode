// Day 1: Chronal Calibration - Part 2
// https://adventofcode.com/2018/day/1

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const frequency = changes => {
  let frequency = 0;
  const seen = [];
  const arrayGet = (a, i) => {
    const { length: l } = a;
    // Unwrap the index
    i = i < -l ? i % l : (i = l <= i ? i % l : i);
    // Make the index usable
    i = i < 0 ? l + i : i;
    return a[i];
  };
  for (let i = 0; !seen.includes(frequency); i++) {
    seen.push(frequency);
    frequency += parseInt(arrayGet(changes, i));
  }
  return frequency;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(frequency(['+1', '-2', '+3', '+1']), 2);
strictEqual(frequency(['+1', '-1']), 0);
strictEqual(frequency(['+3', '+3', '+4', '-2', '-4']), 10);
strictEqual(frequency(['-6', '+3', '+8', '+5', '-6']), 5);
strictEqual(frequency(['+7', '+7', '-2', '-7', '-4']), 14);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import fs from 'fs';

const changes = fs
  .readFileSync('2018-day-1-input.txt')
  .toString()
  .split('\n');

console.log(`First duplicate is ${frequency(changes)}`);
