// Lightbox for Image Popup
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-img");
    const popup = document.getElementById("image-popup");
    const popupImg = document.getElementById("popup-img");
    const closePopup = document.getElementById("close-popup");

    images.forEach(image => {
        image.addEventListener("click", function () {
            popup.style.display = "block";
            popupImg.src = this.src;
        });
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function (e) {
        if (e.target !== popupImg) {
            popup.style.display = "none";
        }
    });
});
