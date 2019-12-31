// // Select the first paragraph on the page
// const p = document.querySelector('p');
// // Select all divs on the page
// const divs = document.querySelectorAll('div');
// // Select anything with a class of 'item'
// const item = document.querySelectorAll('.item');
// const items = document.querySelectorAll('items');
// // Select all divs with a class of 'item'
// const divItems = document.querySelectorAll('div.item');
// // Get all images that are inside an 'item' class
// const imgs = document.querySelectorAll('.item img');

// const item2 = document.querySelector('.item2');

// const item2Image = item2.querySelector('img');

// const id = document.getElementById('sharif');
// const heading = document.querySelector('h2');

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('beforeend', '🍕');
// // As a 'getter'
// console.log(heading.textContent);
// console.log(heading.innerText);
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// // As a 'setter'
// // heading.textContent = 'Sharif r0x0rz';

// // console.log(p);
// // console.log(divs);
// // console.log(item);
// // console.log(items);
// // console.log(divItems);
// // console.log(imgs);

// Classes!

const pic = document.querySelector('.item');
pic.classList.add('open');
pic.classList.remove('cool');
// pic.classList.toggle('round');

const isOpen = pic.classList.contains('open');

// Add an 'alt' attribute to the image
pic.alt = 'my random picture';

// Change the width of the picture
pic.width = 200;

console.log(pic.classList);

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

const custom = document.querySelector('.custom');
console.log(custom.dataset);
