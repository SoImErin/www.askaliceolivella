document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburgerMenu');
    const mobileNav = document.getElementById('mobileNav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
});
