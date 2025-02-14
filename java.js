let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === index);
    });
}

function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
}

function setSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}



