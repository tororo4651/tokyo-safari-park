// グローバルナビゲーションの開閉
window.onload = function () {
  let gNavBtn = document.getElementById('js-gNavBtn');
  let gNav = document.querySelector('.gNav');

  gNavBtn.addEventListener('click', function () {
    document.documentElement.classList.toggle('is-gNavOpen');
  });
};




// Swiper・キービジュアル
var swiper = new Swiper(".kvSwiper", {
  autoplay: {
    delay: 5000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



// Swiper・Animals
var swiper = new Swiper(".animalsSwiper", {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  },
});




// object-fit-images
objectFitImages();
