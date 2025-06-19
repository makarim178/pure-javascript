let token = null, count = 0;

function updateTimer() {
    timer.textContent = count.toString().padStart(2, "0");
}

function addCount () {
    count++;
    updateTimer();
}

function startTimer() {
    start.setAttribute('hidden', true);
    pause.removeAttribute('hidden');
    token = setInterval(addCount, 1000);
}

function pauseTimer() {
    start.removeAttribute('hidden');
    pause.setAttribute('hidden', true);
    if (token) clearInterval(token);
}

function resetTimer() {
    count = 0;
    updateTimer();
}