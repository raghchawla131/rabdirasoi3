const navLinks = document.querySelector('.nav-links');
function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu';
  
    if (e.name === 'menu') {
      navLinks.style.top = '-100%';
    } else {
      navLinks.style.top = '9%';
    }
  }