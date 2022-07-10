let placeHolder = document.getElementById('placeHolder');
document.getElementById('result-btn').addEventListener('click', hide);

function hide() {
	document.getElementById('claire').style.display = 'none';
	document.getElementById('sharleen').style.display = 'none';
	placeHolder.innerText = `Nikki won the Final Rose!`;
};