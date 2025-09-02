let currentLeftBoxPosition = 100;
let numberOfStep = 10
let direction = 'left'

let box

function boxProgram() {
    numberOfStep = parseInt(prompt('몇걸음 걸을까요?'))
    direction = prompt('어느쪽으로 걸을까요?')

    let moveStep = 1

    if (direction === 'left') {
        while (moveStep <  numberOfStep) {
            moveStep ++
            box.style.left = (currentLeftBoxPosition - moveStep) + 'px'
        }
        currentLeftBoxPosition = currentLeftBoxPosition - moveStep
    } else if (direction === 'right') {
        while (moveStep < numberOfStep) {
            console.log(currentLeftBoxPosition)
            console.log(moveStep)
            moveStep ++
            box.style.left = (currentLeftBoxPosition + moveStep) + 'px'
        }
        currentLeftBoxPosition = currentLeftBoxPosition + moveStep
    } else {
        console.error();
    }
}

function main() {
    box = document.querySelector('#box' )

    box.style.left = currentLeftBoxPosition + 'px'
    box.addEventListener('click', boxProgram)
}

document.addEventListener('DOMContentLoaded', main)