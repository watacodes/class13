const placeholder = document.getElementById('placeholder');

document.getElementById('submit-button').addEventListener('click', convertTemp);

function convertTemp() {
    const tempInCelcius = document.getElementById('celcius').value;
    if (tempInCelcius === '') {
        return alert('Undefined');
    }
    let convertedTemp = (tempInCelcius * 9 / 5) + 32;
    return placeholder.innerText = `${tempInCelcius} degree(s) in Celcius is ${convertedTemp} degrees in Fahrenheit!`;
};

