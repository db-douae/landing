  document.documentElement.classList.add('js');

if (window.Typed) {
  new Typed('#text-animation', { 
    strings: ['Contact us via <a href="#">WhatsApp</a> to order dessert'],
    typeSpeed: 60,
    loop: true,
    smartBackspace: false,
    showCursor: true,
    cursorChar: '|'
   });
   new Typed('#logo', { 
    strings: ['Patisserie'],
    typeSpeed: 60,
    loop: true,
    smartBackspace: false,
    showCursor: false,
   });
}

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

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));