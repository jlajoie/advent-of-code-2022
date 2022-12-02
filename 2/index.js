const fs = require("fs");

const input = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split("\n")
  .map((chunk) => chunk.split(" "));

// Part One
let LOST = "lost";
let DRAW = "draw";
let WON = "won";

let ROCK = "X";
let PAPER = "Y";
let SCISSORS = "Z";

let scores = {
  [ROCK]: 1,
  [PAPER]: 2,
  [SCISSORS]: 3,
};

let outcomes = {
  [LOST]: 0,
  [DRAW]: 3,
  [WON]: 6,
};

let results = {
  A: {
    // Rock
    [ROCK]: DRAW,
    [PAPER]: WON,
    [SCISSORS]: LOST,
  },
  B: {
    // Paper
    [ROCK]: LOST,
    [PAPER]: DRAW,
    [SCISSORS]: WON,
  },
  C: {
    // Scissors
    [ROCK]: WON,
    [PAPER]: LOST,
    [SCISSORS]: DRAW,
  },
};

console.dir(
  input
    .map((row) => scores[row[1]] + outcomes[results[row[0]][row[1]]])
    .reduce((sum, a) => sum + a, 0)
);

// Part Two
LOST = "X";
DRAW = "Y";
WON = "Z";

ROCK = "rock";
PAPER = "paper";
SCISSORS = "scissors";

scores = {
  [ROCK]: 1,
  [PAPER]: 2,
  [SCISSORS]: 3,
};

outcomes = {
  [LOST]: 0,
  [DRAW]: 3,
  [WON]: 6,
};

results = {
  A: {
    // Rock
    [LOST]: SCISSORS,
    [DRAW]: ROCK,
    [WON]: PAPER,
  },
  B: {
    // Paper
    [LOST]: ROCK,
    [DRAW]: PAPER,
    [WON]: SCISSORS,
  },
  C: {
    // Scissors
    [LOST]: PAPER,
    [DRAW]: SCISSORS,
    [WON]: ROCK,
  },
};
console.dir(
  input
    .map((row) => scores[results[row[0]][row[1]]] + outcomes[row[1]])
    .reduce((sum, a) => sum + a, 0)
);
