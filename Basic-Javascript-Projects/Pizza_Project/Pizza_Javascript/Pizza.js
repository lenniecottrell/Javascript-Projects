/* This function initializes our string so it can get passed from
function to function, growing line by line into a full receipt */

function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0; //stores the total price
    var sizeTotal = 0; //stores the intial price of the pizza
    var sizeArray = document.getElementsByClassName("size"); //creates an array of all sizes
    for (var i=0; i < sizeArray.length; i++) { //this loop iterates through the size array
        if (sizeArray[i].checked) { //this checks to see which sizes have been checked off. If it has, it does the below code
            var selectedSize = sizeArray[i].value; //this stores whichever size was checked in the selectedSize variable
            text1 = text1 + selectedSize + "<br>"; //this displays what size is selected
        }
    }
    //these if statements put the pizza price in sizeTotal depending on size selection
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16
    }
    runningTotal = sizeTotal; //updates total price
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getTopping(runningTotal, text1); //the getTopping function has the variables runningTotal and text1 as parameters
    var viewReceipt = document.getElementById("showText");
    viewReceipt.scrollIntoView();
};
//this function adds the topping prices to runningTotal
function getTopping (runningTotal, text1) {
    var toppingTotal = 0; //stores price of toppings
    var selectedTopping = []; //creates an empty array to hold the selected toppings
    var toppingArray = document.getElementsByClassName("toppings");//creates an array of all toppings
    for (var j = 0; j < toppingArray.length; j++) { //this loop iterates through the topping arraay
        if(toppingArray[j].checked) { //if any item in the topping array is checked, do the below code
            selectedTopping.push(toppingArray[j].value); //add the value of the checked topping to selectedTopping array
            console.log("selected topping item: (" + toppingArray[j].value + ")"); //log the item in the console
            text1 = text1 + toppingArray[j].value + "<br>"; //add the topping to the displayed list
        }
    }
    var toppingCount = selectedTopping.length; //creates a variable toppingCount, and sets it to the integer value of the length of the selectedTopping array
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); //if more than one topping is selected, take 1 away form the integer
    }
    else {
        toppingTotal = 0; //if one or less topping is selected, toppingTotal is 0
    }
    runningTotal = (runningTotal + toppingTotal); //add current total price to the number in toppingTotal
    console.log("total selected topping items: " + toppingCount); //log the number of toppings selected
    console.log(toppingCount + " toppings - 1 free topping = $" + toppingTotal + ".00"); //log the subtotal with one topping free
    console.log("topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1; //display the total list of selections in the HTML document
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong> <h3>" //display total price in the HTML document
};

//this function requires the phone number to be filled out.
function validatePhone() {
    var phoneNum = document.forms["callbackNum"]["phone"].value;
    if (phoneNum == "") {
        alert("Phone number must be filled out");
        return false;
    }
}

function openForm() {
    document.getElementById("pizzaRewards").style.display = "block";
}

function closeForm() {
    document.getElementById("pizzaRewards").style.display = "none";
}