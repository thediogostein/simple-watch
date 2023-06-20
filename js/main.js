function updateDOM(time) {
  console.log(time);
}

function getTime() {
  const now = new Date();
  const time = {
    hour: now.getHours(),
    min: now.getMinutes(),
    sec: now.getSeconds(),
    weekday: now.getDay(),
    month: now.getMonth(),
    year: now.getFullYear(),
    weekdayString: '',
  };

  switch (time.weekday) {
    case 0:
      time.weekdayString = 'Sunday';
      break;
    case 1:
      time.weekdayString = 'Monday';
      break;
    case 2:
      time.weekdayString = 'Tuesday';
      break;
    case 3:
      time.weekdayString = 'Wednesday';
      break;
    case 4:
      time.weekdayString = 'Thursday';
      break;
    case 5:
      time.weekdayString = 'Friday';
      break;
    case 6:
      time.weekdayString = 'Saturday';
      break;
    default:
      time.weekdayString = 'Error';
  }

  return time;
}

function clock() {
  const time = getTime();
  updateDOM(time);
}

function init() {
  setInterval(clock, 1000);
}

document.addEventListener('DOMContentLoaded', init);
