const button = document.querySelector('.menu-button');
const menu = document.querySelector('nav ul');
if (button && menu) {
  button.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
}
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
