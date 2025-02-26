let currentSlide = 0;

function moveSlide(direction) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.card');
  const totalSlides = slides.length;
  const cardsToShow = 3; // Number of cards to show at a time

  // Update current slide index
  currentSlide += direction;

  // Circular behavior
  if (currentSlide < 0) {
    currentSlide = totalSlides - cardsToShow; // Move to the last set of cards
  } else if (currentSlide > totalSlides - cardsToShow) {
    currentSlide = 0; // Move back to the first set of cards
  }

  // Calculate the offset for sliding one card at a time
  const offset = -currentSlide * (100 / cardsToShow);
  slider.style.transform = `translateX(${offset}%)`;
}