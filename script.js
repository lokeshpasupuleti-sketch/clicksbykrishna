document.querySelectorAll('.gallery-img').forEach(item => {
    item.addEventListener('click', (event) => {
        const fullSizeUrl = item.getAttribute('data-full');
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        
        lightboxImage.src = fullSizeUrl;
        lightbox.style.display = 'flex';
    });
});

// Close Lightbox
document.getElementById('close').addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
});

// Show More Images (if you want to dynamically load more images)
document.querySelector('.view-more-link').addEventListener('click', (event) => {
    event.preventDefault();
    // Add more images to the gallery
    const gallery = document.querySelector('.image-grid');
    
    // Example of adding new images dynamically
    const newImages = [
        '20210618200143_IMG_9500.JPG',
        '20210618200143_IMG_9501.JPG',
        '20210618200143_IMG_9502.JPG'
    ];

    newImages.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = "New Sample Photo";
        img.classList.add('gallery-img');
        img.setAttribute('data-full', imageSrc);
        gallery.appendChild(img);
    });
});
