const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');

const faceDetector = new window.FaceDetector();

const optionsInputs = document.querySelectorAll('.controls input[type="range"');

const options = {
    SIZE: 10,
    SCALE: 1.25,
};

function handleOption(event) {
    const { value, name } = event.currentTarget;
    options[name] = parseFloat(value);
}

optionsInputs.forEach(input => input.addEventListener('input', handleOption));
// Write a function that will populate the user's video

async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 },
    });
    video.srcObject = stream;
    // wait until the stream has loaded in to play the video
    await video.play();
    // size the canvases to be the same size as the video
    console.log(video.videoWidth, video.videoHeight);
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    faceCanvas.width = video.videoWidth;
    faceCanvas.height = video.videoHeight;
}

function drawFace(face) {
    const { width, height, top, left } = face.boundingBox;
    // clear the canvas each time so that the boxes don't repeat
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#ffc600';
    ctx.lineWidth = 2;
    // ctx.strokeRect(left, top, width, height);
    // console.log(face);
}

// destructure and rename the variable to 'face'
function censor({ boundingBox: face }) {
    // give the censor a pixelated look instead of being blurry
    faceCtx.imageSmoothingEnabled = false;
    faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
    // draw the small face
    faceCtx.drawImage(
        // 5 source args

        video, // where the source comes from
        // x, y, width, and height are where we start the source pull from
        face.x,
        face.y,
        face.width,
        face.height,

        // 4 draw args
        // x and y are where we start drawing
        face.x,
        face.y,
        // size of the shunken face (size x size) in px
        options.SIZE,
        options.SIZE
    );
    // draw the small face back on, but scale up

    const width = face.width * options.SCALE;
    const height = face.height * options.SCALE;
    faceCtx.drawImage(
        faceCanvas, // source
        face.x,
        face.y,
        options.SIZE,
        options.SIZE,

        // drawing args
        face.x - (width - face.width) / 2,
        face.y - (height - face.height) / 2,
        width,
        height
    );
}

async function detect() {
    const faces = await faceDetector.detect(video);
    // console.log(faces);
    faces.forEach(drawFace);
    faces.forEach(censor);

    // ask the browser when the next animation frame is
    // then tell it to run detect() for us
    requestAnimationFrame(detect);
}

video.addEventListener('click', function() {
    populateVideo().then(detect);
});

populateVideo().then(detect);
