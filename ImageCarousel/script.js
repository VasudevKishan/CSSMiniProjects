const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const carousel = document.querySelector(".carousel");
const img = document.querySelectorAll("#imgs img");

console.log(img);
let idx = 0;
carousel.style.width = `${img[idx].clientWidth}px`;
let interval = setInterval(run, 2000);

function run() {
    idx++;
    changeImage();
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1;
    }

    let transformWidth = 0;
    for (let i = 0; i <= idx - 1; i++) {
        transformWidth += Math.floor(img[i].clientWidth);
    }
    // imgs.style.transform = `translateX(${-idx * 330}px)`;
    img[idx].style.width = `${Math.floor(img[idx].clientWidth) - 1}px`;
    carousel.style.width = `${Math.floor(img[idx].clientWidth)}px`;
    imgs.style.transform = `translateX(${-transformWidth}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

leftBtn.addEventListener("click", () => {
    idx--;
    changeImage();
    resetInterval();
});
rightBtn.addEventListener("click", () => {
    idx++;
    changeImage();
    resetInterval();
});
