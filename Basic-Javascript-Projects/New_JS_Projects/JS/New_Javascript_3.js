function showCoffee(coffee) {
    var coffeeBlend = coffee.getAttribute("data-special_coffee");
    var roaster = coffee.getAttribute("alt");
    alert("Try the " + coffeeBlend + " from " + coffee.alt);
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}