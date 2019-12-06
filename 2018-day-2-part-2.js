// Day 2: Inventory Management System
// https://adventofcode.com/2018/day/2

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import fs from 'fs';

const ids = fs
  .readFileSync('2018-day-2-input.txt')
  .toString()
  .split('\n');

// const ids = ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'];

function charDiffPositions(str1, str2) {
  return str1.split('').reduce((acc, curr, i) => {
    const currInStr2 = str2.charAt(i);
    if (curr !== currInStr2) {
      acc.push(i);
    }
    return acc;
  }, []);
}

function diffCount(str1, str2) {
  return charDiffPositions(str1, str2).length;
}

function sameCharsAtSamePositions(str1, str2) {
  return str1.split('').reduce((acc, curr, i) => {
    const currInStr2 = str2.charAt(i);
    return (acc += curr === currInStr2 ? str1.charAt(i) : '');
  }, '');
}

// console.log(charDiffPositions('abcde', 'axcye'));
// console.log(charDiffPositions('fghij', 'fguij'));

let answer1;
let answer2;

for (let i = 0; i < ids.length; i++) {
  const id1 = ids[i];
  for (let j = 0; j < ids.length; j++) {
    const id2 = ids[j];
    // console.log(diffCount(id1, id2));
    if (1 == diffCount(id1, id2)) {
      answer1 = id1;
      answer2 = id2;
      break;
    }
  }
  if ('undefined' !== typeof answer1 && 'undefined' !== typeof answer2) {
    break;
  }
}

console.log(answer1, answer2);
console.log(sameCharsAtSamePositions(answer1, answer2));
