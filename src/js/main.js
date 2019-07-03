"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

let time = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today = time.toLocaleDateString("pl-PL", options);
let paragraph = document.querySelector('.header__date');
paragraph.innerHTML = today;