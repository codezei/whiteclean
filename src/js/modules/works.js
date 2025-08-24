export default function () {
  let galleries = document.querySelectorAll(".gallery");

  let worksCategoriesSwiper = new Swiper(".works-categories-swiper", {
    spaceBetween: 0,
    slidesPerView: "auto",
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    on: {
      click(swiper) {
        const clickedIndex = swiper.clickedIndex;
        if (clickedIndex !== undefined) {
          swiper.slideTo(clickedIndex);
        }
      },
      slideChange: function (swiper) {
        if (worksSwiper) {
          worksSwiper.slideTo(swiper.activeIndex);
        }
      },
    },
  });

  let worksSwiper = new Swiper(".works-swiper", {
    spaceBetween: 10,
    slideToClickedSlide: true,
    watchSlidesProgress: true,
    thumbs: {
      swiper: worksCategoriesSwiper,
      multipleActiveThumbs: false,
    },
    on: {
      slideChange: function (swiper) {
        if (worksCategoriesSwiper) {
          worksCategoriesSwiper.slideTo(swiper.activeIndex);
        }
      },
    },
  });

  for (let i = 0; i < galleries.length; i++) {
    lightGallery(galleries[i], {
      animateThumb: false,
      zoomFromOrigin: false,
      allowMediaOverlap: true,
      toggleThumb: true,
    });
  }
}
