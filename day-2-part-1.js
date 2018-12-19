// import input from './day-2-input';

// const ids = input.split(/\n/);
// console.log(ids);

const ids = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'];

const doIt = s => {
  return new Set(s.split(''));
};

console.log(ids.map(id => doIt(id)));
