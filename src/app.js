/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function (number) {
  if (number === 0 || number === 1) return 1;
  else return findFactorial(number - 1) * number;
};

//Exercise 2
const reverseString = function (str) {
  if (str.length === 0) return;
  if (str.length === 1) return str;
  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
};

//Exercise 3
const arr1 = [1, 2, 3];
const arr2 = [];

//Before Exetnsion
// const swap = function (arr1, arr2) {
//   if (arr1.length === 0) return;
//   arr2.push(arr1[0]);
//   arr1.splice(0, 1);
//   return swap(arr1, arr2);
// };
//After Extension
const swap = function (arr1, arr2) {
  if (arr1.length === 0) return;
  arr2.push(arr1.pop());
  return swap(arr1, arr2);
};

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap };
