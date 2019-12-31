const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a paragiraffe!';
myParagraph.classList.add('special');

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

console.log(myParagraph);
console.log(myImage);
console.log(myDiv);

// Now we actually place the elements into the DOM
// At this point, the elements are merely created in memory

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// Now we need to add something to the top, like a heading

const heading = document.createElement('h2');
heading.textContent = 'Cool things';

myDiv.insertAdjacentElement('afterbegin', heading);

// Create an unordered list soley with the APIs learned in this lesson

const ul = document.createElement('ul');

const li3 = document.createElement('li');
li3.textContent = 'Three';
ul.appendChild(li3);

document.body.insertAdjacentElement('afterbegin', ul);

const li5 = document.createElement('li');
li5.textContent = 'Five';
ul.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'One';
ul.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'Four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'Two';
li1.insertAdjacentElement('afterend', li2);
