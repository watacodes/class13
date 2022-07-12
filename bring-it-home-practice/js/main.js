// *Variables*
// Create a variable and console log the value

let newVariable = 'monkeyman';
console.log(newVariable);

// Create a variable, add 10 to it, and alert the value

let secondVariable = 12;
secondVariable += 10;

alert(secondVariable);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFourNum(a, b, c, d) {
    let result = a - b - c - d;
    alert(result);
};

subtractFourNum(55, 2, 1, 2);

// Create a function that divides one number by another and returns the remainder

const divideTwo = (a, b) => {
    let remainder = a % b;
    alert(remainder); // return remainder; would be the answer
};

divideTwo(5, 2);

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNumbers(a, b) {
    a + b > 50 ? alert('Jumanji') : alert('The sum of two numbers is less than 50!');
}

addTwoNumbers(42, 12);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThreeNumbers(a, b, c) {
    let multiply = a * b * c;
    (multiply % 3 == 0 ) ? alert('ZEBRA') : alert('The number is not divisible by 3!');
} 

multiplyThreeNumbers(3, 27, 9);

