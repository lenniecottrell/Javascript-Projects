function validateForm() {
    var x = document.forms["contactForm"]["fname"].value;
    var y = document.forms["contactForm"]["lname"].value;
    var z = document.forms["contactForm"]["email"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    } else if (y == "") {
        alert("Last Name must be filled out");
        return false;
    }    else if (z == "") {
        alert("Email must be filled out");
        return false;
    }
}   