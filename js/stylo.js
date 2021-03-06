// LOADING ELEMENTS
const grid = document.querySelector('.grid')
const clear = document.querySelector('.clear')
const rainbow = document.querySelector('.rainbow')
const choose = document.querySelector('.choose')
const slider = document.querySelector('.slider')
const btns = document.querySelectorAll('.btn')
const sliderValue = document.querySelector('.sliderValue')
const defaultSize = 16;
sliderValue.innerHTML = `${slider.value} x ${slider.value}`;

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('text');
}


btns.forEach(btn => btn.addEventListener('mouseover', () => {
    btn.classList.add('text')
}))

// GET COLOR
function getColorCode() {
    var makeColorCode = '0123456789ABCDEF';
    var code = '#';
    for (var count = 0; count < 6; count++) {
        code = code + makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
}

function clickHandler() {
    elementIsClicked = true;
}

// MAKE A GRID

function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (i = 0; i < size * size; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('style', `background-color: ${choose.getAttribute('data-current-color')}`)
        })
        celll(cell)
        rainboww(cell)
        grid.appendChild(cell)
    }
}

function rainboww(x) {
    rainbow.addEventListener('click', () => {
        x.addEventListener('mouseover', () => {
            x.setAttribute('style', `background-color: ${getColorCode()}`)
        })
    })
}

function celll(x) {
    choose.addEventListener('click', () => {
        x.addEventListener('mouseover', () => {
            x.setAttribute('style', `background-color: ${choose.getAttribute('data-current-color')}`)
        })
    })
}


// UPDATING VALUE OF SLIDER
slider.oninput = function() {
    sliderValue.innerHTML = `${this.value} x ${this.value}`
    grid.innerHTML = ''
    makeGrid(this.value)
}

// CLEAR 
clear.addEventListener('click', () => {
    grid.innerHTML = '';
    makeGrid(slider.value)
})

btns.forEach(btn => btn.addEventListener('transitionend', removeTransition));

window.onload = () => {
    makeGrid(defaultSize)
}