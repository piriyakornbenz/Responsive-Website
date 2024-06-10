// toggle menu function

function toggleMenu(x) {
  x.classList.toggle("change");

  let myMenu = document.getElementById("myMenu");
  if (myMenu.className === "menu") {
    myMenu.className += " menu-active";
  } else {
    myMenu.className = "menu";
  }
}

// navbar sticky function

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// preloader
document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.getElementById('preloader');

  setTimeout(function () {
      preloader.classList.add('hide');
      document.querySelector('.content').style.display = 'block';
      document.body.style.overflow = 'auto';
  }, 300); //
});

// text animation move up
document.addEventListener('DOMContentLoaded', function() {
  const carouselElement = document.querySelector('#carouselExample');

  carouselElement.addEventListener('slid.bs.carousel', function(event) {
      const contentContainer = event.target.querySelector('.carousel-item.active .content-container');
      setTimeout(() => {
          contentContainer.classList.add('active');
      }, 500); // 500ms delay before adding the active class
  });

  carouselElement.addEventListener('slide.bs.carousel', function(event) {
      const contentContainers = carouselElement.querySelectorAll('.content-container');
      contentContainers.forEach(container => {
          container.classList.remove('active');
      });
  });

  // Trigger the slide event manually for the initial active item
  const initialActiveItem = carouselElement.querySelector('.carousel-item.active .content-container');
  setTimeout(() => {
      initialActiveItem.classList.add('active');
  }, 500);
});

// number count
document.addEventListener("DOMContentLoaded", function() {
  function animateNumber(element, endValue, duration) {
      let startValue = 1;
      let startTime = null;

      function updateNumber(timestamp) {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          const currentNumber = Math.min(Math.floor(progress / duration * endValue), endValue);
          element.textContent = currentNumber;

          if (currentNumber < endValue) {
              requestAnimationFrame(updateNumber);
          }
      }

      requestAnimationFrame(updateNumber);
  }

  const elements = document.querySelectorAll("[data-number]");
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const el = entry.target;
              const endValue = parseInt(el.getAttribute("data-number"), 10);
              animateNumber(el, endValue,1500);
              observer.unobserve(el);
          }
      });
  }, {
      threshold: 0.5
  });

  elements.forEach(el => {
      observer.observe(el);
  });
});