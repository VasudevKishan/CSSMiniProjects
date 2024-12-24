const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);
    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = "";
        }, 10);
        randomSelect();
    }
});

function createTags(input) {
    const tags = input
        .split(",")
        .filter((tag) => tag.trim() !== "")
        .map((tag) => tag.trim());

    tagsEl.innerHTML = "";

    tags.forEach((tag) => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

/*
    const interval will run for every 100ms which will highlight and unhilight tags, delay between highlight and unhighlight is 100ms.  

    2nd timeout will run after times*100 ms here 30*100 = 3000 ms which will clear the const interval and hightlight one random tag after another 100ms to make it smooth
*/
function randomSelect() {
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add("highlight");
}

function unHighlightTag(tag) {
    tag.classList.remove("highlight");
}
