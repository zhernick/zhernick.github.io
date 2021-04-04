'use strict';

let button = document.querySelector('#button');
let upgrade = document.querySelector('#upgrade');
let elem = document.querySelectorAll('.elem');
let i = 0;
let count = 0;
let weaponEnchant = document.querySelector('.img_block');

upgrade.addEventListener('click', (e) => {
    e.preventDefault();

    if(count <= 5){
        count++;
        button.value = `+${count}`;
        weaponEnchant.classList.add(`ench${count}`);
        if(count == 5){
            button.value = 'max';
            count--;
        }
    } 
})