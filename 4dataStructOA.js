// //The Sum of Range
// let range = function (start, end) {
//   array = [];
//   for (let index = start; index <= end; index++) {
//     array.push(index);
//   }
//   return array
// };

// function getSum (array) {
//     let total = 0;
//     for (let value of array) {
//         total +=value;
//     }
//     return total;
// }
// console.log(getSum(range(1, 10)));

// //Reversing an Array
// let sampleArray = [1, 2, 3, 4, 5]

// let reverseArray = function(array) {
//     let newArray = [];
//     for (let index = array.length - 1; index >= 0; index--) {
//         newArray.push(array[index]);
//     }
//     return newArray;
// }

// console.log(reverseArray(sampleArray));

// //A List

// let arrayToList = function(array) {
//     let list = null;
//     for (let index = array.length-1; index >= 0; index--) {
//         list = {value: array[index], rest: list}
//     }
//     return list;
// }
// console.log(arrayToList([10,20,30]));

// let listToArray = function(list) {
//     let listArray = [];
//     for (let node = list; node; node = node.rest) {
//         listArray.push(node.value)
//     }
//     return listArray;
// }
// console.log(listToArray(arrayToList([10, 20, 30])));

// let prepend = function(value, list) {
//     return {value, rest:list};
// }
// console.log(prepend(10, prepend(20, null)));

// let nth = function(list, num) {
//     if(!list) return undefined;
//     else if (num==0) return list.value;
//     else return nth(list.rest, num-1)
// }
// console.log(nth(arrayToList([10, 20, 30]), 1));

//Deep Comparison
let obj = { here: { is: "an" }, object: 2 };

let deepEqual = function (a, b) {
  if (a === b) return true;
  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);
  console.log(keysA, keysB);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
//→ true
