// - 1.3 how to transfer this "[4,[[5],[6,[7],8],9,10]]" to [4,5,6,7,8,9,10]

const corruptedArr = "[4,[[5],[6,[7],8],9,10]]";

// ! split this string to an array and check that the type is number will be returned to the new array
const fixedArr = corruptedArr.split("").filter((char) => {
  if (!isNaN(parseInt(char))) return char;
});

console.log("fixedArr: ", fixedArr);
