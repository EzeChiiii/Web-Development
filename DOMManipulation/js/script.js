
'use strict';

//Adding elements

const newItem = document.createElement('li');
newItem.innerHTML = 'Stranger Things';

const anotherNewItem = document.createElement('li');
anotherNewItem.textContent = 'Farscape';

const list = document.querySelector('ul');
const item = list.children[1];
item.after(newItem);

///-------

// list.append(newItem);

// item.after(newItem, anotherNewItem);
// item.before(newItem, anotherNewItem);

// item.prepend(newItem);

// item.after(newItem);


//Removing elements

// item.remove();
/// work the same way


// list.removeChild(item);

///-----

//Replacing element

item.replaceWith(newItem, anotherNewItem);





