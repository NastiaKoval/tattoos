var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 220,
  rowHeight: 220
});

const MENU = document.querySelector('ul');
const BURGER = document.getElementById('burger');
const HEADER = document.querySelector('header');
const NAV = document.querySelector('nav');
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
      
    if (HEADER.classList.contains('open')) {
      BURGER.classList.add('close');
      BURGER.addEventListener('animationend', function() { 
        this.classList.remove('close');
        this.classList.remove('vert');
      });
      MENU.classList.add('slide-out');
      MENU.addEventListener('animationend', function() { 
        this.classList.remove('slide-out');
        HEADER.classList.remove('open');
      });
    }
  });

  BURGER.addEventListener('click', (event) => {
    if (!HEADER.classList.contains('open')) {
      HEADER.classList.add('open');
      BURGER.classList.add('opening');
      BURGER.addEventListener('animationend', function() { 
        this.classList.remove('opening');
        this.classList.add('vert');
      });
      MENU.classList.add('slide-in');
      MENU.addEventListener('animationend', function() { 
        this.classList.remove('slide-in');
        HEADER.classList.remove('open');
        HEADER.classList.add('open');
      });
    } else {
      
      BURGER.classList.add('close');
      BURGER.addEventListener('animationend', function() { 
        this.classList.remove('close');
        this.classList.remove('vert');
      });
      MENU.classList.add('slide-out');
      MENU.addEventListener('animationend', function() { 
        this.classList.remove('slide-out');
        HEADER.classList.remove('open');
      });
      
    }
  });

NAV.addEventListener('click', () => {
    if (HEADER.classList.contains('open')) {
        BURGER.classList.add('close');
        BURGER.addEventListener('animationend', function() { 
            this.classList.remove('close');
            this.classList.remove('vert');
        });
        MENU.classList.add('slide-out');
        MENU.addEventListener('animationend', function() { 
            this.classList.remove('slide-out');
            HEADER.classList.remove('open');
        });
    }
});
