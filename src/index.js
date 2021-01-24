const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtnRef: document.querySelector('button[data-action="start"]'),
  stopBtnRef: document.querySelector('button[data-action="stop"]'),
  bodyRef: document.querySelector('body'),
};

refs.startBtnRef.addEventListener('click', handleColorSwitch);
refs.stopBtnRef.addEventListener('click', handleStop);

let timerID = null;
function handleColorSwitch() {
  refs.startBtnRef.disabled = true;
  timerID = setInterval(colorSwitch, 1000);
}

function handleStop() {
  clearInterval(timerID);
  refs.startBtnRef.disabled = false;
}

function colorSwitch() {
  refs.bodyRef.bgColor = colors[randomIntegerFromInterval(0, colors.length)];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
