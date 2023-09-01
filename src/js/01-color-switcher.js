function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const background = document.querySelector('body');

let timer;

const handleClickStart = () => {
 timer = setInterval(() => {
    const randomColor = getRandomHexColor();
    background.style.backgroundColor = randomColor;
  }, 1000);
    start.disabled = true;
    stop.disabled = false;
};

start.addEventListener('click', handleClickStart);

const handleClickStop = () => {
    clearInterval(timer);
    stop.disabled = true;
    start.disabled = false;
};

stop.addEventListener('click', handleClickStop);