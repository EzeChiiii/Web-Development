'use strict';

function clickBox1(e) {
    // console.log(e.target);//event target 
    // console.log(e.currentTarget);// element where the listener is attached too.
    console.log('Box1 is clicked');
}

function clickBox2(e) {
    console.log('Box2 is clicked');
    // e.stopPropagation();
}

function clickBox3(e) {
    console.log('Box3 is clicked');
    e.stopPropagation();
   
}

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

box1.addEventListener('click', clickBox1, {capture: true});
box2.addEventListener('click', clickBox2);
box3.addEventListener('click', clickBox3);

/// Event Listener Propagation
///- caputure phase, target phase and bubble phase.
/// capture - goes from top to bottom.




// box1.addEventListener('click', clickBox1, {capture: true});
// box2.addEventListener('click', clickBox2);
// box3.addEventListener('click', clickBox3, {capture: true});