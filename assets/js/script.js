const increase = document.querySelector('#increase')
const decrease = document.querySelector('#decrease')
const color = document.querySelector('#color')
const drawLineBtnElm = document.querySelector('#drawline')
const paintBtnElm = document.querySelector('#drawPaint')
let pensizeEl = document.querySelector('#pensize')
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const clearCanvaElm = document.querySelector('#clearCanva')
// let x = 50
// let y = 50
let isPressed = false
let size = 20
let drawColor = '#000';
let x = undefined;
let y = undefined;
let isdrawLine = false
let isdrawPaint = true
let isTouch = false

drawLineBtnElm.addEventListener('click', () => {
    isdrawLine = true
    isdrawPaint = false
})

paintBtnElm.addEventListener('click', () => {
    isdrawLine = false
    isdrawPaint = true
})

color.addEventListener('change', e => {
    drawColor =e.target.value
})

increase.addEventListener('click', () => {
    size += 5
    if(size > 50){
        size = 50
    }
    pensizeEl.innerHTML = size
})

decrease.addEventListener('click', () => {
    size -= 5
    if(size < 5){
        size = 5
    }
    pensizeEl.innerHTML = size
})

canvas.addEventListener('mousedown', e => {
    isPressed = true
    isTouch = true

    x = e.offsetX
    y = e.offsetY

})



canvas.addEventListener('mouseup', e => {
    isPressed = false
    isTouch = false

    x = undefined
    y = undefined

})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY

        if(isdrawPaint){
            drawCircle(x2, y2)
        }

        if(isdrawLine){
            drawLine(x, y, x2, y2)
            x = x2
            y = y2
        }
        
    }
    
})

canvas.addEventListener('touchmove', (e) => {
    console.log(e);
   x2 = e.targetTouches[0].clientX - 30
   y2 = e.targetTouches[0].clientY - 200

   if(isdrawPaint){
    drawCircle(x2, y2)
   }

   if(isdrawLine){
    console.log('y');
    drawLine(x, y, x2, y2)
    x = x2
    y = y2
   }

   
    
})

function drawCircle(x, y){
    

    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = drawColor
    ctx.fill();
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = drawColor
    ctx.lineWidth = size
    ctx.stroke()
}

clearCanvaElm.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

// const ctx = canvas.getContext('2d')


// ctx.beginPath()
// ctx.arc(40, 50, 40, 0, 2*Math.PI)
// ctx.fillStyle = '#ff0000'
// ctx.fill()



// console.log(ctx);