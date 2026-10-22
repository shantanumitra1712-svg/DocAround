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
