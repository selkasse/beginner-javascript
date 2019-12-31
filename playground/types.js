const name = 'Sharif';
const middle = 'kamahl';
const last = 'elkassed';

const sentence = `let's all say "cool"`;

const hello = `hello my name is ${name}. Nice to meet you`;

let hello2 = 'hello my name is ';
hello2 += name;
hello2 += ' nice to meet you';

const hello3 = `hello mmy name is ${name}. nice to meet you`;

hello2 = `hello my name is ${name}. Nice to meet you.  I am ${1 + 100} years old`;

const html = `
    <div>
    <h2>${name}</h2>
    <p>${hello2}</p>
    </div>
`;

document.body.innerHTML = html;

let somethingUndefined;
const somethingNull = null;
