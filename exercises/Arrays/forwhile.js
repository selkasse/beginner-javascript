const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];
const name = 'Sharif Elkassed';
const sharif = {
    name: 'sharif',
    age: 34,
    cool: true,
};

// For loop
for (let i = 0; i <= 10; i += 1) {
    console.log(i);
}

// For-of loop
for (const letter of name) {
    console.log(letter);
}

for (const number of numbers) {
    console.log(number);
}

// For-in loop
// Used for looping over keys of an object
// Takes prototype into account (more on this later)
for (const prop in sharif) {
    console.log(prop);
}

// While loop
let cool = true;
let i = 0;
while (cool === true) {
    i += 1;
    if (1 > 100) {
        cool = false;
    }
}

// Do-While loop
// Syntax:

// do{

// } while()
