const fs = require('fs');

let input = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split('\n\n')
  .map((chunk) => chunk.split('\n').map((line) => parseInt(line)));

// Part One
let partOneOutput = Math.max(
  ...input.map((chunk) => chunk.reduce((sum, a) => sum + a, 0))
);
console.dir(partOneOutput);

// Part Two
let partTwoOutput = input
  .map((chunk) => chunk.reduce((sum, a) => sum + a, 0))
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((sum, a) => sum + a, 0);
console.dir(partTwoOutput);
