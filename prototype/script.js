let startTimerBtn = document.getElementById("start_timer_btn");
let stopTimerBtn = document.getElementById("stop_timer_btn");
let resetTimerBtn = document.getElementById("reset_timer_btn");
let timerText = document.getElementById("timer_text");

let timerInterval;
let timerCounter = 0;

startTimerBtn.addEventListener("click", () => {
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timerCounter += 1;
    timerText.textContent = timerCounter;
  }, 1000);
});

stopTimerBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
});

resetTimerBtn.addEventListener("click", () => {
  resetTimer();
});

function resetTimer() {
  clearInterval(timerInterval);
  timerCounter = 0;
  timerText.textContent = timerCounter;
}
