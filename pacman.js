var pos = 0;
const pacArray = [
    ['images/ms-pacman/ms-pac-noBackground-1.png', 'images/ms-pacman/ms-pac-noBackground-2.png'],
    ['images/ms-pacman/ms-pac-noBackground-3.png', 'images/ms-pacman/ms-pac-noBackground-4.png']
];
var direction = 0;
var focus = 0;

function Run() {
    let img = document.getElementById("PacMan");
    let imgWidth = img.width
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth);
    img.src = pacArray[direction][focus];
    if (direction) {
        pos -= 20;
        img.style.left = pos + "px";
    } else {
        pos += 20;
        img.style.left = pos + 'px';
    }

    setTimeout(Run, 200);
}

function checkPageBounds(direction, imgWidth) {
    let pageWidth = window.innerWidth - 20;
    if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;
    if (direction == 1 && pos < 0) direction = 0;

    return direction;
}