/* Botão de voltar ao topo */

const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
    backToTop.style.opacity = 1;
  } else {
    backToTop.classList.remove('show');
    backToTop.style.opacity = 0;  
  }
});


/* Menu Hamburguer */

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

/* Botão de expandir */

document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    const boxContainer = button.closest('.box-container');

    // Fecha os outros
    document.querySelectorAll('.box-container').forEach(container => {
      if (container !== boxContainer) {
        container.classList.remove('expanded');
      }
    });

    // Alterna o atual
    boxContainer.classList.toggle('expanded');
  });
});

/* Contato */

function sendWhatsAppMessage(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  const whatsappNumber = '5512996461927'; // Substitua pelo número do WhatsApp
  const text = `Oii, meu nome é ${name}. ${message}`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, '_blank'); // Abre o WhatsApp em uma nova aba
}

