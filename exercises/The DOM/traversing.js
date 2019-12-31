const sharif = document.querySelector('.sharif');

// Methods for elements
// console.log(sharif.children);
// console.log(sharif.firstElementChild);
// console.log(sharif.previousElementSibling);
// console.log(sharif.nextElementSibling);
// console.log(sharif.parentElement);

// // Methods for nodes
// console.log(sharif.childNodes);
// console.log(sharif.firstChild);
// console.log(sharif.lastChild);
// console.log(sharif.previousSibling);
// console.log(sharif.nextSibling);
// console.log(sharif.parentNode);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);
