// These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// This function covers the slide show
var slideIndex = 1;
    showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides"); //this creates an array of slides
    var dots = document.getElementsByClassName("dot"); //this creates an array of dots
        /*1*/if (n > slides.length) {slideIndex = 1} //
        /*2*/if (n < 1) {slideIndex = slides.length}
        /*3*/for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
        /*4*/for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace( " active", "");
            }
        /*5*/slides[slideIndex-1].style.display = "block";
        /*6*/dots[slideIndex-1].className += " active";
}
/* slides.length and dots.length are both 5, so going through the above code...
1) if n is greater than 5, make 'slideIndex' equal to 1 (effectively looping back to the beginning of the slideshow)
2) if n is ever less than 1, slideIndex becomes 5 (effectively looping to the end of the slideshow)
3) for the each element in the slides array, hide it as you iterate through the loop
4) for each element in the dots array, change the classname to " active", which triggers the CSS
5) after each loop, display the element in the slides array that is slideIndex-1
6) after each loop, add " active" to the className of the element in the dots array which is slideIndex-1
    (corresponding to the same slide as #5)
*/
