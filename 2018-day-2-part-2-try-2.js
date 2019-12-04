import input from './day-2-input';

const ids = input.split(/\n/);

// const ids = ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'];

function sameCharsAtSamePositions(str1, str2) {
  return str1.split('').reduce((acc, curr, i) => {
    const currInStr2 = str2.charAt(i);
    return (acc += curr === currInStr2 ? str1.charAt(i) : '');
  }, '');
}

const answer = ids.reduce((acc, curr, i) => {
  const arr = ids.map((curr2, j) => {
    if (i !== j) {
      return sameCharsAtSamePositions(curr, curr2);
    } else {
      return '';
    }
  });
  // console.log(arr);
  return [...acc, ...arr];
}, []);

// console.log(answer);

console.log(answer.filter(v => v.length === ids[1].length - 1));

console.log(sameCharsAtSamePositions('fghij', 'fguij'));
