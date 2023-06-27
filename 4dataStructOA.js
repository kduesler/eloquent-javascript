//The Sum of Range
let range = function (start, end) {
  array = [];
  for (let index = 0; index < end; index++) {
    array.push(start);
    start = start + 1;
  }
  return array;
};

console.log(range(10, 30));
