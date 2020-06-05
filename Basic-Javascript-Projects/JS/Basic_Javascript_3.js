function addFunction() {
    var add = 5 + 5;
    document.getElementById("math").innerHTML = "5 + 5 = " + add;
}

function subFunction() {
    var myAge = 2020 - 1989;
    document.getElementById("subtract").innerHTML = "My age can be calculated by taking this year (2020) and subtracting my birth year (1989). So 2020-1989 = " + myAge;
}

function divFunction() {
    var division = 100 / 10;
    document.getElementById("divide").innerHTML  = "100 divided by 10 = " + division;
}

function multFunction() {
    var multiply = 735 * 476;
    document.getElementById("multiply").innerHTML = "735 x 476 = " + multiply;
}

function manyMath() {
    var manyMath = (2*5) + 40 / 2 - 5;
    document.getElementById("manyMath").innerHTML = "The result of (2*5) + 40 / 2 - 5 is " + manyMath + " (don't forget about PEMDAS!)";
}

function modulus() {
    var thisModulus = 17 % 5;
    document.getElementById("modulus").innerHTML = "The remainder of 17 / 3 is " + thisModulus;
}

function negative() {
    var original = 10;
    document.getElementById("negation").innerHTML = "The opposite of 10 is " + -original;
}

function plusPlus() {
    var x = 1;
    x++;
    document.getElementById("increment").innerHTML = x;
}

function minusMinus() {
    var y = 1;
    y--;
    document.getElementById("decrement").innerHTML = y;
}

function randNum() {
    var min = 30;
    var max = 90;
    var r = Math.floor(Math.random() * (max-min+1) + min);
    document.getElementById("randNum").innerHTML = r;
}

function newMath() {
    var roundedUp = Math.ceil(12.467);
    document.getElementById("result").innerHTML = roundedUp;
}