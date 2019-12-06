// Day 3: Crossed Wires
// https://adventofcode.com/2019/day/3

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const distance = (...wires) => {
//   // console.log(wires);
//   const coords = wires.map(runs => {
//     let [x, y] = [0, 0];
//     return runs.reduce((acc, curr) => {
//       const dir = curr[0];
//       let steps = Number.parseInt(curr.slice(1));
//       for (let i = 0; i < steps; i++) {
//         switch (dir) {
//           case 'U':
//             y++;
//             break;
//           case 'D':
//             y--;
//             break;
//           case 'R':
//             x++;
//             break;
//           case 'L':
//             x--;
//             break;
//         }
//         acc.push(JSON.stringify([x, y]));
//       }
//       return acc;
//     }, []);
//   });
//   // console.log(coords);
//   const [coords1, coords2] = [coords[0], coords[1]];
//   for (let i = 0; i < coords1.length; i++) {
//     if (-1 < coords2.indexOf(coords1[i]))
//       return i + coords2.indexOf(coords1[i]) + 2;
//   }
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const distance = (...wires) => {
//   // Break it down for easier access
//   wires = wires.map(wire =>
//     wire.map(step => ({
//       direction: step[0].toLowerCase(),
//       count: Number.parseInt(step.slice(1)),
//     })),
//   );
//   // console.log(wires);
//   const paths = wires.map(wire => {
//     const coords = [];
//     let [x, y] = [0, 0];
//     for (const { direction, count } of wire) {
//       for (let i = 0; i < count; i++) {
//         switch (direction) {
//           case 'u':
//             y++;
//             break;
//           case 'd':
//             y--;
//             break;
//           case 'r':
//             x++;
//             break;
//           case 'l':
//             x--;
//             break;
//         }
//         coords.push(JSON.stringify([x, y]));
//       }
//     }
//     return coords;
//   });
//   // console.log(paths);
//   const allPoints = paths.reduce((acc, curr, idx) => {
//     for (const coords of curr)
//       if (acc.has(coords)) acc.set(coords, acc.get(coords).add(idx));
//       else acc.set(coords, new Set([idx]));
//     return acc;
//   }, new Map());
//   // console.log(allPoints);
//   const firstIntersection = [...allPoints].reduce(
//     (acc, [coords, idxs]) =>
//       'undefined' === typeof acc && wires.length === idxs.size ? coords : acc,
//     undefined,
//   );
//   // console.log(firstIntersection);
//   const positions = paths.map(path =>
//     path.reduce(
//       (acc, curr, idx) =>
//         'undefined' === typeof acc && curr === firstIntersection
//           ? idx + 1
//           : acc,
//       undefined,
//     ),
//   );
//   // console.log(positions);
//   // console.log(positions.reduce((acc, curr) => acc + curr));
//   return positions.reduce((acc, curr) => acc + curr);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const toPoints = wire => {
//   let point = { x: 0, y: 0 };
//   const moves = {
//     U: ({ x, y }) => ({ x: x, y: y + 1 }),
//     D: ({ x, y }) => ({ x: x, y: y - 1 }),
//     R: ({ x, y }) => ({ x: x + 1, y: y }),
//     L: ({ x, y }) => ({ x: x + 1, y: y }),
//   };
//   // console.log(moves['U']({ x: 0, y: 0 }));
//   const points = wire.reduce((acc, curr) => {
//     const [direction, steps] = [curr[0], curr.slice(1)];
//     // console.log(direction, steps);
//     for (let i = 0; i < steps; i++) {
//       point = moves[direction](point);
//       acc.push(JSON.stringify(point));
//     }
//     return acc;
//   }, []);
//   // console.log(points);
//   return points;
// };

// const distance = (...wires) => {
//   const points = wires.map(wire => toPoints(wire));
//   // console.log(points);
//   const allPoints = points.reduce((acc, curr, idx) => {
//     for (const point of curr) {
//       if (acc.has(point)) acc.set(point, acc.get(point).add(idx));
//       else acc.set(point, new Set([idx]));
//     }
//     return acc;
//   }, new Map());
//   console.log(allPoints);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// const toPoints = wire => {
//   let point = { x: 0, y: 0 };
//   const moves = {
//     U: ({ x, y }) => ({ x: x, y: y + 1 }),
//     D: ({ x, y }) => ({ x: x, y: y - 1 }),
//     R: ({ x, y }) => ({ x: x + 1, y: y }),
//     L: ({ x, y }) => ({ x: x - 1, y: y }),
//   };
//   // console.log(moves['U']({ x: 0, y: 0 }));
//   const points = wire.reduce((acc, curr) => {
//     const [direction, steps] = [curr[0], curr.slice(1)];
//     // console.log(direction, steps);
//     for (let i = 0; i < steps; i++) {
//       point = moves[direction](point);
//       acc.push(JSON.stringify(point));
//     }
//     return acc;
//   }, []);
//   // console.log(points);
//   return points;
// };

// const distance = (...wires) => {
//   const points = wires.map(wire => toPoints(wire));
//   // console.log(points);
//   const allPoints = points.reduce((acc, curr, idx) => {
//     for (const point of curr) {
//       if (acc.has(point)) acc.set(point, acc.get(point).add(idx));
//       else acc.set(point, new Set([idx]));
//     }
//     return acc;
//   }, new Map());
//   // console.log(allPoints);
//   let firstIntersection;
//   for (const [point, idxs] of allPoints) {
//     // console.log(idxs.size);
//     if (idxs.size === wires.length) {
//       firstIntersection = point;
//       break;
//     }
//   }
//   // console.log(firstIntersection);
//   // console.log(
//   //   points
//   //     .map(curr => curr.indexOf(firstIntersection) + 1)
//   //     .reduce((acc, curr) => acc + curr),
//   // );
//   return points
//     .map(curr => curr.indexOf(firstIntersection) + 1)
//     .reduce((acc, curr) => acc + curr);
// };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const move = (direction, coords) =>
  ({
    U: ({ x, y }) => ({ x, y: y + 1 }),
    D: ({ x, y }) => ({ x, y: y - 1 }),
    R: ({ x, y }) => ({ x: x + 1, y }),
    L: ({ x, y }) => ({ x: x - 1, y }),
  }[direction](coords));

const toPoints = (wire, start = { x: 0, y: 0 }) =>
  wire.reduce((acc, curr) => {
    for (let i = 0; i < Number(curr.slice(1)); i++) {
      start = move(curr[0], start);
      acc.push(JSON.stringify(start));
    }
    return acc;
  }, []);

const distance = (...wires) => {
  const points = wires.map(wire => toPoints(wire));

  // console.log(points);

  // console.log(points.reduce((acc, curr) => acc.filter(x => curr.includes(x))));

  const firstIntersection = points.reduce((acc, curr) =>
    acc.filter(x => curr.includes(x)),
  )[0];

  // console.log(firstIntersection);

  // console.log(points.map(curr => curr.indexOf(firstIntersection) + 1));

  return points
    .map(curr => curr.indexOf(firstIntersection) + 1)
    .reduce((acc, curr) => acc + curr);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

strictEqual(distance(['R8', 'U5', 'L5', 'D3'], ['U7', 'R6', 'D4', 'L4']), 30);

strictEqual(
  distance(
    ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'],
    ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'],
  ),
  610,
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
  410,
);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import fs from 'fs';

const [wire1, wire2] = fs
  .readFileSync('2019-day-3-input.txt')
  .toString()
  .split('\n')
  .map(s => s.split(','));

console.log(distance(wire1, wire2));

// strictEqual(distance(wire1, wire2), 101956);

// Right: 101956 😕
// Wrong: 102432 😡

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/*

   012345678
  ...........
7 .+-----+...
6 .|.....|...
5 .|..+--X-+.
4 .|..|..|.|.
3 .|.-X--+.|.
2 .|..|....|.
1 .|.......|.
0 .o-------+.
  ...........

*/
