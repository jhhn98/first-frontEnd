let numberOfStep = 10
let direction = 'left'

let box

function boxProgram() {
    numberOfStep = prompt('몇걸음 걸을까요?')
    direction = prompt('어느쪽으로 걸을까요?')

    let moveStep = 1

    if (direction === 'left') {
        console.log('left??')
        while (moveStep <= numberOfStep) {
            console.log('left')
            moveStep++
            box.style.left = moveStep + 'px'
        }
    } else if (direction === 'right') {
        console.log('right??')
        while (moveStep <= numberOfStep) {
            console.log('right')
            moveStep--
            box.style.left = moveStep + 'px'
        }
    }
}

function main() {
    box = document.querySelector('#box' )

    box.addEventListener('click', boxProgram)
}

document.addEventListener('DOMContentLoaded', main)