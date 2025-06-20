// complete the challenge here 👇


// 1. Avoid the Enchanted Spider
const spiderWebDiv = document.getElementById('spiderWeb')
spiderWebDiv.addEventListener('mouseover', event => event.target.classList.add('spider-web'))
spiderWebDiv.addEventListener('mouseleave', event => event.target.classList.remove('spider-web'))

// 2. Activate Magic Portal
const magicPortalFormEl = document.getElementById('magicPortalForm')
magicPortalFormEl.addEventListener('keypress', event => {
    if (event.key !== 'Enter') return
    event.preventDefault()
    console.log('Magic Portal activated')
})

// 3. Track Fairy Movements

const handleFairyMovement = (left = 0, top = 0) => {
    const fairyEl = document.querySelector('.fairy')
    if (left == 0 || top == 0) fairyEl.setAttribute('hidden', true) 
        else if (fairyEl.hasAttribute('hidden')) fairyEl.toggleAttribute('hidden')
    fairyEl.style.top = appendPx(top)
    fairyEl.style.left = appendPx(left)
}

const handleKeyDown = event =>{ 
    if (event.ctrlKey) document.addEventListener("mousemove", handleMouseMove)
}
const handleMouseMove = event => handleFairyMovement(event.clientX, event.clientY)

const handleKeyUp = event => {
    document.removeEventListener("mousemove", handleMouseMove)
    handleFairyMovement()
}

document.addEventListener("keydown", handleKeyDown)
document.addEventListener("keyup", handleKeyUp)


// 4. Summon Fireflies

const fireFlyBtnEl = document.getElementById('fireflyButton')
fireFlyBtnEl.addEventListener("click", event => event.target.classList.toggle('firefly'))


// 5. Scroll through Ancient Scrolls
const scrollCtrlEl = document.getElementById('scrollContainer')
scrollCtrlEl.addEventListener('scroll', event => {
    const tigerEl = document.querySelector('.tiger')
    tigerEl.style.top = appendPx(event.target.scrollTop)
})

// 6. Navigate through the Maze
const unit = 10

const appendPx = unit => unit + 'px'
const convertNumber = px => px ? +px.replace('px', '') : 0

const explorerEl = document.querySelector('.explorer')

const handleArrowUp = () => {
    let top = convertNumber(explorerEl.style.top)
    return top <= 0 ? 0 : top - unit;
}
const handleArrowDown = () => {
    let top = convertNumber(explorerEl.style.top)
    return top >= window.innerHeight - explorerEl.clientHeight * 1.25 ? top : top + unit
}
const handleArrowLeft = () => {
    let left = convertNumber(explorerEl.style.left)
    return left <= 0 ? 0 : left - unit
}
const handleArrowRight = () => {
    let left = convertNumber(explorerEl.style.left)
    return left >= window.innerWidth - explorerEl.clientWidth * 1.25 ? left : left + unit
}

const applyPositionChange = (direction, fn) => {
    explorerEl.style[direction] = appendPx(fn())
} 
const handleKeyDowns = {
    ArrowUp: handleArrowUp,
    ArrowDown: handleArrowDown,
    ArrowLeft: handleArrowLeft,
    ArrowRight: handleArrowRight
}
const handleKeyDirection = {
    ArrowUp: 'top',
    ArrowDown: 'top',
    ArrowLeft: 'left',
    ArrowRight: 'left'
}

document.addEventListener('keydown', event => {
    if (Object.keys(handleKeyDowns).includes(event.key)) applyPositionChange( handleKeyDirection[event.key], handleKeyDowns[event.key])
})

// 7. Detect Magical Creatures

const creatureDetectorEl = document.querySelector('#creatureDetector')
creatureDetectorEl.addEventListener('mouseover', () => console.log('Magical creature detected!'))
creatureDetectorEl.addEventListener('mouseout', () => console.log('Magical creature left!'))