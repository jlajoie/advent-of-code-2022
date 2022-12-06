const fs = require("fs");

const intersection = (a, b) => a.filter((x) => b.includes(x));

const input = fs.readFileSync(`${__dirname}/input.txt`).toString().split("\n");

const getNumericValue = (char) => {
  let code = char.charCodeAt(0);
  // Lowercase
  if (code >= 97 && code < 123) {
    return code - 96;
    // Uppercase
  } else if (code >= 65 && code < 91) {
    return code - 38;
  } else {
    console.log(`unrecognized character found ${char} with value ${code}`);
  }
};

// Part one
console.dir(
  input
    .map((line) => {
      line = line.split("");
      const half = Math.ceil(line.length / 2);
      return {
        first: line.slice(0, half).map((char) => getNumericValue(char)),
        second: line.slice(half).map((char) => getNumericValue(char)),
      };
    })
    .map((x) => intersection(x.first, x.second)[0])
    .flat()
    .reduce((sum, a) => sum + a, 0)
);

// Part two
console.dir(
  input
    .map((line) => line.split("").map((char) => getNumericValue(char)))
    .reduce((result, line, i) => {
      const chunk = Math.floor(i / 3);
      if (!result[chunk]) {
        result[chunk] = [];
      }
      result[chunk].push(line);
      return result;
    }, [])
    .map((chunk) => intersection(intersection(chunk[0], chunk[1]), chunk[2])[0])
    .flat()
    .reduce((sum, a) => sum + a, 0)
);
