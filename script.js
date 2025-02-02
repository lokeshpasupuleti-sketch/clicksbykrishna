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

