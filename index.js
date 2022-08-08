const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo= document.querySelector('#navbar_logo')
//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click' , mobileMenu); 

//Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const serviceMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY;
    //console.log()

    //adds'highlight class to my menu items
    if(window.innerWidht > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight')
        servicesMenu.classList.remove('highlight')
        homeMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        serviceMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    if((elen && window.innerWidth <960 && scrollPos <600) || elen) {
        elen.classList.remove('highlight');
    }
};

window.addEventListener('scroll',highLightMenu);
window.addEventListener('click',highlightMenu);

//Class mobile menu when clicking on a menu item
const hideMobileMenu = () =>{
    const menuBars  = document.querySelector('.is-actve')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click',hideMobileMenu);
menuLinks.addEventListener('click',hideMobileMenu);