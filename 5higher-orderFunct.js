//Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current)=> flat.concat(current), []));

//Your Own Loop
let loop = function(start, test, update, body) {
    for(let value = start; test(value); value = update(value)){
        body(value);
    }
};

loop(3, n => n > 0, n => n - 1, console.log);

//Everything

function every(array, test) {
   for (let element of array) {
    if (!test(element)) return false;
   }
   return true;
}

function every2(array, test) {
    return !array.some(element => !test(element))
}

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true

//Dominant Writing Direction
