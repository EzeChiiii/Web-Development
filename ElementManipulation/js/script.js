'use strict';

const listItems = document.querySelectorAll('li');

// listItems[0].style.color = 'green';
// listItems[0].style.textDecoration= 'line-through';


listItems[0].classList.add('completed');
listItems[1].classList.add('completed');
listItems[3].classList.add('completed');
listItems[4].classList.add('completed');


// element.classList.toggle(class);

listItems.forEach(item=>item.classList.toggle('completed'));