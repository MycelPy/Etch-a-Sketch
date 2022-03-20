let i = 0,
    n = 16;

container.innerHTML =
    `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`
    .repeat(n)

// GET COLOR
function getColorCode() {
    var makeColorCode = '0123456789ABCDEF';
    var code = '#';
    for (var count = 0; count < 6; count++) {
        code = code + makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
}

// LOADING ELEMENTS
const cells = document.querySelectorAll('.cell')
const clear = document.querySelector('.clear')
const rainbow = document.querySelector('.rainbow')
const choose = document.querySelector('.choose')
const slider = document.querySelector('.slider')
const sliderValue = document.querySelector('.sliderValue')
sliderValue.innerHTML = `Squares per side: ${slider.value}`;

// UPDATING VALUE OF SLIDER
slider.oninput = function() {
    sliderValue.innerHTML = `Squares per side: ${this.value}`;
    n = Number(this.value);

}

// DEFAULT BLACK COLOR ON HOVER
cells.forEach(cell => cell.addEventListener('mouseover', () => {
    cell.setAttribute('style', 'background-color: black;')
}))

// CLEAR
clear.addEventListener('click', () => {
    cells.forEach(cell => cell.setAttribute('style', 'background-color: white;'))
})

// RAINBOW COLOR
rainbow.addEventListener('click', () => {
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.setAttribute('style', `background-color: ${getColorCode()}`)
    }))
})

// CHOOSE COLOR
choose.addEventListener('click', (e) => {
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.setAttribute('style', `background-color: ${e.target.getAttribute('data-current-color')}`)
    }))
})