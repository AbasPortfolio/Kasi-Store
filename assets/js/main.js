/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu open */

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/* Hide menu */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
// When we click on each nav__link we remove the show-menu class
navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER SNEAKERS ===============*/
let swiperThumbnails = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 64,
    grabCursor: true,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
})

let swiperTitles = new Swiper('.home__titles', {
    loop: true,
    spaceBetween: 64,
    grabCursor: true,
    centeredSlides: true,
})

swiperThumbnails.controller.control = swiperTitles
swiperTitles.controller.control = swiperThumbnails
/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('header')
    //Add a class if the bottom offset is greater than 50 of the viewport height
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                    : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)