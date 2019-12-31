// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list and put that list into the above wrapper

// ************************ My Solution ************************
const uList = document.createElement('ul');

// add three list items with the words "one, two three" in them
const li1 = document.createElement('li');
li1.textContent = 'one';
uList.append(li1);

const li2 = document.createElement('li');
li2.textContent = 'two';
uList.append(li2);

const li3 = document.createElement('li');
li3.textContent = 'three';
uList.append(li3);

div.append(uList);

// ************************ Wes' Solution ************************
// const ul = `
// <ul>
//     <li>one</li>
//     <li>two</li>
//     <li>three</li>
// </ul>
// `;

// div.innerHTML = ul;
// ***************************************************************

// create an image
const img = document.createElement('img');

// set the source to an image
const src = 'https://picsum.photos/200';
img.src = `${src}`;

// set the width to 250
img.width = 250;

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = 'Cute Puppy';

// Append that image to the wrapper
div.append(img); // Wes used appendChild here

// with HTML string, make a div, with two paragraphs inside of it
const HTML = `
    <div class="myDiv">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </div>
`;
// put this div before the unordered list from above
uList.insertAdjacentHTML('beforebegin', HTML);

// Wes did it this way, but he also made an HTML string for the ul
// ***************************************************************
// const ulElement = div.querySelectorAll('ul');
// ulElement.insertAdjacentElement('beforebegin', div);
// ***************************************************************

// add a class to the second paragraph called warning
const paragraphs = document.querySelectorAll('p');
const secondParagraph = paragraphs[1];
secondParagraph.classList.add('warning');

// remove the first paragraph
paragraphs[0].remove();

function dogYears(age) {
    let dogAge = 1;
    if (age <= 15) {
        return dogAge;
    }
    if (age > 15 && age <= 24) {
        dogAge += 1;
        return dogAge;
    }
    // else - age is 25+
    dogAge += 2 + (age - 25);
    return dogAge;
}

// Wes:
// ***************************************************************
// const myDiv = div.querySelector('.myDiv');
// myDiv.children[1].classList.add('warning');
// myDiv.firstElementChild.remove();
// ***************************************************************

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
    return `
    <div class="playerCard">
        <h2>${name} -- ${age}</h2>
        <p>They are ${height} inches tall and ${age} years old. They would be ${dogYears(
        age
    )} in dog years.  That would be a tall dog!</p>
    <button>Delete</button>
    </div>
    `;
}

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// Have that function make 4 cards
let cardsHTML = generatePlayerCard('Sharif', 33, 72);
cardsHTML += generatePlayerCard('Kelly', 32, 68);
cardsHTML += generatePlayerCard('Farouk', 70, 66);
cardsHTML += generatePlayerCard('Maddox', 6, 50);

// append those cards to the div

cardDiv.innerHTML = cardsHTML;

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cardDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('button');

// make out delete function
function removeCard(event) {
    const clickedButton = event.currentTarget;
    clickedButton.closest('.playerCard').remove();
}

// loop over them and attach a listener
let i;
for (i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', removeCard);
}
