const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');

function obCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
        button.disabled = false;
        console.log('enabled!');
        // stop observing the button
        // eslint-disable-next-line no-use-before-define
        observer.unobserve(terms.lastElementChild);
    }
}

const observer = new IntersectionObserver(obCallback, { root: terms });

// Watch the last paragraph of the terms and agreements
observer.observe(terms.lastElementChild);
