let i = 0,
    n = 16;

container.innerHTML =
    `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`
    .repeat(n)

function getColorCode() {
    var makeColorCode = '0123456789ABCDEF';
    var code = '#';
    for (var count = 0; count < 6; count++) {
        code = code + makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
}

const cells = document.querySelectorAll('.cell')
const clear = document.querySelector('.clear')
const rainbow = document.querySelector('.rainbow')

cells.forEach(cell => cell.addEventListener('mouseover', () => {
    cell.setAttribute('style', 'background-color: black;')
}))

clear.addEventListener('click', () => {
    cells.forEach(cell => cell.setAttribute('style', 'background-color: white;'))
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.setAttribute('style', 'background-color: black;')
    }))
})

rainbow.addEventListener('click', () => {
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.setAttribute('style', `background-color: ${getColorCode()}`)
    }))
})