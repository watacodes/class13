document.getElementById('check').addEventListener('click', checkDays);
const placeholder = document.getElementById('placeToSee');

function checkDays() {
  let userDay = document.getElementById('day').value.toLowerCase();
  const daysOfTheWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  if (!daysOfTheWeek.includes(userDay)) {
    alert('Please enter a valid day of the week!');
  } else if (userDay === daysOfTheWeek[1] || userDay === daysOfTheWeek[3]) {
    placeholder.innerText = `It's ${userDay}, class time!`;
  } else if (userDay === daysOfTheWeek[5] || userDay === daysOfTheWeek[6]) {
    placeholder.innerText = `${userDay} is weekend, Yay!`;
  } else {
    let capitalize = userDay.charAt(0).toUpperCase() + userDay.slice(1);
    placeholder.innerText = `${capitalize} is a boring day! ;(`;
  }
};

