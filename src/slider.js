document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('#default-carousel');
  const items = Array.from(carousel.querySelectorAll('[data-carousel-item]'));
  const indicators = Array.from(carousel.querySelectorAll('[data-carousel-slide-to]'));
  let currentIndex = 0;

  const showSlide = (index) => {
      items.forEach((item, i) => {
          item.classList.toggle('block', i === index);
          item.classList.toggle('hidden', i !== index);
      });

      indicators.forEach((indicator, i) => {
          indicator.setAttribute('aria-current', i === index ? 'true' : 'false');
      });

      currentIndex = index;
  };

  const showNextSlide = () => {
      const nextIndex = (currentIndex + 1) % items.length;
      showSlide(nextIndex);
  };

  const showPrevSlide = () => {
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      showSlide(prevIndex);
  };

  // Event listeners for controls
  carousel.querySelector('[data-carousel-next]').addEventListener('click', showNextSlide);
  carousel.querySelector('[data-carousel-prev]').addEventListener('click', showPrevSlide);

  // Event listeners for indicators
  indicators.forEach((indicator, i) => {
      indicator.addEventListener('click', () => showSlide(i));
  });

  // Initialize carousel
  showSlide(currentIndex);

  // Optional: Auto-slide functionality
  setInterval(showNextSlide, 5000); // Change slides every 5 seconds
});
