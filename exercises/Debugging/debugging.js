const people = [
    { name: 'Wes', cool: true, country: 'Canada' },
    { name: 'Scott', cool: true, country: 'Merica' },
    { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// Console Methods

people.forEach((person, index) => {
    console.log(person.name);
    if (person.name === 'Wes') {
        console.error('dumb name');
    }
    if (person.name === 'Scott') {
        console.warn('weird name');
    }
    if (person.name === 'Snickers') {
        console.table(people);
    }
});

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
    console.count(`Clicked the button!`);
    const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
    e.currentTarget.style.fontSize = `${newFontSize}px`;
});

function doALotOfStuff() {
    console.group(`Doing some stuff`);
    console.log(`Hey hey~~!`);
    console.warn(`watch out!`);
    console.error('hey!');
    console.groupEnd(`Doing some stuff`);
}

// Callstack (Stack Trace)

function go() {
    // Will cause an error because the 'greet' function
    //  makes a call to a function that does not exist
    const name = doctorize(greet('Wes'));
    console.log(name);
}
// Grabbing Elements

/* If you select an element using the select tool in your developer tools, then switch to the console tab, typing $0 will output whatever you have selected

In this context, 0 means, ‘the last element clicked’

So you could type in $1, and it would give you the second-to-last thing you clicked

Can also use $$ (does not work with pages that have jQuery loaded)

The dollar signs are used as querySelectors in the developer console (will not work in .js files)

$(‘p') will give you the first paragraph element on the page
$$(‘p') will give you all paragraph elements on the page 

*/

// Breakpoints

people.forEach((person, index) => {
    // This is the breakpoint
    // Pauses the execution of javascript
    // debugger;
    console.log(person.name);
});

// Scope

// Network Requests

/* Open Dev Tools and go to network tab */

// Break On Attribute

// Some Setup Code

function doctorize(name) {
    return `Dr. ${name}`;
}

function greet(name) {
    doesntExist();
    return `Hello ${name}`;
}

// A Dad joke fetch
async function fetchDadJoke() {
    const res = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'text/plain',
        },
    });
    const joke = await res.text();
    console.log(joke);
    return joke;
}
