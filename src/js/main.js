"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

let time = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today = time.toLocaleDateString("pl-PL", options);
let paragraph = document.querySelector('.header__date');
paragraph.innerHTML = today;

const navigationList = document.querySelector('.navigation__list--js');
const navigationHamburger = document.querySelector('.navigation__hamburger--js');

navigationHamburger.addEventListener('click', (e) => {
    navigationList.classList.toggle('navigation__list--visible');
    if(navigationList.classList.contains('navigation__list--visible')){
        navigationHamburger.innerHTML = 'X';
    } else {
        navigationHamburger.innerHTML = "&#9776;";
    }
});