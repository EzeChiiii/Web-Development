'use strict';

//traversing downwards
//methods: querySelector(), querySelectorAll()
//properties: children, firstElementChild, lastElementChild

const list = document.querySelector('.list');
console.log(list.children);/// give live html collectin

console.log(list.children[2].innerHTML);

console.log(list.lastElementChild);

console.log(list.querySelectorAll('li')[0]);

//traversing upwards
//method: closest()
//property: parentElement

const firstItem = document.querySelector('#first');
// console.log(firstItem.parentElement.parentElement);;

// console.log(firstItem.closest('div'));

// console.log(firstItem.closest('.super'));


console.log(firstItem.nextElementSibling);



//traversing sideways
//properties: previousElementSibling, nextElementSibling

console.log(firstItem.nextElementSibling);

firstItem.nextElementSibling.innerText = "Stranger Things";
console.log(firstItem.nextElementSibling.previousElementSibling);

firstItem.parentElement.children[3].innerText = 'Stranger Things';