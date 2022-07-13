const contestants = document.querySelectorAll('.contestant');

Array.from(contestants).forEach(e => e.addEventListener('click', rose));

function rose(elem) {
	if (elem.target.classList.contains('rose')) {
		document.querySelector('#nikki').classList.toggle('hidden');
	} else {
	return alert('Not her!');
	}
};

