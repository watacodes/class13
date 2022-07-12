const yellButton = document.getElementById('yell');

yellButton.addEventListener('click', parentsYell);

function parentsYell() {
  const firstName = document.getElementById('firstName').value;
  const firstMiddle = document.getElementById('firstMiddle').value;
  const lastMiddle = document.getElementById('lastMiddle').value;
  const lastName = document.getElementById('lastName').value;

  let result = `${firstName} ${firstMiddle} ${lastMiddle} ${lastName}, You Messed Up!!! You are GROUNDED!!`;

  const placeholder = document.getElementById('placeToYell');
  placeholder.innerText = result;
}