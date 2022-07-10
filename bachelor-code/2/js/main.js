const andi = document.getElementById('andiNext');
const claire = document.getElementById('claireNext');
const sharleen = document.getElementById('sharleenNext');

const pickAndi = document.getElementById('andi');
const pickClaire = document.getElementById('claire');
const pickSharleen = document.getElementById('sharleen');

andi.addEventListener('click', showAndi);
claire.addEventListener('click', showClaire);
sharleen.addEventListener('click', showSharleen);

function showAndi() {
	pickClaire.classList.add('hidden');
	pickSharleen.classList.add('hidden');
	pickAndi.classList.toggle('hidden');
	claire.style.display = 'none';
	sharleen.style.display = 'none';
};

function showClaire() {
	pickAndi.classList.add('hidden');
	pickSharleen.classList.add('hidden');
	pickClaire.classList.toggle('hidden');
	andi.style.display = 'none';
	sharleen.style.display = 'none';
};

function showSharleen() {
	pickClaire.classList.add('hidden');
	pickAndi.classList.add('hidden');
	pickSharleen.classList.toggle('hidden');
	claire.style.display = 'none';
	andi.style.display = 'none';
};

