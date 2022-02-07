const { log } = console

let ul = document.querySelector("nav ul")
let menu = document.querySelector(".fa-bars")
let closeMenu = document.querySelector(".close")
menu.onclick = () => {
    ul.classList.add("active-ul")
}
closeMenu.onclick = () => {
    ul.classList.remove("active-ul")
}
// header on scroll ========================
window.onscroll = function () {
    if (window.scrollY > 0) {
        document.querySelector("header").classList.add("scrolled-header")
    } else {
        document.querySelector('header').classList.remove('scrolled-header');
    }
}



log(document.querySelector("header"))


//  slider-swiper ============================================
var swiper = new Swiper(".slider-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// products-swiper ============================================

var swiper = new Swiper(".products-swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// reviews-swiper ============================================
var swiper = new Swiper(".reviews-swiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
});

// posts-swiper ====================================================
var swiper = new Swiper(".posts-swiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 40,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

// sponsors-swiper ====================================================
var swiper = new Swiper(".sponsors-swiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

//search part
let openSearch = document.querySelector(".header-search")
let search = document.querySelector(".search")
let closeSearch = document.querySelector(".close-search")

openSearch.onclick = () => {
    search.classList.add("search-active")
}
closeSearch.onclick = () => {
    search.classList.remove("search-active")
}