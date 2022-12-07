const fs = require("fs");

const intersection = (a, b) => a.filter((x) => b.includes(x));
const range = (start, end) =>
  [...Array(end - start + 1).keys()].map((x) => x + start);

const input = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split("\n")
  .map((line) => line.split(","))
  .map((pairs) => pairs.map((pair) => pair.split("-")))
  .map((pairs) =>
    pairs.map((pair) => range(parseInt(pair[0]), parseInt(pair[1])))
  );

let tmp = input.filter((pairs) => {
  let intersect = intersection(pairs[0], pairs[1]);
  return (
    intersect.length == pairs[0].length || intersect.length == pairs[1].length
  );
});

// Part one
console.dir(
  input.filter((pairs) => {
    let intersect = intersection(pairs[0], pairs[1]);
    return (
      intersect.length == pairs[0].length || intersect.length == pairs[1].length
    );
  }).length
);

// Part two
console.dir(
  input.filter((pairs) => intersection(pairs[0], pairs[1]).length > 0).length
);
