// //EXERCISES

// //Looping a Triangle
// let x = '#'
// let y = '#'

// while (y.length < 8) {
//   console.log(y);
//   y = y+x;
// }


// //FizzBuzz
// let number = 0
// for (let index = 0; index <= 100; index++) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     console.log("FIZZBUZZ");
//   } else if (number % 5 === 0){
//     console.log("BUZZ");
//   } else if (number % 3 === 0 ) {
//     console.log("FIZZ");
//   } else console.log(number);
//   number ++
// }

//Chessboard

size = 80;
board = "";
for (let index2 = 0; index2 < size; index2++) {
for (let index1 = 0; index1 < size; index1++) {
if (board.length % 2 === 0 ) {
  board += " "
} else  {
  board += "#"
}
}
board += "\n"
}
console.log(board);




