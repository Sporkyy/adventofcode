// Day 4: Secure Container: Part One - Part 2
// https://adventofcode.com/2019/day/4

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const hasUniqueDigits = n => new Set([...`${n}`]).size === [...`${n}`].length;

// console.log(hasUniqueDigits(10));
// console.log(hasUniqueDigits(11));

const hasDecreasingDigits = n => {
  const a = [...`${n}`];
  for (let i = 1; i < a.length; i++) {
    if (a[i] < a[i - 1]) return true;
  }
  return false;
};

// console.log(hasDecreasingDigits(11));
// console.log(hasDecreasingDigits(12));
// console.log(hasDecreasingDigits(21));

const finalCheck = n => {
  const s = `${n}`;
  const groups = s.match(/(\d)\1+/g);
  // console.log(groups);
  if (null === groups) return true;
  if (groups.some(group => 2 === group.length)) return true;
  return false;
};

// console.log(finalCheck(114222533336));

const countPasswords = (min, max) => {
  let res = 0;
  for (let candidate = min; candidate <= max; candidate++) {
    // It is a six-digit number.
    // ✅ Taken care of
    // The value is within the range given in your puzzle input.
    // ✅ Taken care of
    // Two adjacent digits are the same (like 22 in 122345).
    if (hasUniqueDigits(candidate)) continue;
    // Going from left to right, the digits never decrease;
    // they only ever increase or stay the same (like 111123 or 135679).
    if (hasDecreasingDigits(candidate)) continue;
    // The two adjacent matching digits are not part of a larger group of
    // matching digits.
    if (!finalCheck(candidate)) continue;
    res++;
  }
  return res;
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

strictEqual(finalCheck(123567), true);
strictEqual(finalCheck(112233), true);
strictEqual(finalCheck(123444), false);
strictEqual(finalCheck(111122), true);

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { strictEqual } from 'assert';

// console.log(countPasswords(145852, 616942));

strictEqual(countPasswords(145852, 616942), 1192);
