var x = 32;
var y = false;
var z = "Hello!";

document.write(typeof x);

function checkNum() {
    document.getElementById("numTest1").innerHTML = isNaN(x);
}

function checkNum2() {
    document.getElementById("numTest2").innerHTML = isNaN(z);    
}

function infinFunction() {
    var tooMuch = 2E309;
    var tooLittle = -47E500;
    document.getElementsByTagName("h5")[0].innerHTML = tooMuch;
    document.getElementsByTagName("h5")[1].innerHTML = tooLittle;
}

function newFunction() {
    var truth = (10 > 5);
    document.getElementById("booleanTest").innerHTML = truth;
}

function coffeeFunc() {
    var notTruth = (5 > 10);
    document.getElementById("coffee").innerHTML = notTruth;
}

function typeCoercion() {
    var mode = ("40" + 7);
    document.getElementById("typeC").innerHTML = mode;
}

function equality() {
    var tester = ((100 + 100) == 200);
    document.getElementById("hundreds").innerHTML = tester;
}

function notEquality() {
    var wrong = (1000 + 2) == 2000;
    document.getElementById("thousands").innerHTML = wrong;
}

console.log(10 + 5);
console.log(isNaN(x));
console.log((1000 + 2) == 2000);
console.log("-----");
var book = "notebook";
var journal = "notebook";
var rabbitString = "14"
var numRabbits = 14
console.log(book === journal);
console.log(47 === "rabbit");
console.log(rabbitString === numRabbits); 
console.log(45 === 32);

function boolAndTrue() {
    var example1 = (15 > 10) && (3 > 2);
    document.getElementsByTagName("p")[5].innerHTML = example1;
}

function boolAndFalse() {
    var example2 = (15 < 10) && (3 > 2);
    document.getElementsByTagName("p")[6].innerHTML = example2;
}

function boolOrTrue() {
    var example3 = (15 > 10) || (3 > 2);
    document.getElementsByTagName("p")[7].innerHTML = example3;
}

function boolOrFalse() {
    var example4 = (15 < 10) || (3 < 2);
    document.getElementsByTagName("p")[8].innerHTML = example4;
}

function boratFunction() {
    var blackSuit = !(3 > 400);
    document.getElementById("borat").innerHTML = blackSuit;
}

function comedicTiming() {
    var notBlack = !(400 > 3);
    document.getElementById("punchline").innerHTML = notBlack;
}