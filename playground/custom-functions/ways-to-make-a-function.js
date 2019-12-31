/*eslint-disable*/

// Anonymous function (no name)
// Store a function as a value in a variable
const doctorize = function(firstName) {
        return `Dr. ${firstName}`;
};

// Will work because doctorize2 is hoisted
// console.log(doctorize2('sharif'));

// Traditional
function doctorize2(name) {
        return `Dr. ${name}`;
}

// Arrow function
// Arrow functions are anonymous functions
const inchToCm = inches => inches * 2.54;

// function add(a, b = 3){
//     return a + b;
// }

const add = (a, b = 3) => a + b;

// Returning an object
// function makeABaby(first, last) {
//         const baby = {
//                 name: `${first} ${last}`,
//                 age: 0,
//         };
//         return baby;
// }

// const makeABaby = (first, last) => {
//         const baby = {
//                 name: `${first} ${last}`,
//                 age: 0,
//         };
//         return baby;
// };


// const makeABaby = (first, last) => {
//     return{ name: `${first} ${last}`, age: 0,}   
// }


const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0,});

// IIFE
// Immediatley-Invoked Function Expression

(function() {
    console.log('Running the Anon function');
    return 'You are cool';
})();

(function(age) {
    console.log('Running the Anon function');
    return `You are cool and ${age} years old`;
})(10);


// Methods!

const sharif = {
    name: `Sharif Elkassed`,
    // method
    sayHi: function(){
        console.log(`Hey Sharif.  $this.name is equal to: ${this.name}`);
        return `Hey Sharif`;
    },
    // short hand syntax
    yellHi(){
        console.log(`HEY SHARIF`);
    },
    // arrow function syntax
    whisperHi: () => {
        console.log(`hii sharif i'm a mouse`);
    }
}


// Callback Functions

// Click callback
const button = document.querySelector('.clickMe');
console.log(button);

// The 'callback' in this case is sharif.yellHi
// Notice that the syntax is not sharif.yellHi()
// This is because we are not running the function in this line of code
// We are only running the function when the 'click' event happens
button.addEventListener('click', sharif.yellHi);


function handleClick(){
    console.log('Great clicking!');
}

button.addEventListener('click', handleClick);

button.addEventListener('click', function() {
    console.log('nice job!');
});


// Timer callback
// Will call the function after 3 seconds
setTimeout(sharif.whisperHi, 3000);

setTimeout(function() {
    console.log(`Don't keep me waiting, ${sharif.name}!`);
}, 4000);

setTimeout(() => {
    console.log(`I'ma arruh funkshun~~=>!`);
},5000);