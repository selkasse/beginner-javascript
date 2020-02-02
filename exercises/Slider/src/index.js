function Slider(slider) {
    // make sure the slider passed in is the correct type
    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');
    }
    // create some variables for working with the slider
    let prev;
    let current;
    let next;

    // select the elements needed for the slider
    const slides = slider.querySelector('.slides');
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');

    function startSlider() {
        current = slider.querySelector('.current') || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
    }

    function applyClasses() {
        prev.classList.add('prev');
        current.classList.add('current');
        next.classList.add('next');
    }

    function move(direction) {
        // first strip all classes off the current slides
        const classesToRemove = ['prev', 'current', 'next'];
        prev.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);

        if (direction === 'back') {
            // make a new array of the new values,
            // and destructure them over and into the prev, current,
            // and next variables
            [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
        } else {
            [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
        }
        applyClasses();
    }

    // when this Slider is created, run th estartSlider function
    startSlider();
    applyClasses();

    // event listeners
    prevButton.addEventListener('click', () => move('back'));
    nextButton.addEventListener('click', move);
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
