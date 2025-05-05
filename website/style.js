
function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 + num2;

    document.getElementById("Result").innerHTML = "Result: " + sum;
}

function calculateSubtraction() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 - num2;

    document.getElementById("Result").innerHTML = "Result: " + sum;
}


function calculateMultiplication() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 * num2;

    document.getElementById("Result").innerHTML = "Result: " + sum;
}


function calculateDivision() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 / num2;
    
    document.getElementById("Result").innerHTML = "Result: " + sum;
}