'use strict';

let btn = document.querySelector('.btn');
let rabbit = document.querySelector('.rabit');

btn.addEventListener('click', function(){
    rabbit.classList.toggle('rabit_active');
})