document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            header.classList.add("not-at-top");
        } else {
            header.classList.remove("not-at-top");
        }

        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});