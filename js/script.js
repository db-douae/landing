let text = new Typed('#text-animation', {
    strings: ['Contact us via <a href="#">WhatsApp</a> to order dessert'],
    typeSpeed: 60,
    loop: true,
    smartBackspace: false,
    showCursor: true,
    cursorChar: '|'
});

let menu = document.querySelector('.menu-toggle');
let nav = document.querySelector("header nav");
let icon = menu.querySelector("i");

menu.addEventListener('click', () => {
    const Open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', Open);
    if (Open) {
        icon.className = 'fa-solid fa-xmark';
    } else {
        icon.className = 'fa-solid fa-bars';
    }
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
        icon.className = 'fa-solid fa-bars';
    })
})