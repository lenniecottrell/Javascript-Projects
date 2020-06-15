//use switch keyword
function whatsForBreakfast() {
    var breakfastResponse;
    var choices = document.getElementById("breakfastChoice").value;
    var confirmation = "You have selected "
    switch (choices) {
        case "Eggs":
        case "eggs":
            breakfastResponse = confirmation + "eggs";
        break;
        case "Oatmeal":
        case "oatmeal":
            breakfastResponse = confirmation + "oatmeal";
        break;
        case "Cheerios":
        case "cheerios":
            breakfastResponse = confirmation + "Cheerios";
        break;
        case "Quiche":
        case "quiche":
            breakfastResponse = confirmation + "quiche";
        break;
        case "Chilaquiles":
        case "chilaquiles":
            breakfastResponse = confirmation + "chilaquiles";
    }
    document.getElementById("confirmSelection").innerHTML = breakfastResponse;
}

// utilize getElementsByClassName()
function lunchFunction() {
    var L = document.getElementsByClassName("lunch");
    L[2].innerHTML = "*Temporarily Unavailable*";
    L[4].innerHTML = "*Temporarily Unavailable*";
}

//use a canvas to draw a graphic
var c = document.getElementById("foodCanvas");
var ctx = c.getContext("2d");
var masterFaceX = 250;
var masterFaceY = 125;
/*
Here is the code for a circle
ctx.beginPath();
ctx.arc(250, 125, 50, 0, 2 * Math.PI);
ctx.stroke();
*/

//a function to store the code for a circle
function face(faceX, faceY, faceR, angle1, angle2) {
    ctx.beginPath();
    ctx.arc(faceX, faceY, faceR, angle1, (angle2 * Math.PI));
    ctx.stroke();
}

//four circles to make a face.
face(masterFaceX, masterFaceY, 50, 0, 2);
face(masterFaceX - 20, masterFaceY - 15, 8, 0, 2);
face(masterFaceX + 20, masterFaceY - 15, 8, 0, 2);
face(masterFaceX, masterFaceY + 20, 12, 0, 2);

var p = document.getElementById("canvas2");
var ptx = p.getContext("2d");

var grd = ptx.createLinearGradient(0, 0, 500, 0);
grd.addColorStop(0, "orange");
grd.addColorStop(1, "blue");

//w:500 h:250
ptx.fillStyle = grd;
ptx.fillRect(5, 120, 490, 10);

