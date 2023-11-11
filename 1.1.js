// ! - 1.1 Write a function which takes array of numbers and a
// ! - function which will be called on each item and return the newly created array,in two ways:
// ! - Declaritive and Imperative

function numbersHandlerDeclarative(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(doubleNumber(nums[i]));
  }

  return result;
}

function numbersHandlerImperative(nums) {
  return nums.map((num) => doubleNumber(num));
}

function doubleNumber(num) {
  return num * 2;
}

const numbers = [1, 2, 3, 4, 5];

console.log("Declarative way:", numbersHandlerDeclarative(numbers));
console.log("Imperative way:", numbersHandlerImperative(numbers));
