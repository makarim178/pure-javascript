export function main () {

    let token = null, count = 0;

    function updateTimer() {
        timer.textContent = count.toString().padStart(2, "0");
    }

    function addCount () {
        count++;
        updateTimer();
    }

    function toggleButtons() {
        start.classList.toggle('hidden');
        pause.classList.toggle('hidden');
    }

    function startTimer() {
        toggleButtons();
        token = setInterval(addCount, 1000);
    }

    function pauseTimer() {
        toggleButtons();
        if (token) clearInterval(token);
    }

    function resetTimer() {
        count = 0;
        updateTimer();
    }

    start.addEventListener('click', startTimer);
    pause.addEventListener('click', pauseTimer);
    reset.addEventListener('click', resetTimer);

    updateTimer();

}

