//create the XMLHttpRequest object
const testAjax = new XMLHttpRequest();

//Call the AJAX open method
testAjax.open('get', 'ajax_content.html', true);

// Define the AJAX callback method
testAjax.onreadystatechange = function () {
    if (testAjax.readyState == 4 && testAjax.status == 200) {
        document.getElementById("new-content").innerHTML = testAjax.responseText;
    }
    if (testAjax.status == 404) {
        document.getElementById("new-content").innerHTML = "File or resource not found";
    }
}

//Call the AJAX send method
function getNewContent() {
    testAjax.send();
    document.getElementById("button").style.display = "none";
}
