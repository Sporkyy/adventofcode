// Day 3: Crossed Wires - Part 1
// https://adventofcode.com/2019/day/3

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const distance = (w1, w2) => {
  const w1Coords = new Set();
  let [x, y] = [0, 0];
  for (const run of w1) {
    const direction = run[0];
    // console.log(direction);
    const length = run.slice(1);
    // console.log(length);
    for (let i = 0; i < length; i++) {
      switch (direction) {
        case 'U':
          y++;
          break;
        case 'R':
          x++;
          break;
        case 'D':
          y--;
          break;
        case 'L':
          x--;
          break;
      }
      w1Coords.add(JSON.stringify([x, y]));
    }
  }
  // console.log(w1Coords);
  const intersections = [];
  [x, y] = [0, 0];
  for (const run of w2) {
    const direction = run[0];
    // console.log(direction);
    const length = run.slice(1);
    // console.log(length);
    for (let i = 0; i < length; i++) {
      switch (direction) {
        case 'U':
          y++;
          break;
        case 'R':
          x++;
          break;
        case 'D':
          y--;
          break;
        case 'L':
          x--;
          break;
      }
      // console.log([x, y]);
      if (w1Coords.has(JSON.stringify([x, y]))) intersections.push([x, y]);
    }
  }
  // console.log(intersections.map(([x, y]) => Math.abs(x) + Math.abs(y)));
  // console.log(
  //   Math.min(...intersections.map(([x, y]) => Math.abs(x) + Math.abs(y))),
  // );
  return Math.min(...intersections.map(([x, y]) => Math.abs(x) + Math.abs(y)));
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual, strict } from 'assert';

strictEqual(distance(['R8', 'U5', 'L5', 'D3'], ['U7', 'R6', 'D4', 'L4']), 6);

strictEqual(
  distance(
    ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'],
    ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'],
  ),
  159,
);

strictEqual(
  distance(
    [
      'R98',
      'U47',
      'R26',
      'D63',
      'R33',
      'U87',
      'L62',
      'D20',
      'R33',
      'U53',
      'R51',
    ],
    ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'],
  ),
  135,
);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import fs from 'fs';

const [wire1, wire2] = fs
  .readFileSync('2019-day-3-input.txt')
  .toString()
  .split('\n')
  .map(s => s.split(','));

// console.log(distance(wire1, wire2));

strictEqual(distance(wire1, wire2), 5357);
