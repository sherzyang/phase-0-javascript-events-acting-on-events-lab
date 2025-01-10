// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0 && left <= 360) {
      dodger.style.left = `${left - 1}px`;
    }
    else if (left === 0 ) {
        dodger.style.left = `${left}px`;
    }
    return dodger.style.left;
}

function moveDodgerRight() {
    const newLeftNumbers = dodger.style.left.replace("px", "");
    const newLeft = parseInt(newLeftNumbers, 10);

    if (newLeft >= 0 && newLeft < 360) {
    dodger.style.left = `${newLeft + 1}px`;
    }
    else if (newLeft === 360 ) {
        dodger.style.left = `${newLeft}px`;
    }
    return dodger.style.left;
}

document.addEventListener("keydown", function (e) {
if (e.key === "ArrowLeft") {
    moveDodgerLeft();
}
else if (e.key === "ArrowRight"){
    moveDodgerRight();
    }
});