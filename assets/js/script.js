'use strict';

// add event listener on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

/*
Preloader
* preloader will be visible unitl document load
*/

const preloader = document.querySelector("[data-preloader]")

window.addEventListener("load", () => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
})

/*
Mobile Navbar
* show the mobile navbar when menu button is clicked
* and hidden after click menu close button or overlay
*/

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);

/*
* Header & back to top button
* active header & back to top when window scroll down to 100px
*/

const header = document.querySelector("[data-header]")

const backTopBtn = document.querySelector("[data-back-top-btn]")

const activeElementOnScroll = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    }
    else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}

window.addEventListener("scroll", activeElementOnScroll);

/*
    Scroll Reveal
*/

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementsOnScroll = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
            revealElements[i].classList.add("revealed");
        }

        else {
            revealElements[i].classList.remove("revealed");
        }
    }
}

window.addEventListener('scroll', revealElementsOnScroll);

window.addEventListener('load', revealElementsOnScroll);