/* eslint-disable no-use-before-define */
function Gallery(gallery) {
    if (!gallery) {
        throw new Error('No Gallery Found!');
    }

    // select the elements we need
    // we are doing it inside the function
    // so tho that gallery1 and gallery2 do not interfere with each other
    const images = Array.from(gallery.querySelectorAll('img'));
    // we use document instead of gallery here
    // because the modal is shared by both galleries via the window
    const modal = document.querySelector('.modal');
    const prevButton = modal.querySelector('.prev');
    const nextButton = modal.querySelector('.next');
    let currentImage;

    function openModal() {
        console.info('Opening modal...');
        // first, check if the modal is already open
        if (modal.matches('.open')) {
            console.info('modal already open');
            return; // stop the function from running
        }
        modal.classList.add('open');

        // Event listeners to be bound when we open the modal
        window.addEventListener('keyup', handleKeyUp);
        nextButton.addEventListener('click', showNextImage);
        prevButton.addEventListener('click', showPrevImage);
    }
    function closeModal() {
        modal.classList.remove('open');
        // TODO: add event listeners for events and keyboard
        window.removeEventListener('keyup', handleKeyUp);
        nextButton.removeEventListener('click', showNextImage);
        prevButton.removeEventListener('click', showPrevImage);
    }

    function handleKeyUp(e) {
        if (e.key === 'Escape') return closeModal();
        if (e.key === 'ArrowRight') return showNextImage();
        if (e.key === 'ArrowLeft') return showPrevImage();
    }

    function handleClickOutside(e) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }

    function showImage(el) {
        if (!el) {
            console.info('no image to show');
            return;
        }

        // update the modal with this info
        modal.querySelector('img').src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('figure p').textContent = el.dataset.description;
        currentImage = el;
        openModal();
    }

    function showNextImage() {
        // the || gallery.firstElementChild will
        // allow the images to 'round robin' instead of stopping at the end
        showImage(currentImage.nextElementSibling || gallery.firstElementChild);
    }

    function showPrevImage() {
        showImage(currentImage.previousElementSibling || gallery.lastElementChild);
    }

    // Event Listeners
    images.forEach(image => image.addEventListener('click', e => showImage(e.currentTarget)));
    images.forEach(image =>
        image.addEventListener('keyup', e => {
            if (e.key === 'Enter') showImage(e.currentTarget);
        })
    );
    modal.addEventListener('click', handleClickOutside);
}

// use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
