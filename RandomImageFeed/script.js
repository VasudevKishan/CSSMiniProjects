const container = document.querySelector(".container");
const randomImageURL = "https://picsum.photos/300/300?random=";
const rows = 10;

// const myHeaders = new Headers();
// myHeaders.append(
//     "Authorization",
//     "Client-ID BPlIxpj2RgZNn0YqgfM-O9eYbjV8XxGQKKfUJ2K941o"
// );

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement("img");
    img.src = `${randomImageURL}${i + 1}`;
    container.appendChild(img);
}
