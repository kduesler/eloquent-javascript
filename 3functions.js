//EXERCISES


//Minimum
min = function(num1, num2) {
if (num1 < num2) {
    return num1
} else {
    return num2
}
}

console.log(min(3, 5));

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

//Bean Counting
let countChar = function(string, char) {
    let counter = 0;
    for (let index = 0; index < string.length; index++) {
        if (string[index] === char) {
            counter ++;
        }
    }
    return counter
}

console.log(countChar("abcsabcsfffffffffffff", "f"));