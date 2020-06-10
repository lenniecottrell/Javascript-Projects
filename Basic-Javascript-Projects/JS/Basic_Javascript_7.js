//global variable
var x = 100

function addGlobalAndLocal() {
    var y = 50; //local variable
    return x + y;
}
console.log(addGlobalAndLocal());

function errorCheck() {
    var numDogs = 2;
    return (x + numdogs); //capitalization error
}

errorCheck();

//this is an if statement with the Date().getHours() method,
// which includes a document.getElementById() method
function dateCheck() {
    var timeForDinner = new Date().getHours();
    if (timeForDinner >= 19) {
        document.getElementById("dateTrial").innerHTML = "it is " + 
        timeForDinner + " o'clock... Dinner time!";
    } else {
        var timeNow = new Date().getHours();
        document.getElementById("dateTrial").innerHTML = "we are in the " + 
        timeNow + "th hour";
    }
}

//the below code was for p. 136, but also applies to 137 and 
function finalResult() {
    function bmiCalculator() {
        var heightInput, weightInput;
        heightInput = document.getElementById("height").value;
        weightInput = document.getElementById("weight").value;
            function heightSquare() {
                return (heightInput * heightInput)
            }
        return (weightInput / heightSquare());
        }
    document.getElementById("BMI_result").innerHTML = "Your BMI is " + bmiCalculator();    
    if (bmiCalculator() < 24.9 && bmiCalculator() > 18.5) {
        document.getElementById("BMI_info").innerHTML = "You are in a normal range";
    }
        else if (bmiCalculator() < 18.5) {
        document.getElementById("BMI_info").innerHTML = "You are underweight";
    }
        else {
        document.getElementById("BMI_info").innerHTML = "You are overweight";
    };
    }


