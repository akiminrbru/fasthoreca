// Слайдер для продукции

const swiperGeneral = new Swiper('.swiperGeneral', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination-general',
    },
    navigation: {
        nextEl: '.swiper-general-next',
        prevEl: '.swiper-general-prev',
    },
    breakpoints: {
        // when window width is >= 577px
        1201: {
            slidesPerView: 5,
        },
        993: {
            slidesPerView: 4,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        371: {
            spaceBetween: 20,
        },
    }
});

// Слайдер для брендов

const swiperBrands = new Swiper('.swiperBrands', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
        // when window width is >= 577px
        577: {
            enabled: false,
            spaceBetween: 0,
            slidesPerView: 0,
        }
      }
});

// Открытие ссылок в футуре

const footer_link_btn = document.querySelectorAll('.zfooter__box_top');


footer_link_btn && Array.from(footer_link_btn).map(item => {
    item && item.addEventListener('click', (e) => {
        const link_list = e.target.parentNode.querySelector(".zfooter__box_links");
        console.log(link_list)
        link_list && link_list.classList.toggle('active');
    }); 
});