const swiper = new Swiper('.swiper-filters', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 4,
  mousewheel: {
    releaseOnEdges: true,
  },

});

const swiper2 = new Swiper('.swiper-featured-artworks', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: "2.2",
  spaceBetween: 4,
  mousewheel: {
    releaseOnEdges: true,
  },

});

var swiper3 = new Swiper('.swiper-screenshots', {
    parallax: true,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
            opacity: 50,
        },
    }
});
// Opacité ne marche pas