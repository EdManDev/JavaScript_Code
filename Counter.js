const timer = document.getElementById('timer');
let counter = 0;

timer.textContent = counter;

setInterval(function () {
  counter += 1;
  timer.textContent = counter;
}, 1000);

// <h1 id="timer"></h1> 
