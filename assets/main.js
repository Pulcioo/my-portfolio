const hamburgerMenu = document.querySelector('.hamburger_menu');
const wrapper = document.getElementById('hamburger_wrapper');
const navLinks = document.querySelector('.nav_links');

wrapper.addEventListener("click", () => {
    wrapper.classList.toggle('open');
    hamburgerMenu.classList.toggle('active');
})

navLinks.addEventListener("click", () => {
    wrapper.classList.remove('open');
    hamburgerMenu.classList.remove('active');
})