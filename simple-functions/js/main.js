
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', sum);

function sum() {
    const firstNum = parseFloat(document.getElementById('firstNum').value);
    const secondNum = parseFloat(document.getElementById('secondNum').value);
    let total = firstNum + secondNum;
    return alert(total);
}


const multiplyButton = document.getElementById('multiply-button');

multiplyButton.addEventListener('click', multiply);

function multiply() {
    const multiplyFirst = parseFloat(document.getElementById('firstNumToMultiply').value);
    const multiplySecond = parseFloat(document.getElementById('secondNumToMultiply').value);
    const multiplyThird = parseFloat(document.getElementById('thirdNumToMultiply').value);
    let result = multiplyFirst * multiplySecond * multiplyThird;
    console.log(result);
};

//create a function that divides two numbers and returns the ???

const divideButton = document.getElementById('divide-button');
divideButton.addEventListener('click', divide);

function divide() {
    const divide1 = parseFloat(document.getElementById('divide1').value);
    const divide2 = parseFloat(document.getElementById('divide2').value);

    let dividedNum = divide1 / divide2;

    document.getElementById('placeholder1').innerText = dividedNum;
}