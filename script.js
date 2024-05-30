// JavaScript for creating an interactive slideshow
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();

// script.js

function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "block") {
        section.style.display = "none";
    } else {
        section.style.display = "block";
    }
}

document.addEventListener('keypress', function (e) {
    var keyword = 'alson'; // The keyword to trigger the Easter egg
    var input = ''; // Variable to store user input

    // Add the pressed key to the input string
    input += e.key.toLowerCase();

    // Check if the input matches the keyword
    if (input === keyword) {
        // Redirect to Google when the Easter egg is triggered
        window.location.href = 'https://www.google.com';
    }
});
