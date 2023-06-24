//EXERCISES

//Looping a Triangle
let x = '#'
let y = '#'

while (y.length < 8) {
  console.log(y);
  y = y+x;
}


//FizzBuzz
let number = 0
for (let index = 0; index <= 100; index++) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (number % 5 === 0){
    console.log("BUZZ");
  } else if (number % 3 === 0 ) {
    console.log("FIZZ");
  } else console.log(number);
  number ++
}