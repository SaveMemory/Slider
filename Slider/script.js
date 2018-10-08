let slide_index = 1;

//method call
displaySlides(slide_index);

//changes image every one second
setInterval(nextSlide(-1),1000);

//displays appropriate slide onclick
function nextSlide(n) {
    displaySlides(slide_index += n);
}
//displays appropriate slide onclick
function currentSlide(n) {
    displaySlides(slide_index = n);
}

function displaySlides(n) {
    //loads all the images to array
    let slides = document.getElementsByClassName("showSlide");
    //checks if the slide index is bigger than the array and if yes sets the slide_idex value to 1
    if (n > slides.length) {
        slide_index = 1
    }
    //checks if the slide index is bigger than the array and if yes sets the slide_idex value of array length
    if (n < 1) {
        slide_index = slides.length
    }
    //foreach image in array sets display to none
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //for the slide with index of slide_index minus one sets the diplay to block
    slides[slide_index - 1].style.display = "block";
}