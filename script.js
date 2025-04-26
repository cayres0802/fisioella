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

// function sendWhatsAppMessage(event) {
//   event.preventDefault(); // Evita o envio padrão do formulário

//   const name = document.getElementById('name').value;
//   const message = document.getElementById('message').value;

//   const whatsappNumber = '5512996461927'; // Substitua pelo número do WhatsApp
//   const text = `Oii, meu nome é ${name}. ${message}`;
//   const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

//   window.open(url, '_blank'); // Abre o WhatsApp em uma nova aba
// }

async function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Enviar para o Formspree
  const formspreeUrl = 'https://formspree.io/f/mgvkvlwl'; 
  const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message
  };

  try {
      await fetch(formspreeUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      });
      console.log('Mensagem enviada para o Formspree!');
  } catch (error) {
      console.error('Erro ao enviar para o Formspree:', error);
  }

  // Redirecionar para o WhatsApp
  const whatsappNumber = '5512996461927';
  const whatsappMessage = `Olá, meu nome é ${name}. ${message}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappUrl, '_blank');
}

