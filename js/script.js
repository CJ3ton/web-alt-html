const spoiler = document.querySelectorAll('.how__item-top'),
    arrows = document.querySelectorAll('.how__item-arrow'),
    howText = document.querySelectorAll('.how__item-text'),
    howItems = document.querySelectorAll('.how__item'),
    tabs = document.querySelectorAll('.feat__tabs-tab'),
    tabsBtn = document.querySelectorAll('.feat__tabs-nav li a'),
    works = document.querySelectorAll('.work__item'),
    overlay = document.querySelector('.overlay'),
    modal = document.querySelector('.modal'),
    modalData = document.querySelectorAll('.modal__data'),
    modalClose = document.querySelector('.modal__close'),
    burger = document.querySelector('.burger'),
    mobileMenu = document.querySelector('.mobile__menu'),
    mobileClose = document.querySelector('.mobile__menu-close'),
    menuList = document.querySelector('.menu__list');

console.log(works, modalData);

spoiler.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        if (howItems[i].clientHeight == 70) {
            howItems[i].style.height = (70 + howText[i].clientHeight) + 'px';
        } else {
            howItems[i].style.height = '70px';
        }
        arrows[i].classList.toggle('active');
        howText[i].classList.toggle('open');
    });
});

works.forEach((item, i) => {
    item.addEventListener('click', e => {
        e.preventDefault();
        overlay.classList.add('show');
        modal.classList.add('show');
        modalDataHide();
        modalDataShow(i);
    });
});

modalClose.addEventListener('click', () => {
    overlay.classList.remove('show');
    modal.classList.remove('show');
});

menuList.addEventListener('click', (e) => {
    if (e.target.nodeName === 'A') {
        overlay.classList.remove('show');
        mobileMenu.classList.remove('show');
    };
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('show');
        modal.classList.remove('show');
        mobileMenu.classList.remove('show');
    }
});

function modalDataHide() {
    modalData.forEach((item) => {
        item.classList.remove('show');
    });
}

function modalDataShow(i = 0) {
    modalData[i].classList.add('show');
}

burger.addEventListener('click', () => {
    overlay.classList.add('show');
    mobileMenu.classList.add('show');
});

mobileClose.addEventListener('click', () => {
    overlay.classList.remove('show');
    mobileMenu.classList.remove('show');
});

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.clients__slider-next',
        prevEl: '.clients__slider-prev',
    },
    breakpoints: {
        320: {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 30
        },
        768: {
            centeredSlides: false,
            slidesPerView: 3,
            spaceBetween: 30
        },
        1024: {
            centeredSlides: false,
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1200: {
            centeredSlides: false,
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});

function hideTabContent() {
    tabs.forEach(tab => {
        tab.classList.remove('feat__tabs-active');
    });
    tabsBtn.forEach(btn => {
        btn.classList.remove('btn__active');
    });
}

function showTabContent(i = 0) {
    tabs[i].classList.add('feat__tabs-active');
    tabsBtn[i].classList.add('btn__active');
}

hideTabContent();
showTabContent();
modalDataHide();

tabsBtn.forEach((btn, i) => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        hideTabContent();
        showTabContent(i);
    });
});