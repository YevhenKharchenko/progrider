import Swiper from 'swiper';
import 'swiper/css/bundle';

const screenshotsLeftArrow = document.getElementById('screenshotsLeftArrow');
const screenshotsRightArrow = document.getElementById('screenshotsRightArrow');
const screenshotsDots = document.querySelectorAll('.screenshots-dot');

let screenshotsSwiper;

screenshotsSwiper = new Swiper('.screenshots-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 20,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 32,
      centeredSlides: false,
    },
  },

  on: {
    init(swiper) {
      document
        .querySelector('.screenshots-swiper-container')
        .classList.add('show');
      updateScreenshotsArrows(swiper);
      updateScreenshotsDots(swiper.activeIndex);
    },
    slideChange(swiper) {
      updateScreenshotsArrows(swiper);
      updateScreenshotsDots(swiper.activeIndex);
    },
  },
});

updateScreenshotsArrows(screenshotsSwiper);

function updateScreenshotsArrows(swiper) {
  screenshotsLeftArrow.disabled = swiper.isBeginning;
  screenshotsRightArrow.disabled = swiper.isEnd;
}

screenshotsLeftArrow.addEventListener('click', () => {
  screenshotsSwiper.slidePrev();
});

screenshotsRightArrow.addEventListener('click', () => {
  screenshotsSwiper.slideNext();
});

function updateScreenshotsDots(index) {
  screenshotsDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

screenshotsDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    screenshotsSwiper.slideTo(index);
  });
});
