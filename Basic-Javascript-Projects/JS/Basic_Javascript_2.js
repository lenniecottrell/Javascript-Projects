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


function displayGif() {
    var emCee = document.createElement("img");
    emCee.src = "https://66.media.tumblr.com/8456e2c9cb904a4835bc78396e105a6c/tumblr_mf6yiacwZZ1qm6tzso1_500.gifv";
    document.body.appendChild(emCee);
}