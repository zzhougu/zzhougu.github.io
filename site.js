const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#nav-menu');
const year = document.querySelector('#year');

if (toggle && menu){
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
if (year){ year.textContent = new Date().getFullYear(); }