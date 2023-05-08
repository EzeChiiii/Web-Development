'use strict';


/// Event Propagation


const form = document.querySelector('form');

// Array.from(form.children).forEach(input=> {
//     input.addEventListener('focus', function(){
//         this.style.backgroundColor = 'pink';  
//     });

//     input.addEventListener('blur', function(){
//         this.style.backgroundColor = 'white';
//     });
// });

// form.addEventListener('focusin', function(e){
//     e.target.style.backgroundColor = 'pink';
// });

// form.addEventListener('focusout', function(e){
//     e.target.style.backgroundColor = 'white';
// });

form.addEventListener('focus', function(e){
    e.target.style.backgroundColor = 'pink';
}, {capture: true} );

form.addEventListener('blur', function(e){
    e.target.style.backgroundColor = 'white';
}, {capture: true});


