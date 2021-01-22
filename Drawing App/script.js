const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const colorEl = document.getElementById('color')
const sizeEl = document.getElementById('size')
const clearEl = document.getElementById('clear')
const ctx = canvas.getContext('2d')
const body = document.body

const BRUSH_STEP = 5;
const BRUSH_MIN_SIZE = 5;
const BRUSH_MAX_SIZE = 50;

let brushSize = 10
let isPressed = false
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})

body.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, brushSize, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = brushSize * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEl.innerHTML = brushSize
}

increaseBtn.addEventListener('click', () => {
    let newBrushSize = brushSize + BRUSH_STEP

    if (newBrushSize > BRUSH_MAX_SIZE) {
        return
    }

    brushSize = newBrushSize
    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    let newBrushSize = brushSize - BRUSH_STEP;

    if (newBrushSize < BRUSH_MIN_SIZE) return;

    brushSize = newBrushSize
    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => {
    color = e.target.value
})

clearEl.addEventListener('click', () => {
    ctx.clearRect(0,0, canvas.width, canvas.height)
})
