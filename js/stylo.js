// LOADING ELEMENTS
const grid = document.querySelector('.grid')
const clear = document.querySelector('.clear')
const rainbow = document.querySelector('.rainbow')
const choose = document.querySelector('.choose')
const slider = document.querySelector('.slider')
const sliderValue = document.querySelector('.sliderValue')
const defaultSize = 16;
sliderValue.innerHTML = `Squares per side: ${slider.value}`;

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
        rainbow.addEventListener('click', () => {
            cell.addEventListener('mouseover', () => {
                cell.setAttribute('style', `background-color: ${getColorCode()}`)
            })
        })
        grid.appendChild(cell)
    }
}


// UPDATING VALUE OF SLIDER
slider.oninput = function() {
    sliderValue.innerHTML = `Squares per side: ${this.value}`
    clearGrid(this.value)
}

// CLEAR 
clear.addEventListener('click', () => {
    grid.innerHTML = '';
    makeGrid(slider.value)
})

function clearGrid(x) {
    grid.innerHTML = '';
    makeGrid(x)
}

window.onload = () => {
    makeGrid(defaultSize)
}