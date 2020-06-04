function newFunction() {
    var myName = "My name is lennie";
    var result = myName.fontcolor("orange");
    document.getElementById("para1").innerHTML = result;
}

function secondFunc() {
    var pop = "(Click) This is ";
    pop += "a message for you."
    document.getElementById("header").innerHTML = pop;
}