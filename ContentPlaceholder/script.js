const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_image = document.getElementById("profile_img");
const Name = document.getElementById("Name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = `<img
                    src="https://images.unsplash.com/photo-1523120974498-9d764390d8e5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtleWJvYXJkfGVufDB8fDB8fHww"
                    alt=""
                />`;
    title.innerHTML = ` Lorem ipsum dolor sit amet.`;
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, officia?`;
    profile_image.innerHTML = `<img
                            src="https://randomuser.me/api/portraits/men/45.jpg"
                            alt=""
                        />`;
    Name.innerHTML = `John Doe`;
    date.innerHTML = `Oct 10,2023`;

    animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
    animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
