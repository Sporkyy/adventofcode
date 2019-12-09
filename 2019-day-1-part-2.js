// Day 1: The Tyranny of the Rocket Equation - Part 2
// https://adventofcode.com/2019/day/1

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const fuelRequired = mass => {
  const fuel = Math.trunc(mass / 3) - 2;
  if (fuel < 1) return 0;
  return fuel + fuelRequired(fuel);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(fuelRequired(14), 2);
strictEqual(fuelRequired(1969), 966);
strictEqual(fuelRequired(100756), 50346);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import fs from 'fs';

const masses = fs
  .readFileSync('2019-day-1-input.txt')
  .toString()
  .split('\n');

console.log(masses.map(fuelRequired).reduce((acc, curr) => acc + curr));
