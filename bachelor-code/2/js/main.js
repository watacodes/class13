document.getElementById('andiNext').addEventListener('click', showAndi);
document.getElementById('claireNext').addEventListener('click', showClaire);
document.getElementById('sharleenNext').addEventListener('click', showSharleen);

const getAndi = document.getElementById('andi');
const getClaire = document.getElementById('claire');
const getSharleen = document.getElementById('sharleen');

function showAndi() {
	getAndi.classList.toggle('hidden');
	getClaire.classList.add('hidden');
	getSharleen.classList.add('hidden');
}

function showClaire() {
	getClaire.classList.toggle('hidden');
	getSharleen.classList.add('hidden');
	getAndi.classList.add('hidden');
}

function showSharleen() {
	getSharleen.classList.toggle('hidden');
	getClaire.classList.add('hidden');
	getAndi.classList.add('hidden');
}