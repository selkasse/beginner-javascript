const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');
const error = document.querySelector('.error');

// create an array to hold the state
let items = [];

function handleSubmit(e) {
    // stop the form from putting the submission in the URL
    e.preventDefault();

    let invalidSpaces = true;
    error.innerHTML = '';

    function checkAllSpaces(letter) {
        if (letter !== ' ') {
            invalidSpaces = false;
        }
    }

    // currentTarget is the form
    // item is a property on the form
    // specifically, the 'name' attribute in the following line of HTML:
    // <input type="text" name="item" id="item" required>
    const name = e.currentTarget.item.value;
    const letters = Array.from(name);
    letters.forEach(checkAllSpaces);

    // if only the first chracter is a space,
    // we want to display an error below the list
    if (letters[0] === ' ') {
        invalidSpaces = true;
        error.innerHTML = `First character can't be a space`;
    }

    // exit the function if the user has not supplied an input
    if (!name || invalidSpaces) return;

    const item = {
        name,
        id: Date.now(),
        complete: false,
    };

    // push the items into our state
    items.push(item);

    // clear the form
    e.target.reset();

    // displayItems();

    // instead of displaying items here,
    // we fire a custom event,
    // effectively de-coupling the logic
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
    const html = items
        .map(
            item => `
    <li class="shopping-item">
            <input 
                type="checkbox" 
                value="${item.id}"
                ${item.complete ? 'checked' : ''}
            >
            <span class="itemName">${item.name}</span>
            <button 
                aria-label="Remove ${item.name}"
                value="${item.id}"
            >&times;</buttonaria-label="Remove>
    </li>`
        )
        .join('');
    list.innerHTML = html;
}

function mirrorToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(items));
}

// runs on page load so that the data persists
function restoreFromLocalStorage() {
    const localItems = JSON.parse(localStorage.getItem('items'));
    if (localItems.length) {
        items = localItems;
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}

function deleteItem(id) {
    console.log(id);
    // update the items array without this id
    items = items.filter(item => item.id !== id);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
    const itemRef = items.find(item => item.id === id);
    itemRef.complete = !itemRef.complete;
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

// Event Delegation
// We listen for a click on the list ul,
// but then delegate the click to the button if that is what was clicked
list.addEventListener('click', function(event) {
    const id = parseInt(event.target.value);
    if (event.target.matches('button')) {
        deleteItem(id);
    }
    if (event.target.matches('input[type="checkbox"]')) {
        markAsComplete(id);
    }
});

restoreFromLocalStorage();
