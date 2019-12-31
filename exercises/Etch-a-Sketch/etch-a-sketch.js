// Select the elements on the page:
//      Canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');
const context = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 20;

// Set up our canvas for drawing
// Make variables height and width from the same properties on our canvas
const { width, height } = canvas;

// Create random x and y starting points on the convas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = MOVE_AMOUNT;

// Set up color-changing
let hue = 1;
// context.strokeStyle = `hsl(${hue}, 100%, 50%)`;

context.beginPath(); // Start the drawing
context.moveTo(x, y);
context.lineTo(x, y);
context.stroke();

// Write a draw function
function draw({ key }) {
    console.log(key);
    // Increment the hue
    hue += 1;
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    // Start the path
    context.beginPath();
    context.moveTo(x, y);
    // Move x and y values depending on what the user did
    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        default:
    }
    console.log(`x: ${x} y:${y}`);
    context.lineTo(x, y);
    context.stroke();
}

// Write a handler for the keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
    }
}

// Clear / Shake function
function clearCanvas() {
    canvas.classList.add('shake');
    context.clearRect(0, 0, width, height);
    canvas.addEventListener(
        'animationend',
        function() {
            console.log('done the shake!');
            canvas.classList.remove('shake');
        },
        { once: true }
    );
}

// Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
