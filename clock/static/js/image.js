const BODY = document.querySelector("body");
const IMAGE_COUNTS = 3;

function getRandom() {
    const RANDOM = Math.floor(Math.random() * IMAGE_COUNTS)+1;
    console.log(RANDOM);
    return RANDOM;
}

function loadImage() {
    const IMG = new Image();
    IMG.src = `../static/image/${getRandom()}.jpg`;
    IMG.classList.add("bgimg");
    BODY.prepend(IMG);
}

function init() {
    loadImage();
}

init();