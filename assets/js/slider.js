var currentSlide = 0;
var slides = document.querySelectorAll('.banner-slider__slides');

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

document.getElementById('prevBtn').addEventListener('click', function() {
  changeSlide(-1);
});

document.getElementById('nextBtn').addEventListener('click', function() {
  changeSlide(1);
});

function autoSlide() {
  changeSlide(1);
}

setInterval(autoSlide, 3000);
