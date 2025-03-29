let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slider__slides');

const showSlide = (n) => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
};

const changeSlide = (n) => {
  showSlide(currentSlide + n);
};

document.getElementById('prevBtn').addEventListener('click', () => changeSlide(-1));
document.getElementById('nextBtn').addEventListener('click', () => changeSlide(1));

const autoSlide = () => {
  changeSlide(1);
};

setInterval(autoSlide, 3000);
