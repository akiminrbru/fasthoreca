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
        link_list && link_list.classList.toggle('active');
    }); 
});

// Открытие поиск

const search_btn = document.querySelector('#search_btn');
const search_block = document.querySelector('.zheader__search_wrapper');

console.log(search_block);


search_btn?.addEventListener('click', () => {
    search_block?.classList.add('active');
});