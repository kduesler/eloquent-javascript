//EXERCISES


//Minimum
// min = function(num1, num2) {
// if (num1 < num2) {
//     return num1
// } else {
//     return num2
// }
// }

// console.log(min(3, 5));

//Recursion
isEven = function(num) {
    if (num == 0) {
        return true
    } else if (num == 1) {
        return false
    } else {
     return isEven(num-2)    
    }
}

console.log(isEven(55));