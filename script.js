const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const icon = document.querySelector('.hamburger i');

    navbar.classList.toggle('active');

    // Troca ícone
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
}
document.querySelectorAll('.navbar a').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.navbar').classList.remove('active');
        const icon = document.querySelector('.hamburger i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});