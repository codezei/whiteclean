export default function () {
    let priceCategoriesSwiper = new Swiper(".price-categories-swiper", {
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
                if (priceSwiper) {
                    priceSwiper.slideTo(swiper.activeIndex);
                }
            },
        },
    });

    let priceSwiper = new Swiper(".price-swiper", {
        spaceBetween: 10,
        slideToClickedSlide: true,
        watchSlidesProgress: true,
        autoHeight: true,
        thumbs: {
            swiper: priceCategoriesSwiper,
            multipleActiveThumbs: false,
        },
        on: {
            slideChange: function (swiper) {
                if (priceCategoriesSwiper) {
                    priceCategoriesSwiper.slideTo(swiper.activeIndex);
                }
            },
        },
    });
}
