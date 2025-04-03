var display = document.getElementById("display");

function appendToDisplay(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;  // display.value = display.value + value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "ERROR!";
    }
}

document.getElementById('btn0').addEventListener('click', function() { appendToDisplay('0'); });
document.getElementById('btn1').addEventListener('click', function() { appendToDisplay('1'); });
document.getElementById('btn2').addEventListener('click', function() { appendToDisplay('2'); });
document.getElementById('btn3').addEventListener('click', function() { appendToDisplay('3'); });
document.getElementById('btn4').addEventListener('click', function() { appendToDisplay('4'); });
document.getElementById('btn5').addEventListener('click', function() { appendToDisplay('5'); });
document.getElementById('btn6').addEventListener('click', function() { appendToDisplay('6'); });
document.getElementById('btn7').addEventListener('click', function() { appendToDisplay('7'); });
document.getElementById('btn8').addEventListener('click', function() { appendToDisplay('8'); });
document.getElementById('btn9').addEventListener('click', function() { appendToDisplay('9'); });

document.getElementById('btnAdd').addEventListener('click', function() { appendToDisplay('+'); });
document.getElementById('btnSub').addEventListener('click', function() { appendToDisplay('-'); });
document.getElementById('btnMul').addEventListener('click', function() { appendToDisplay('*'); });
document.getElementById('btnDiv').addEventListener('click', function() { appendToDisplay('/'); });

document.getElementById('btnClear').addEventListener('click', clearDisplay);
document.getElementById('btnEqual').addEventListener('click', calculate);
