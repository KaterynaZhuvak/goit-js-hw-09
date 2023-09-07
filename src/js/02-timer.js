import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const resetButton = document.querySelector('[data-reset]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const currentDate = new Date();
startButton.disabled = true;

const options = {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkInput(selectedDates[0]);
  },
};

flatpickr(input, options);

function addLeadingZero(val) {
  days.textContent = val.days.toString().padStart(2, '0');
  hours.textContent = val.hours.toString().padStart(2, '0');
  minutes.textContent = val.minutes.toString().padStart(2, '0');
  seconds.textContent = val.seconds.toString().padStart(2, '0');
}

function checkInput(selectedDates) {
  if (selectedDates.getTime() > currentDate.getTime()) {
    startButton.disabled = false;
    startButton.addEventListener('click', onClick);
  } else {
    Notiflix.Notify.failure('Please choose date in the future!');
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function clearTimer(timer) {
if (
    days.textContent === '00' &&
    hours.textContent === '00' &&
    minutes.textContent === '00' &&
    seconds.textContent === '00'
  ) {
      clearInterval(timer);
      Notiflix.Report.info('Time is up', 'You can set the timer again!', 'Close');
      startButton.disabled = false;
      input.disabled = false;
  }
}

function timerInterval() {
  const timer = setInterval(() => {
    const pickedTime = new Date(input.value);
    const currentTime = new Date();
    const difference = pickedTime - currentTime;
    const cover = convertMs(difference);
    addLeadingZero(cover);
    startButton.disabled = true;
    input.disabled = true;

    clearTimer(timer);
  }, 1000);  


}

function onClick() {
  timerInterval();
}

