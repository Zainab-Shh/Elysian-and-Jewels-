//Responsive Navbar

const showMenu = (toggleId, navId) => {
    const toggle = document.querySelector(toggleId),
        nav = document.querySelector(navId)
    toggle.addEventListener('click', ()  => {
       nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}
showMenu('.nav-toggle','.nav-menu')

//Scroll Navbar
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle('sticky', window.scrollY > 400);
});