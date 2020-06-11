function comboSentence() {
    var fName = "Lennie";
    var lName = " Cottrell";
    var occupation = " and I am a programmer";
    var totalWords = "My name is " + fName.concat(lName, occupation);
    document.getElementById("new_Javascript").innerHTML = totalWords
}

function sliceThis() {
    var lightyear = "to infinity and beyond!";
    var buzz = lightyear.slice(16, 23);
    document.getElementById("slice_example").innerHTML = buzz;
}

function catchphrase() {
    var last_word = "beyond!"
    var emphasis = last_word.toUpperCase()
    document.getElementById("slice_example").innerHTML = emphasis;
}

function search_method() {
    var findAWord = "One of my favorite books as a kid was \"Where's Waldo\"";
    var foundHim = findAWord.search("Waldo");
    document.getElementById("found_him").innerHTML = foundHim;
}

function make_a_string() {
    var x = 23;
    var displayAsString = x.toString();
    document.getElementById("new_String").innerHTML = displayAsString;
}

function exactDecimal() {
    var y = 30.92437840;
    var displayTwoPlaces = y.toPrecision(4);
    document.getElementById("precise_nums").innerHTML = displayTwoPlaces;
}

function piNums() {
    var pi = 3.14159265358979323846264338327950288419716939937510;
    document.getElementById("pi").innerHTML = pi.toFixed(2);
}

function find_valueOf() {
    var newPi = 3.14159;
    var result = newPi.valueOf();
    document.getElementById("what_value").innerHTML = result;
}