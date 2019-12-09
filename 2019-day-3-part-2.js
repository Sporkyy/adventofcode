// Day 3: Crossed Wires - Part 2
// https://adventofcode.com/2019/day/3

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const distance = (...wires) => {
  const coordsList = wires.map(wire => {
    let coords = { x: 0, y: 0 };
    return wire.reduce((acc, curr) => {
      for (let i = 0; i < Number(curr.slice(1)); i++) {
        const newCoords = {
          U: ({ x, y }) => ({ x, y: y + 1 }),
          D: ({ x, y }) => ({ x, y: y - 1 }),
          R: ({ x, y }) => ({ x: x + 1, y }),
          L: ({ x, y }) => ({ x: x - 1, y }),
        }[curr[0]](coords);
        acc.push(JSON.stringify(newCoords));
        coords = newCoords;
      }
      return acc;
    }, []);
  });

  const coordsUnion = coordsList.reduce((acc, curr, idx) => {
    for (const coords of curr) {
      if (acc.has(coords)) acc.set(coords, acc.get(coords).add(idx));
      else acc.set(coords, new Set([idx]));
    }
    return acc;
  }, new Map());

  const intersections = [...coordsUnion]
    .filter(([coords, idxs]) => wires.length == idxs.size)
    .map(([coords]) => coords);

  const distances = intersections.map(coords =>
    coordsList.map(list => list.indexOf(coords) + 1),
  );

  return Math.min(...distances.map(d => d.reduce((acc, curr) => acc + curr)));
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

//    012345678
//   ...........
// 7 .+-----+...
// 6 .|.....|...
// 5 .|..+--X-+.
// 4 .|..|..|.|.
// 3 .|.-X--+.|.
// 2 .|..|....|.
// 1 .|.......|.
// 0 .o-------+.
//   ...........

strictEqual(distance(['R8', 'U5', 'L5', 'D3'], ['U7', 'R6', 'D4', 'L4']), 30);

//     | -1 | 0 |   1 |   2 | 3 |
//     | -- | - | --- | --- | - |
//   3 |    |   |     |     |   |  3
//   2 |    |   |   6 | 7,8 |   |  2
//   1 |    | 1 | 3,4 |   5 |   |  1
//   0 |    | o |   2 |     |   |  0
//  -1 |    |   |     |     |   | -1
//     | -- | - | --- | --- | - |
//     | -1 | 0 |   1 |   2 | 3 |

strictEqual(distance(['U1', 'R2', 'U1'], ['R1', 'U2', 'R1']), 4);

//    | -2 |    -1 |     0 |   1 |    2 | 3 |
//    | -- | ----- | ---- | ---- | ---- | - |
//  3 |    |       |      |      |      |   |  3
//  2 |    |    14 | 3,12 | 5,10 |  7,8 |   |  2
//  1 |    |    16 |    1 |      |  6,9 |   |  1
//  0 |    |    18 |    o |    2 | 4,11 |   |  0
// -1 |    | 19,20 |   17 |   15 |   13 |   | -1
// -2 |    |       |      |      |      |   | -2
//    | -- | ----- | ---- | ---- | ---- | - |
//    | -2 |    -1 |    0 |    1 |    2 | 3 |

strictEqual(distance(['U2', 'R2', 'D3', 'L3'], ['R2', 'U2', 'L3', 'D3']), 8);

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
  410,
);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import fs from 'fs';

const [wire1, wire2] = fs
  .readFileSync('2019-day-3-input.txt')
  .toString()
  .split('\n')
  .map(s => s.split(','));

// console.log(distance(wire1, wire2));

strictEqual(distance(wire1, wire2), 101956);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
