'use strict';

let button = document.querySelector('#button');
let upgrade = document.querySelector('#upgrade');
let elem = document.querySelectorAll('.elem');
let block = document.querySelector('.block');
let i = 0;
let count = 0;
let enchantSword = document.querySelector('.img_sword');
let enchantChesnok = document.querySelector('.img_chesnok');
let enchantBow = document.querySelector('.img_bow');
let enchantStaff = document.querySelector('.img_staff');
let weaponBtn = document.querySelectorAll('.main__menu li button');
let main = document.querySelector('.main__screen');
let reset = document.querySelector('#reset');
let sword = document.querySelector('.img_sword');
let staff = document.querySelector('.img_staff');
let bow = document.querySelector('.img_bow');
let chesnok = document.querySelector('.img_chesnok');


weaponBtn.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        hide();
        removeImg();
        item.classList.add('active');
        if (e.currentTarget.classList.contains('active')) {
            main.classList.add('small');
            main.style.cssText = 'animation: main 2s forward;';
            block.classList.add('d__block');
            if (item.innerHTML == 'Sword') {
                sword.style.display = 'flex';
            } else if (item.innerHTML == 'Staff') {
                staff.style.display = 'flex';
            } else if (item.innerHTML == 'Bow') {
                bow.style.display = 'flex';
            } else if (item.innerHTML == 'Chesnok') {
                chesnok.style.display = 'flex';
            }
        }
    })

})


upgrade.addEventListener('click', (e) => {
    e.preventDefault();

    if (count <= 5) {
        count++;
        button.value = `+${count}`;
        weaponBtn.forEach(item => {
            console.log(item.innerHTML);
            if (item.innerHTML == 'Chesnok') {
                enchantChesnok.classList.add(`ch${count}`);
            } else if (item.innerHTML == 'Sword') {
                enchantSword.classList.add(`sw${count}`);
            }
        });
        if (count == 5) {
            button.value = 'max';
            upgrade.style.cssText = 'color: rgb(71, 71, 71); border-color: rgb(71, 71, 71); cursor: none;';
            upgrade.disabled = true;
            count--;
        }
    }
});

    reset.addEventListener('click', (e) => {
        e.preventDefault();
        count = 0;
        button.value = `+${count}`;
        enchantSword.classList.remove('sw1', 'sw2', 'sw3', 'sw4', 'sw5');
        enchantBow.classList.remove('bw1', 'bw2', 'bw3', 'bw4', 'bw5');
        enchantStaff.classList.remove('st1', 'st2', 'st3', 'st4', 'st5');
        enchantChesnok.classList.remove('ch1', 'ch2', 'ch3', 'ch4', 'ch5');
        upgrade.disabled = false;
        upgrade.style.cssText = 'color: rgb(84, 201, 84); border-color: rgb(84, 201, 84); cursor: pointer;';
    })

function hide() {
    weaponBtn.forEach(item => {
        item.classList.remove('active');
    })
}

function removeImg() {
    weaponBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            count = 0;
            button.value = `+${count}`;
            enchantSword.classList.remove('sw1', 'sw2', 'sw3', 'sw4', 'sw5');
            enchantBow.classList.remove('bw1', 'bw2', 'bw3', 'bw4', 'bw5');
            enchantStaff.classList.remove('st1', 'st2', 'st3', 'st4', 'st5');
            enchantChesnok.classList.remove('ch1', 'ch2', 'ch3', 'ch4', 'ch5');
            if (item.innerHTML == 'Sword') {
                console.log(item.innerHTML);
                enchantChesnok.style.display = 'none';
                enchantSword.style.display = 'flex';
            } else if (item.innerHTML == 'Chesnok') {
                console.log(item.innerHTML);
                enchantSword.style.display = 'none';
                enchantChesnok.style.display = 'flex';
            }
        })
    })
}