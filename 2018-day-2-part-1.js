// Day 2: Inventory Management System - Part 1
// https://adventofcode.com/2018/day/2

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import fs from 'fs';

const ids = fs
  .readFileSync('2018-day-2-input.txt')
  .toString()
  .split('\n');

// console.log(ids);

// const ids = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'];

const arrUnique = arr => Array.from(new Set(arr));

const strSplitUnique = str => arrUnique(str.split(''));

const strOccurrences = (str, char) => {
  return arrOccurrences(str.split(''), char);
};

const arrOccurrences = (arr, char) => {
  return arr.reduce((acc, curr) => (acc += curr === char ? 1 : 0), 0);
};

const strCountLetters = str => {
  return strSplitUnique(str).reduce((acc, curr) => {
    acc[curr] = strOccurrences(str, curr);
    return acc;
  }, {});
};

const isInObjValues = (obj, val) => Object.values(obj).includes(val);

const strHasRepeatedCharacters = (str, x = 2) => {
  return isInObjValues(strCountLetters(str), x);
};

// console.log(strSplitUnique('ababab'));
// console.log(strOccurrences('ababab', 'b'));
// console.log(strCountLetters('ababab'));
// console.log(strHasRepeatedCharacters('ababab', 2));
// console.log(strHasRepeatedCharacters('ababab', 3));

const twoRepeats = ids.reduce((acc, curr) => {
  return (acc += strHasRepeatedCharacters(curr, 2) ? 1 : 0);
}, 0);
// console.log(twoRepeats);
const threeRepeats = ids.reduce((acc, curr) => {
  return (acc += strHasRepeatedCharacters(curr, 3) ? 1 : 0);
}, 0);
// console.log(threeRepeats);

const checksum = twoRepeats * threeRepeats;
console.log(checksum);
