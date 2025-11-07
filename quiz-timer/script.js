let timeLeft = 10;
let timerInterval = null;

const timerDisplay = document.getElementById('timerDisplay');
const message = document.getElementById('message');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
  resetTimer()
  startBtn.disabled = true;
  message.textContent = '';
  
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    
    if (timeLeft <= 3 && timeLeft > 0) {
      timerDisplay.classList.add('warning');
    }
    
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      message.textContent = "Time's up!";
      startBtn.disabled = false;
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 10;
  timerDisplay.textContent = timeLeft;
  timerDisplay.classList.remove('warning');
  message.textContent = '';
  startBtn.disabled = false;
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);