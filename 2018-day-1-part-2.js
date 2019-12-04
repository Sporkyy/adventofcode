import changes from './day-1-input';

const input = changes.split(/\n/);
// console.log(input);

// Example 1 (Values from Part 1)
// const input = ['+1', '-2', '+3', '+1']; // = 2

// Example 2
// const input = ['+1', '-1']; // = 0

// Example 3
// const input = ['+3', '+3', '+4', '-2', '-4']; // = 10

// Example 4
// const input = ['-6', '+3', '+8', '+5', '-6']; // = 5

// Example 5
// const input = ['+7', '+7', '-2', '-7', '-4']; // = 14

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
  frequency += parseInt(arrayGet(input, i));
}

// console.log(seen);
console.log(`First duplicate is ${frequency}`);
