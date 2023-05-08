'use strict';

const heading = document.querySelector('h1');
// console.log(heading)

// heading.innerHTML = "New<br>Heading";

//innerHTML, innerText, textContent


// console.log(heading.innerHTML);
// console.log(heading.innerText);
// console.log(heading.textContent);

heading.style.backgroundColor ='red';
heading.style.color ='white';
heading.style.fontSize ="5rem";


const parent = document.getElementById('parent');
console.log(parent.textContent);

const items = document.querySelectorAll('p');// returns a static NodeList 
const liveItems = document.getElementsByTagName('p');// returns a live HTML Collection
const staticItems = Array.from(liveItems);/// convert live to static from array 


parent.innerHTML+= '<p>New Paragraph</p>';

console.log(items);
console.log(liveItems);

// items.forEach(item=>console.log(item.innerText));

// for(let item of liveItems){

//     console.log(item.innerHTML);
// }
const link = document.querySelector('a');

console.log(link.href);

//pr 

link.href = "http://www.uncc.edu";

console.log(link.href);