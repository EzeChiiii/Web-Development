

// function card(parameter list){


//     CSSLayerStatementRule;
// }

function sum(a, b){

    return a + b;

}

console.log(sum (2, 6));

// function expression 

// const name = function(parameter list){

//     statement;
// }


const sumExp = function(a, b){

    return a+b;
};


// console.log(sumExp(3,6));

// arrow function 

// const name = (parameter list) =>{

// statments;

// }


// const sumArrow = (a, b) => {

//     return a + b;
// }

// console.log(sumArrow(10,7));


// const sumArrow = (a, b) => a + b;


// console.log(sumArrow(10,7));

//functions can be passed as a arguement


// const add = (a,b) => a + b;

// const sub = (a,b) => a - b;
// const mul = (a,b) => a * b;

// const calculate = (a, b , operate) => operate(a, b);

// console.log(calculate(1, 2, add));

// console.log(calculate(1, 2, sub));

// console.log(calculate(1, 2, mul));


//var have a global scope or function scope
// let and const have a block scope

// var varA = 5;

// console.log(this);

// function test(){

//     var varC = 135;
// }

// if(true){

//     let varD = 10;
// }


// var varA = 5;
// let varB = 10;
// const varC = 15;

// var varA = 20;

// const nums = [1,2,,3,4, 5, 'red', true]

// console.log(nums);

// console.log(nums.length);

// console.log(nums.includes(3))

// console.log(nums.indexOf(3));

// nums.push(6);
// nums.push(7);


// nums.unshift(0);

/// remove elements

// nums.push(6);
// nums.push(7);
// nums.unshift(0);

// /// remove elements

// nums.pop(); 
// nums.shift();
// nums.splice(1,1,7);
// nums.splice();

// console.log(nums);

// const numss = [1,2,3,4,5]

// for(let i = 0; i < nums.length; i++){
//     console.log(nums[i])
// }

//or

// for(let num of numss){

//     console.log(num)
// }

// for (let num of numss){

//     num++
// }

// console.log(numss)

// console.log(numss.join('+'));

// console.log(numss.toString());


//// array and for each 

// const nummss = [1,2,3,4,5]

// function output(num) {

//     console.log(num)
// }



// nummss.forEach(output)

// nummss.forEach(function(element){

//     console.log(element);
// })

/// arrow function


// nummss.forEach(nummss => console.log(nummss));



// first iteration method

// const nums = [1,19,22,47,5]
// nums.forEach((num, index, array) =>{
//     if (num > 5)
//     array[index] *=2;

// });

/// find method

// console.log(nums);

// const mom = [1,19,22,47,5]

// console.log(mom.find(num => num > 100));

// console.log(mom.findIndex(num => num > 19));


//fliter method
// console.log(mom.filter(num => num > 19));
// return

// every method ,returns boolean result 

// console.log(mom.every(num => num > 19));

//map method creates an new array

// console.log(mom.map(num => num * 2));

// console.log(mom.every(num => num > 19));

// console.log(mom.some(num => num > 20));

// nums.sort((a, b) => b - a);
// console.log(nums)


//objects

const book = {

    title: 'Animal Farm',
    pusblished: 1949,
    author: {firstName: 'George', lastName: 'Owell'},
    genres: ['Classics', 'Fiction', 'Fantasy'], 'age group': '13 and above',

    getAuthorName: function(){

        return `${this.author.firstName} ${this.author.lastName}`;


    }
}

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

for (const key in book){

    console.log(book[key]);
}


// remove a property
delete book.pusblished;

console.log(Object.keys(book))


// hasPropertyMethod()

console.log('author' in book);

book.rating = 4.3

console.log('ratings' in book);

console.log(book.hasOwnProperty('reviews'));

console.log(object.keys(book));

console.log(object.values(book));

prompt('How old are you ?')

parseInt(prompt('How old are you?'));

prompt('What is your name?')

alert('Hello');

// Will return a boolean and brings up a text box


confirm('Are you sure to exit?')

// navigator, history, location , back, forward,


