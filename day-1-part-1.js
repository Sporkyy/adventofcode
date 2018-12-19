import changes from './day-1-input';

const startingFrequency = 0;

const answer = changes.split(/\n/).reduce((acc, curr) => acc + parseInt(curr), startingFrequency);

console.log(answer);
