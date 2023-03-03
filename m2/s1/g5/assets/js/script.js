window.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('contenuto');
    element.classList.add('fade-in');
  });



window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    const started = document.querySelector('.started');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 390) {
      navbar.classList.add('white');
      started.classList.add('green');
    } else {
      navbar.classList.remove('white');
      started.classList.remove('green');
    }
  });


const gs = document.querySelectorAll('#hero svg g');


function randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  

  function toggleRandomG() {
    const gToToggle = randomFromArray(Array.from(gs));
    if (gToToggle.classList.contains('show')) {
      gToToggle.classList.remove('show');
    } else {
      gToToggle.classList.add('show');
    }
  }
  

  setInterval(toggleRandomG, 10);

