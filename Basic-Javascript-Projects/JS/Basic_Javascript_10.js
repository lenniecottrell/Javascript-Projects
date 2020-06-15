//while loop
function Call_Loop() {
    var xp = 0
    var display = ""
    while (xp < 21) {
        display += xp + " ";
        xp++;
        if (xp == 20) {
        document.getElementById("encouragement").innerHTML = "You reached level 20!";
        }
    }
    document.getElementById("loop").innerHTML = display;
}

//string .length method
function showStringLength() {
    var stringTrial = "You reached level 20!";
    var stringNum = stringTrial.length;
    document.getElementById("string_length").innerHTML = stringNum + " "
}

//for loop

var systems = ["Gamecube", "Nintendo 64", "Playstation 2", "Nintendo Switch", "Steam Link"];
var gameList = "";
var i;
function for_Loop() {
    for (i = 0; i < systems.length; i++) {
        gameList += systems[i] + "<br>";
    }
    document.getElementById("List_of_Systems").innerHTML = gameList;
}

//array
function array_function() {
    var Switch_Games = [];
    Switch_Games[0] = "Breath of the Wild";
    Switch_Games[1] = "The Elder Scrolls: Skyrim";
    Switch_Games[2] = "Super Smash Bros: Ultimate";
    Switch_Games[3] = "Unraveled Two";
    Switch_Games[4] = "Transistor";
    Switch_Games[5] = "Untitled Goose Game";
    document.getElementById("Array").innerHTML = "One of the games I have for the Switch is "
    + Switch_Games[2] + ".";
}

//use the const keyword
function constant_function() {
    const breadType = {type:"sandwich", shape:"loaf", flavor:"whole wheat"}
    breadType.price = "$2.50";
    breadType.topping = "mustard";
    breadType.flavor = "multigrain"
    console.log(breadType.topping);
    document.getElementById("Constant").innerHTML = "I had a good " + breadType.type + " on a "
    + breadType.flavor + " " + breadType.shape + " with " + breadType.topping + ". "
    + "It cost " + breadType.price;
}

// use the let keyword
function letButton() {
    let i = 10;
    var sum = i + 22;
    document.getElementById("tryLet").innerHTML = sum;
}

//use a return statement

function returnStatement(num1, num2) {
    function addition(num1, num2) {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    return num1 + num2;
    }
    var x = addition()
    document.getElementById("tryReturn").innerHTML = x;
}

let computer = {
    model:"Macbook Air ",
    display:"Retina",
    size:"13-inch ",
    year:"2018 ",
    Processor: "1.6 GHz Dual-Core Intel Core i5",
    Memory:"8 GB 2133 MHz LPDDR3",
    description : function() {
        return "You are working on a " + this.year + this.model + "with a " 
        + this.size + this.display + " display.";
        }
    }

function step203() {
    document.getElementById("macbookAir").innerHTML = computer.description();
};

function breakFunc() {
    var text = "";
    for (i = 0; i < 21; i++) {
        if (i === 10) {
            text += "Halfway there at ";
        } else if (i === 11) {
            break;
        }
        text += i + "<br>";
    }
    document.getElementById("tryBreak").innerHTML = text;
}

function continueFunc() {
    var text = "";
    for (i = 0; i < 21; i++) {
        if (i === 10) {
            continue;
        }
        text += i + "<br>";
    }
    document.getElementById("tryContinue").innerHTML = text;
}