// Day 1: Chronal Calibration - Part 1
// https://adventofcode.com/2018/day/1

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const frequency = changes =>
  changes.reduce((acc, curr) => acc + Number.parseInt(curr), 0);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(frequency(['+1', '+1', '+1']), 3);
strictEqual(frequency(['+1', '+1', '-2']), 0);
strictEqual(frequency(['-1', '-2', '-3']), -6);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import fs from 'fs';

const changes = fs
  .readFileSync('2018-day-1-input.txt')
  .toString()
  .split('\n');

console.log(frequency(changes));
