// body

const body = document.querySelector('body');

// Перенос в шапке
let enter = document.querySelector('.zheader__top_right');
let place = document.querySelector('.zheader__mid_inner');
let back = document.querySelector('.zheader__top_inner');
window.addEventListener('resize', () => {
    if (window.innerWidth <= 1200) {
        place?.append(enter);
    } else {
        back?.append(enter);
    }
});
if (window.innerWidth <= 1200) {
    place?.append(enter);
} else {
    back?.append(enter);
}

let enter3 = document.querySelector('.zheader__search_wrapper');
let place3 = document.querySelector('.zheader__bot_inner');
let back3 = document.querySelector('.zheader__mid_left');
window.addEventListener('resize', () => {
    if (window.innerWidth <= 1200) {
        place3?.append(enter3);
    } else {
        back3?.append(enter3);
    }
});
if (window.innerWidth <= 1200) {
    place3?.append(enter3);
} else {
    back3?.append(enter3);
}

let enter2 = document.querySelector('.zheader__mid_links');
let place2 = document.querySelector('.zheader__bot_inner');
let back2 = document.querySelector('.zheader__mid_inner');
window.addEventListener('resize', () => {
    if (window.innerWidth <= 1200) {
        place2?.append(enter2);
    } else {
        back2?.append(enter2);
    }
});
if (window.innerWidth <= 1200) {
    place2?.append(enter2);
} else {
    back2?.append(enter2);
}

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
        },
        370: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1: {
            spaceBetween: 10,
            slidesPerView: 2,
        }
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
        link_list && link_list.classList.toggle('active');
    }); 
});

// Открытие поиск

const search_btn_open = document.querySelector('#search_btn');
const serch_btn_close = document.querySelector('.zheader__search_close');
const search_block = document.querySelector('.zheader__search_wrapper');

search_btn_open?.addEventListener('click', () => {
    search_block?.classList.add('active');
});

serch_btn_close?.addEventListener('click', () => {
    search_block?.classList.remove('active');
});

// Открытие каталога

const catalog_btn = document.querySelector(".zheader__catalog_btn");
const subcatalog = document.querySelector('.zheader__subcatalog');

catalog_btn?.addEventListener('click', () => {
    if (window.innerWidth > 768) {
        catalog_btn?.classList.toggle('active');
        subcatalog?.classList.toggle('active');
    } else {
        subcatalog?.classList.add('active');
    }
});

// Subcatalog back

const subcatalog_backBtn = document.querySelector('.zheader__subcatalog_backBtn');

subcatalog_backBtn?.addEventListener('click', () => {
    subcatalog?.classList.remove('active');
});

// subcatalog links open

const subcatalog_arrow = document.querySelectorAll('.zheader__subcatalog_arrow');
const subcatalog_arrow_array = subcatalog_arrow && Array.from(subcatalog_arrow);

subcatalog_arrow_array?.map(item => {
    item?.addEventListener('click', (e) => {
        const linkItem = e.target.parentNode.parentNode;
        linkItem?.classList.toggle('active');
    });
});


// Открытие бургер меню

const burger_open = document.querySelector('.zheader_burgerOpen');
const burger__close = document.querySelectorAll('.burger__close');
const burger_wrap = document.querySelector('.burger_wrap');
const burger = document.querySelector('.burger');

const burger__close_array = burger__close && Array.from(burger__close);

burger_open?.addEventListener('click', () => {
    burger_wrap?.classList.add('active');
    body?.classList.add('active');
});

burger__close_array?.map(item => {
    item?.addEventListener('click', () => {
        burger_wrap?.classList.remove('active');
        body?.classList.remove('active');
    });
});

burger_wrap?.addEventListener('click', () => {
    burger_wrap?.classList.remove('active');
    body?.classList.remove('active');
});

burger?.addEventListener('click', (e) => {
    e.stopPropagation();
});


// Перенос каталога

let enter4 = document.querySelector('.zheader__catalog');
let place4 = document.querySelector('.burger__box');
let back4 = document.querySelector('.zheader__bot_inner');
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        place4?.prepend(enter4);
    } else {
        back4?.prepend(enter4);
    }
});
if (window.innerWidth <= 768) {
    place4?.prepend(enter4);
} else {
    back4?.prepend(enter4);
}

