// function definition
function calculateBill(billAmount, taxRate = 0.05, tipRate = 0.15) {
        // Sales tax
        console.log(`taxRate is: ${taxRate}`);
        const total = billAmount * (1 + taxRate);
        return total;
}

// function call. "running" the function
const myTotal = calculateBill(100, 0.06);
// console.log(`Your total is: $${myTotal}`);
const fries = 7.5;
const yourTotal = calculateBill(10 + 20 + 30 + fries, 0.05);
// console.log(yourTotal);

function sayHiTo(firstName) {
        return `Hello ${firstName}`;
}

function doctorize(name) {
        return `Dr. ${name}`;
}

// Default value prevents undefined if the function is called without an argument
function yell(name = '') {
        return `HEY ${name.toUpperCase()}`;
}

const nestedFunc = yell(doctorize('sharif'));
