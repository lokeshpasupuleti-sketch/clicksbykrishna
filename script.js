let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".carousel-images img");
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    document.querySelector(".carousel-images").style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(n) {
    slideIndex += n;
    showSlides();
}

showSlides(); // Initial call to show the first image
setInterval(() => { moveSlide(1); }, 3000); // Automatically move to the next slide every 3 seconds
