import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
let timer = 0;

const options = {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    let timeDifference = selectedDate - currentDate;

    let daysDiff = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hoursDiff = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutesDiff = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    let secondsDiff = Math.floor((timeDifference % (1000 * 60)) / 1000);
    console.log(timeDifference);

    days.textContent = daysDiff;
    hours.textContent = hoursDiff;
    minutes.textContent = minutesDiff;
    seconds.textContent = secondsDiff;

    if (timeDifference > 0) {
      startButton.addEventListener('click', onClick);
    } else {
      window.alert('please choose date in the future!');
      days.textContent = '00';
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
    }

    function onClick() {
      timer = setInterval(() => {
        timeDifference -= 1;
        daysDiff = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        hoursDiff = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        minutesDiff = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        secondsDiff = Math.floor((timeDifference % (1000 * 60)) / 1000);
        days.textContent = daysDiff;
        hours.textContent = hoursDiff;
        minutes.textContent = minutesDiff;
        seconds.textContent = secondsDiff;
        startButton.disabled = true;
      }, 1000);
    }
  },
};

flatpickr(input, options);
