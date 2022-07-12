// Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)
// Tuesday and Thursday = class day, Saturday and Sunday = weekend

const placeholder = document.getElementById('placeToSee');
const checkButton = document.getElementById('check');
let daysOfTheWeek = document.getElementById('day');

checkButton.addEventListener('click', checkDays);

function checkDays() {
  let day = daysOfTheWeek.value.toLowerCase();
  console.log(day);
  if (day === "tuesday" || day === "thursday") {
    placeholder.innerText = 'It\'s a class day!';
  } else if (day === "saturday" || day === "sunday") {
    placeholder.innerText = 'It\'s weekend, Yay!';
  } else {
    placeholder.innerText = 'It\'s just a day, boring!';
  }
}


