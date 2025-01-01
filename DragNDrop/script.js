const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}

function dragStart() {
    // this.className += " hold";
    // setTimeout(() => (this.className = "invisible"), 0);
    this.classList.add("hold");
    setTimeout(() => {
        this.classList.remove("fill");
        this.classList.remove("hold");
        this.classList.add("invisible");
    }, 0);
}

function dragEnd() {
    // this.className = "fill";
    this.classList.remove("hold");
    this.classList.remove("invisible");
    this.classList.add("fill");
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    // this.className += " hovered";
    this.classList.add("hovered");
}

function dragLeave() {
    // console.log("drag leave");
    // this.className = "empty";
    this.classList.remove("hovered");
}

function dragDrop() {
    // this.className = "empty";
    this.classList.remove("hovered");
    this.append(fill);
}
