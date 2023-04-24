// HEADER //

const headerElement = document.querySelector('header');
const contentElement = document.querySelector('.content');

function checkScroll() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    headerElement.classList.add('blue');
  } else {
    headerElement.classList.remove('blue');
  }
}

window.addEventListener('scroll', checkScroll);


const textElement = document.getElementById("text");
      const containerElement = document.getElementById("slide");

      function animate() {
        const containerWidth = containerElement.offsetWidth;
        const textWidth = textElement.offsetWidth;

        let position = parseInt(textElement.style.right, 10);
        position = isNaN(position) ? -textWidth : position;

        position += 20;
        if (position > containerWidth / 2 - textWidth / 2) {
          position = containerWidth / 2 - textWidth / 2;
        }

        textElement.style.right = position + "px";

        requestAnimationFrame(animate);
      }

      animate();


      // SCROLL // 

      function scrollToElement(id) {
        var element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth"});
      }

      // PORTFOLIO // 

var $imgs = document.querySelectorAll('figure');
var $btnPrev = document.querySelector('.btn-prev');
var $btnNext = document.querySelector('.btn-next');

var index = 2;
$btnNext.addEventListener('click', function () {
  $imgs[index].classList.remove('is-active');
  
  index += 1;
  if (index > ($imgs.length - 1)) {
    index = 0;
  }

  $imgs[index].classList.add('is-active');
});

$btnPrev.addEventListener('click', function () {
  $imgs[index].classList.remove('is-active');
  
  index -= 1;
  if (index < 0) {
    index = $imgs.length - 1;
  }

  $imgs[index].classList.add('is-active');
});

// LGDD// 

var $imgs = document.querySelectorAll('figure');
var $btnPrev = document.querySelector('.btn-prev');
var $btnNext = document.querySelector('.btn-next');

var index = 0;
$btnNext.addEventListener('click', function() {
  $imgs[index].classList.remove('is-active');

  index += 1;
  if (index > ($imgs.length - 1)) {
    index = 0;
  }

  $imgs[index].classList.add('is-active');
});

$btnPrev.addEventListener('click', function() {
  $imgs[index].classList.remove('is-active');

  index -= 1;
  if (index < 0) {
    index = $imgs.length - 1;
  }

  $imgs[index].classList.add('is-active');
});
