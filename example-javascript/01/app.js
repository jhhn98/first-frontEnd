import * as Utils from './util.js'

console.log(Utils.AppleName)
console.log(Utils.CarName)
console.log(Utils.Sum(1, 2, 3))

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

function studyTest() {
    console.log('study test')
    //식
    console.log(10 - 10);
    console.log(10 * 10);
    console.log(10 / 10);
    console.log(13 + '10');

    //값
    console.log(10);
    console.log(22);
    console.log('22');
    console.log('하나둘 셋');
    console.log(true);
    console.log(false);
    const a = {
        name: 'jh',
        age: 40,
        address: {
            home: 'home',
            company: 'company'
        }
    }
    console.log(a);
    console.log(a.address.home);
    const b = [1, 3, 5, 'jh', 3 + 4, false, [1, 2, 3], { }]
    console.log(b[3]); //jh

    //이름 붙이기
    // 숫자로 시작할 수 없다, 공백을 포함할 수 없다, '_'를 이용하여 단어와 단어 사이를 구분하거나 단어간 첫 글자를 대문자로 하여 단어와 단어 사이를 구문하는 변수명을 만들 수 있다. 개인취향 또는 팀간 상의로 결정. 변수명은 신중하게 생각한다. 이름짓기.. 너무 어렵다 ㅠㅠㅠㅠㅠㅠㅠㅠㅠ
    let myName
    const yourName = 'KMT' //상수라 값 변경이 안됨. 선언시 값을 넣어줘야함.

    myName = 'KJH'
    console.log(myName)
    console.log(yourName)

    //문
    //if 문
    if (10 > 100) {
        console.log('첫번째 조건이 참일때 실행한다')
    } else if (1 === 1) {
        console.log('두번째 조건이 참일때 실행한다')
    } else {
        console.log('모든 조건이 거짓일때 실행한다')
    }
    //for 문
    let result = 0
    for (let i = 0; i < 10; i++) {
        result = result + i
    }
    console.log(result)

    let i = 0
    let sum
    while (i < 10) {

        sum = 10 + 1
        i++
    }
    console.log(sum)

    switch (i) {
        case 10:
            10 * 10
            break
        case 100:
            10 * 100
            break
        case 200:
            10 * 200
            break
        default:
            10 * 1000
    }
    //함수 그리고 클래스
    function funcSum(x, y) {
        return x + y
    }
    let mySum1 = funcSum(5,8)
    console.log(mySum1)

    let mySum2 = function(x, y) {
        return x + y
    }

    //바로 반환 가능할때 중괄호 생략도 가능하다.
    let mySum3 = (x, y) => x + y

    //인자가 하나일땐 소괄호도 생략가능함.
    let mySum3_1 = x => x + 2

    let mySum4 = (x, y) => {
        return x + y
    }

    let myage = () => 20

    let mysum5 = mySum4(10, 10)
    let zyz = myage() //20


    //class

    class Box {
        constructor(width, height) {
            this.width = width
            this.height = height
        }
        mWidth() {
            return this.width
        }
        mHeight() {
            return this.height
        }
        area() {
            return this.width * this.height
        }
    }

    let box2 = {
        _width: 100,
        _height: 200,
        width: function() {},
        height: function() {}
    }

    let box1 = new Box(100, 200)
    const mywidth2 = box1.mWidth()
    const myheight2 = box1.mHeight()
    let area = box1.area()
    console.log(area)
    console.log(mywidth2)
    console.log(myheight2)

    /*mywidth = box1.width()
    mywidth*/
    //모듈화
    //비슷한 유형의 성격들을 모아놓은것. 같은역할의 함수들을 같은 파일로 모아놓으면 어떨까? 같은 목적의 여러개의 파일을 폴더내에 묶어놓으면 어떨까? 등 그룹화 시키는거..?


}

document.addEventListener('DOMContentLoaded', () => {
    main()
    studyTest()
})

























