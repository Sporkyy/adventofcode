// Day 1: The Tyranny of the Rocket Equation
// https://adventofcode.com/2019/day/1

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const fuelRequired = mass => Math.trunc(mass / 3) - 2;

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(fuelRequired(12), 2);
strictEqual(fuelRequired(14), 2);
strictEqual(fuelRequired(1969), 654);
strictEqual(fuelRequired(100756), 33583);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import fs from 'fs';

const masses = fs
  .readFileSync('2019-day-1-input.txt')
  .toString()
  .split('\n');

console.log(masses.map(fuelRequired).reduce((acc, curr) => acc + curr));
