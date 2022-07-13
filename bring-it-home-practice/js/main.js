// *Variables*
// Create a variable and console log the value

let newVar = 12;

console.log(newVar);

// Create a variable, add 10 to it, and alert the value

let newNum = 25;
newNum += 10;

alert(`The value of the variable newNum is ${newNum}`);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFour(a, b, c, d) {
    let result = a - b - c - d;
    alert(result);
};

subtractFour(55, 2, 1, 2);

// Create a function that divides one number by another and returns the remainder

function divideTwo(a, b) {
    let remainder = a % b;
    alert(remainder); // return remainder;
};

divideTwo(6, 4);

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function isSumGreaterThan50(a, b) {
    let testNum = a + b;
    testNum > 50 ? alert('Jumanji') : alert('The sum is less than 50.');
};

isSumGreaterThan50(51, 2);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThree(a, b, c) {
    let multipliedNum = a * b * c;
    multipliedNum % 3 == 0 ? alert('ZEBRA') : alert('The multiplied number is not divisible by 3.');
};

multiplyThree(3, 9 , 27);

