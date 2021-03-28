'use strict';


// let ara = [];
// let answers = prompt('Введите цитаты, через запятую (, )').split(', ');
// ara = answers;

// arr = [...arr, ...ara];
// console.log(arr);

// let span = document.querySelector('span');

// let random = Math.floor(Math.random() * arr.length);
// let btn = document.querySelector('button');
// btn.addEventListener('click', function(){
//     span.innerHTML = arr[random];
// });

Array.prototype.rand = function () {
    return this[Math.floor(Math.random() * this.length)];
}


let arr = ['ШО - вместо тысячи слов','Любишь кушать - люби и не кушать', 'Сделал дело - сделай еще дело', 'Как ни крутись - а жопа сзади', 'Ума нет - считай коллега', 'Жизнь грустная, зато зарплата смешная', 'Раз, два, три - больше бегай, меньше жри!', 'Если твоя жена курица, тогда ты точно не орёл', 'Стрельба без причины - признак Аль Пачины'];
const btn = document.getElementById('button');
const div = document.getElementById('div');
btn.onclick = function () {
    div.innerHTML = arr.rand();
};




// const months = ["January", "February", "March", "April", "May", "June", "July"];

// let random = Math.floor(Math.random() * months.length);
// console.log(months[random]);