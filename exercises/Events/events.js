console.log('it works!');
const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

// adding an event listener with an anymous function
butts.addEventListener('click', function() {
    console.log('it got clicked!');
});

function handleClick() {
    console.log('it got HANDLED!');
}

//  This is the advantage of using a named function over an anonymous function
butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

const hooray = () => console.log('HOORAY!');
coolButton.addEventListener('click', hooray);

// listen on multiple items

function buyItem() {
    console.log('BUYING ITEM');
}

const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
    console.log('you clicked a button');
    console.log(event.target.dataset.price);
    console.log(event.currentTarget);
}

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
    'click',
    function(event) {
        console.log('You clicked the window');
        console.log(event.target);
        console.log(event.type);
        console.log(event.bubbles);
        // event.stopPropagation();
    },
    { capture: true }
);

const photoEl = document.querySelector('.photo');
photoEl.addEventListener('mousemove', function(event) {
    // console.log(event.currentTarget);
    console.log(this);
});
