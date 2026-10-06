let menu = document.querySelector(".menu-btn");
let nava = document.querySelectorAll("nav a");

menu.addEventListener('click', function() {
    for (a of nava) {
        a.style.display = a.style.display === '' ? 'block' : '';
    }

    menu.classList.toggle("change");
});
