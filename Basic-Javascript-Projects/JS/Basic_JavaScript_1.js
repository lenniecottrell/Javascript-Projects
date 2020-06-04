var aussie = "Ella", corgi = "Henry", girlfriend = "Allison"; //assigning three new variables

document.write(corgi); // This displays the value assigned to the variable "corgi"

var corgi = corgi.fontcolor("red"); //this displays the "corgi" value as red
var aussie = aussie.fontcolor("orange"); //this displays the "aussie" value as orange
var girlfriend = girlfriend.fontcolor("pink"); //this displays the "girlfriend" value as "pink"

document.write(corgi + " " + aussie + " " + girlfriend); 
//the above prints all values with their colors and a space between each.
//it is also an example of an expression contained within a statement.
//document.write is a statement, and between the () is the expression.
//it also concatenates the variables

//this creates the MC hammer button.
function buttonFunction() {
    var txt;
    if (confirm("Hammer time!")) {
        txt = "u can't touch this"
    } else {
        txt = "Not Hammer time :("
    }
    document.getElementById("buttonResponse").innerHTML = txt;
}

function changeBackground () {
    var text = document.getElementById("box1").style.backgroundColor = "red";
}

function backToNormal () {
    var text = document.getElementById("box1").style.backgroundColor = "";
}