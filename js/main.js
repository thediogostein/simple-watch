function updateDOM(time) {
  const timeEl = document.getElementById('time');
  const weekdayEl = document.getElementById('weekday');
  const dateEl = document.getElementById('date');

  timeEl.textContent = `${time.hour}:${time.min}:${time.sec}`;
  weekdayEl.textContent = time.weekdayString;
  dateEl.textContent = `${time.day}/${time.month}/${time.year}`;
}

function getTime() {
  const now = new Date();
  const time = {
    hour: now.getHours(),
    min: now.getMinutes(),
    sec: now.getSeconds(),
    day: now.getDate(),
    weekday: now.getDay(),
    month: now.getMonth(),
    year: now.getFullYear(),
    weekdayString: '',
  };

  time.min = time.min < 10 ? `0${time.min}` : time.min;
  time.sec = time.sec < 10 ? `0${time.sec}` : time.sec;

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
