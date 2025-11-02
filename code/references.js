document.addEventListener("DOMContentLoaded", () => {
  const references = document.querySelectorAll(".reference");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  let index = 0;

  function showReference(i) {
    references.forEach(ref => ref.classList.remove("active"));
    references[i].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % references.length;
    showReference(index);
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + references.length) % references.length;
    showReference(index);
  });

  // Optional auto-slide every 6 seconds
  setInterval(() => {
    index = (index + 1) % references.length;
    showReference(index);
  }, 6000);
});
