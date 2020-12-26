const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    
    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.transform = 'translateY(-50%) scaleX(' + (actives.length - 1) / (circles.length - 1)

    if(currentActive === 1) {
        prev.disabled = true
        next.textContent = 'Next'
    } else if (currentActive === circles.length) {
        next.textContent = 'Finish'
        next.style.backgroundColor = '#216491'
    } else {
        prev.disabled = false
        next.disabled = false
        next.textContent = "Next"
        next.style.backgroundColor = 'var(--line-border-fill)'
    }
}