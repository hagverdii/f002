let isRunning = false;
let currentTimeout = null;

const redLight = document.getElementById('redLight');
const yellowLight = document.getElementById('yellowLight');
const greenLight = document.getElementById('greenLight');
const status = document.getElementById('status');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

function clearAllLights() {
  redLight.classList.remove('active');
  yellowLight.classList.remove('active');
  greenLight.classList.remove('active');
}

function showRedLight() {
  if (!isRunning) return;
  
  clearAllLights();
  redLight.classList.add('active');
  status.textContent = 'STOP - Red Light (3s)';
  
  currentTimeout = setTimeout(showYellowLight, 3000);
}

function showYellowLight() {
  if (!isRunning) return;
  
  clearAllLights();
  yellowLight.classList.add('active');
  status.textContent = 'WAIT - Yellow Light (1s)';
  
  currentTimeout = setTimeout(showGreenLight, 1000);
}

function showGreenLight() {
  if (!isRunning) return;
  
  clearAllLights();
  greenLight.classList.add('active');
  status.textContent = 'GO - Green Light (3s)';
  
  currentTimeout = setTimeout(showRedLight, 3000);
}

function startTrafficLight() {
  if (isRunning) return;
  
  isRunning = true;
  startBtn.disabled = true;
  showRedLight();
}

function stopTrafficLight() {
  isRunning = false;
  clearTimeout(currentTimeout);
  clearAllLights();
  status.textContent = 'Stopped';
  startBtn.disabled = false;
}

startBtn.addEventListener('click', startTrafficLight);
stopBtn.addEventListener('click', stopTrafficLight);