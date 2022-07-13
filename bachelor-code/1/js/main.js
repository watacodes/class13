document.getElementById('result-btn').addEventListener('click', getResult);

const claire = document.getElementById('claire');
const nikki = document.getElementById('nikki');
const sharleen = document.getElementById('sharleen');
const placeholder = document.getElementById('placeHolder');

function getResult() {
	claire.style.display = 'none';
	sharleen.style.display = 'none';
	placeholder.innerText = 'The winner is Nikki!';
};

