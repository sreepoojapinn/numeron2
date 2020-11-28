

var time = 20;
var timerId;

function startTimer() {
    time = 20;
    timer.innerHTML = time;
    timerId = setInterval(() => {
        time--;
        if (time == 0) location.href = "./gameover.html?score=" + score;
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    startTimer();
}

startTimer();

var number1box = document.getElementById("number1")
var number2box = document.getElementById("number2")
var number3box = document.getElementById("number3")

var number1, number2, number3
var score = 0
var operators

function randomize() {
    number1 = Math.round(Math.random() * 100)
    number2 = Math.round(Math.random() * 100)

    if (number1<number2) {
        var extra = number1
        number1 = number2
        number2 = extra
    }

    operators = Math.ceil(Math.random()*5)
    switch(operators) {
        case 1: number3 = number1+number2; break;
        case 2: number3 = number1-number2; break;
        case 3: number3 = number1*number2; break;
        case 4: number3 = Math.floor(number1/number2)
                number3 = number1*number2; break;
        case 5: number3 = number1%number2; break;        
    
    }

    console.log(number1+" "+number2+" "+number3+" "+operators)
    number1box.innerHTML = number1
    number2box.innerHTML = number2
    number3box.innerHTML = number3


    
}

randomize()

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const mul = document.getElementById("mul")
const divide = document.getElementById("divide")
const modulus = document.getElementById("modulus")

plus.onclick = () => {
    if (number1 = number2 === number3) {
        score++;
        resetTime(timerId);
        randomize();

    }else {
        location.href = "gameover.html?score=" + score;

    }

    
        

}