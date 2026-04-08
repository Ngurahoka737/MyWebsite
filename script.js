const menuIcon = document.querySelector('#menu_icon');
const navLinks = document.querySelector('.nav_links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}