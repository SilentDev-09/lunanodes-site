
function changeBackgroundColor() {
  const colors = ["7F00FF"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

document.querySelector('.button').addEventListener('click', function(event) {
  event.preventDefault(); 
  changeBackgroundColor();
});


function showWelcomeMessage() {
  const welcomeMessage = document.createElement('div');
  welcomeMessage.textContent = 'Benvenuto su Luna Nodes! Scopri i nostri servizi.';
  welcomeMessage.style.position = 'fixed';
  welcomeMessage.style.top = '10px';
  welcomeMessage.style.right = '10px';
  welcomeMessage.style.backgroundColor = '#7F00FF';
  welcomeMessage.style.color = '#fff';
  welcomeMessage.style.padding = '10px';
  welcomeMessage.style.borderRadius = '5px';
  welcomeMessage.style.zIndex = '1000';
  document.body.appendChild(welcomeMessage);


  setTimeout(() => {
      welcomeMessage.remove();
  }, 3000);
}

window.onload = showWelcomeMessage;


function animateOnScroll() {
  const sections = document.querySelectorAll('section');
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < windowHeight - 50) {
          section.classList.add('visible');
      } else {
          section.classList.remove('visible');
      }
  });
}

window.addEventListener('scroll', animateOnScroll);

// Aggiungi una classe CSS per le sezioni visibili
const style = document.createElement('style');
style.innerHTML = `
  section {
      opacity: 0;
      transition: opacity 0.5s ease;
  }
  section.visible {
      opacity: 1;
  }
`;
document.head.appendChild(style);


function preloadImages() {
  const images = ['logo.png', 'button-image.png']; 
  images.forEach(src => {
      const img = new Image();
      img.src = src;
  });
}

window.onload = () => {
  preloadImages();
  showWelcomeMessage(); 
};


function scrollToSection(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth' });
}


const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});