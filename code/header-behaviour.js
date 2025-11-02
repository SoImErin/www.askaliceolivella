document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".references-track");
  const slides = document.querySelectorAll(".reference");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const dotsContainer = document.querySelector(".ref-dots");

  let index = 0;
  const total = slides.length;

  // Create dots dynamically
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("ref-dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".ref-dot");

  function goToSlide(i) {
    index = i;
    track.style.transform = `translateX(-${i * 100}%)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % total;
    goToSlide(index);
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    goToSlide(index);
  });

  // Auto-slide every 6 seconds
  setInterval(() => {
    index = (index + 1) % total;
    goToSlide(index);
  }, 6000);
});
