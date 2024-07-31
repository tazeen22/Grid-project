const images = document.querySelector('.carousel-images');
const totalSlides = images.children.length;
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1;
  }
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 100;
  images.style.transform = `translateX(${offset}%)`;
}