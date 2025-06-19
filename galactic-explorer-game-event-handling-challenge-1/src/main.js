// complete the challenge here 👇


// 1. Initiate the Launch Sequence
const launchBtnEl = document.querySelector('#launchButton')
launchBtnEl.addEventListener("click", () => {
    const rocketEl = document.querySelector('.rocket')
    rocketEl.classList.add("launch")
})


// 2. Monitor the Control Input
const controlInputEl = document.querySelector("#controlInput")
controlInputEl.addEventListener("keydown", ({key}) => console.log(key))

// 3. Track the Mouse Coordinates
document.addEventListener('mousemove', ({clientX, clientY}) => {
    const starEl = document.querySelector('.star')
    starEl.style.top = clientY + 'px'
    starEl.style.left = clientX + 'px'
})

// 4. Activate the Hyperdrive
const hyperdriveButtonEl = document.querySelector('#hyperdriveButton')
hyperdriveButtonEl.addEventListener('dblclick', () => document.body.classList.add("hyperdrive"))