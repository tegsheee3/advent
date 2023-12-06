const example = { 7: 9, 15: 40, 30: 200 };
const test = { 58: 478, 99: 2232, 64: 1019, 69: 1071 };
const lowerLimit = 14;
const upperLimit = 71516;

function calculatePart1(input, lowerLimit = undefined, upperLimit = undefined) {
  let totalWay = 0;
  let product = 1;
  let ways = [];

  for (let time in input) {
    let way = 0;
    for (
      let holdTime = lowerLimit ? lowerLimit : 0;
      holdTime < (upperLimit ? upperLimit + 1 : parseInt(time));
      holdTime++
    ) {
      const distance = holdTime * (parseInt(time) - holdTime);
      if (distance > input[time]) {
        way++;
      }
    }
    ways.push(way);
    totalWay += way;
    product *= way;
  }
  return { ways, totalWay, product };
}

// doesnt work. it messes up the order of the numbers
function getPart2(input) {
  const key = Object.keys(input).join("");
  const value = parseInt(Object.values(input).join(""));
  return { [key]: value };
}
console.log("example part1", calculatePart1(example));
console.log(
  "example part2",
  calculatePart1(getPart2(example), lowerLimit, upperLimit)
);
console.log("part1", calculatePart1(test));
console.log(
  "part2",
  calculatePart1({58996469:478223210191071})
);
// console.log("part2", calculatePart1(getPart2(test)));
