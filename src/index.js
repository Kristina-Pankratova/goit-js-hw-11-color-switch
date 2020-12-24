const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
let timerId = null;
let bodyColor = null;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
    
};

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function setRandomColor() {
    bodyColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    document.body.style.background = bodyColor;
    console.log(bodyColor);
}
function onStartBtnClick() {
    if (startBtn.disabled) { return }
    startBtn.disabled = true;
    timerId = setInterval(() => setRandomColor(), 1000);
}

function onStopBtnClick() {
    startBtn.disabled = false;
    clearInterval(timerId);
}

