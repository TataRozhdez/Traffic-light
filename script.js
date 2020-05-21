const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');
const trafficLight = document.querySelector('.traffic-light');
const stop = document.querySelector('.stop');
const startLight = document.querySelector('.go');

function renderLight() {
    setTimeout( () => {
      green.classList.remove('active');
      red.classList.add('active');
    });
    setTimeout( () => {
      red.classList.remove('active');
      yellow.classList.toggle('active');
    }, 2000);  
    setTimeout( () => {
      yellow.classList.remove('active');
      green.classList.toggle('active');
    }, 4000);
}

let timerLight = setInterval(renderLight, 8000);
    
startLight.addEventListener('click', renderLight);

stop.addEventListener('click', () => {
  clearTimeout(timerLight);
  setTimeout( () => {
    green.classList.remove('active');
  }, 4000);
});



