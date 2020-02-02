const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name="filter"]');
// console.log(filterInputs);

/* eslint-disable */
const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
};
/* eslint-enable */

// Store our filter functions in an object
const filters = {
    sarcastic(letter, index) {
        if (index % 2) {
            return letter.toUpperCase();
        }
        return letter.toLowerCase();
    },
    funky(letter) {
        // first check if there is a funky letter for this case (upper/lower)
        let funkyLetter = funkyLetters[letter];
        if (funkyLetter) return funkyLetter;

        // if not, check if there is a lowercase version
        funkyLetter = funkyLetters[letter.toLowerCase()];
        if (funkyLetter) return funkyLetter;

        // if no matches in funkyLetters, return the original letter
        return letter;
    },
    unable(letter) {
        // get a random number between 0 and 2
        const random = Math.floor(Math.random() * 3);
        // there is a 1 in 3 chance of the spacebar registering '...'
        // instead of a space
        if (letter === ' ' && random === 2) {
            return '...';
        }
        return letter;
    },
};

function transformText(text) {
    // convert the filterInputs NodeList to an array (Array.from)
    // and find the radio button that is selected
    const filter = Array.from(filterInputs).find(input => input.checked).value;

    // take the text and loop over each letter
    const mod = Array.from(text).map(filters[filter]);

    result.textContent = mod.join('');
}

textArea.addEventListener('input', e => transformText(e.target.value));

// apply the filter to the existing text
filterInputs.forEach(input =>
    input.addEventListener('input', () => {
        transformText(textArea.value);
    })
);
