const cardButtons = document.querySelectorAll('.card button');

function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    const imgSrc = card.querySelector('img').src;
    console.log(imgSrc);

    const { description } = card.dataset;
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));
